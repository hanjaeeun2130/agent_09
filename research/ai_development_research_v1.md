# AI Development — Research Notes

- Topic: AI development (state of artificial intelligence as of 2026)
- Compiled: 2026-10-04
- Method: web search across primary reports (Stanford AI Index 2026, IEA, S&P Global, WEF) and news / analysis coverage. Figures marked *(secondary)* come from coverage of a report rather than the report itself and should be checked against the original before citing.

---

## 1. Technical capability

| Finding | Source |
|---|---|
| AI is not plateauing: on SWE-bench Verified (resolving real GitHub issues), scores rose from about 60% to near the human baseline within one year. | Stanford AI Index 2026 *(secondary)* |
| Frontier models meet or exceed human baselines on PhD-level science questions, competition mathematics and multimodal reasoning. | Stanford AI Index 2026 *(secondary)* |
| "Jagged frontier": models that reach IMO gold-medal level still read analog clocks correctly only ~50.1% of the time. | Stanford AI Index 2026 *(secondary)* |
| The gap between leading labs (OpenAI, Google DeepMind, Anthropic) is single-digit percentage points; a new flagship ships every few weeks. | Industry analysis (Medium, techstrong.ai) |
| The performance gap between top US and Chinese models has effectively closed, with the lead changing hands several times since early 2025. | Stanford AI Index 2026 *(secondary)* |

### Shift to agents
- The center of gravity has moved from text generation to **agentic systems** that plan, use tools and act across software environments (coding agents, workflow automation).
- 2026 trend: from abstract reasoning to **permissioned action** — agents that send messages, update records and book resources, gated by explicit human approval.
- Only frontier models reliably handle large tool sets (50+ tools) and long-horizon tasks, so model capability sets the ceiling for agent capability.

## 2. Industry, investment and cost

| Finding | Source |
|---|---|
| Industry produced over 90% of notable frontier models in 2025. | Stanford AI Index 2026 *(secondary)* |
| Global private AI investment reached about **$252B**; generative AI captured nearly half of private AI funding. | Stanford AI Index 2026 *(secondary)* |
| Frontier model training now costs hundreds of millions of dollars. | Stanford AI Index 2026 *(secondary)* |
| Inference cost at GPT-3.5-level performance fell from $20 to $0.07 per million tokens (Nov 2022 → Oct 2024), a ~280x drop. | Stanford AI Index (2025 edition, widely cited) |
| Spending is shifting from training to inference: inference passed ~55% of AI cloud infrastructure spend in early 2026. | Industry analysis *(secondary)* |
| Capex of five big tech firms (Alphabet, Meta, Microsoft, AWS, Oracle) exceeded $400B in 2025 and is expected to reach roughly $700B in 2026. | J.P. Morgan / IEA *(secondary)* |

## 3. Adoption

- Generative AI reached **53% population adoption within three years** — faster than the PC or the internet.
- Organizational AI adoption rose to **88%**.
- Source: Stanford AI Index 2026 *(secondary)*.

## 4. Energy and infrastructure

- IEA: global data-center electricity use is projected to roughly double, from ~485 TWh (2025) to ~950 TWh by 2030.
- AI-focused data-center demand grew about 50% in 2025.
- IEA estimates about one-fifth of planned data-center investment is at risk of delay from grid bottlenecks — **power is becoming the binding constraint**.

## 5. Labor market

| Finding | Source |
|---|---|
| Net employment impact of AI turned negative globally over the past year: the share of firms reporting AI-related job losses was 5 points higher than the share reporting gains. | S&P Global, *The AI and Labor Landscape 2026* (June 2026) |
| AI mainly costs jobs by **slowing hiring**, not by mass layoffs; AI was the most-cited reason for announced US job cuts each month from March to July 2026. | News coverage *(secondary)* |
| WEF projects 170M jobs created and 92M displaced by 2030 (net +78M); 39% of core skills will change. | WEF Future of Jobs Report 2025 |
| Workers worried about losing their job to AI rose from 28% (2024) to 40% (2026). | Survey coverage *(secondary)* |

