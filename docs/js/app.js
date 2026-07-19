const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let currentWeek = 1;
let mealSlots = [];
let recipeBox = JSON.parse(localStorage.getItem('recipeBox') || '[]');
let checkedStaples = JSON.parse(localStorage.getItem('checkedStaples') || '[]');
let storeOverrides = JSON.parse(localStorage.getItem('storeOverrides') || '{}');
let groceryItems = []; // flat list of the currently generated grocery items
const STORE_ORDER = ['Costco', 'Safeway', 'Walmart', 'Sprouts'];

function init() {
  const saved = localStorage.getItem('currentWeek');
  if (saved) currentWeek = parseInt(saved);
  document.getElementById('weekSelect').value = currentWeek;
  document.getElementById('weekSelect').addEventListener('change', (e) => {
    currentWeek = parseInt(e.target.value);
    localStorage.setItem('currentWeek', currentWeek);
    loadWeek(currentWeek);
  });
  document.getElementById('newRecipeInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addNewRecipe();
  });
  loadWeek(currentWeek);
  renderStaples();
  renderRecipeBox();
  const savedAdditional = localStorage.getItem('additionalItems');
  if (savedAdditional) document.getElementById('additionalItems').value = savedAdditional;
  document.getElementById('additionalItems').addEventListener('input', (e) => {
    localStorage.setItem('additionalItems', e.target.value);
  });
}

function loadWeek(weekNum) {
  const weekKey = 'week' + weekNum;
  const meals = MEALS_DATA[weekKey];
  if (!meals) return;
  mealSlots = meals.map((meal, i) => ({
    ...meal,
    day: DAYS[i],
    servings: 3,
    removed: false,
    eatingOut: false,
    replacementId: null
  }));
  const savedSlots = localStorage.getItem('mealSlots_week' + weekNum);
  if (savedSlots) {
    try {
      const parsed = JSON.parse(savedSlots);
      parsed.forEach((saved, i) => {
        if (i < mealSlots.length) {
          mealSlots[i].servings = saved.servings || 3;
          mealSlots[i].removed = saved.removed || false;
          mealSlots[i].eatingOut = saved.eatingOut || false;
          mealSlots[i].replacementId = saved.replacementId || null;
        }
      });
    } catch (e) {}
  }
  renderMeals();
  updateSummary();
}

function saveMealSlots() {
  const toSave = mealSlots.map(s => ({
    id: s.id,
    servings: s.servings,
    removed: s.removed,
    eatingOut: s.eatingOut,
    replacementId: s.replacementId
  }));
  localStorage.setItem('mealSlots_week' + currentWeek, JSON.stringify(toSave));
}

function renderMeals() {
  const list = document.getElementById('mealsList');
  list.innerHTML = '';
  mealSlots.forEach((slot, idx) => {
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.draggable = true;
    card.dataset.index = idx;
    if (slot.eatingOut) card.classList.add('eating-out');
    else if (slot.removed) card.classList.add('removed');
    highlightToday(card, idx);
    card.innerHTML = buildCardHTML(slot, idx);
    setupDragEvents(card);
    list.appendChild(card);
  });
  setupCardButtons();
}

function proteinClass(protein) {
  const p = (protein || '').toLowerCase();
  if (p.includes('beef')) return 'beef';
  if (p.includes('chicken')) return 'chicken';
  if (p.includes('egg')) return 'eggs';
  if (p.includes('sausage')) return 'sausage';
  if (p.includes('tuna')) return 'tuna';
  if (p.includes('turkey')) return 'turkey';
  if (p.includes('pork')) return 'pork';
  if (p.includes('bacon')) return 'bacon';
  return 'varies';
}

function proteinLabel(protein) {
  const cls = proteinClass(protein);
  return cls === 'varies' ? (protein || 'varies') : cls;
}

