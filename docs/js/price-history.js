// ============================================================
// PRICE HISTORY — tracks a focused watchlist of key staples over
// time so we can spot sale cycles and know when to stock up.
//
// Updated by Claude on each weekly deals run: for any WATCHLIST
// item found on sale, append { date, store, price, unit } to
// PRICE_HISTORY[item]. price is a NUMBER (for analysis); unit is
// display text like "/lb" or "each".
//
// SAMPLE flag: true means the data below is placeholder to show
// the charts. The first real deals run sets SAMPLE=false and
// clears the sample rows.
// ============================================================

const PRICE_SAMPLE = true;

// The staples we care about tracking (matched case-insensitively).
const WATCHLIST = [
  "Chicken breast",
  "Chicken thighs",
  "Ground beef",
  "Steak",
  "Eggs",
  "Bacon",
  "Butter",
  "Feta cheese",
  "Shredded cheese",
  "Cream cheese",
  "Sour cream",
  "Broccoli",
  "Cauliflower",
  "Asparagus",
  "Avocado",
  "Bell peppers",
  "Mushrooms",
  "Olive oil"
];

// PRICE_HISTORY[item] = [{ date:'YYYY-MM-DD', store, price:Number, unit }]
const PRICE_HISTORY = {
  "Chicken thighs": [
    { date: "2026-05-11", store: "Costco", price: 2.99, unit: "/lb" },
    { date: "2026-05-25", store: "Safeway", price: 3.49, unit: "/lb" },
    { date: "2026-06-15", store: "Safeway", price: 1.99, unit: "/lb" },
    { date: "2026-07-06", store: "Costco", price: 2.99, unit: "/lb" }
  ],
  "Ground beef": [
    { date: "2026-05-18", store: "Safeway", price: 5.99, unit: "/lb" },
    { date: "2026-06-08", store: "Walmart", price: 4.99, unit: "/lb" },
    { date: "2026-06-29", store: "Safeway", price: 4.49, unit: "/lb" }
  ],
  "Butter": [
    { date: "2026-05-04", store: "Walmart", price: 4.29, unit: "each" },
    { date: "2026-06-01", store: "Safeway", price: 3.99, unit: "each" },
    { date: "2026-07-06", store: "Walmart", price: 3.49, unit: "each" }
  ]
};
