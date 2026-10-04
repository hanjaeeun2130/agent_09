# AI 발전 — 자료 조사 정리본

- 주제: AI 발전 (2026년 기준 인공지능 현황)
- 작성일: 2026-10-04
- 방법: 주요 보고서(Stanford AI Index 2026, Gartner, IEA, S&P Global, WEF, FDA)와 뉴스·분석 기사 웹 검색. *(2차)* 표시는 원 보고서가 아니라 보고서를 다룬 기사에서 가져온 수치이므로, 인용 전에 원문과 대조가 필요합니다.

---

## 1. 역사적 배경

| 시기 | 주요 사건 |
|---|---|
| 1950–1956 | 튜링이 "모방 게임"을 제안(1950), 다트머스 워크숍에서 "인공지능"이라는 용어 탄생(1956). |
| 1960–1980년대 | 기호주의·규칙 기반 AI와 전문가 시스템. 기대가 성과를 앞서며 두 차례 "AI 겨울"을 겪음. |
| 1997 | IBM 딥블루가 체스 세계 챔피언 가리 카스파로프에게 승리. |
| 2012 | AlexNet이 ImageNet 대회에서 우승하며 딥러닝 시대 개막(GPU + 빅데이터 + 신경망). |
| 2016 | 딥마인드 알파고가 서울에서 이세돌 9단에게 승리 — 한국 사회의 AI 인식 전환점. |
| 2017 | 트랜스포머 구조("Attention Is All You Need") 발표, 오늘날 대규모 언어모델의 기반이 됨. |
| 2022 | ChatGPT 출시(11월)로 생성형 AI가 대중화. |
| 2024–2025 | 추론 모델·멀티모달 모델·1세대 AI 에이전트 등장. 2024년 노벨 물리학상·화학상이 AI 관련 연구에 수여됨. |
| 2026 | 에이전트의 실서비스 도입, AI 규제의 본격 시행, 전력이 확장의 제약 요인으로 부상. |

## 2. 기술 역량

| 내용 | 출처 |
|---|---|
| SWE-bench Verified(실제 GitHub 이슈 해결)에서 점수가 1년 만에 약 60%에서 100% 가까이로 상승. | Stanford AI Index 2026 *(2차)* |
| 프런티어 모델이 박사급 과학 문제, 경시대회 수학, 멀티모달 추론에서 인간 기준선과 같거나 이를 넘어섬. | Stanford AI Index 2026 *(2차)* |
| "들쭉날쭉한 프런티어": 국제수학올림피아드 금메달 수준의 모델도 아날로그 시계는 약 50.1%만 정확히 읽음. | Stanford AI Index 2026 *(2차)* |
| 미국·중국 최상위 모델 간 성능 격차는 사실상 사라졌으며, 2025년 초 이후 선두가 여러 차례 바뀜. 중국은 논문 수·인용·특허에서 앞서고, 미국은 최상위 모델 수와 고영향 특허에서 우위. | Stanford AI Index 2026 *(2차)* |
| 선도 연구소들이 공개 리더보드에서 근소한 차이로 밀집해 있고, 새 플래그십 모델이 몇 주 간격으로 출시됨. | 업계 분석 *(2차)* |
| 일반 노트북에서 돌아가는 오픈 웨이트 모델이 많은 작업에서 경쟁력을 갖추며, 역량이 클라우드 API 밖으로 확산됨. | 업계 분석 *(2차)* |

### 에이전트로의 전환
- 무게중심이 "답하는 챗봇"에서 **"행동하는 에이전트"**로 이동: 계획을 세우고 도구를 호출해 업무 흐름 전체를 수행(코딩, 고객 응대, 백오피스 자동화).
- 2026년 흐름: **허가 기반 행동** — 에이전트가 메시지 전송, 기록 수정, 자원 예약을 하되 사람의 명시적 승인을 거침.
- Gartner는 2026년 말까지 **기업용 애플리케이션의 40%**가 작업 특화 AI 에이전트를 포함할 것으로 전망(2025년 5% 미만) *(2차)*.
- 조직의 약 62%가 에이전트를 최소한 실험 중이지만, 실제 운영 규모로 확대한 곳은 25% 미만 *(2차)*. 정확성·설명 가능성·보안이 주요 우려.
- AI 에이전트 시장: 약 78억 달러(2025) → 526억 달러(2030) 전망, 연평균 성장률 약 46% *(2차)*.

## 3. 산업·투자·비용

