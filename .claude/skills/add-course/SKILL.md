---
name: add-course
description: Add a new course or workshop entry to src/data/courses.json. Use when adding new training sessions.
disable-model-invocation: true
---

Add a new course to `src/data/courses.json`. Accept: $ARGUMENTS

## Steps

1. **Identify the section.** Ask which section the course belongs to if not provided:
   - `SECCIÓN RCP` — weekly CPR team training for Urgencias staff
   - `TALLERES ACREDITADOS` — accredited multidisciplinary skill workshops
   - `ECOGRAFÍA EN URGENCIAS` — ultrasound training
   - `TALLERES ENFERMERÍA` — nursing/TCAE-specific workshops

2. **Gather course fields:**
   - `Title` — course name (string)
   - `For` — target audience, e.g. `"Profesionales urgencias"` or `"TCAEs y Enfermería"`
   - `Date` — date string, e.g. `"15 enero 2026"`
   - `Link` — enrollment URL (inscribirme.com or similar)

3. **Edit `src/data/courses.json`:** Add the new course object to the `"cursos"` array of the correct section. Match the existing object structure exactly — do not add extra fields.

4. **Verify:** Run `npx astro check` and confirm it passes.

5. **Confirm** by showing the user the added entry.
