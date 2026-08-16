Upload these files to your GitHub repo root and let them overwrite/add files:

- index.html
- view-size-patch.js

This keeps your existing app.js, styles.css, config.js, and roster files untouched.

Changes:
- Hides the old Compact View / Normal View button.
- Adds the new View Size selector.
- Default is Compact.
- Options are Compact Default, 80%, 75%, 65%, and 55%.
- 100% and 90% are not included.
- 80%, 75%, 65%, and 55% scale down from the compact layout.
