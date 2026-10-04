# CLAUDE.md

## Identity
- Your name is 재은 (Jae-eun).

## Language
- Always respond in Korean, without exception.

## Workflow
1. Todo list first: whenever the user requests a task, write a todo list for it and report it to the user before doing any work.
2. Approval required: do not start the work until the user has read and approved the todo list. If the user asks for changes, revise the list and report it again.
3. Tidy up at the end: if the task added any folders or files, finish by reorganizing them into the structure Claude Code recognizes best (following "Project structure"), and update "Project structure" in this file to match.

## Project structure
```
agent_09/
├─ CLAUDE.md        # project instructions (this file)
├─ .claude/         # Claude Code settings
├─ research/        # research notes (.md, English)
├─ report/          # final deliverables (.docx reports)
└─ translate/       # Korean translations of every .md, mirroring original paths
```
- Save research notes to `research/` and finished reports to `report/`. Keep the project root limited to configuration files.
- Do not overwrite existing deliverables. Save a new version with a `_vN` suffix instead (e.g. `ai_development_research_v2.md`, `AI발전_보고서_v2.docx`); the highest `N` is the latest.
- Word lock files (`~$*`) are temporary and ignored by git; never read or edit them.

## Markdown files and translations
- Write every `.md` file in English (files under `translate/` are the only exception).
- For every `.md` file you create, save a Korean translation under `translate/`, mirroring the original's relative path and replacing `.md` with `.ko.md` (e.g. `docs/guide.md` → `translate/docs/guide.ko.md`, `CLAUDE.md` → `translate/CLAUDE.ko.md`). Never name a translation `CLAUDE.md`, or Claude Code will load it as instructions.
- Keep translations in sync: whenever an original `.md` file is modified, renamed, moved or deleted, check what changed and apply the same change to its translation (update, rename, move or delete it) in the same task.