| 내용 | 출처 |
|---|---|
| 2026년 전 세계 AI 지출은 약 **2.5조 달러**로 전년 대비 약 44% 증가 전망. | Gartner *(2차)* |
| 2026년 전 세계 데이터센터 지출은 **6,500억 달러**를 넘을 전망(2025년 약 5,000억 달러). | Gartner *(2차)* |
| 빅테크의 AI 인프라 설비투자는 2025년 4,000억 달러를 넘었고, 2026년에 약 75% 더 늘어날 수 있음. | IEA / 업계 보도 *(2차)* |
| 2025년 주요 프런티어 모델의 90% 이상을 산업계가 개발했으며, 프런티어 모델 학습 비용은 수억 달러 수준. | Stanford AI Index 2026 *(2차)* |
| GPT-3.5 수준 성능의 추론 비용이 백만 토큰당 20달러에서 0.07달러로 하락(2022년 11월 → 2024년 10월), 약 280배 감소. | Stanford AI Index 2025 |
| 사용량 증가에 따라 지출의 중심이 학습에서 추론으로 이동 중. | 업계 분석 *(2차)* |

## 4. 도입 현황

- 생성형 AI는 **3년 만에 인구 보급률 53%**에 도달 — PC나 인터넷보다 빠름.
- 조직의 AI 도입률은 **88%**로 상승.
- 출처: Stanford AI Index 2026 *(2차)*.

## 5. 과학·의료

- FDA는 **1,250개 이상의 AI 기반 의료기기**를 승인했으며, 2025년이 역대 최다 승인 연도였고 약 75%가 영상의학 분야 *(2차)*.
- 2026년 8월 FDA는 **생성형 AI 의료기기**에 대한 위험 비례적 규제 방안 토론 문서를 발표 *(2차)*.
- 2026년 5월 하버드 의대·베스 이스라엘 디코니스 병원 연구에서 추론 모델이 실제 응급 환자 76명의 진단에서 의사와 같거나 더 정확한 결과를 보임 *(2차)*.
- AI 신약 개발이 실제 임상 후보물질을 내고 있으며(예: 인실리코 메디슨의 임상 2a상 결과), 에이전트형 플랫폼이 다단계 연구 과정을 자동화 *(2차)*.
- 2026년 헬스케어 AI 시장은 약 **520억 달러** 전망 *(2차)*.

## 6. 에너지와 인프라

- IEA: 2025년 데이터센터 전력 수요는 **17%** 증가, AI 중심 데이터센터는 약 **50%** 증가(전 세계 전력 수요 증가율 약 3%).
- 전 세계 데이터센터 전력 사용량은 약 485TWh(2025)에서 2030년 약 945TWh로 두 배 가까이 늘고, AI 관련 수요는 약 세 배로 증가할 전망.
- 2024년 데이터센터는 전 세계 전력 소비의 약 1.5%를 차지.
- 전력망 연결과 전력 공급이 AI 확장의 **핵심 제약 요인**으로 부상.

## 7. 노동시장

| 내용 | 출처 |
|---|---|
| 지난 1년간 AI의 순고용 효과가 전 세계적으로 마이너스로 전환: AI로 일자리가 줄었다는 기업 비율이 늘었다는 기업 비율보다 5%p 높음. | S&P Global, *The AI and Labor Landscape 2026* (2026년 6월) |
| AI는 대규모 해고보다 **채용 둔화**를 통해 일자리에 영향을 줌. 2026년 1~8월 미국 기업들이 AI를 이유로 발표한 감원은 약 11만 6천 건. | 언론 보도 *(2차)* |
| 미국 근로자 약 2,610만 명이 AI 노출도가 높으면서 적응 여건은 취약하며, 이 중 86%가 여성. | 언론 보도 *(2차)* |
| WEF는 2030년까지 일자리 1억 7,000만 개 창출, 9,200만 개 대체(순증 7,800만 개), 핵심 역량의 39%가 바뀔 것으로 전망. | WEF Future of Jobs Report 2025 |
| AI로 일자리를 잃을까 걱정하는 근로자 비율이 28%(2024)에서 40%(2026)로 증가. | 설문 보도 *(2차)* |

## 8. 안전과 거버넌스

- 기록된 AI 사고는 2024년 233건에서 **2025년 362건**으로 증가(Stanford AI Index 2026, *2차*).
- 역량과 도입 속도가 AI를 평가·감독할 제도의 속도를 앞지르고 있음.
- **한국 — AI 기본법**(인공지능 발전과 신뢰 기반 조성 등에 관한 기본법)이 **2026년 1월 22일** 시행되어, 한국은 EU에 이어 두 번째로 포괄적 AI 법을 갖춘 국가가 됨: 생성형 AI 투명성 의무, "고영향" AI 의무, 역외 적용. 과기정통부가 시행령을 마련하며, 과태료에는 최소 1년의 유예 기간 적용. (Cooley)
- **EU AI Act**: 금지 행위 2025년 2월 2일, 범용 AI 의무 2025년 8월 2일, 제50조 투명성 등 나머지 대부분 조항 2026년 8월 2일부터 적용. 2027년까지 단계적 시행.
- **미국**: 2025년 이전 행정부의 AI 행정명령이 폐지된 이후 연방 정책은 규제 완화 쪽으로 기울어짐.

