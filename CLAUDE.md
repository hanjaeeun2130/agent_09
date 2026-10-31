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
│   │   ├── research-agent.md   # Web research on a topic → research/<topic>/<topic>.md
│   │   └── blog-agent.md       # Naver blog post → output/blog/ manuscript + Playwright draft save
│   ├── rules/
│   │   ├── browser-rule-v1/   # Always-loaded rules for web browser control (Playwright MCP)
│   │   │   └── browser-rule-v1.md
│   │   └── ppt-rule-v1/   # Always-loaded rules for building .pptx decks
│   │       └── ppt-rule-v1.md
│   └── skills/
│       └── mk-ppt/    # Project-only skill: builds .pptx decks with python-pptx
│           ├── SKILL.md
│           ├── references/python_pptx_api.md
│           └── scripts/build_pptx.py
├── references/    # Design references (.md, English) for deliverables
│   └── ppt/
│       └── slide-design-system.md   # Orange slide design system (colors, fonts, layout)
├── research/      # Research findings as .md (English), one subfolder per topic for new research
│   └── images/    # Images used in deliverables (e.g. Unsplash photos for blog posts), one subfolder per topic
├── output/
│   └── blog/      # Naver blog manuscripts as .md (Korean), written by blog-agent
├── report/        # Final reports as .docx (Korean)
├── slides/        # Presentations as .pptx (Korean), built with the mk-ppt skill
└── translate/     # Korean translations of every .md, mirroring relative paths
```

- Save research results (`.md`) in `research/`. New research from `research-agent` goes in `research/<topic>/`.
- Save Naver blog manuscripts in `output/blog/`. They are written in Korean (the post itself), so they are an exception to the English `.md` rule and need no translation.

## Sub Agents

- `research-agent` (`.claude/agents/research-agent.md`): use for topic research; it web-searches and saves an English report plus its Korean translation.
- `blog-agent` (`.claude/agents/blog-agent.md`): use for Naver blog posts; it saves the manuscript to `output/blog/`, enters it with the Playwright MCP and only saves it as a draft (never publishes), then reports the link.
- **Before every `blog-agent` call, ask the user to confirm the Naver blog ID**, even if one was used before, and pass the confirmed ID in the prompt.
- Naver login is done by the user. If `blog-agent` returns asking for login, tell the user, wait until they finish, then call it again.
- If `blog-agent` returns because of the "작성 중인 글이 있습니다" popup, ask the user whether to restore the old draft or start a new post, then call it again with their choice.
- Save reports (`.docx`) in `report/`. Do not leave deliverables in the project root.
- Save presentations (`.pptx`) in `slides/`, using the `mk-ppt` skill (`.claude/skills/mk-ppt/`).
- For any `.pptx` work, apply `.claude/rules/ppt-rule-v1/ppt-rule-v1.md` first. Priority: ppt-rule-v1 → the user's design `.md` → `mk-ppt` defaults.
- Never overwrite an existing deliverable unless the user asks. Create a new version with a `_v2`, `_v3`, … suffix instead (e.g. `ai_development_research_v2.md`, `AI_발전_보고서_v2.docx`).

## Workflow

1. **Todo list first**: Whenever the user requests a task that creates, changes or deletes files (or acts in a browser), create a related todo list and report it to the user before doing any work. Include the steps, the deliverables, where they will be saved, and anything that needs the user's decision.
2. **Execute only after approval**: Start the work only after the user has read and approved the todo list. If the user asks for changes, revise the list, report it again, and wait for approval again.
3. **Finish by tidying the structure**: If the work added any folders or files, always reorganize them into the structure Claude Code recognizes best before finishing:
   - Move files into the right purpose-based folder; leave no deliverables in the project root.
   - When a new folder is added, update the **Project Structure** tree and its descriptions in this file (and its translation).
   - Check that every `.md` file has a matching translation in `translate/`.
   - Include the final folder tree in the completion report.

## Markdown File Policy

- Write every new `.md` file in English.
- For every `.md` file, save a Korean translation in this project's `translate/` folder, mirroring the same relative path/filename (e.g. `research/x.md` → `translate/research/x.md`). Create the translation at the same time as the original.
- Whenever a `.md` file is modified or deleted, check for the change and apply the same update (or deletion) to its corresponding translation file in `translate`, keeping both in sync.
