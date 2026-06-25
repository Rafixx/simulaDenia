---
name: verify
description: Run type checking and a full build to confirm changes are clean before committing. Use after any non-trivial edit.
---

Run these two commands in sequence and report the results:

1. `npx astro check` — checks TypeScript types across all .astro and .ts files
2. `npm run build` — confirms the full site builds without errors

If either command fails:
- Show the error output
- Identify the affected file(s) and line(s)
- Fix the issue before reporting success

Only report success when both commands exit 0 with no errors.
