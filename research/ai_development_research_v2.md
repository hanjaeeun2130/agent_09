# AI Development — Research Notes

- Topic: AI development (state of artificial intelligence as of 2026)
- Compiled: 2026-10-04
- Method: web search across primary reports (Stanford AI Index 2026, Gartner, IEA, S&P Global, WEF, FDA) and news / analysis coverage. Figures marked *(secondary)* come from coverage of a report rather than the report itself and should be checked against the original before citing.

---

## 1. Historical background

| Period | Milestone |
|---|---|
| 1950–1956 | Turing proposes the "imitation game" (1950); the term "artificial intelligence" is coined at the Dartmouth workshop (1956). |
| 1960s–1980s | Symbolic, rule-based AI and expert systems; two "AI winters" follow when expectations outrun results. |
| 1997 | IBM Deep Blue defeats world chess champion Garry Kasparov. |
| 2012 | AlexNet wins ImageNet, starting the deep-learning era (GPUs + big data + neural networks). |
| 2016 | DeepMind AlphaGo defeats Lee Sedol in Seoul — a turning point in public awareness in Korea. |
| 2017 | The Transformer architecture ("Attention Is All You Need") is published; it underpins today's large language models. |
| 2022 | ChatGPT launches (November) and generative AI goes mainstream. |
| 2024–2025 | Reasoning models, multimodal models and the first wave of AI agents; Nobel Prizes in Physics and Chemistry (2024) recognize AI-related work. |
| 2026 | Agents move into production, AI regulation enters enforcement, and electricity becomes a scaling constraint. |

## 2. Technical capability

| Finding | Source |
|---|---|
| On SWE-bench Verified (resolving real GitHub issues), scores rose from about 60% to near 100% within one year. | Stanford AI Index 2026 *(secondary)* |
| Frontier models meet or exceed human baselines on PhD-level science questions, competition mathematics and multimodal reasoning. | Stanford AI Index 2026 *(secondary)* |
| "Jagged frontier": models that reach IMO gold-medal level still read analog clocks correctly only ~50.1% of the time. | Stanford AI Index 2026 *(secondary)* |
| The performance gap between top US and Chinese models has effectively closed, with the lead changing hands several times since early 2025. China leads in publication volume, citations and patents; the US keeps more top-tier models and higher-impact patents. | Stanford AI Index 2026 *(secondary)* |
| Leading labs are tightly bunched on public leaderboards, and new flagship models ship every few weeks. | Industry analysis *(secondary)* |
| Open-weight models small enough to run on a consumer laptop are now competitive for many tasks, spreading capability beyond cloud APIs. | Industry analysis *(secondary)* |

### Shift to agents
- The center of gravity has moved from chatbots that answer to **agents that act**: they plan, call tools and carry out whole workflows (coding, customer service, back-office automation).
- 2026 trend: **permissioned action** — agents send messages, update records and book resources, gated by explicit human approval.
- Gartner expects **40% of enterprise applications** to include task-specific AI agents by the end of 2026, up from under 5% in 2025 *(secondary)*.
- About 62% of organizations at least experiment with agents, but fewer than 25% have scaled them to production *(secondary)*. Accuracy, explainability and security are the top concerns.
- AI agent market: about $7.8B (2025) → projected $52.6B (2030), CAGR ~46% *(secondary)*.

## 3. Industry, investment and cost

| Finding | Source |
|---|---|
| Worldwide AI spending is forecast at about **$2.5 trillion in 2026**, up ~44% year over year. | Gartner *(secondary)* |
| Global data-center spending is expected to pass **$650B** in 2026, up from about $500B in 2025. | Gartner *(secondary)* |
| Big tech capex on AI infrastructure exceeded $400B in 2025 and could rise another ~75% in 2026. | IEA / industry coverage *(secondary)* |
| Industry produced over 90% of notable frontier models in 2025; frontier training runs cost hundreds of millions of dollars. | Stanford AI Index 2026 *(secondary)* |
| Inference cost at GPT-3.5-level performance fell from $20 to $0.07 per million tokens (Nov 2022 → Oct 2024), a ~280x drop. | Stanford AI Index 2025 |
| Spending is shifting from training to inference as usage grows. | Industry analysis *(secondary)* |

## 4. Adoption

- Generative AI reached **53% population adoption within three years** — faster than the PC or the internet.
- Organizational AI adoption rose to **88%**.
- Source: Stanford AI Index 2026 *(secondary)*.

