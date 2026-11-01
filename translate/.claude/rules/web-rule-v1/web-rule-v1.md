# 웹 개발 규칙 (v1)

이 규칙은 이 프로젝트에서 웹 페이지 코드를 작성·수정·배포할 때마다 적용되며, `developer` 에이전트의 모든 작업에도 적용됩니다.

## 1. 기술 스택과 파일 구조

- 순수 **HTML / CSS / JavaScript**를 사용합니다. 프레임워크(React, Vue 등)와 빌드 과정은 쓰지 않습니다. 폴더를 그대로 브라우저로 열거나 GitHub Pages로 서비스해도 작동해야 합니다.
- 모든 페이지는 `output/web/<task_name>/`(영어 `snake_case`)에 아래 구조로 둡니다.

  ```
  output/web/<task_name>/
  ├── index.html      # 시작 페이지
  ├── css/
  │   └── style.css   # 모든 스타일
  ├── js/
  │   └── main.js     # 모든 스크립트
  ├── lib/            # 내려받은 외부 라이브러리 (사용할 때만)
  │   └── <라이브러리>/  # 라이브러리 파일 + LICENSE
  ├── images/         # 페이지에 쓰는 이미지
  ├── .nojekyll       # GitHub Pages가 파일을 그대로 서비스하도록 하는 빈 파일
  └── README.md       # 간단한 설명, 사용 라이브러리, 배포 주소
  ```

- 추가 페이지는 `index.html` 옆에 둡니다(예: `about.html`). CSS/JS는 한 파일이 읽기 어려워질 때만 나누고, `css/`와 `js/` 안에 둡니다.
- **상대 경로만** 씁니다(`css/style.css`, `images/hero.jpg`). `/`로 시작하는 경로는 쓰지 않아야 `https://<user>.github.io/<task_name>/` 아래에서도 작동합니다.
- 요청이 없으면 완성된 페이지를 덮어쓰지 않고, 새 버전 폴더(`output/web/<task_name>/v2/`)를 만듭니다.

## 2. 코딩 기준

- **HTML**: 시맨틱 태그(`header`, `nav`, `main`, `section`, `footer`), 페이지당 `h1` 하나, `lang="ko"`(또는 페이지 언어), `<meta charset>`과 `<meta name="viewport">`, 의미 있는 `<title>`과 `meta description`.
- **CSS**: 색상, 폰트, 여백, 브레이크포인트를 `:root`의 CSS 변수로 정의합니다. 모바일 우선, Flexbox/Grid로 반응형을 만듭니다. 인라인 스타일은 쓰지 않습니다.
- **JS**: 인라인 `onclick` 등은 쓰지 않고 이벤트는 `js/main.js`에서 연결합니다. 스크립트는 `defer`로 불러옵니다. JavaScript가 실패해도 페이지를 쓸 수 있어야 합니다.
- **접근성**: 이미지 `alt` 텍스트, 충분한 글자/배경 대비, 보이는 포커스 스타일, 키보드로 쓸 수 있는 메뉴와 버튼.
- **모션**: `prefers-reduced-motion`을 존중합니다(해당 사용자에게는 애니메이션을 끄거나 줄임). 애니메이션이 내용을 가리거나 읽기를 방해하면 안 됩니다.
- **자산**: 프로젝트가 쓸 수 있는 이미지만 씁니다(사용자 제공, 생성 이미지, 출처를 `README.md`에 적은 무료 라이선스). 큰 이미지는 압축합니다. 레퍼런스 사이트의 로고·문구·이미지·코드는 절대 베끼지 않습니다.
- **폰트**: 웹 폰트는 Google Fonts에서 불러오거나, 라이선스와 함께 `css/fonts/`에 내려받아 둘 수 있습니다.

## 3. 라이브러리 (애니메이션 등)

- 확실히 도움이 될 때만 라이브러리를 씁니다(예: GSAP, AOS, Swiper, Lottie). 간단한 효과는 순수 CSS/JS를 우선합니다.
- 필요하면 **묻지 않고 직접 설치합니다**:
  1. 프로젝트 밖 임시 폴더에서 npm 레지스트리로 내려받습니다. 예: `npm pack <이름>@<정확한 버전>` 후 압축 해제. 안정적이고 널리 쓰이는 버전을 고릅니다.
  2. 페이지에 필요한 파일(보통 `dist/`의 압축된 빌드)과 `LICENSE`만 `output/web/<task_name>/lib/<이름>/`에 복사합니다.
  3. `index.html`에서 그 폴더의 파일을 불러옵니다(예: `<script src="lib/gsap/gsap.min.js" defer></script>`). **CDN에서 불러오지 않으며**, `node_modules`는 커밋하지 않습니다.
  4. 임시 폴더를 지웁니다.
