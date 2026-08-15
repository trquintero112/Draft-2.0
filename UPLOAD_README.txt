# Draft War Room upload package

Upload these files and let them overwrite files with the same names.

Main fixes included:
- Player info modal now uses the new Excel fields from 2026_2027_fantasy_draft_player_list.xlsx.
- Draft Note populates the Draft Analysis section.
- Empty info sections are hidden automatically.
- Draft Board width matches the top controls and recommendation section.
- Edit Rankings is wider.
- Unneeded right border in Edit Rankings is removed.

Canonical source file:
- excel-seed.json

Compatibility roster files are also included:
- excel-seed-v45.json
- seed-rankings.json
- data/seed-rankings.json

Important: If your current config.js has Supabase credentials, keep your existing config.js instead of overwriting it with the placeholder.