## 5. Science and healthcare

- The FDA has authorized **over 1,250 AI-enabled medical devices**; 2025 was the record year, and about 75% of them are in radiology *(secondary)*.
- In August 2026 the FDA issued a discussion paper on a risk-proportionate approach to **generative-AI medical devices** *(secondary)*.
- A May 2026 Harvard Medical School / Beth Israel Deaconess study found a reasoning model matched or beat physicians' diagnoses on 76 real emergency cases *(secondary)*.
- AI drug discovery is producing clinical candidates (e.g. Insilico Medicine's Phase IIa results), and agentic platforms now automate multi-step discovery workflows *(secondary)*.
- Healthcare AI market projected at about **$52B in 2026** *(secondary)*.

## 6. Energy and infrastructure

- IEA: data-center electricity demand grew **17% in 2025**, and AI-focused data centers grew about **50%**, versus ~3% for global electricity demand.
- Global data-center electricity use is projected to roughly double from ~485 TWh (2025) to ~945 TWh by 2030; AI-specific demand is expected to roughly triple.
- Data centers used about 1.5% of global electricity in 2024.
- Grid connections and power supply are becoming the **binding constraint** on AI scaling.

## 7. Labor market

| Finding | Source |
|---|---|
| Net employment impact of AI turned negative globally over the past year: the share of firms reporting AI-related job losses was 5 points higher than the share reporting gains. | S&P Global, *The AI and Labor Landscape 2026* (June 2026) |
| AI mainly costs jobs by **slowing hiring**, not by mass layoffs; US employers cited AI in ~116,000 announced job cuts from January to August 2026. | News coverage *(secondary)* |
| About 26.1M US workers are both highly exposed to AI and poorly placed to adapt; 86% of them are women. | News coverage *(secondary)* |
| WEF projects 170M jobs created and 92M displaced by 2030 (net +78M); 39% of core skills will change. | WEF Future of Jobs Report 2025 |
| Workers worried about losing their job to AI rose from 28% (2024) to 40% (2026). | Survey coverage *(secondary)* |

## 8. Safety and governance

- Documented AI incidents rose to **362 in 2025**, up from 233 in 2024 (Stanford AI Index 2026, *secondary*).
- Capability and adoption are outpacing the institutions meant to evaluate and oversee AI.
- **South Korea — AI Basic Act** (Act on the Development of AI and Establishment of Trust) took effect on **22 January 2026**, making Korea the second jurisdiction after the EU with a comprehensive AI law: transparency duties for generative AI, obligations for "high-impact" AI, extraterritorial reach; MSIT drafts enforcement decrees, with a grace period of at least one year for fines. (Cooley)
- **EU AI Act**: prohibited practices applied from 2 Feb 2025, general-purpose AI obligations from 2 Aug 2025, and most remaining provisions (incl. Article 50 transparency) from 2 Aug 2026; phased in through 2027.
- **US**: federal policy has leaned toward deregulation since the 2025 rescission of the previous executive order on AI.

## 9. South Korea's AI strategy

- Policy goal: become one of the **top three AI powers (AI G3)** alongside the US and China.
- 2026 government AI budget expanded to about **KRW 9.9 trillion**; plan to secure ~260,000 advanced GPUs by 2030 *(secondary)*.
- **Sovereign AI Foundation Model project**: five teams were selected in August 2025 (Naver Cloud, Upstage, SK Telecom, NC AI, LG AI Research) for a staged elimination contest through 2027; after the first evaluation the field was reshuffled into four consortia, with a further evaluation in August 2026 *(secondary)*.
- The government is pursuing a two-track approach (public-use models plus a frontier model needing more than KRW 3.5 trillion) and linking national models to defense ("Defense AX") *(secondary)*.

## 10. Key takeaways for the report

1. Capability keeps rising fast, but unevenly (jagged frontier).
2. The industry is shifting from chatbots to agents and from training to inference.
3. Capital and electricity are now the main constraints on scale.
4. AI is producing concrete value in science and healthcare.
5. Labor effects are becoming visible, mainly through reduced hiring.
6. Regulation is moving into enforcement (Korea, EU) while incidents grow.
7. Korea is pursuing sovereign AI capacity through budget, GPUs and national model projects.

## Sources

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
- Newsis (Korea AI policy): https://www.newsis.com/view/NISX20260601_0003652049
