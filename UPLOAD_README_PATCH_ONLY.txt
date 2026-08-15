# Patch-only upload for Draft War Room

This package intentionally does NOT include index.html or styles.css. That is deliberate: it keeps your existing visual layout intact and avoids the formatting changes from prior packages.

Upload/overwrite these files only:
- app.js
- excel-seed.json
- excel-seed-v45.json
- seed-rankings.json
- data/seed-rankings.json
- sleeper-targets.json
- v45-sleepers.json

Optional:
- config.js is included only to show the optional FantasyPros API key variable. If your current config.js has Supabase keys, do not overwrite it. Instead, manually add:
  window.FANTASYPROS_API_KEY = 'YOUR_KEY_HERE';

What changed:
- i button now shows Excel-based player info from Draft Note and ranking fields.
- Empty i sections are hidden.
- Source Coverage / Primary Source URL are not shown in the i modal.
- If a FantasyPros API key is configured, i button attempts to load live FantasyPros rankings data and appends it to the modal.
- No CSS/HTML visual layout changes are included.
