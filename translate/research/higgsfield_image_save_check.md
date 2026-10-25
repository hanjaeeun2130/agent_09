# Higgsfield MCP: 생성한 이미지를 프로젝트에 자동 저장할 수 있는가?

- 확인 날짜: 2026-10-25
- 조건: 무료로만 이용 (크레딧 사용 안 함)

## 결론

**자동으로 저장되지는 않지만, 사용자가 직접 다운로드할 필요도 없습니다.**

- Higgsfield MCP에는 결과를 로컬 폴더에 저장하는 옵션이 없습니다. 생성된 이미지는 Higgsfield 서버에 남고, 도구는 **결과 URL**로 돌려줍니다.
- Claude Code가 그 URL을 받아 PowerShell(`Invoke-WebRequest`)로 `research/images/<주제>/` 같은 프로젝트 폴더에 내려받을 수 있습니다. 즉 "생성 → URL 받기 → Claude가 다운로드" 순서로, 사용자가 손으로 받을 일은 없습니다.
- 이 계정에서는 이 커넥터로 **무료 이미지 생성이 불가능**해서, 테스트용 실제 이미지는 만들지 않았습니다.

## 확인한 내용

| 항목 | 결과 |
|---|---|
| 계정 잔액 (`balance`) | 무료 플랜, 크레딧 10 |
| 이미지 1장 비용 (`gpt_image_2_5`, 1:1, `get_cost` 사전 확인) | 0.25 크레딧 |
| 무료 생성 (`use_free_gens: true`) | **거부됨**: "free generations can be spent from the ChatGPT (OpenAI) Higgsfield connector only" |
| 기존 생성 기록 이미지 (`show_generations`, `show_medias`) | 없음 |
| 이 PC에서 URL로 로컬 다운로드 (`Invoke-WebRequest`) | 정상 동작 (테스트 파일 5,430바이트) |

## 도구별 결과물 처리 방식

- `generate_image`: 결과를 위젯으로 보여 줌. 로컬 저장 경로 옵션 없음. 저장 위치 옵션은 `folder_id`뿐인데, 이는 Higgsfield **클라우드** 프로젝트 폴더입니다.
- `jobs_wait`: 작업 상태와 **결과 URL**을 돌려줌. 이 URL을 다운로드하면 됩니다.
- `get_project_asset_source`: Higgsfield 프로젝트 안 자산의 **다운로드 URL**을 돌려줌.
- `sandbox_exec`: 이 PC가 아니라 **Higgsfield 원격 클라우드 샌드박스**에서 실행되므로, 이 프로젝트에 파일을 쓸 수 없습니다.

## 권장 작업 흐름 (크레딧 사용을 허락한 경우)

1. `generate_image`로 생성 (여러 장이면 `generate_image_batch`).
2. `jobs_wait`로 결과 URL 받기.
3. Claude가 실행:
   ```powershell
   Invoke-WebRequest -Uri "<결과 URL>" -OutFile "research\images\<주제>\<이름>.png" -UseBasicParsing
   ```
4. 이미지가 프로젝트에 저장되어 블로그, 보고서, 슬라이드에 바로 쓸 수 있습니다.

## 한계와 참고 사항

- 무료 생성이 불가능해서, URL → 로컬 파일 단계는 실제 Higgsfield 결과 URL이 아닌 공개 테스트 파일로 확인했습니다. 첫 실제(유료) 생성 때 2~3단계를 한 번 확인해야 합니다.
- 이 Claude Code 커넥터로는 무료 생성이 지원되지 않고, ChatGPT용 Higgsfield 커넥터에서만 됩니다.
- `gpt_image_2_5` 기준 1장에 0.25 크레딧이므로, 현재 10 크레딧으로 약 40장을 만들 수 있습니다.
