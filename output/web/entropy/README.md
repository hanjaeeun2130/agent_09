# Entropy (엔트로피) — Korean one-page explainer

A Korean, general-audience one-page science explainer about entropy: "시간은 왜 앞으로만 흐를까?" (Why does time only go forward?). It walks from a cooling cup of coffee to microstates, the second law, the history of the word, information entropy, life, black holes and heat death, and ends with myths, key numbers and a short quiz.

- **Live site:** https://hanjaeeun2130.github.io/entropy/
- **Repository:** https://github.com/hanjaeeun2130/entropy
- Built with plain HTML / CSS / JavaScript (no framework, no build step).

## Sections

1. Hero — particle diffusion canvas with an entropy (spread) meter, reset / pause buttons
2. 엔트로피란? — macrostates vs microstates, three ways to see entropy, "disorder is only a metaphor" note
3. 확률 놀이 — coin microstate demo (4–100 coins, binomial histogram), S = k log W
4. 제2법칙 — dim → bright statements, hot / cold blocks demo
5. 역사 — timeline Carnot (1824) → Clausius (1865) → Boltzmann (1877) → Gibbs (1902) → Shannon (1948), von Neumann anecdote marked as second-hand
6. 정보 엔트로피 — biased-coin bits slider, English text bits per letter, compression
7. 생명·시간·우주 — Schrödinger, arrow of time, black-hole entropy, log-scale cosmic timeline
8. 오해와 숫자 — flip cards for 6 myths, 8 stat cards, 3-question quiz

Weakly sourced claims are labelled on the page as reported / estimates: the von Neumann quote, Penrose's 1 in 10^(10^123), and the universe entropy of about 10^104 k.

## Accessibility and motion

- Semantic landmarks, one `h1`, skip link, visible focus styles, keyboard-usable buttons and menu.
- `prefers-reduced-motion`: reveal / rotation animations are turned off and the particle demo does not auto-play (it can be started with the button).
- Without JavaScript, all text is visible: reveal effects only apply when JS adds the `js` class, flip cards show both sides, and quiz answers are shown.

## Libraries

None. All effects (canvas particles, scroll reveal, demos) are plain JavaScript. Fonts are loaded from Google Fonts: Noto Sans KR and JetBrains Mono (SIL Open Font License 1.1).

## Images

All images come from Wikimedia Commons, were resized/compressed for the web, and are used under the licenses below.

| File | Subject | Author | License | Source |
|---|---|---|---|---|
| `images/coffee.jpg` | A small cup of coffee | Julius Schorzman | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:A_small_cup_of_coffee.JPG |
| `images/carnot.jpg` | Portrait of Sadi Carnot | Louis-Léopold Boilly | Public domain | https://commons.wikimedia.org/wiki/File:Sadi_Carnot.jpeg |
| `images/clausius.jpg` | Rudolf Clausius | Unknown | Public domain | https://commons.wikimedia.org/wiki/File:Clausius.jpg |
| `images/boltzmann_tomb.jpg` | Boltzmann's tomb, Zentralfriedhof Vienna | Daderot | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Zentralfriedhof_Vienna_-_Boltzmann.JPG |
| `images/gibbs.jpg` | Josiah Willard Gibbs | Unknown | Public domain | https://commons.wikimedia.org/wiki/File:Josiah_Willard_Gibbs_-from_MMS-.jpg |
| `images/shannon.jpg` | Claude Shannon | Konrad Jacobs | CC BY-SA 2.0 de | https://commons.wikimedia.org/wiki/File:ClaudeShannon_MFO3807.jpg |
| `images/schrodinger.jpg` | Erwin Schrödinger (1933) | Nobel Foundation | Public domain | https://commons.wikimedia.org/wiki/File:Erwin_Schr%C3%B6dinger_(1933).jpg |
| `images/black_hole_m87.jpg` | M87* black hole image | Event Horizon Telescope | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Black_hole_-_Messier_87_crop_max_res.jpg |
| `images/hubble_udf.jpg` | Hubble Ultra Deep Field (section background) | NASA and ESA (edit: Noodle snacks) | Public domain | https://commons.wikimedia.org/wiki/File:Hubble_ultra_deep_field_high_rez_edit1.jpg |
| `images/favicon.svg` | Site icon | Made for this page | — | — |

The images were resized only; CC BY-SA images keep their original license.

## Content sources

Content is based on `output/research/entropy/entropy_research.md` (Wikipedia articles on entropy, the second law, Boltzmann, information entropy, heat death and black-hole thermodynamics; F. L. Lambert 2002; NIST CODATA; Egan & Lineweaver 2010; Goldstein 2001 on Penrose; Tribus & McIrvine 1971). Design patterns follow `references/web/entropy/entropy_reference.md`; no logo, text, image or code from the reference sites is used.

## Structure

```
entropy/
├── index.html
├── css/style.css
├── js/main.js
├── images/
├── .nojekyll
└── README.md
```
