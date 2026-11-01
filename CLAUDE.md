# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Identity

- Name: 춘식
- Always respond in Korean (한글), regardless of the language of the user's input.

## Project Structure

This is a research-and-report workspace, not a code project.

```
agent_09/
├── CLAUDE.md      # Project rules (this file)
├── .gitignore     # Ignores Office lock files (~$*) and OS junk
├── .mcp.json      # Project-scoped MCP servers (Higgsfield for AI image/video generation, Figma for design files)
├── .claude/
│   ├── agents/        # Project sub agents
│   │   ├── research-agent.md   # Web research on a topic → output/research/<topic>/<topic>.md
│   │   ├── blog-agent.md       # Naver blog post → output/blog/<topic>/ manuscript + Playwright draft save
│   │   ├── web-designer.md     # Web design references from gdweb/dbcut → references/web/<topic>/ (screenshots, links, analysis .md)
│   │   └── developer.md        # Web page code (web-rule-v1) → output/web/<task_name>/ + GitHub Pages deploy
│   ├── rules/
│   │   ├── browser-rule-v1/   # Always-loaded rules for web browser control (Playwright MCP)
│   │   │   └── browser-rule-v1.md
│   │   ├── ppt-rule-v1/   # Always-loaded rules for building .pptx decks
│   │   │   └── ppt-rule-v1.md
│   │   └── web-rule-v1/   # Rules for web page code: HTML/CSS/JS structure, libraries in lib/, GitHub Pages deploy
│   │       └── web-rule-v1.md
│   └── skills/
│       └── mk-ppt/    # Project-only skill: builds .pptx decks with python-pptx
│           ├── SKILL.md
│           ├── references/python_pptx_api.md
│           └── scripts/build_pptx.py
├── references/    # Design references (.md, English) for deliverables
│   ├── ppt/
│   │   └── slide-design-system.md   # Orange slide design system (colors, fonts, layout)
│   └── web/       # Web design references by topic, made by web-designer: <topic>_reference.md + images/
│       └── entropy/                     # Entropy page references (gdweb/dbcut) + images/
├── output/        # Deliverables, one folder per task type → one subfolder per topic
│   ├── research/  # Research findings as .md (English)
│   │   ├── ai_development/              # AI development research (v1, v2)
│   │   ├── camping_cardnews/            # Camping card news: manners, thumbnail concepts, images/
│   │   ├── entropy/                     # Entropy research for the web page
│   │   ├── higgsfield_image_save_check/ # Higgsfield image-save test notes
│   │   ├── kimjang_cost_2026/           # 2026 kimjang cost research
│   │   └── kyobo_economy_book/          # Kyobo economy book notes (p4–5, v1, v2)
│   ├── blog/      # Naver blog manuscripts as .md (Korean), written by blog-agent
│   │   └── kimjang_cost_2026/           # Kimjang cost posts (v1, v2) + images/
│   ├── slides/    # Presentations as .pptx (Korean), built with the mk-ppt skill
│   │   ├── ai_development/              # AI_발전_발표.pptx
│   │   └── anthropic_company_intro/     # Anthropic_회사소개.pptx
│   └── web/       # Web page code by task (index.html, css/, js/, lib/, images/), built and deployed by developer
│       └── entropy/                     # Entropy intro page (GitHub Pages: entropy)
├── report/        # Final reports as .docx (Korean), one subfolder per topic
│   └── ai_development/                  # AI_발전_보고서 (v1, v2)
└── translate/     # Korean translations of every .md, mirroring relative paths (e.g. translate/output/research/...)
```

### Task Folder Rule

- When tasks are of the same type but on different topics, create a folder named after the task (topic) inside that type's folder, and keep everything for that task in it: the main file, every version (`_v2`, `_v3`, …), and its images (in an `images/` subfolder).
- This applies to every kind of work: research, blog posts, reports, slides, card news and any new task type.
- Folder names are English `snake_case` (e.g. `kimjang_cost_2026`). If a folder for the same topic already exists, reuse it instead of making a new one.
- Never put a deliverable directly in a type folder (e.g. `output/blog/x.md`) or in the project root.
- Paths by type:
  - Research (`.md`, English): `output/research/<topic>/`
  - Naver blog manuscripts (`.md`, Korean): `output/blog/<topic>/`. They are the post itself, so they are an exception to the English `.md` rule and need no translation.
  - Slides (`.pptx`): `output/slides/<topic>/`
  - Reports (`.docx`): `report/<topic>/`
  - Web design references (screenshots + analysis `.md`, English): `references/web/<topic>/`
  - Web page code: `output/web/<topic>/`
  - A new task type (e.g. card news, video): make `output/<type>/<topic>/` and add it to the tree above.
