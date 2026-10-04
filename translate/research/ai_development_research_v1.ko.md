# AI 발전 — 자료 조사 정리본

- 주제: AI 발전 (2026년 기준 인공지능 현황)
- 작성일: 2026-10-04
- 방법: 주요 보고서(Stanford AI Index 2026, IEA, S&P Global, WEF)와 뉴스·분석 기사 웹 검색. *(2차)* 표시는 원 보고서가 아니라 보고서를 다룬 기사에서 가져온 수치이므로, 인용 전에 원문과 대조가 필요합니다.

---

## 1. 기술 역량

| 내용 | 출처 |
|---|---|
| AI는 정체되지 않았다: SWE-bench Verified(실제 GitHub 이슈 해결)에서 점수가 1년 만에 약 60%에서 인간 기준선 가까이로 상승. | Stanford AI Index 2026 *(2차)* |
| 프런티어 모델이 박사급 과학 문제, 경시대회 수학, 멀티모달 추론에서 인간 기준선과 같거나 이를 넘어섬. | Stanford AI Index 2026 *(2차)* |
| "들쭉날쭉한 프런티어": 국제수학올림피아드 금메달 수준의 모델도 아날로그 시계는 약 50.1%만 정확히 읽음. | Stanford AI Index 2026 *(2차)* |
| 선도 연구소(OpenAI, Google DeepMind, Anthropic) 간 격차는 한 자릿수 퍼센트포인트이며, 새 플래그십 모델이 몇 주마다 출시됨. | 업계 분석 (Medium, techstrong.ai) |
| 미국·중국 최상위 모델 간 성능 격차는 사실상 사라졌으며, 2025년 초 이후 선두가 여러 차례 바뀜. | Stanford AI Index 2026 *(2차)* |

### 에이전트로의 전환
- 무게중심이 텍스트 생성에서 계획을 세우고 도구를 사용하며 소프트웨어 환경 전반에서 행동하는 **에이전트형 시스템**(코딩 에이전트, 업무 흐름 자동화)으로 이동.
- 2026년 흐름: 추상적 추론에서 **허가 기반 행동**으로 — 에이전트가 메시지 전송, 기록 수정, 자원 예약을 하되 사람의 명시적 승인을 거침.
- 대규모 도구 집합(50개 이상)과 장기 과제를 안정적으로 다루는 것은 프런티어 모델뿐이므로, 모델 역량이 에이전트 역량의 상한을 결정.

## 2. 산업·투자·비용

| 내용 | 출처 |
|---|---|
| 2025년 주요 프런티어 모델의 90% 이상을 산업계가 개발. | Stanford AI Index 2026 *(2차)* |
| 전 세계 민간 AI 투자는 약 **2,520억 달러**에 도달했으며, 생성형 AI가 민간 AI 투자의 거의 절반을 차지. | Stanford AI Index 2026 *(2차)* |
| 프런티어 모델 학습 비용은 이제 수억 달러 수준. | Stanford AI Index 2026 *(2차)* |
| GPT-3.5 수준 성능의 추론 비용이 백만 토큰당 20달러에서 0.07달러로 하락(2022년 11월 → 2024년 10월), 약 280배 감소. | Stanford AI Index (2025년판, 널리 인용됨) |
| 지출이 학습에서 추론으로 이동: 2026년 초 추론이 AI 클라우드 인프라 지출의 약 55%를 넘어섬. | 업계 분석 *(2차)* |
| 5대 빅테크(Alphabet, Meta, Microsoft, AWS, Oracle)의 설비투자는 2025년 4,000억 달러를 넘었고, 2026년에는 약 7,000억 달러에 이를 전망. | J.P. Morgan / IEA *(2차)* |

## 3. 도입 현황

- 생성형 AI는 **3년 만에 인구 보급률 53%**에 도달 — PC나 인터넷보다 빠름.
- 조직의 AI 도입률은 **88%**로 상승.
- 출처: Stanford AI Index 2026 *(2차)*.

## 4. 에너지와 인프라

- IEA: 전 세계 데이터센터 전력 사용량은 약 485TWh(2025)에서 2030년 약 950TWh로 두 배 가까이 늘어날 전망.
- AI 중심 데이터센터 수요는 2025년에 약 50% 증가.
- IEA는 계획된 데이터센터 투자의 약 5분의 1이 전력망 병목으로 지연될 위험이 있다고 추정 — **전력이 핵심 제약 요인으로 부상**.

## 5. 노동시장

