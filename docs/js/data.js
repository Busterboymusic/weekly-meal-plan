// ============================================================
// MEALS_DATA — all meals organized by week rotation
// SOURCE OF TRUTH for all recipe/ingredient data. Edit here to
// add or change meals; the live app reads this file directly.
// Ingredient qty fields: per1 / per3 / per5 (5 = leftovers).
// store: "staple" + isStaple:true means it's a pantry staple
// (excluded from the auto grocery list unless checked).
// ============================================================

const MEALS_DATA = {
  week1: [
    {
      id: "grilled-steak-asparagus",
      name: "Grilled Steak and Asparagus",
      protein: "Beef",
      method: "Grill",
      cookTime: "25 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Steak (from Costco 4-5 pack)", per1: "8 oz", per3: "1.5 lbs", per5: "2.5 lbs", category: "Meat", store: "Costco", isStaple: false },
        { name: "Asparagus", per1: "6 spears", per3: "1 bunch", per5: "1.5 bunches", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Olive oil", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Garlic, minced", per1: "1 clove", per3: "3 cloves", per5: "5 cloves", category: "Produce", store: "staple", isStaple: true },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Butter", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Dairy", store: "staple", isStaple: true }
      ],
      notes: "Costco steak package has 4-5 steaks; freeze extras for other steak meals this rotation"
    },
    {
      id: "big-mac-salad",
      name: "Big Mac Salad",
      protein: "Beef",
      method: "Stovetop",
      cookTime: "20 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Ground beef", per1: "5 oz", per3: "1 lb", per5: "1.5 lbs", category: "Meat", store: "Safeway", isStaple: false },
        { name: "Romaine lettuce", per1: "2 cups", per3: "1 head", per5: "1.5 heads", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Dill pickles, chopped", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Shredded cheddar cheese", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Diced onion", per1: "2 tbsp", per3: "1/4 cup", per5: "1/3 cup", category: "Produce", store: "staple", isStaple: true },
        { name: "Sesame seeds", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Tomato, diced", per1: "1/4 cup", per3: "1 medium", per5: "2 medium", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Mayonnaise (Big Mac Sauce)", per1: "1/2 cup", per3: "1/2 cup", per5: "1/2 cup", category: "Condiment", store: "staple", isStaple: true },
        { name: "Dill pickle relish (Big Mac Sauce)", per1: "2 tbsp", per3: "2 tbsp", per5: "2 tbsp", category: "Condiment", store: "Walmart", isStaple: false },
        { name: "Yellow mustard (Big Mac Sauce)", per1: "1 tbsp", per3: "1 tbsp", per5: "1 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "White vinegar (Big Mac Sauce)", per1: "1 tsp", per3: "1 tsp", per5: "1 tsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Garlic powder (Big Mac Sauce)", per1: "1/4 tsp", per3: "1/4 tsp", per5: "1/4 tsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Onion powder (Big Mac Sauce)", per1: "1/4 tsp", per3: "1/4 tsp", per5: "1/4 tsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Paprika (Big Mac Sauce)", per1: "1/4 tsp", per3: "1/4 tsp", per5: "1/4 tsp", category: "Pantry", store: "staple", isStaple: true }
      ],
      notes: "Sauce is homemade per recipe — adjust to your recipe if different"
    },
    {
      id: "breakfast-for-dinner",
      name: "Breakfast for Dinner",
      protein: "Eggs",
      method: "Stovetop",
      cookTime: "25 min",
      leftoverFriendly: false,
      ingredients: [
        { name: "Eggs", per1: "3", per3: "9", per5: "15", category: "Dairy", store: "staple", isStaple: true },
        { name: "Bacon", per1: "3 slices", per3: "9 slices", per5: "15 slices", category: "Meat", store: "Safeway", isStaple: false },
        { name: "Butter", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Dairy", store: "staple", isStaple: true },
        { name: "Shredded cheese", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Bell pepper, diced (optional)", per1: "1/4 cup", per3: "1 small", per5: "1 large", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Pace medium salsa", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Condiment", store: "Walmart", isStaple: false },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true }
      ],
      notes: null
    },
    {
      id: "pesto-chicken-broccoli",
      name: "Pesto Chicken and Broccoli",
      protein: "Chicken",
      method: "Stovetop",
      cookTime: "25 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Chicken breast", per1: "6 oz", per3: "1.25 lbs", per5: "2 lbs", category: "Meat", store: "Costco", isStaple: false },
        { name: "Broccoli florets", per1: "1 cup", per3: "1 large crown", per5: "2 crowns", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Pesto sauce (jarred)", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Condiment", store: "Safeway", isStaple: false },
        { name: "Olive oil", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Garlic, minced", per1: "1 clove", per3: "3 cloves", per5: "5 cloves", category: "Produce", store: "staple", isStaple: true },
        { name: "Parmesan cheese, grated", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Sundried tomatoes (jarred)", per1: "2 tbsp", per3: "1/4 cup", per5: "1/3 cup", category: "Pantry", store: "Safeway", isStaple: false }
      ],
      notes: null
    },
    {
      id: "smoked-sausage-cauliflower",
      name: "Smoked Sausage and Cauliflower",
      protein: "Sausage",
      method: "Stovetop",
      cookTime: "25 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Smoked sausage (kielbasa)", per1: "5 oz", per3: "1 package (14 oz)", per5: "1.5 packages", category: "Meat", store: "Safeway", isStaple: false },
        { name: "Cauliflower", per1: "1.5 cups", per3: "1 head", per5: "1.5 heads", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Olive oil", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Garlic, minced", per1: "1 clove", per3: "3 cloves", per5: "5 cloves", category: "Produce", store: "staple", isStaple: true },
        { name: "Onion, sliced", per1: "1/4 medium", per3: "1 medium", per5: "1.5 medium", category: "Produce", store: "staple", isStaple: true },
        { name: "Paprika", per1: "1/2 tsp", per3: "1.5 tsp", per5: "2.5 tsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Butter", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Dairy", store: "staple", isStaple: true }
      ],
      notes: null
    },
    {
      id: "tuna-meal",
      name: "Tuna Meal",
      protein: "Canned Tuna",
      method: "Varies",
      cookTime: "15 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Canned tuna (in water)", per1: "1 can (5 oz)", per3: "3 cans", per5: "5 cans", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Mayonnaise", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "Celery, diced", per1: "1 stalk", per3: "3 stalks", per5: "5 stalks", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Lemon juice", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Lettuce leaves or wraps", per1: "2-3 leaves", per3: "1 head", per5: "1.5 heads", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Dijon mustard", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "Red onion, diced", per1: "1 tbsp", per3: "3 tbsp", per5: "1/4 cup", category: "Produce", store: "staple", isStaple: true }
      ],
      notes: null
    },
    {
      id: "green-chili-verde-chicken",
      name: "Green Chili Verde Chicken",
      protein: "Chicken",
      method: "Slow Cooker/IP",
      cookTime: "15 min active + cook time",
      leftoverFriendly: true,
      ingredients: [
        { name: "Chicken thighs (boneless)", per1: "6 oz", per3: "1.25 lbs", per5: "2 lbs", category: "Meat", store: "Costco", isStaple: false },
        { name: "Green salsa verde (504 brand preferred)", per1: "1/3 cup", per3: "1 jar (16 oz)", per5: "1.5 jars", category: "Condiment", store: "Safeway", isStaple: false },
        { name: "Canned diced green chiles", per1: "2 tbsp", per3: "1 can (4 oz)", per5: "2 cans (4 oz)", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Taco seasoning packet", per1: "—", per3: "1 packet", per5: "1 packet", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Whipped cream cheese (Philadelphia)", per1: "2 tbsp", per3: "4 oz", per5: "6 oz", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Shredded mozzarella", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Safeway", isStaple: false }
      ],
      notes: "This is a chicken dish, no tortillas — served as-is. 504 brand salsa verde preferred, but flexible."
    }
  ],

  week2: [
    {
      id: "steak-fajitas",
      name: "Steak Fajitas",
      protein: "Beef",
      method: "Stovetop/Grill",
      cookTime: "30 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Flank or skirt steak", per1: "6 oz", per3: "1.25 lbs", per5: "2 lbs", category: "Meat", store: "Costco", isStaple: false },
        { name: "Green bell peppers", per1: "1/2 pepper", per3: "1.5 peppers", per5: "2.5 peppers", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Red bell peppers", per1: "1/2 pepper", per3: "1.5 peppers", per5: "2.5 peppers", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Onion, sliced", per1: "1/2 medium", per3: "1 large", per5: "2 large", category: "Produce", store: "staple", isStaple: true },
        { name: "Lime juice", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Olive oil", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "McCormick Fajita seasoning packets", per1: "—", per3: "3 packets", per5: "3 packets", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Low-carb tortillas", per1: "2", per3: "6", per5: "10", category: "Bakery", store: "Walmart", isStaple: false },
        { name: "Sour cream", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Shredded cheese", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Guacamole or avocado", per1: "2 tbsp", per3: "1 avocado", per5: "2 avocados", category: "Produce", store: "Safeway", isStaple: false }
      ],
      notes: null
    },
    {
      id: "grinder-salad",
      name: "Grinder Salad",
      protein: "Deli Turkey",
      method: "No cook",
      cookTime: "15 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Deli turkey", per1: "4 oz", per3: "12 oz", per5: "20 oz", category: "Deli", store: "Safeway", isStaple: false },
        { name: "Salami or pepperoni", per1: "2 oz", per3: "6 oz", per5: "10 oz", category: "Deli", store: "Safeway", isStaple: false },
        { name: "Provolone cheese", per1: "2 slices", per3: "6 slices", per5: "10 slices", category: "Deli", store: "Safeway", isStaple: false },
        { name: "Romaine or iceberg lettuce", per1: "2 cups", per3: "1 head", per5: "1.5 heads", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Tomato, diced", per1: "1/4 cup", per3: "1 medium", per5: "2 medium", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Red onion, sliced thin", per1: "2 tbsp", per3: "1/4 cup", per5: "1/3 cup", category: "Produce", store: "staple", isStaple: true },
        { name: "Banana peppers (jarred)", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Red wine vinegar", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Olive oil", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Oregano", per1: "1/2 tsp", per3: "1.5 tsp", per5: "2.5 tsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true }
      ],
      notes: null
    },
    {
      id: "swiss-burgers-mushrooms",
      name: "Swiss Burgers with Mushrooms",
      protein: "Beef",
      method: "Stovetop/Grill",
      cookTime: "25 min",
      leftoverFriendly: false,
      ingredients: [
        { name: "Ground beef (80/20)", per1: "6 oz", per3: "1.25 lbs", per5: "2 lbs", category: "Meat", store: "Safeway", isStaple: false },
        { name: "Swiss cheese slices", per1: "1 slice", per3: "3 slices", per5: "5 slices", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Mushrooms, sliced", per1: "1/2 cup", per3: "8 oz package", per5: "16 oz package", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Butter", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Dairy", store: "staple", isStaple: true },
        { name: "Lettuce leaves", per1: "2 leaves", per3: "6 leaves", per5: "10 leaves", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Tomato, sliced", per1: "2 slices", per3: "1 medium", per5: "2 medium", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Onion, sliced", per1: "2 rings", per3: "1/2 medium", per5: "1 medium", category: "Produce", store: "staple", isStaple: true },
        { name: "Worcestershire sauce", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Lettuce wrap or low-carb bun", per1: "1", per3: "3", per5: "5", category: "Bakery", store: "Sprouts", isStaple: false }
      ],
      notes: null
    },
    {
      id: "chicken-curry-cauliflower",
      name: "Chicken Curry with Cauliflower",
      protein: "Chicken",
      method: "Stovetop",
      cookTime: "30 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Chicken breasts", per1: "1 breast", per3: "3 breasts", per5: "5 breasts", category: "Meat", store: "Costco", isStaple: false },
        { name: "Cauliflower", per1: "1/3 head", per3: "1 head", per5: "1.5 heads", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Mayonnaise", per1: "2/3 cup", per3: "2 cups", per5: "3 cups", category: "Condiment", store: "staple", isStaple: true },
        { name: "Plain yogurt", per1: "2/3 cup", per3: "2 cups", per5: "3 cups", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Onion, diced", per1: "1/3 onion", per3: "1 onion", per5: "1.5 onions", category: "Produce", store: "staple", isStaple: true },
        { name: "Paprika", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Curry powder", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Ginger powder", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true }
      ],
      notes: "Recipe base is for 3 servings (3 chicken breasts, 1 head cauliflower). Mayo and yogurt create the curry sauce — no coconut milk."
    },
    {
      id: "diy-pizza",
      name: "DIY Pizza",
      protein: "Varies",
      method: "Oven",
      cookTime: "30 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Pizza sauce", per1: "3 tbsp", per3: "1/2 cup", per5: "1 cup", category: "Condiment", store: "Walmart", isStaple: false },
        { name: "Mozzarella cheese, shredded", per1: "1/3 cup", per3: "1 cup", per5: "1.5 cups", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Feta cheese", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Costco", isStaple: false },
        { name: "Pepperoni", per1: "8 slices", per3: "24 slices", per5: "40 slices", category: "Deli", store: "Safeway", isStaple: false },
        { name: "Sausage crumbles", per1: "2 oz", per3: "6 oz", per5: "10 oz", category: "Meat", store: "Safeway", isStaple: false },
        { name: "Bell pepper, sliced", per1: "1/4 pepper", per3: "1 pepper", per5: "1.5 peppers", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Mushrooms, sliced", per1: "1/4 cup", per3: "3/4 cup", per5: "1 cup", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Pepperoncini, sliced", per1: "4-5 rings", per3: "1/4 cup", per5: "1/3 cup", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Artichoke hearts (canned/jarred)", per1: "2-3 pieces", per3: "1 can/jar", per5: "1 can/jar", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Roasted red peppers (jarred)", per1: "2 tbsp", per3: "1/4 cup", per5: "1/3 cup", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Flour (or low-carb flour)", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Yeast", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Olive oil (crust)", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "staple", isStaple: true },
        { name: "Salt (crust)", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "staple", isStaple: true },
        { name: "Sugar (small amount, crust)", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "staple", isStaple: true }
      ],
      notes: "Crust is made from scratch — ingredient amounts depend on your dough recipe. Toppings above are the full selection; not all used every time."
    },
    {
      id: "pulled-pork",
      name: "Pulled Pork",
      protein: "Pork",
      method: "Pre-made (reheat)",
      cookTime: "10 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Costco pre-made marinated pulled pork", per1: "6 oz", per3: "1 package", per5: "1 package", category: "Prepared Meat", store: "Costco", isStaple: false },
        { name: "Coleslaw mix (optional side)", per1: "1 cup", per3: "1 bag (14 oz)", per5: "1.5 bags", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Low-carb buns (optional)", per1: "1", per3: "3", per5: "5", category: "Bakery", store: "Sprouts", isStaple: false }
      ],
      notes: "Buy pre-made marinated pulled pork from Costco. Often eaten as-is, no additional recipe needed."
    },
    {
      id: "dijon-chicken-thighs-mushrooms",
      name: "Dijon Chicken Thighs with Mushrooms",
      protein: "Chicken",
      method: "Stovetop/Oven",
      cookTime: "35 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Chicken thighs (bone-in or boneless)", per1: "2 thighs (~8 oz)", per3: "6 thighs (~1.5 lbs)", per5: "10 thighs (~2.5 lbs)", category: "Meat", store: "Costco", isStaple: false },
        { name: "Mushrooms, sliced", per1: "1/2 cup", per3: "8 oz package", per5: "16 oz package", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Dijon mustard", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "Heavy cream", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Butter", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Dairy", store: "staple", isStaple: true },
        { name: "Garlic, minced", per1: "1 clove", per3: "3 cloves", per5: "5 cloves", category: "Produce", store: "staple", isStaple: true },
        { name: "Thyme (dried)", per1: "1/2 tsp", per3: "1.5 tsp", per5: "2.5 tsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Olive oil", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Fresh parsley (optional)", per1: "garnish", per3: "small bunch", per5: "small bunch", category: "Produce", store: "Safeway", isStaple: false }
      ],
      notes: null
    }
  ],

  week3: [
    {
      id: "steak-bites-caramelized-onion",
      name: "Steak Bites with Caramelized Onion",
      protein: "Beef",
      method: "Stovetop",
      cookTime: "30 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Sirloin steak, cubed", per1: "6 oz", per3: "1.25 lbs", per5: "2 lbs", category: "Meat", store: "Costco", isStaple: false },
        { name: "Onion, sliced thin", per1: "1/2 medium", per3: "2 medium", per5: "3 medium", category: "Produce", store: "staple", isStaple: true },
        { name: "Butter", per1: "2 tbsp", per3: "6 tbsp", per5: "10 tbsp", category: "Dairy", store: "staple", isStaple: true },
        { name: "Olive oil", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Garlic, minced", per1: "1 clove", per3: "3 cloves", per5: "5 cloves", category: "Produce", store: "staple", isStaple: true },
        { name: "Soy sauce", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "Worcestershire sauce", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "Steak seasoning blend", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Green beans", per1: "1 cup", per3: "1 lb", per5: "1.5 lbs", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true }
      ],
      notes: null
    },
    {
      id: "rotisserie-chicken-salad",
      name: "Rotisserie Chicken Salad",
      protein: "Chicken (Costco rotisserie)",
      method: "No cook",
      cookTime: "15 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Costco rotisserie chicken", per1: "1 cup shredded", per3: "1 whole chicken", per5: "1 whole chicken + extra", category: "Prepared", store: "Costco", isStaple: false },
        { name: "Mayonnaise", per1: "1.5 tbsp", per3: "1/4 cup", per5: "1/3 cup", category: "Condiment", store: "staple", isStaple: true },
        { name: "Celery, diced", per1: "1 stalk", per3: "3 stalks", per5: "5 stalks", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Canned water chestnuts", per1: "2 tbsp", per3: "1 can (8 oz)", per5: "1 can (8 oz)", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Dijon mustard", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "Lemon juice", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Lettuce leaves (for wraps)", per1: "2-3 leaves", per3: "1 head", per5: "1.5 heads", category: "Produce", store: "Safeway", isStaple: false }
      ],
      notes: "Simple version: no grapes, no nuts. Served as lettuce wraps. Shop Costco same day for fresh rotisserie chicken. Canned water chestnuts for crunch."
    },
    {
      id: "burgers",
      name: "Burgers",
      protein: "Beef",
      method: "Grill/Stovetop",
      cookTime: "20 min",
      leftoverFriendly: false,
      ingredients: [
        { name: "Ground beef (80/20) OR frozen patties", per1: "6 oz", per3: "1.25 lbs or 3 patties", per5: "2 lbs or 5 patties", category: "Meat", store: "Safeway", isStaple: false },
        { name: "Cheddar or American cheese", per1: "1 slice", per3: "3 slices", per5: "5 slices", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Lettuce leaves", per1: "2 leaves", per3: "6 leaves", per5: "10 leaves", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Tomato, sliced", per1: "2 slices", per3: "1 medium", per5: "2 medium", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Onion, sliced", per1: "2 rings", per3: "1/2 medium", per5: "1 medium", category: "Produce", store: "staple", isStaple: true },
        { name: "Pickles", per1: "3-4 slices", per3: "1/4 cup", per5: "1/3 cup", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Mustard / ketchup", per1: "to taste", per3: "—", per5: "—", category: "Condiment", store: "staple", isStaple: true },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Lettuce wrap or low-carb bun", per1: "1", per3: "3", per5: "5", category: "Bakery", store: "Sprouts", isStaple: false }
      ],
      notes: "Sometimes ground beef, sometimes pre-frozen patties — decide during planning"
    },
    {
      id: "taco-salad",
      name: "Taco Salad",
      protein: "Beef",
      method: "Stovetop",
      cookTime: "20 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Ground beef", per1: "5 oz", per3: "1 lb", per5: "1.5 lbs", category: "Meat", store: "Safeway", isStaple: false },
        { name: "Taco seasoning", per1: "1 tbsp", per3: "3 tbsp (1 packet)", per5: "5 tbsp", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Romaine lettuce, chopped", per1: "2 cups", per3: "1 head", per5: "1.5 heads", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Tomato, diced", per1: "1/4 cup", per3: "1 medium", per5: "2 medium", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Shredded cheese (Mexican blend)", per1: "1/4 cup", per3: "3/4 cup", per5: "1 cup", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Sour cream", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Avocado or guacamole", per1: "1/4 avocado", per3: "1 avocado", per5: "2 avocados", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Black beans (optional)", per1: "2 tbsp", per3: "1/4 can", per5: "1/2 can", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Salsa", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Condiment", store: "Walmart", isStaple: false },
        { name: "Pickled jalapenos", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Condiment", store: "Walmart", isStaple: false },
        { name: "Tortilla strips or crushed chips (optional, small amount)", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Red onion, diced", per1: "1 tbsp", per3: "3 tbsp", per5: "1/4 cup", category: "Produce", store: "staple", isStaple: true }
      ],
      notes: "Keep ingredients separate for leftovers — especially ground beef. Cook extra ground beef when leftovers are wanted."
    },
    {
      id: "blt-sandwiches",
      name: "BLT Sandwiches",
      protein: "Bacon",
      method: "Stovetop",
      cookTime: "20 min",
      leftoverFriendly: false,
      ingredients: [
        { name: "Bacon", per1: "4 slices", per3: "12 slices (1 lb)", per5: "20 slices (1.25 lbs)", category: "Meat", store: "Costco", isStaple: false },
        { name: "Lettuce leaves", per1: "2-3 leaves", per3: "6-9 leaves", per5: "10-15 leaves", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Tomato, sliced thick", per1: "3 slices", per3: "1 large", per5: "2 large", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Mayonnaise", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Condiment", store: "staple", isStaple: true },
        { name: "Dave's Killer Bread", per1: "2 slices", per3: "6 slices", per5: "10 slices", category: "Bakery", store: "Sprouts", isStaple: false },
        { name: "Avocado, sliced (optional)", per1: "1/4 avocado", per3: "1 avocado", per5: "2 avocados", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true }
      ],
      notes: null
    },
    {
      id: "crockpot-chicken-potatoes",
      name: "Crockpot Chicken and Potatoes",
      protein: "Chicken",
      method: "Slow Cooker",
      cookTime: "15 min active + cook time",
      leftoverFriendly: true,
      ingredients: [
        { name: "Chicken thighs (bone-in)", per1: "2 thighs (~8 oz)", per3: "6 thighs (~1.5 lbs)", per5: "10 thighs (~2.5 lbs)", category: "Meat", store: "Costco", isStaple: false },
        { name: "Baby potatoes (or red potatoes)", per1: "4-5 small", per3: "1 lb", per5: "1.5 lbs", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Chicken broth", per1: "1/3 cup", per3: "1 cup", per5: "1.5 cups", category: "Pantry", store: "staple", isStaple: true },
        { name: "Garlic, minced", per1: "2 cloves", per3: "5 cloves", per5: "8 cloves", category: "Produce", store: "staple", isStaple: true },
        { name: "Onion, quartered", per1: "1/4 medium", per3: "1 medium", per5: "1.5 medium", category: "Produce", store: "staple", isStaple: true },
        { name: "Italian seasoning", per1: "1 tsp", per3: "1 tbsp", per5: "2 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Olive oil", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Pantry", store: "staple", isStaple: true },
        { name: "Butter", per1: "1 tbsp", per3: "3 tbsp", per5: "5 tbsp", category: "Dairy", store: "staple", isStaple: true },
        { name: "Carrots (optional)", per1: "1 medium", per3: "3 medium", per5: "5 medium", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Salt & pepper", per1: "to taste", per3: "—", per5: "—", category: "Pantry", store: "staple", isStaple: true },
        { name: "Fresh parsley (optional)", per1: "garnish", per3: "small bunch", per5: "small bunch", category: "Produce", store: "Safeway", isStaple: false }
      ],
      notes: null
    },
    {
      id: "diy-pizza",
      name: "DIY Pizza",
      protein: "Varies",
      method: "Oven",
      cookTime: "30 min",
      leftoverFriendly: true,
      ingredients: [
        { name: "Pizza sauce", per1: "3 tbsp", per3: "1/2 cup", per5: "1 cup", category: "Condiment", store: "Walmart", isStaple: false },
        { name: "Mozzarella cheese, shredded", per1: "1/3 cup", per3: "1 cup", per5: "1.5 cups", category: "Dairy", store: "Safeway", isStaple: false },
        { name: "Feta cheese", per1: "2 tbsp", per3: "1/3 cup", per5: "1/2 cup", category: "Dairy", store: "Costco", isStaple: false },
        { name: "Pepperoni", per1: "8 slices", per3: "24 slices", per5: "40 slices", category: "Deli", store: "Safeway", isStaple: false },
        { name: "Sausage crumbles", per1: "2 oz", per3: "6 oz", per5: "10 oz", category: "Meat", store: "Safeway", isStaple: false },
        { name: "Bell pepper, sliced", per1: "1/4 pepper", per3: "1 pepper", per5: "1.5 peppers", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Mushrooms, sliced", per1: "1/4 cup", per3: "3/4 cup", per5: "1 cup", category: "Produce", store: "Safeway", isStaple: false },
        { name: "Pepperoncini, sliced", per1: "4-5 rings", per3: "1/4 cup", per5: "1/3 cup", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Artichoke hearts (canned/jarred)", per1: "2-3 pieces", per3: "1 can/jar", per5: "1 can/jar", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Roasted red peppers (jarred)", per1: "2 tbsp", per3: "1/4 cup", per5: "1/3 cup", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Flour (or low-carb flour)", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Yeast", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "Walmart", isStaple: false },
        { name: "Olive oil (crust)", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "staple", isStaple: true },
        { name: "Salt (crust)", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "staple", isStaple: true },
        { name: "Sugar (small amount, crust)", per1: "per recipe", per3: "per recipe", per5: "per recipe", category: "Pantry", store: "staple", isStaple: true }
      ],
      notes: "Crust is made from scratch — ingredient amounts depend on your dough recipe. Toppings above are the full selection; not all used every time."
    }
  ]
};

// ============================================================
// STAPLES — pantry/fridge items assumed to be on hand
// ============================================================

const STAPLES = [
  { category: "Oils & Dairy", items: ["Olive Oil", "Butter", "Eggs", "Cooking Spray", "Sour Cream"] },
  { category: "Produce", items: ["Garlic", "Onions", "Red Onion", "Lemons"] },
  { category: "Condiments", items: ["Mayo", "Dijon Mustard", "Ketchup", "Soy Sauce", "Worcestershire", "Pace Salsa", "Vinegar"] },
  { category: "Spices", items: ["Salt", "Pepper", "Paprika", "Cumin", "Italian Seasoning", "Garlic Powder", "Onion Powder"] },
  { category: "Pantry", items: ["Chicken Broth", "Low-Carb Tortillas", "Pickles"] }
];
