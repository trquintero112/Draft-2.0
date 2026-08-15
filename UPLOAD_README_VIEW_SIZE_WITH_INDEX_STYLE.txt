# Draft War Room upload package

This package uses your uploaded current visual files, renamed to overwrite GitHub correctly:
- index.html
- styles.css

It also includes the current app.js with the View Size dropdown behavior:
- 100% Default
- 90%
- 80%
- 75%
- Compact

Upload these files over the repo root. Keep your existing config.js if it has your Supabase values.

Included roster files preserve the latest 225-player source from 2026_2027_fantasy_draft_player_list.xlsx:
- excel-seed.json
- excel-seed-v45.json
- seed-rankings.json
- data/seed-rankings.json
- sleeper-targets.json
- v45-sleepers.json

I only bumped the cache query strings in index.html so the browser pulls the new overwritten files from GitHub Pages.
