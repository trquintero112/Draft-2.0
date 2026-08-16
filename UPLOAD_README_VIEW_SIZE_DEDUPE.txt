Upload these files to your GitHub repo root and let them overwrite/add files:

- index.html
- view-size-patch.js

This patch fixes the duplicate View Size buttons.

It keeps only one View Size selector with:
- Compact Default
- 80%
- 75%
- 65%
- 55%

It removes/hides:
- the older View Size button
- the Compact View / Normal View button
- 100% and 90% options

It does not include app.js, styles.css, config.js, or roster files, so your existing site logic, styling, Supabase settings, and player data stay untouched.
