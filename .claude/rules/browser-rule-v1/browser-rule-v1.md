# Browser Control Rules (v1)

These rules apply whenever a task in this project could involve opening or controlling a web browser.

## 1. Default tool

- Use the **Playwright MCP** (`mcp__playwright__*`) for all web browser control.
- If its tools are deferred, load the ones you need in one ToolSearch call before using them.
- Use the Claude in Chrome extension (`mcp__claude-in-chrome__*`) only when the user explicitly asks for it (e.g. "크롬 확장으로", "Claude in Chrome").

## 2. Automatic call (trigger keywords)

- When the user's message contains any of the keywords below, or an expression with the same meaning, call the Playwright MCP right away without asking first:
  - "브라우저를 열어서 작업" / "브라우저 열어서" / "브라우저 열어줘"
  - "웹 제어" / "웹 브라우저 제어"
  - "직접 작업" / "직접 들어가서" / "사이트에 들어가서 해줘"
- The CLAUDE.md workflow (todo list first, execute after approval) still applies to the task as a whole; once the plan is approved, use Playwright without a separate browser-consent question.

## 3. Ask before calling (no keyword)

- If the user did not use a trigger keyword but the task could be done with the Playwright MCP (e.g. checking a live web page, taking a screenshot, filling a form, collecting data from a site), ask the user first:
  - Example: "이 작업은 브라우저를 직접 열어서(Playwright) 진행할 수 있습니다. 브라우저를 열어 작업해도 될까요?"
- Call the Playwright MCP only after the user agrees. If the user declines, use another method (e.g. WebSearch, WebFetch) or explain what cannot be done.

## 4. Safety

- Before any action that is hard to undo (logging in, payment, posting or publishing content, sending messages, deleting data), stop and confirm with the user right before doing it, even if browser use was already approved.
- Never type passwords or payment details on the user's behalf; ask the user to enter them.
- Close the browser (`browser_close`) when the task is finished.
- Report what was done in the browser, including any step that failed or was skipped.
