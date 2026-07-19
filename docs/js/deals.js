// ============================================================
// DEALS_DATA — this week's deals (Colorado Springs 80919).
// Source: Flipp (live Safeway + Sprouts weekly ads) + known
// Costco/Walmart benchmarks. Refreshed when you ask Claude to
// "get this week's deals." Empty arrays = nothing to show.
// ============================================================

const DEALS_DATA = {
  weekOf: "July 20",
  updated: "2026-07-19",
  location: "Colorado Springs 80919",
  adWindow: "Jul 15–22 (Safeway/Sprouts)",

  // Deals on items likely already on your grocery list
  onList: [
    { item: "Eggs", store: "Safeway", price: "$1.99/dozen", regular: "$4.29", save: "$2.30", note: "Lucerne cage-free, member price — great buy" },
    { item: "Bacon", store: "Safeway", price: "$3.99", regular: "$5.49", save: "$1.50", note: "Bar-S" },
    { item: "Chicken breast", store: "Costco", price: "$2.99/lb", regular: "$4.99/lb at Safeway", save: "$2.00/lb", note: "Kirkland steady low" },
    { item: "Ground beef", store: "Costco", price: "$4.99/lb", regular: "$5.99/lb at Safeway", save: "$1.00/lb", note: "bulk 88/12" }
  ],

  // Great prices on commonly-used items worth stocking up on
  stockUp: [
    { item: "Eggs", store: "Safeway", price: "$1.99/dozen", note: "Lowest we track — buy a couple dozen" },
    { item: "Ribeye steak", store: "Costco", price: "$15.99/lb", note: "Kirkland Prime hot buy this month" }
  ],

  // Reminders to clip digital coupons (personalized in-app)
  coupons: [
    { store: "Safeway", detail: "Clip Safeway for U coupons in the app before shopping (Rockrimmon)" },
    { store: "Sprouts", detail: "Sprouts app: grass-fed ground beef & produce are BOGO 50% this week (Academy & Dublin)" }
  ]
};
