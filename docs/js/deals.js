// ============================================================
// DEALS_DATA — refreshed weekly by Claude when you ask for deals.
// The app reads this to show a "Deals This Week" panel and to
// badge matching items on the grocery list.
//
// To update: ask Claude "get this week's deals" — Claude searches
// the 4 store ads, fills this file, saves a dated history file in
// /deals, and pushes. Empty arrays = nothing to show.
//
// Matching: onList[].item is matched (case-insensitive substring)
// against grocery item names to badge them with the savings.
// ============================================================

const DEALS_DATA = {
  weekOf: "",        // e.g. "July 20"
  updated: "",       // ISO date Claude filled it
  location: "",      // store area used for the ad lookup

  // Deals on items likely already on your grocery list
  onList: [
    // { item: "Chicken thighs", store: "Safeway", price: "$1.99/lb", regular: "$3.49/lb", save: "$1.50/lb", note: "" }
  ],

  // Great prices on commonly-used items worth stocking up on
  stockUp: [
    // { item: "Olive oil", store: "Walmart", price: "$6.99", regular: "$9.99", note: "You use this weekly" }
  ],

  // Coupons to clip before shopping
  coupons: [
    // { store: "Safeway", detail: "Just for U: $2 off chicken thighs — clip in app" }
  ]
};
