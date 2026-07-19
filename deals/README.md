# Weekly Deals History

Each week when you ask Claude to "get this week's deals," Claude:
1. Searches current ads for Costco, Safeway, Walmart, Sprouts (your area)
2. Cross-references items you commonly buy + this week's rotation
3. Updates `docs/js/deals.js` (drives the in-app Deals panel + badges)
4. Saves a dated snapshot here (e.g. `2026-07-20.md`) for your records
5. Pushes so the live app updates

Files here are the historical record. The live app only reads the current
week from `docs/js/deals.js`.
