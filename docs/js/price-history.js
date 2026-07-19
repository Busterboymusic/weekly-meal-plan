// ============================================================
// PRICE HISTORY + BENCHMARKS — Colorado Springs 80919 area.
//
// Because weekly store flyers are image-based and can't be read
// reliably, we anchor on documented prices (Costco published
// prices, BLS/FRED U.S. averages June 2026) and typical stock-up
// targets. These are BENCHMARK ESTIMATES; real dated prices you
// log each week refine them over time.
//
// BEST_PRICE[item] = usual cheapest store + a good target price.
// Used to route grocery items to the best-price store and label it.
// STOCK_UP[item]   = price at/below which it's worth stocking up.
// PRICE_HISTORY[item] = dated observations (number price + unit).
// ============================================================

const PRICE_SAMPLE = false;

const WATCHLIST = [
  "Chicken breast", "Chicken thighs", "Ground beef", "Steak", "Eggs",
  "Bacon", "Butter", "Feta cheese", "Shredded cheese", "Cream cheese",
  "Sour cream", "Broccoli", "Cauliflower", "Asparagus", "Avocado",
  "Bell peppers", "Mushrooms", "Olive oil"
];

// Usual cheapest store + a good (stock-up-worthy) target price.
// store must be one of Costco / Safeway / Walmart / Sprouts.
const BEST_PRICE = {
  "Chicken breast":  { store: "Costco",  price: 2.99, unit: "/lb" },
  "Chicken thighs":  { store: "Costco",  price: 2.99, unit: "/lb" },
  "Ground beef":     { store: "Costco",  price: 4.99, unit: "/lb" },
  "Steak":           { store: "Costco",  price: 8.99, unit: "/lb" },
  "Bacon":           { store: "Costco",  price: 4.99, unit: "/lb" },
  "Eggs":            { store: "Walmart", price: 2.19, unit: "/dozen" },
  "Butter":          { store: "Costco",  price: 3.49, unit: "each" },
  "Feta cheese":     { store: "Costco",  price: 5.99, unit: "each" },
  "Shredded cheese": { store: "Costco",  price: 3.49, unit: "/lb" },
  "Cream cheese":    { store: "Walmart", price: 1.99, unit: "each" },
  "Sour cream":      { store: "Walmart", price: 2.49, unit: "each" },
  "Broccoli":        { store: "Sprouts", price: 0.99, unit: "/lb" },
  "Cauliflower":     { store: "Sprouts", price: 1.49, unit: "each" },
  "Asparagus":       { store: "Sprouts", price: 1.99, unit: "/lb" },
  "Avocado":         { store: "Sprouts", price: 0.79, unit: "each" },
  "Bell peppers":    { store: "Sprouts", price: 0.79, unit: "each" },
  "Mushrooms":       { store: "Sprouts", price: 1.99, unit: "each" },
  "Olive oil":       { store: "Costco",  price: 0.00, unit: "each" }
};

// Stock-up threshold: at/below this price, it's a genuinely good buy.
const STOCK_UP = {
  "Chicken breast": 2.49, "Chicken thighs": 1.99, "Ground beef": 4.49,
  "Steak": 7.99, "Bacon": 4.49, "Eggs": 1.99, "Butter": 3.29,
  "Broccoli": 0.99, "Cauliflower": 1.49, "Asparagus": 1.99,
  "Avocado": 0.69, "Bell peppers": 0.69, "Mushrooms": 1.79
};

// Observations. Anchors are documented benchmarks; 2026-07-19 rows are
// real Flipp (Safeway/Sprouts) + known Costco prices. More append weekly.
const PRICE_HISTORY = {
  "Chicken breast": [
    { date: "2026-07-11", store: "Costco",  price: 2.99, unit: "/lb", note: "Kirkland regular" },
    { date: "2026-07-19", store: "Safeway", price: 4.99, unit: "/lb", note: "Flipp weekly ad" }
  ],
  "Ground beef": [
    { date: "2026-07-11", store: "Costco",  price: 4.99, unit: "/lb", note: "bulk 88/12 typical" },
    { date: "2026-07-19", store: "Safeway", price: 5.99, unit: "/lb", note: "Flipp: Signature 85/15" }
  ],
  "Eggs": [
    { date: "2026-07-18", store: "Walmart", price: 2.19, unit: "/dozen", note: "everyday benchmark" },
    { date: "2026-07-19", store: "Safeway", price: 1.99, unit: "/dozen", note: "Flipp: Lucerne cage-free sale" }
  ],
  "Bacon": [
    { date: "2026-07-19", store: "Safeway", price: 3.99, unit: "each", note: "Flipp: Bar-S" }
  ],
  "Steak": [
    { date: "2026-07-15", store: "Costco",  price: 15.99, unit: "/lb", note: "ribeye hot buy" }
  ]
};
