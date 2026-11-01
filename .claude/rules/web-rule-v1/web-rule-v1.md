# Web Development Rules (v1)

These rules apply whenever web page code is written, edited or deployed in this project, including all work by the `developer` agent.

## 1. Tech stack and file structure

- Use plain **HTML / CSS / JavaScript**. No frameworks (React, Vue, etc.) and no build step: the folder must work as-is when opened in a browser or served by GitHub Pages.
- Every page lives in `output/web/<task_name>/` (English `snake_case`) with this structure:

  ```
  output/web/<task_name>/
  ├── index.html      # Entry page
  ├── css/
  │   └── style.css   # All styles
  ├── js/
  │   └── main.js     # All scripts
  ├── lib/            # Downloaded third-party libraries (only if used)
  │   └── <library>/  # Library file(s) + its LICENSE
  ├── images/         # Images used by the page
  ├── .nojekyll       # Empty file so GitHub Pages serves files as-is
  └── README.md       # Short description, libraries used, deployed URL
  ```

- Extra pages go next to `index.html` (e.g. `about.html`). Split CSS/JS into more files only when a single file gets hard to read, and keep them in `css/` and `js/`.
- Use **relative paths only** (`css/style.css`, `images/hero.jpg`), never paths starting with `/`, so the site works under `https://<user>.github.io/<task_name>/`.
- Never overwrite a finished page unless asked; make a new version folder (`output/web/<task_name>/v2/`) instead.

## 2. Coding standards

- **HTML**: semantic tags (`header`, `nav`, `main`, `section`, `footer`), one `h1` per page, `lang="ko"` (or the page's language), `<meta charset>` and `<meta name="viewport">`, a meaningful `<title>` and `meta description`.
- **CSS**: define colors, fonts, spacing and breakpoints as CSS variables in `:root`. Mobile-first, responsive with Flexbox/Grid. No inline styles.
- **JS**: no inline `onclick` etc.; attach events in `js/main.js`. Load scripts with `defer`. Keep the page usable if JavaScript fails.
- **Accessibility**: `alt` text on images, enough text/background contrast, visible focus styles, keyboard-usable menus and buttons.
- **Motion**: respect `prefers-reduced-motion` (turn off or reduce animations for those users). Animations must not hide content or block reading.
- **Assets**: only images the project may use (user-provided, generated, or free-license with the source in `README.md`). Compress large images. Never copy a reference site's logo, text, images or code.
- **Fonts**: web fonts may be loaded from Google Fonts, or downloaded into `css/fonts/` with their license.

## 3. Libraries (animation, etc.)

- Use a library only when it clearly helps (e.g. GSAP, AOS, Swiper, Lottie). Prefer plain CSS/JS for simple effects.
- If one is needed, **install it yourself without asking**:
  1. Download it from the npm registry in a temporary folder outside the project, e.g. `npm pack <name>@<exact-version>` and extract it. Pick a stable, widely used version.
  2. Copy only the files the page needs (usually the minified build in `dist/`) plus its `LICENSE` into `output/web/<task_name>/lib/<name>/`.
  3. Load it from that folder in `index.html` (e.g. `<script src="lib/gsap/gsap.min.js" defer></script>`). **Do not load libraries from a CDN** and do not commit `node_modules`.
  4. Delete the temporary folder.
- **Report every library to the user**: name, exact version, what it is used for, license, and its path in `lib/`. List the same in `README.md`.

## 4. Deployment (GitHub Pages)

- Every finished page is deployed to **GitHub Pages**, in its **own new repository**, **without asking for confirmation**.
- **Repository name = task_name** (the folder name, e.g. `local_cafe_brand`). The repository is **public** (required for GitHub Pages on a free account).
- Use the `gh` CLI (already logged in). Steps:
  1. Check the account: `gh api user --jq .login` → `<user>`.
  2. Check the name is free: `gh repo view <user>/<task_name>`. If the repository already exists, **do not overwrite it**: stop and report, unless the main session says it is this same task's repository and asks for an update (then see step 7).
  3. Copy `output/web/<task_name>/` to a temporary folder **outside the project** (never run `git init` inside `agent_09/`, so no repository is nested in it).
  4. In that folder: `git init -b main`, add all files, commit. If no git identity is set, pass one for this commit only: `git -c user.name=<user> -c user.email=<user>@users.noreply.github.com commit ...`. Do not change global git config.
  5. Create and push: `gh repo create <task_name> --public --source . --remote origin --push --description "<one-line description>"`.
  6. Turn on Pages: `gh api -X POST repos/<user>/<task_name>/pages -f "source[branch]=main" -f "source[path]=/"`. Then poll `gh api repos/<user>/<task_name>/pages/builds/latest --jq .status` until it is `built` (a few minutes at most).
  7. Update of an existing deployment: clone the repository into a temporary folder, replace its files with the new version, commit and push; Pages rebuilds by itself.
  8. Delete the temporary folder. Write the deployed URL into `output/web/<task_name>/README.md`.
- Deployed URL: `https://<user>.github.io/<task_name>/`.
- Never push to or change any other repository, never delete repositories, and never put secrets, tokens or personal data in the code.

## 5. Checks

- **Before deploying**: open the page locally (Playwright MCP; if `file://` is blocked, serve it with `python -m http.server` from the task folder) and check at 1440px and 390px: no text overflow, no overlap, no horizontal scroll, images and library files load, links/buttons work, animations run, no console errors. Fix and re-check until clean.
- **After deploying**: open the live URL and check that the page, CSS, JS, images and `lib/` files all load (a 404 usually means an absolute path or a wrong case in a file name).

## 6. Report to the user

Give the user, in Korean:

- The **deployed link** (`https://<user>.github.io/<task_name>/`) and the repository link (`https://github.com/<user>/<task_name>`)
- Local file path (`output/web/<task_name>/`)
- **Libraries installed**: name, version, use, license (or "none")
- Check results, and anything that failed, was skipped or still uses a placeholder