function buildCardHTML(slot, idx) {
  const hasLeftovers = slot.servings > 3;
  const leftoverClass = hasLeftovers ? ' has-leftovers' : '';
  const replacementOptions = buildReplacementOptions(slot.id);

  return `
    <div class="drag-handle"><span></span><span></span><span></span></div>
    <div class="day-label">${DAYS[idx]}</div>
    <div class="meal-info">
      <div class="meal-name">${slot.name}</div>
      <div class="meal-meta">
        <span class="protein-tag ${proteinClass(slot.protein)}">${proteinLabel(slot.protein)}</span>
        <span class="cook-info">${slot.cookTime} · ${slot.method}</span>
      </div>
    </div>
    <div class="servings-control${leftoverClass}">
      <button class="srv-btn" data-idx="${idx}" data-delta="-1">−</button>
      <div class="srv-value">${slot.servings}</div>
      <button class="srv-btn" data-idx="${idx}" data-delta="1">+</button>
      <div class="srv-label">srv</div>
    </div>
    <div class="meal-actions">
      <button class="btn btn-switch" data-idx="${idx}">↕</button>
      <button class="btn btn-remove" data-idx="${idx}">✕</button>
    </div>
    <div class="removed-state">
      <select class="replacement-select" data-idx="${idx}">
        <option value="" disabled selected>Replace with...</option>
        <optgroup label="—"><option value="__eating_out">🍴 Eating Out</option></optgroup>
        ${replacementOptions}
      </select>
      <button class="btn btn-undo" data-idx="${idx}">↩</button>
    </div>
    <div class="eating-out-label">🍴 Eating Out <button class="btn btn-undo" data-idx="${idx}" style="margin-left:auto">↩</button></div>
  `;
}

function buildReplacementOptions(currentId) {
  let html = '';
  if (recipeBox.length > 0) {
    html += '<optgroup label="New Recipes to Try">';
    recipeBox.forEach(r => {
      html += `<option value="__new_${r.name}">${r.name}</option>`;
    });
    html += '</optgroup>';
  }
  for (let w = 1; w <= 3; w++) {
    const weekMeals = MEALS_DATA['week' + w];
    if (!weekMeals) continue;
    const weekItems = weekMeals.filter(m => m.id !== currentId);
    if (weekItems.length === 0) continue;
    html += `<optgroup label="Week ${w}">`;
    weekItems.forEach(m => {
      html += `<option value="${m.id}">${m.name}</option>`;
    });
    html += '</optgroup>';
  }
  return html;
}

function setupCardButtons() {
  document.querySelectorAll('.srv-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      const delta = parseInt(btn.dataset.delta);
      let val = mealSlots[idx].servings + delta;
      if (val < 1) val = 1;
      if (val > 10) val = 10;
      mealSlots[idx].servings = val;
      saveMealSlots();
      renderMeals();
      updateSummary();
    });
  });

  document.querySelectorAll('.btn-switch').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      if (idx < mealSlots.length - 1) {
        [mealSlots[idx], mealSlots[idx + 1]] = [mealSlots[idx + 1], mealSlots[idx]];
        saveMealSlots();
        renderMeals();
      }
    });
  });

  document.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      mealSlots[idx].removed = true;
      saveMealSlots();
      renderMeals();
      updateSummary();
    });
  });

  document.querySelectorAll('.btn-undo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      mealSlots[idx].removed = false;
      mealSlots[idx].eatingOut = false;
      mealSlots[idx].replacementId = null;
      saveMealSlots();
      renderMeals();
      updateSummary();
    });
  });

  document.querySelectorAll('.replacement-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const idx = parseInt(sel.dataset.idx);
      const val = e.target.value;
      if (val === '__eating_out') {
        mealSlots[idx].eatingOut = true;
        mealSlots[idx].removed = false;
      } else if (val.startsWith('__new_')) {
        const recipeName = val.replace('__new_', '');
        mealSlots[idx].name = recipeName;
        mealSlots[idx].protein = 'varies';
        mealSlots[idx].method = 'TBD';
        mealSlots[idx].cookTime = 'TBD';
        mealSlots[idx].ingredients = [];
        mealSlots[idx].removed = false;
        mealSlots[idx].replacementId = val;
      } else {
        const replacement = findMealById(val);
        if (replacement) {
          Object.assign(mealSlots[idx], replacement);
          mealSlots[idx].removed = false;
          mealSlots[idx].replacementId = val;
          mealSlots[idx].servings = 3;
        }
      }
      saveMealSlots();
      renderMeals();
      updateSummary();
    });
  });
}

function findMealById(id) {
  for (let w = 1; w <= 3; w++) {
    const meal = MEALS_DATA['week' + w].find(m => m.id === id);
    if (meal) return { ...meal };
  }
  return null;
}