## 9. 한국의 AI 전략

- 정책 목표: 미국·중국과 함께 **AI 3대 강국(AI G3)** 진입.
- 2026년 정부 AI 예산 약 **9.9조 원**으로 확대, 2030년까지 첨단 GPU 약 26만 장 확보 계획 *(2차)*.
- **독자 AI 파운데이션 모델 프로젝트**: 2025년 8월 5개 팀(네이버클라우드, 업스테이지, SK텔레콤, NC AI, LG AI연구원)을 선정해 2027년까지 단계별 경쟁. 1차 평가 이후 4개 컨소시엄으로 재편, 2026년 8월 추가 평가 *(2차)*.
- 정부는 공공용 모델과 3.5조 원 이상이 필요한 프런티어 모델을 함께 추진하는 투 트랙 전략을 펴고, 국가 모델을 국방("국방 AX")과 연계 중 *(2차)*.

## 10. 보고서용 핵심 정리

1. 역량은 빠르게 오르고 있지만 고르지 않다(들쭉날쭉한 프런티어).
2. 산업은 챗봇에서 에이전트로, 학습에서 추론으로 이동 중이다.
3. 자본과 전력이 확장의 주된 제약이 되었다.
4. AI는 과학·의료에서 구체적인 가치를 만들어 내고 있다.
5. 노동시장 영향이 주로 채용 감소를 통해 드러나고 있다.
6. 사고가 늘어나는 가운데 규제는 시행 단계로 들어섰다(한국, EU).
7. 한국은 예산·GPU·국가 모델 프로젝트로 독자 AI 역량 확보를 추진 중이다.

## 출처

- Stanford HAI, AI Index 2026: https://hai.stanford.edu/ai-index/2026-ai-index-report/economy
- Burges Salmon, "AI in 2026: what does Stanford's AI Index tell us": https://www.burges-salmon.com/articles/102mpq6/ai-in-2026-what-does-stanfords-ai-index-tell-us/
- Lumenova, Stanford 2026 AI Index findings: https://www.lumenova.ai/blog/stanford-2026-ai-index-report-findings/
- The Deep View, "AI's surge is widening gaps in trust and policy": https://www.thedeepview.com/articles/ai-s-surge-is-widening-gaps-in-trust-and-policy
- G2, Enterprise AI Agents Report 2026: https://learn.g2.com/enterprise-ai-agents-report
- CMARIX, AI agents statistics: https://www.cmarix.com/blog/ai-agents-statistics-trends/
- IEEE ComSoc Tech Blog, Gartner AI spending forecast: https://techblog.comsoc.org/2025/09/17/gartner-ai-spending-to-top-2-trillion-in-2026/
- W.Media, Gartner data-center spending: https://w.media/total-data-center-spending-to-surpass-us-650-billion-in-2026-gartner/
- Enlit, IEA data-centre electricity findings: https://www.enlit.world/library/ai-and-data-centre-electricity-use-continue-to-surge-iea-finds
- W.Media, IEA data-center power demand: https://w.media/data-center-power-demand-will-double-by-2030-iea/
- S&P Global, The AI and Labor Landscape 2026: https://www.spglobal.com/content/dam/spglobal/global-assets/en/special-reports/The%20AI%20and%20Labor%20Landscape%202026.pdf
- Goldman Sachs, "How will AI affect the US labor market": https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market
- Chambers, Healthcare AI 2026 (USA): https://practiceguides.chambers.com/practice-guides/healthcare-ai-2026/usa
- Decibio, AI Newsletter Q1 2026: https://decibio.com/insights/ai-newsletter-q1-2026-round-up
- Cooley, "South Korea's AI Basic Act: Overview and Key Takeaways": https://cdp.cooley.com/south-koreas-ai-basic-act-overview-and-key-takeaways/
- EU AI Act Newsletter #68: https://artificialintelligenceact.substack.com/p/the-eu-ai-act-newsletter-68-new-year
- Mobile World Live, SKT consortium in national AI project: https://www.mobileworldlive.com/ai-cloud/skt-consortium-advances-in-national-ai-project/
- Hancom, "What Is Sovereign AI?": https://blog.hancom.com/en/?p=737
- Newsis (한국 AI 정책): https://www.newsis.com/view/NISX20260601_0003652049
