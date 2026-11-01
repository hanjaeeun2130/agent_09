# 엔트로피 — 한국어 한 페이지 소개 사이트

일반 독자를 위한 한국어 한 페이지 과학 소개 사이트입니다. 주제는 "시간은 왜 앞으로만 흐를까?"이며, 식어 가는 커피 한 잔에서 시작해 미시 상태, 열역학 제2법칙, 단어의 역사, 정보 엔트로피, 생명, 블랙홀과 열죽음을 거쳐 흔한 오해·핵심 숫자·짧은 퀴즈로 마무리합니다.

- **배포 사이트:** https://hanjaeeun2130.github.io/entropy/
- **저장소:** https://github.com/hanjaeeun2130/entropy
- 순수 HTML / CSS / JavaScript로 제작(프레임워크·빌드 과정 없음).

## 섹션

1. 히어로 — 입자 확산 캔버스와 엔트로피(퍼짐) 미터, 다시 모으기 / 일시정지 버튼
2. 엔트로피란? — 거시 상태와 미시 상태, 엔트로피를 보는 세 가지 관점, "무질서는 비유일 뿐" 메모
3. 확률 놀이 — 동전 미시 상태 데모(동전 4–100개, 이항 분포 히스토그램), S = k log W
4. 제2법칙 — 흐림 → 선명 문장 연출, 뜨거운/차가운 블록 데모
5. 역사 — 카르노(1824) → 클라우지우스(1865) → 볼츠만(1877) → 깁스(1902) → 섀넌(1948) 타임라인, 폰 노이만 일화는 간접 전언으로 표시
6. 정보 엔트로피 — 기울어진 동전 비트 슬라이더, 영어 글자당 비트, 압축
7. 생명·시간·우주 — 슈뢰딩거, 시간의 화살, 블랙홀 엔트로피, 로그 눈금 우주 연대기
8. 오해와 숫자 — 오해 6가지 뒤집기 카드, 숫자 카드 8개, 3문제 퀴즈

근거가 약한 주장은 페이지에서 "전해진다 / 추정"으로 표시했습니다: 폰 노이만의 말, 펜로즈의 10^(10^123)분의 1, 우주 엔트로피 약 10^104 k.

## 접근성과 모션

- 시맨틱 랜드마크, `h1` 1개, 본문 바로가기 링크, 보이는 포커스 스타일, 키보드로 쓸 수 있는 버튼과 메뉴.
- `prefers-reduced-motion`: 등장·회전 애니메이션을 끄고, 입자 데모는 자동 재생하지 않습니다(버튼으로 시작 가능).
- JavaScript가 없어도 모든 글이 보입니다: 등장 효과는 JS가 `js` 클래스를 붙일 때만 적용되고, 뒤집기 카드는 앞뒤가 모두 보이며, 퀴즈 정답도 표시됩니다.

## 라이브러리

없음. 모든 효과(캔버스 입자, 스크롤 등장, 데모)는 순수 JavaScript입니다. 글꼴은 Google Fonts에서 불러옵니다: Noto Sans KR, JetBrains Mono (SIL Open Font License 1.1).

## 이미지

모든 이미지는 위키미디어 공용에서 가져와 웹용으로 크기를 줄이고 압축했으며, 아래 라이선스에 따라 사용합니다.

| 파일 | 내용 | 작가 | 라이선스 | 출처 |
|---|---|---|---|---|
| `images/coffee.jpg` | 커피 한 잔 | Julius Schorzman | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:A_small_cup_of_coffee.JPG |
| `images/carnot.jpg` | 사디 카르노 초상 | Louis-Léopold Boilly | 퍼블릭 도메인 | https://commons.wikimedia.org/wiki/File:Sadi_Carnot.jpeg |
| `images/clausius.jpg` | 루돌프 클라우지우스 | 작자 미상 | 퍼블릭 도메인 | https://commons.wikimedia.org/wiki/File:Clausius.jpg |
| `images/boltzmann_tomb.jpg` | 빈 중앙묘지의 볼츠만 묘비 | Daderot | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Zentralfriedhof_Vienna_-_Boltzmann.JPG |
| `images/gibbs.jpg` | 조사이아 윌러드 깁스 | 작자 미상 | 퍼블릭 도메인 | https://commons.wikimedia.org/wiki/File:Josiah_Willard_Gibbs_-from_MMS-.jpg |
| `images/shannon.jpg` | 클로드 섀넌 | Konrad Jacobs | CC BY-SA 2.0 de | https://commons.wikimedia.org/wiki/File:ClaudeShannon_MFO3807.jpg |
| `images/schrodinger.jpg` | 에르빈 슈뢰딩거(1933) | Nobel Foundation | 퍼블릭 도메인 | https://commons.wikimedia.org/wiki/File:Erwin_Schr%C3%B6dinger_(1933).jpg |
| `images/black_hole_m87.jpg` | M87* 블랙홀 이미지 | Event Horizon Telescope | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Black_hole_-_Messier_87_crop_max_res.jpg |
| `images/hubble_udf.jpg` | 허블 울트라 딥 필드(섹션 배경) | NASA·ESA (편집: Noodle snacks) | 퍼블릭 도메인 | https://commons.wikimedia.org/wiki/File:Hubble_ultra_deep_field_high_rez_edit1.jpg |
| `images/favicon.svg` | 사이트 아이콘 | 이 페이지용으로 제작 | — | — |

이미지는 크기만 조정했으며, CC BY-SA 이미지는 원래 라이선스를 유지합니다.

## 내용 출처

내용은 `output/research/entropy/entropy_research.md`를 바탕으로 합니다(엔트로피, 제2법칙, 볼츠만, 정보 엔트로피, 열죽음, 블랙홀 열역학에 관한 위키백과 문서; F. L. Lambert 2002; NIST CODATA; Egan & Lineweaver 2010; 펜로즈에 관한 Goldstein 2001; Tribus & McIrvine 1971). 디자인 패턴은 `references/web/entropy/entropy_reference.md`를 따랐으며, 레퍼런스 사이트의 로고·글·이미지·코드는 사용하지 않았습니다.

## 구조

```
entropy/
├── index.html
├── css/style.css
├── js/main.js
├── images/
├── .nojekyll
└── README.md
```