## 6. Safety and governance

- Documented AI incidents rose to **362 in 2025**, up from 233 in 2024 (Stanford AI Index 2026, *secondary*).
- Capability and adoption are outpacing the systems meant to evaluate and oversee AI.
- **South Korea — AI Basic Act** (Act on the Development of AI and Establishment of Trust) took effect on **22 January 2026**: transparency duties for generative AI, obligations for "high-impact" AI, extraterritorial reach; MSIT handles enforcement decrees. (Cooley)
- **EU AI Act**: first provisions applied from 2 February 2025, with 2026 as a major compliance year.
- **US**: the federal approach has shifted toward deregulation since the 2025 rescission of the Biden executive order on AI.

## 7. South Korea's AI strategy

- Policy goal: become one of the **top three AI powers (AI G3)** alongside the US and China.
- 2026 government AI budget expanded to about **KRW 9.9 trillion**; plan to secure ~260,000 advanced GPUs by 2030.
- **Sovereign AI Foundation Model project**: consortia led by LG AI Research, Upstage, SK Telecom and Motif Technologies compete; first-stage evaluation completed, second-stage evaluation scheduled for August 2026.

## 8. Key takeaways for the report

1. Capability keeps rising fast, but unevenly (jagged frontier).
2. The industry is shifting from chatbots to agents and from training to inference.
3. Capital and electricity are now the main constraints on scale.
4. Labor effects are becoming visible, mainly through reduced hiring.
5. Regulation is moving into enforcement (Korea, EU) while incidents grow.
6. Korea is pursuing sovereign AI capacity through budget, GPUs and national model projects.

## Sources

- Stanford HAI, AI Index 2026 — Economy chapter: https://hai.stanford.edu/ai-index/2026-ai-index-report/economy
- Burges Salmon, "AI in 2026: what does Stanford's AI Index tell us": https://www.burges-salmon.com/articles/102mpq6/ai-in-2026-what-does-stanfords-ai-index-tell-us/
- Lumenova, Stanford 2026 AI Index findings: https://www.lumenova.ai/blog/stanford-2026-ai-index-report-findings/
- The Deep View, "AI's surge is widening gaps in trust and policy": https://www.thedeepview.com/articles/ai-s-surge-is-widening-gaps-in-trust-and-policy
- Medium, "Frontier AI Model Landscape and Agentic Engineering": https://medium.com/@diyawanna/frontier-ai-model-landscape-and-agentic-engineering-edb20df0967e
- Valentin Zacharias, "Frontier AI in 2026 – Agents with agency": https://valentinzacharias.de/blog/2026-01-agentswithagency
- Cooley, "South Korea's AI Basic Act: Overview and Key Takeaways": https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways
- ai-regulation.com, global AI regulation shifts: https://ai-regulation.com/global-ai-regulation-south-korea-ai-act-trump-eu-ai-act/
- S&P Global, The AI and Labor Landscape 2026: https://www.spglobal.com/content/dam/spglobal/global-assets/en/special-reports/The%20AI%20and%20Labor%20Landscape%202026.pdf
- Goldman Sachs, "How will AI affect the US labor market": https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market
- TechJack Solutions, IEA AI data-center energy demand: https://techjacksolutions.com/ai-brief/iea-ai-data-center-energy-demand-jumped-50-in-2025-projected/
- GreentechLead, AI infrastructure investment: https://greentechlead.com/renewable-energy/ai-infrastructure-investment-hits-697-billion-driving-renewable-energy-grid-and-battery-storage-expansion-55009/amp
- Newsis (Korea AI policy): https://www.newsis.com/view/NISX20260601_0003652049
- NewsTomato (Minister Bae Kyung-hoon interview): https://newstomato.com/ReadNews.aspx?no=1274801
