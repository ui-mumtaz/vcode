# Mumtaz Ahmad — Portfolio

A static, dependency-free portfolio site. No build step.

```
vcode/
├── index.html        # layout + SEO / Open Graph tags
├── data/profile.js   # ← ALL content (edit this)
├── assets/styles.css # theme tokens, layout, animations
├── assets/main.js    # renders profile.js into the page, theme toggle, menu, scroll reveal
├── resume.pdf        # linked from "Résumé (PDF)" buttons
└── headshot.jpg      # (add this) square photo, ~600×600; initials show until it exists
```

## Edit content
Open `data/profile.js` and change any text. Set a field to `""` (or an empty array) to hide it.
- **LinkedIn:** paste your URL into `links.linkedin` to show the LinkedIn buttons.
- **Work preference:** set `workPreference` (e.g. `"Open to remote"`) to show it in the hero.
- **Project links:** fill `live` / `repo` on any project to show "Live ↗" / "GitHub ↗".
- `<title>`, meta description and OG tags are in the `<head>` of `index.html`. Update them if you change your title.

## Run locally
Any static server works. From this folder:
```bash
npx serve .            # or: python -m http.server 8000
```
Then open the printed URL. (Opening `index.html` directly from disk also works.)

## Deploy free
**Netlify:** drag the `vcode` folder onto https://app.netlify.com/drop. Or connect the repo with no build command and *Publish directory* = `.` (repo root).

**Vercel:** import the repo at https://vercel.com/new, set *Framework Preset* = "Other", and leave the build command empty. Or run `npx vercel` in this folder.

**GitHub Pages:** push this repo and enable Pages on the branch.

After deploying, uncomment `og:url` / `og:image` in `index.html` and point them at your real domain (social previews need absolute URLs).