function updateSummary() {
  let meals = 0, leftovers = 0, eatout = 0;
  const proteinCounts = {};

  mealSlots.forEach(slot => {
    if (slot.eatingOut) {
      eatout++;
    } else {
      meals++;
      if (slot.servings > 3) leftovers++;
      const p = proteinClass(slot.protein);
      proteinCounts[p] = (proteinCounts[p] || 0) + 1;
    }
  });

  document.getElementById('statMeals').textContent = meals;
  document.getElementById('statLeftovers').textContent = leftovers;
  document.getElementById('statEatout').textContent = eatout;

  const bar = document.getElementById('proteinBar');
  bar.innerHTML = '';
  Object.entries(proteinCounts).sort((a, b) => b[1] - a[1]).forEach(([protein, count]) => {
    const span = document.createElement('span');
    span.className = `protein-count protein-tag ${protein}`;
    span.textContent = `${protein} ×${count}`;
    bar.appendChild(span);
  });
}

function highlightToday(card, idx) {
  const today = new Date().getDay();
  const dayMap = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 };
  if (dayMap[today] === idx) card.classList.add('today');
}

// Drag and drop
let dragIndex = null;
function setupDragEvents(card) {
  card.addEventListener('dragstart', (e) => {
    dragIndex = parseInt(card.dataset.index);
    setTimeout(() => card.classList.add('dragging'), 0);
    e.dataTransfer.effectAllowed = 'move';
  });
  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    document.querySelectorAll('.meal-card').forEach(c => c.classList.remove('drag-over'));
    dragIndex = null;
  });
  card.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const targetIdx = parseInt(card.dataset.index);
    if (targetIdx !== dragIndex) {
      document.querySelectorAll('.meal-card').forEach(c => c.classList.remove('drag-over'));
      card.classList.add('drag-over');
    }
  });
  card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
  card.addEventListener('drop', (e) => {
    e.preventDefault();
    const targetIdx = parseInt(card.dataset.index);
    if (dragIndex !== null && dragIndex !== targetIdx) {
      const [moved] = mealSlots.splice(dragIndex, 1);
      mealSlots.splice(targetIdx, 0, moved);
      saveMealSlots();
      renderMeals();
      updateSummary();
    }
  });
}

// Staples
function renderStaples() {
  const container = document.getElementById('staplesContainer');
  container.innerHTML = '';
  STAPLES.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'staples-category';
    div.innerHTML = `<div class="staples-category-title">${cat.category}</div>`;
    const grid = document.createElement('div');
    grid.className = 'staples-grid';
    cat.items.forEach(item => {
      const chip = document.createElement('div');
      chip.className = 'staple-chip' + (checkedStaples.includes(item) ? ' checked' : '');
      chip.innerHTML = `<span class="chip-box">✓</span> ${item}`;
      chip.addEventListener('click', () => {
        chip.classList.toggle('checked');
        if (chip.classList.contains('checked')) {
          if (!checkedStaples.includes(item)) checkedStaples.push(item);
        } else {
          checkedStaples = checkedStaples.filter(s => s !== item);
        }
        localStorage.setItem('checkedStaples', JSON.stringify(checkedStaples));
      });
      grid.appendChild(chip);
    });
    div.appendChild(grid);
    container.appendChild(div);
  });
}

// Recipe Box
function renderRecipeBox() {
  const list = document.getElementById('recipeBoxList');
  list.innerHTML = '';
  recipeBox.forEach((r, i) => {
    const div = document.createElement('div');
    div.className = 'recipe-box-item';
    div.innerHTML = `
      <span class="rbi-name">${r.name}</span>
      <span class="rbi-remove" data-idx="${i}">&times;</span>
    `;
    div.querySelector('.rbi-remove').addEventListener('click', () => {
      recipeBox.splice(i, 1);
      localStorage.setItem('recipeBox', JSON.stringify(recipeBox));
      renderRecipeBox();
      renderMeals();
    });
    list.appendChild(div);
  });
}

function addNewRecipe() {
  const input = document.getElementById('newRecipeInput');
  const name = input.value.trim();
  if (!name) return;
  recipeBox.push({ name, addedDate: new Date().toISOString() });
  localStorage.setItem('recipeBox', JSON.stringify(recipeBox));
  input.value = '';
  renderRecipeBox();
  renderMeals();
}