| 내용 | 출처 |
|---|---|
| 지난 1년간 AI의 순고용 효과가 전 세계적으로 마이너스로 전환: AI로 일자리가 줄었다는 기업 비율이 늘었다는 기업 비율보다 5%p 높음. | S&P Global, *The AI and Labor Landscape 2026* (2026년 6월) |
| AI는 대규모 해고보다 **채용 둔화**를 통해 일자리에 영향을 줌. 2026년 3~7월 매달 AI가 미국 감원 발표의 최다 사유로 꼽힘. | 언론 보도 *(2차)* |
| WEF는 2030년까지 일자리 1억 7,000만 개 창출, 9,200만 개 대체(순증 7,800만 개), 핵심 역량의 39%가 바뀔 것으로 전망. | WEF Future of Jobs Report 2025 |
| AI로 일자리를 잃을까 걱정하는 근로자 비율이 28%(2024)에서 40%(2026)로 증가. | 설문 보도 *(2차)* |

## 6. 안전과 거버넌스

- 기록된 AI 사고는 2024년 233건에서 **2025년 362건**으로 증가(Stanford AI Index 2026, *2차*).
- 역량과 도입 속도가 AI를 평가·감독할 체계의 속도를 앞지르고 있음.
- **한국 — AI 기본법**(인공지능 발전과 신뢰 기반 조성 등에 관한 기본법)이 **2026년 1월 22일** 시행: 생성형 AI 투명성 의무, "고영향" AI 의무, 역외 적용. 과기정통부가 시행령을 담당. (Cooley)
- **EU AI Act**: 2025년 2월 2일부터 첫 조항 적용, 2026년은 주요 준수 연도.
- **미국**: 2025년 바이든 행정부의 AI 행정명령 폐지 이후 연방 차원의 접근이 규제 완화 쪽으로 이동.

## 7. 한국의 AI 전략

- 정책 목표: 미국·중국과 함께 **AI 3대 강국(AI G3)** 진입.
- 2026년 정부 AI 예산 약 **9.9조 원**으로 확대, 2030년까지 첨단 GPU 약 26만 장 확보 계획.
- **독자 AI 파운데이션 모델 프로젝트**: LG AI연구원, 업스테이지, SK텔레콤, 모티프테크놀로지스가 이끄는 컨소시엄이 경쟁. 1차 평가 완료, 2차 평가는 2026년 8월 예정.

## 8. 보고서용 핵심 정리

1. 역량은 빠르게 오르고 있지만 고르지 않다(들쭉날쭉한 프런티어).
2. 산업은 챗봇에서 에이전트로, 학습에서 추론으로 이동 중이다.
3. 자본과 전력이 확장의 주된 제약이 되었다.
4. 노동시장 영향이 주로 채용 감소를 통해 드러나고 있다.
5. 사고가 늘어나는 가운데 규제는 시행 단계로 들어섰다(한국, EU).
6. 한국은 예산·GPU·국가 모델 프로젝트로 독자 AI 역량 확보를 추진 중이다.

## 출처

- Stanford HAI, AI Index 2026 — Economy 장: https://hai.stanford.edu/ai-index/2026-ai-index-report/economy
- Burges Salmon, "AI in 2026: what does Stanford's AI Index tell us": https://www.burges-salmon.com/articles/102mpq6/ai-in-2026-what-does-stanfords-ai-index-tell-us/
- Lumenova, Stanford 2026 AI Index findings: https://www.lumenova.ai/blog/stanford-2026-ai-index-report-findings/
- The Deep View, "AI's surge is widening gaps in trust and policy": https://www.thedeepview.com/articles/ai-s-surge-is-widening-gaps-in-trust-and-policy
- Medium, "Frontier AI Model Landscape and Agentic Engineering": https://medium.com/@diyawanna/frontier-ai-model-landscape-and-agentic-engineering-edb20df0967e
- Valentin Zacharias, "Frontier AI in 2026 – Agents with agency": https://valentinzacharias.de/blog/2026-01-agentswithagency
- Cooley, "South Korea's AI Basic Act: Overview and Key Takeaways": https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways
- ai-regulation.com, 세계 AI 규제 변화: https://ai-regulation.com/global-ai-regulation-south-korea-ai-act-trump-eu-ai-act/
- S&P Global, The AI and Labor Landscape 2026: https://www.spglobal.com/content/dam/spglobal/global-assets/en/special-reports/The%20AI%20and%20Labor%20Landscape%202026.pdf
- Goldman Sachs, "How will AI affect the US labor market": https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market
- TechJack Solutions, IEA AI 데이터센터 에너지 수요: https://techjacksolutions.com/ai-brief/iea-ai-data-center-energy-demand-jumped-50-in-2025-projected/
- GreentechLead, AI 인프라 투자: https://greentechlead.com/renewable-energy/ai-infrastructure-investment-hits-697-billion-driving-renewable-energy-grid-and-battery-storage-expansion-55009/amp
- 뉴시스 (한국 AI 정책): https://www.newsis.com/view/NISX20260601_0003652049
- 뉴스토마토 (배경훈 장관 인터뷰): https://newstomato.com/ReadNews.aspx?no=1274801