- Example:
  ```
  output/blog/winter/img.md
  output/blog/kimjang/img.md
  ```
- The old paths `research/`, `slides/` and `research/images/` are no longer used; never save to them.

## Sub Agents

- `research-agent` (`.claude/agents/research-agent.md`): use for topic research; it web-searches and saves an English report plus its Korean translation.
- `blog-agent` (`.claude/agents/blog-agent.md`): use for Naver blog posts; it saves the manuscript to `output/blog/<topic>/`, enters it with the Playwright MCP and only saves it as a draft (never publishes), then reports the link.
- **Before every `blog-agent` call, ask the user to confirm the Naver blog ID**, even if one was used before, and pass the confirmed ID in the prompt.
- Naver login is done by the user. If `blog-agent` returns asking for login, tell the user, wait until they finish, then call it again.
- If `blog-agent` returns because of the "작성 중인 글이 있습니다" popup, ask the user whether to restore the old draft or start a new post, then call it again with their choice.
- `web-designer` (`.claude/agents/web-designer.md`): use to find web design references for a topic before building a page. It searches only gdweb and dbcut (never Pinterest) with the Playwright MCP and saves screenshots, links and a design/layout analysis in `references/web/<topic>/`.
- `developer` (`.claude/agents/developer.md`): use to build a web page. It follows `.claude/rules/web-rule-v1/web-rule-v1.md`, reads the `web-designer` analysis, saves the code in `output/web/<task_name>/`, deploys it to GitHub Pages in a new public repository named `<task_name>` without asking, and reports the live link and any libraries it installed. Pass it the `task_name`.
- For any web code work, apply `.claude/rules/web-rule-v1/web-rule-v1.md` first. Priority: web-rule-v1 → the user's request → the reference analysis.
- For a new web page, run `web-designer` first, then pass its analysis path to `developer`.
- Save reports (`.docx`) in `report/<topic>/`. Do not leave deliverables in the project root.
- Save presentations (`.pptx`) in `output/slides/<topic>/`, using the `mk-ppt` skill (`.claude/skills/mk-ppt/`).
- For any `.pptx` work, apply `.claude/rules/ppt-rule-v1/ppt-rule-v1.md` first. Priority: ppt-rule-v1 → the user's design `.md` → `mk-ppt` defaults.
- Never overwrite an existing deliverable unless the user asks. Create a new version with a `_v2`, `_v3`, … suffix instead (e.g. `ai_development_research_v2.md`, `AI_발전_보고서_v2.docx`).

## Workflow

1. **Todo list first**: Whenever the user requests a task that creates, changes or deletes files (or acts in a browser), create a related todo list and report it to the user before doing any work. Include the steps, the deliverables, where they will be saved, and anything that needs the user's decision.
2. **Execute only after approval**: Start the work only after the user has read and approved the todo list. If the user asks for changes, revise the list, report it again, and wait for approval again.
3. **Finish by tidying the structure**: If the work added any folders or files, always reorganize them into the structure Claude Code recognizes best before finishing:
   - Move files into the right purpose-based folder and topic folder (see **Task Folder Rule**); leave no deliverables in the project root.
   - When a new folder is added, update the **Project Structure** tree and its descriptions in this file (and its translation).
   - Check that every `.md` file has a matching translation in `translate/`.
   - Include the final folder tree in the completion report.

## Markdown File Policy

- Write every new `.md` file in English.
- For every `.md` file, save a Korean translation in this project's `translate/` folder, mirroring the same relative path/filename (e.g. `output/research/x/x.md` → `translate/output/research/x/x.md`). Create the translation at the same time as the original.
- Whenever a `.md` file is modified or deleted, check for the change and apply the same update (or deletion) to its corresponding translation file in `translate`, keeping both in sync.