// Grocery List Generation
function generateGroceryList() {
  const byKey = {};
  groceryItems = [];

  mealSlots.forEach(slot => {
    if (slot.eatingOut || !slot.ingredients) return;
    const servings = slot.servings;
    const qtyKey = servings <= 3 ? 'per3' : 'per5';

    slot.ingredients.forEach(ing => {
      if (ing.isStaple) return;
      const defaultStore = ing.store === 'staple' ? 'Safeway' : (ing.store || 'Safeway');
      const store = storeOverrides[ing.name] || defaultStore;
      const cat = ing.category || 'Other';
      const key = ing.name;

      if (byKey[key]) {
        byKey[key].meals.push(slot.name);
        byKey[key].totalServings += servings;
      } else {
        const item = {
          name: ing.name,
          qty: ing[qtyKey] || ing.per3 || '',
          category: cat,
          store: store,
          defaultStore: defaultStore,
          meals: [slot.name]
        };
        byKey[key] = item;
        groceryItems.push(item);
      }
    });
  });

  // Add checked staples
  checkedStaples.forEach(item => {
    if (byKey[item]) return;
    const store = storeOverrides[item] || 'Safeway';
    const it = { name: item, qty: '', category: 'Pantry Staples', store: store, defaultStore: 'Safeway', meals: ['Staple'] };
    byKey[item] = it;
    groceryItems.push(it);
  });

  renderGroceryOverlay();
}

function renderGroceryOverlay() {
  const body = document.getElementById('groceryBody');
  body.innerHTML = '';

  const menuHeader = document.createElement('div');
  menuHeader.style.cssText = 'margin-bottom:14px;padding:12px;background:#FFF0E6;border-radius:10px;';
  let menuHtml = '<div style="font-weight:700;margin-bottom:6px;">This Week\'s Menu</div>';
  mealSlots.forEach((slot, i) => {
    const leftover = slot.servings > 3 ? ' ★' : '';
    const label = slot.eatingOut ? '🍴 Eating Out' : `${slot.name}${leftover}`;
    menuHtml += `<div style="font-size:13px;padding:1px 0;"><strong>${DAYS[i]}:</strong> ${label}</div>`;
  });
  menuHeader.innerHTML = menuHtml;
  body.appendChild(menuHeader);

  const dragHint = document.createElement('div');
  dragHint.style.cssText = 'font-size:11px;color:#8A8580;font-style:italic;margin-bottom:10px;';
  dragHint.textContent = '↔ Drag any item to a different store — your choice is remembered for next time.';
  body.appendChild(dragHint);

  // Always render all 4 stores as drop targets (even if empty)
  STORE_ORDER.forEach(store => {
    const items = groceryItems.filter(it => it.store === store);

    const storeDiv = document.createElement('div');
    storeDiv.className = 'grocery-store drop-zone';
    storeDiv.dataset.store = store;

    const onlineTag = (store === 'Safeway' || store === 'Walmart')
      ? '<span class="store-online">online ✓</span>' : '';
    storeDiv.innerHTML = `<div class="grocery-store-name">${store} ${onlineTag}</div>`;

    // group by category
    const cats = {};
    items.forEach(it => {
      if (!cats[it.category]) cats[it.category] = [];
      cats[it.category].push(it);
    });

    if (items.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'grocery-empty';
      empty.textContent = 'Drop items here';
      storeDiv.appendChild(empty);
    } else {
      Object.entries(cats).sort().forEach(([cat, catItems]) => {
        const catDiv = document.createElement('div');
        catDiv.innerHTML = `<div class="grocery-category-name">${cat}</div>`;
        catItems.forEach(item => {
          catDiv.appendChild(buildGroceryItem(item));
        });
        storeDiv.appendChild(catDiv);
      });
    }

    setupStoreDropZone(storeDiv);
    body.appendChild(storeDiv);
  });

  // Additional items
  const additional = document.getElementById('additionalItems').value.trim();
  if (additional) {
    const addDiv = document.createElement('div');
    addDiv.className = 'grocery-store';
    addDiv.innerHTML = `<div class="grocery-store-name">Additional Items</div>`;
    additional.split('\n').filter(l => l.trim()).forEach(line => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'grocery-item';
      itemDiv.innerHTML = `
        <div class="grocery-checkbox" onclick="this.classList.toggle('checked');this.closest('.grocery-item').classList.toggle('checked-off')">
          <span class="gc-check">✓</span>
        </div>
        <span class="gi-text">${line.trim()}</span>
      `;
      addDiv.appendChild(itemDiv);
    });
    body.appendChild(addDiv);
  }

  // Blank lines for handwriting
  const blankDiv = document.createElement('div');
  blankDiv.className = 'grocery-store';
  blankDiv.innerHTML = '<div class="grocery-store-name">Notes</div>';
  for (let i = 0; i < 8; i++) {
    const line = document.createElement('div');
    line.style.cssText = 'border-bottom:1px solid #E8E0D8;height:28px;margin:0 4px;';
    blankDiv.appendChild(line);
  }
  body.appendChild(blankDiv);

  document.getElementById('groceryOverlay').classList.add('visible');
}

