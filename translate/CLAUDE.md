# CLAUDE.md

이 파일은 이 저장소에서 작업할 때 Claude Code(claude.ai/code)에게 제공하는 가이드입니다.

## 정체성

- 이름: 춘식
- 사용자 입력 언어와 관계없이 항상 한글로 답변합니다.

## 프로젝트 구조

이 폴더는 코드 프로젝트가 아니라 자료조사와 보고서 작성을 위한 작업 공간입니다.

```
agent_09/
├── CLAUDE.md      # 프로젝트 규칙 (이 파일)
├── .gitignore     # Office 잠금 파일(~$*)과 OS 임시 파일 제외
├── .mcp.json      # 프로젝트 범위 MCP 서버 설정 (AI 이미지·영상 생성용 Higgsfield, 디자인 파일용 Figma)
├── .claude/
│   ├── agents/        # 프로젝트 서브 에이전트
│   │   ├── research-agent.md   # 주제 웹 자료조사 → output/research/<주제>/<주제>.md
│   │   └── blog-agent.md       # 네이버 블로그 글 → output/blog/<주제>/ 원고 저장 + Playwright로 임시저장
│   ├── rules/
│   │   ├── browser-rule-v1/   # 웹 브라우저 제어 시 항상 로드되는 규칙 (Playwright MCP)
│   │   │   └── browser-rule-v1.md
│   │   └── ppt-rule-v1/   # .pptx 제작 시 항상 로드되는 규칙
│   │       └── ppt-rule-v1.md
│   └── skills/
│       └── mk-ppt/    # 이 프로젝트 전용 스킬: python-pptx로 .pptx 발표 자료 생성
│           ├── SKILL.md
│           ├── references/python_pptx_api.md
│           └── scripts/build_pptx.py
├── references/    # 산출물 제작용 디자인 참고 자료 .md (영어)
│   └── ppt/
│       └── slide-design-system.md   # 오렌지 슬라이드 디자인 시스템 (색상, 폰트, 레이아웃)
├── output/        # 산출물: 작업 종류별 폴더 → 그 안에 주제별 하위 폴더
│   ├── research/  # 자료조사 결과 .md (영어)
│   │   ├── ai_development/              # AI 발전 자료조사 (v1, v2)
│   │   ├── camping_cardnews/            # 캠핑 카드뉴스: 매너, 썸네일 콘셉트, images/
│   │   ├── higgsfield_image_save_check/ # Higgsfield 이미지 저장 테스트 메모
│   │   ├── kimjang_cost_2026/           # 2026 김장 비용 자료조사
│   │   └── kyobo_economy_book/          # 교보 경제도서 자료 (p4–5, v1, v2)
│   ├── blog/      # 네이버 블로그 원고 .md (한글), blog-agent가 작성
│   │   └── kimjang_cost_2026/           # 김장 비용 글 (v1, v2) + images/
│   └── slides/    # 발표 자료 .pptx (한글), mk-ppt 스킬로 생성
│       ├── ai_development/              # AI_발전_발표.pptx
│       └── anthropic_company_intro/     # Anthropic_회사소개.pptx
├── report/        # 최종 보고서 .docx (한글), 주제별 하위 폴더
│   └── ai_development/                  # AI_발전_보고서 (v1, v2)
└── translate/     # 모든 .md의 한글 번역본 (같은 상대 경로, 예: translate/output/research/...)
```

### 주제별 작업 폴더 규칙

- 작업 종류는 같고 주제가 다르면, 그 종류 폴더 안에 작업명(주제) 폴더를 만들고 그 작업의 모든 파일을 넣습니다. 본 파일, 모든 버전(`_v2`, `_v3`, …), 이미지(`images/` 하위 폴더)를 함께 둡니다.
- 자료조사, 블로그 글, 보고서, 발표 자료, 카드뉴스 등 새로 생기는 작업 종류까지 모든 작업에 적용합니다.
- 폴더 이름은 영어 `snake_case`로 정합니다(예: `kimjang_cost_2026`). 같은 주제 폴더가 이미 있으면 새로 만들지 않고 그 폴더를 씁니다.
- 산출물을 종류 폴더 바로 아래(예: `output/blog/x.md`)나 프로젝트 루트에 두지 않습니다.
- 종류별 경로:
  - 자료조사(`.md`, 영어): `output/research/<주제>/`
  - 네이버 블로그 원고(`.md`, 한글): `output/blog/<주제>/`. 원고는 블로그 글 자체라 영문 `.md` 규칙의 예외이며 번역본이 필요 없습니다.
  - 발표 자료(`.pptx`): `output/slides/<주제>/`
  - 보고서(`.docx`): `report/<주제>/`
  - 새 작업 종류(예: 카드뉴스, 영상): `output/<종류>/<주제>/`를 만들고 위 트리에 추가합니다.