- **설치한 라이브러리는 모두 사용자에게 보고합니다**: 이름, 정확한 버전, 용도, 라이선스, `lib/` 안의 경로. 같은 내용을 `README.md`에도 적습니다.

## 4. 배포 (GitHub Pages)

- 완성된 페이지는 **확인을 묻지 않고** **새 저장소 하나씩** 만들어 **GitHub Pages**로 배포합니다.
- **저장소 이름 = task_name**(폴더 이름, 예: `local_cafe_brand`). 저장소는 **공개(public)**로 만듭니다(무료 계정에서 GitHub Pages를 쓰려면 필요).
- `gh` CLI(이미 로그인됨)를 사용합니다. 단계:
  1. 계정 확인: `gh api user --jq .login` → `<user>`.
  2. 이름이 비어 있는지 확인: `gh repo view <user>/<task_name>`. 저장소가 이미 있으면 **덮어쓰지 않고** 멈춘 뒤 보고합니다. 단, 메인 세션이 같은 작업의 저장소라며 업데이트를 요청한 경우는 7단계를 따릅니다.
  3. `output/web/<task_name>/`를 **프로젝트 밖** 임시 폴더로 복사합니다(`agent_09/` 안에서는 `git init`을 절대 하지 않아, 저장소가 중첩되지 않게 함).
  4. 그 폴더에서 `git init -b main`, 모든 파일 추가, 커밋. git 사용자 정보가 없으면 이번 커밋에만 넘깁니다: `git -c user.name=<user> -c user.email=<user>@users.noreply.github.com commit ...`. 전역 git 설정은 바꾸지 않습니다.
  5. 생성 및 푸시: `gh repo create <task_name> --public --source . --remote origin --push --description "<한 줄 설명>"`.
  6. Pages 켜기: `gh api -X POST repos/<user>/<task_name>/pages -f "source[branch]=main" -f "source[path]=/"`. 이후 `gh api repos/<user>/<task_name>/pages/builds/latest --jq .status`가 `built`가 될 때까지 확인합니다(길어야 몇 분).
  7. 기존 배포 업데이트: 저장소를 임시 폴더에 clone하고, 파일을 새 버전으로 바꾼 뒤 커밋·푸시합니다. Pages는 자동으로 다시 빌드됩니다.
  8. 임시 폴더를 지웁니다. 배포 주소를 `output/web/<task_name>/README.md`에 적습니다.
- 배포 주소: `https://<user>.github.io/<task_name>/`.
- 다른 저장소에는 푸시하거나 변경하지 않으며, 저장소를 삭제하지 않고, 코드에 비밀 값·토큰·개인정보를 넣지 않습니다.

## 5. 점검

- **배포 전**: 로컬에서 페이지를 열고(Playwright MCP, `file://`이 막히면 작업 폴더에서 `python -m http.server`로 서비스) 1440px과 390px에서 확인합니다: 텍스트 넘침, 겹침, 가로 스크롤이 없는지, 이미지와 라이브러리 파일이 뜨는지, 링크/버튼이 작동하는지, 애니메이션이 실행되는지, 콘솔 오류가 없는지. 문제가 없어질 때까지 고치고 다시 확인합니다.
- **배포 후**: 실제 주소를 열어 페이지, CSS, JS, 이미지, `lib/` 파일이 모두 뜨는지 확인합니다(404는 대개 절대 경로나 파일 이름 대소문자 문제).

## 6. 사용자 보고

사용자에게 한글로 다음을 전달합니다:

- **배포 링크**(`https://<user>.github.io/<task_name>/`)와 저장소 링크(`https://github.com/<user>/<task_name>`)
- 로컬 파일 경로(`output/web/<task_name>/`)
- **설치한 라이브러리**: 이름, 버전, 용도, 라이선스(없으면 "없음")
- 점검 결과와 실패하거나 건너뛰었거나 아직 자리표시로 남은 부분