function buildGroceryItem(item) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'grocery-item';
  itemDiv.draggable = true;
  itemDiv.dataset.name = item.name;
  const movedBadge = (item.store !== item.defaultStore)
    ? `<span class="gi-moved" title="Moved from ${item.defaultStore}">moved</span>` : '';
  itemDiv.innerHTML = `
    <div class="grocery-checkbox" onclick="event.stopPropagation();this.classList.toggle('checked');this.closest('.grocery-item').classList.toggle('checked-off')">
      <span class="gc-check">✓</span>
    </div>
    <span class="gi-grip">⋮⋮</span>
    <span class="gi-text">${item.name}</span>
    ${movedBadge}
    <span class="gi-qty">${item.qty}</span>
  `;
  itemDiv.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', item.name);
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => itemDiv.classList.add('gi-dragging'), 0);
  });
  itemDiv.addEventListener('dragend', () => {
    itemDiv.classList.remove('gi-dragging');
    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drop-active'));
  });
  return itemDiv;
}

function setupStoreDropZone(zone) {
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    zone.classList.add('drop-active');
  });
  zone.addEventListener('dragleave', (e) => {
    if (!zone.contains(e.relatedTarget)) zone.classList.remove('drop-active');
  });
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('drop-active');
    const name = e.dataTransfer.getData('text/plain');
    const newStore = zone.dataset.store;
    const item = groceryItems.find(it => it.name === name);
    if (!item || item.store === newStore) return;
    item.store = newStore;
    // Remember the choice, unless it's back to default (then clear override)
    if (newStore === item.defaultStore) {
      delete storeOverrides[name];
    } else {
      storeOverrides[name] = newStore;
    }
    localStorage.setItem('storeOverrides', JSON.stringify(storeOverrides));
    renderGroceryOverlay();
  });
}

function closeGroceryList() {
  document.getElementById('groceryOverlay').classList.remove('visible');
}

function buildPrintHTML() {
  // Menu
  let html = '<div class="p-menu"><div class="p-menu-title">This Week\'s Menu</div>';
  mealSlots.forEach((slot, i) => {
    const leftover = slot.servings > 3 ? ' ★' : '';
    const label = slot.eatingOut ? 'Eating Out' : `${slot.name}${leftover}`;
    html += `<div class="p-menu-row"><strong>${DAYS[i]}:</strong> ${label}</div>`;
  });
  html += '</div>';

  // Stores (skip empty ones for print)
  STORE_ORDER.forEach(store => {
    const items = groceryItems.filter(it => it.store === store);
    if (items.length === 0) return;
    const online = (store === 'Safeway' || store === 'Walmart') ? ' (online available)' : '';
    html += `<div class="p-store"><div class="p-store-name">${store}${online}</div>`;
    const cats = {};
    items.forEach(it => { (cats[it.category] = cats[it.category] || []).push(it); });
    Object.entries(cats).sort().forEach(([cat, catItems]) => {
      html += `<div class="p-cat">${cat}</div>`;
      catItems.forEach(it => {
        html += `<div class="p-item"><span class="p-box"></span><span class="p-name">${it.name}</span><span class="p-qty">${it.qty}</span></div>`;
      });
    });
    html += '</div>';
  });

  // Additional items
  const additional = document.getElementById('additionalItems').value.trim();
  if (additional) {
    html += '<div class="p-store"><div class="p-store-name">Additional Items</div>';
    additional.split('\n').filter(l => l.trim()).forEach(line => {
      html += `<div class="p-item"><span class="p-box"></span><span class="p-name">${line.trim()}</span></div>`;
    });
    html += '</div>';
  }

  // Blank handwrite lines
  html += '<div class="p-store"><div class="p-store-name">Notes / Last-Minute Additions</div>';
  for (let i = 0; i < 8; i++) html += '<div class="p-blank"></div>';
  html += '</div>';

  return html;
}

