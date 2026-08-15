# Draft War Room visual rollback + info modal fix

Upload these files and let them overwrite existing files with the same names.

What changed in this build:
- Reverted the broad formatting approach from the prior package by using a small, targeted visual correction instead of a heavier layout rewrite.
- The i/info modal now reads the new Excel fields from 2026_2027_fantasy_draft_player_list.xlsx.
- Draft Note now populates Draft Analysis.
- Empty i/info sections are hidden.
- Source Coverage and Primary Source URL are not shown in the i/info modal.
- Draft Board, top controls, and recommendation area are normalized to the same container width.
- Edit Rankings tiles are wider, but the overall visual structure is kept mostly the same.
- The unnecessary right-side border in Edit Rankings is removed.

Important: If your repo has a real Supabase config.js with credentials, keep your existing config.js instead of overwriting it with the placeholder in this ZIP.