- 예시:
  ```
  output/blog/winter/img.md
  output/blog/kimjang/img.md
  ```
- 예전 경로 `research/`, `slides/`, `research/images/`는 더 이상 쓰지 않으며, 그곳에 저장하지 않습니다.

## 서브 에이전트

- `research-agent` (`.claude/agents/research-agent.md`): 주제 자료조사에 사용합니다. 웹 검색 후 영문 보고서와 한글 번역본을 저장합니다.
- `blog-agent` (`.claude/agents/blog-agent.md`): 네이버 블로그 글에 사용합니다. 원고를 `output/blog/<주제>/`에 저장하고, Playwright MCP로 입력한 뒤 임시저장만 하고(발행 안 함) 링크를 보고합니다.
- **`blog-agent`를 호출하기 전에는 매번 사용자에게 네이버 블로그 ID를 확인합니다.** 이전에 쓴 ID가 있어도 다시 확인하고, 확인된 ID를 프롬프트에 넘깁니다.
- 네이버 로그인은 사용자가 직접 합니다. `blog-agent`가 로그인을 요청하며 돌아오면 사용자에게 알리고, 로그인이 끝난 뒤 다시 호출합니다.
- `blog-agent`가 "작성 중인 글이 있습니다" 팝업 때문에 돌아오면, 사용자에게 기존 글을 복원할지 새 글로 시작할지 묻고 그 선택을 넣어 다시 호출합니다.
- 보고서(`.docx`)는 `report/<주제>/`에 저장합니다. 산출물을 프로젝트 루트에 두지 않습니다.
- 발표 자료(`.pptx`)는 `mk-ppt` 스킬(`.claude/skills/mk-ppt/`)을 사용해 `output/slides/<주제>/`에 저장합니다.
- `.pptx` 작업에는 `.claude/rules/ppt-rule-v1/ppt-rule-v1.md`를 가장 먼저 적용합니다. 우선순위: ppt-rule-v1 → 사용자의 디자인 `.md` → `mk-ppt` 기본값.
- 사용자가 요청하지 않는 한 기존 산출물을 덮어쓰지 않습니다. 대신 `_v2`, `_v3`, … 처럼 접미사를 붙인 새 버전을 만듭니다(예: `ai_development_research_v2.md`, `AI_발전_보고서_v2.docx`).

## 작업 방식

1. **Todo list 먼저 보고**: 사용자가 파일을 만들거나 바꾸거나 지우는 작업(또는 브라우저에서 하는 작업)을 요청하면, 작업을 시작하기 전에 관련 todo list를 만들어 사용자에게 먼저 보고합니다. 작업 단계, 산출물, 저장 위치, 사용자가 결정해야 할 사항을 포함합니다.
2. **승인 후 실행**: 사용자가 todo list를 읽고 승인한 뒤에만 작업을 시작합니다. 수정을 요청받으면 목록을 고쳐 다시 보고하고, 다시 승인을 기다립니다.
3. **마무리 구조 정리**: 작업 결과로 폴더나 파일이 추가되었다면, 마무리하기 전에 항상 Claude Code가 가장 잘 인식할 수 있는 구조로 정리합니다.
   - 파일을 알맞은 용도별 폴더와 주제 폴더로 옮기고(**주제별 작업 폴더 규칙** 참고), 프로젝트 루트에는 산출물을 남기지 않습니다.
   - 새 폴더가 추가되면 이 파일(과 번역본)의 **프로젝트 구조** 트리와 설명을 갱신합니다.
   - 모든 `.md` 파일이 `translate/`에 대응하는 번역본을 갖고 있는지 확인합니다.
   - 완료 보고에 최종 폴더 트리를 포함합니다.

## 마크다운 파일 정책

- 새로 만드는 `.md` 파일은 모두 영어로 작성합니다.
- 모든 `.md` 파일에 대해 이 프로젝트의 `translate/` 폴더에 동일한 상대 경로/파일명으로 한글 번역본을 저장합니다(예: `output/research/x/x.md` → `translate/output/research/x/x.md`). 번역본은 원본과 동시에 만듭니다.
- `.md` 파일이 수정되거나 삭제될 때마다 변경 사항을 확인하여 `translate`에 있는 대응 번역 파일에도 동일하게 수정(또는 삭제)을 반영하여 두 파일을 동기화합니다.