function printGroceryList() {
  const printWin = window.open('', '_blank');
  printWin.document.write(`
    <html><head><title>Grocery List</title>
    <style>
      body { font-family: -apple-system, sans-serif; padding: 24px; color: #2D2A26; }
      h1 { font-size: 20px; text-align: center; margin-bottom: 14px; }
      .p-menu { margin-bottom: 16px; padding: 12px; background: #FFF0E6; border-radius: 8px; }
      .p-menu-title { font-weight: 700; margin-bottom: 6px; }
      .p-menu-row { font-size: 13px; padding: 1px 0; }
      .p-store { margin-bottom: 16px; break-inside: avoid; }
      .p-store-name { font-size: 16px; font-weight: 700; color: #E07A3A; border-bottom: 2px solid #FFE0CC; padding-bottom: 4px; margin-bottom: 8px; }
      .p-cat { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #8A8580; margin: 8px 0 4px; }
      .p-item { display: flex; align-items: center; gap: 10px; padding: 4px 0; font-size: 13px; border-bottom: 1px solid #F0EBE6; }
      .p-box { width: 15px; height: 15px; border: 1.5px solid #B0A89F; border-radius: 3px; flex-shrink: 0; }
      .p-name { flex: 1; }
      .p-qty { color: #8A8580; font-size: 12px; }
      .p-blank { border-bottom: 1px solid #ccc; height: 30px; margin: 0 2px; }
      @media print { .p-store { break-inside: avoid; } }
    </style></head><body>
    <h1>Grocery List — Week of ${getWeekOfDate()}</h1>
    ${buildPrintHTML()}
    </body></html>
  `);
  printWin.document.close();
  setTimeout(() => printWin.print(), 300);
}

function getWeekOfDate() {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  return monday.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}

function sendMenuText() {
  let msg = `🍽 DINNER PLAN\n\n`;
  mealSlots.forEach((slot, i) => {
    const leftover = slot.servings > 3 ? ' ★leftovers' : '';
    if (slot.eatingOut) {
      msg += `${DAYS[i]}: 🍴 Eating Out\n`;
    } else {
      msg += `${DAYS[i]}: ${slot.name}${leftover}\n`;
    }
  });
  msg += `\n★ = extra for lunches`;

  let phones = JSON.parse(localStorage.getItem('phoneNumbers') || '[]');
  if (phones.length === 0) {
    const input = prompt(
      'Enter phone number(s) to text the menu to, separated by commas.\n' +
      '(Saved on this device only — you won\'t be asked again.)',
      ''
    );
    if (!input) return;
    phones = input.split(',').map(p => p.replace(/[^0-9+]/g, '')).filter(p => p);
    if (phones.length === 0) return;
    localStorage.setItem('phoneNumbers', JSON.stringify(phones));
  }

  const encoded = encodeURIComponent(msg);
  if (/iPhone|iPad|iPod|Mac/.test(navigator.userAgent)) {
    window.open(`sms:${phones.join(',')}&body=${encoded}`);
  } else {
    navigator.clipboard.writeText(msg).then(() => {
      alert('Menu copied to clipboard! Paste it into your messaging app.');
    }).catch(() => {
      prompt('Copy this menu text:', msg);
    });
  }
}

// Allow resetting saved phone numbers
function resetPhoneNumbers() {
  localStorage.removeItem('phoneNumbers');
  alert('Saved phone numbers cleared. You\'ll be asked next time you send a menu text.');
}

// Close overlay on escape or backdrop click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeGroceryList();
});
document.getElementById('groceryOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('groceryOverlay')) closeGroceryList();
});

// Initialize
document.addEventListener('DOMContentLoaded', init);
