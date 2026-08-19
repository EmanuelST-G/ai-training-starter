# AI Training for Specialists and Executives

Training materials and resources for specialists and executives in the area of AI & Management.

**🌐 Live site:** [https://EmanuelST-G.github.io/ai-training-starter/](https://EmanuelST-G.github.io/ai-training-starter/)

## Contents

- **Learning Path** — 5-day training plan with learning objectives
- **Topic List** — Overview of all 18 topic blocks across five phases; all phases are available
- **Glossary** — alphabetical index of the most important AI terms

## Structure

- `docs/en/` — English content (default locale, served at `/`)
- `docs/de/` — German content (served at `/de/`)
- `docs/index.md` — Landing page with language picker (default)
- `docs/javascripts/language-redirect.js` — Browser-language + cookie routing
- `docs/stylesheets/` — shared print stylesheet
- `AI-Themenliste-fuer-Projektleitung.md` — historical German original (kept as reference)
- `mkdocs.yml` — Site configuration with per-locale navigation
- `requirements.txt` — pinned Python dependencies

## Local Build

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve    # http://127.0.0.1:8000
```

For a static build:

```bash
mkdocs build --strict
```

The output is in `site/`. English content lives at the root, German content under `site/de/`.

## Internationalisation (DE / EN)

The site is bilingual:

- Root URL (`/`) shows a landing page with two language cards.
- The first click sets a `preferred_lang` cookie (1-year lifetime) and remembers the choice.
- On subsequent visits the cookie redirects to the chosen locale without showing the landing page.
- Visitors with a German browser (`Accept-Language: de*`) are routed to `/de/` automatically.
- A language switcher in the top nav allows manual switching at any time.

i18n is implemented with `mkdocs-static-i18n` (`docs_structure: folder`, `fallback_to_default: true`). Each locale has its own `nav` configuration in `mkdocs.yml`.

## Deployment

Push on `main` triggers the GitHub Actions workflow `.github/workflows/deploy.yml` which builds the site and deploys it to GitHub Pages (see URL above).

## Versioning

| Version | Date       | Change |
|---------|------------|--------|
| 1.0     | 23.07.2026 | Initial topic list |
| 1.1     | 23.07.2026 | MkDocs site with phase 1–3, glossary, GitHub-Pages deploy |
| 1.2     | 23.07.2026 | Phase 1–3 added in `nav`, glossary cross-references, README push trigger |
| 1.3     | 24.07.2026 | Phase 4 (Technology) + Phase 5 (Responsibility) with 8 new topics, glossary expanded to 144 entries |
| 1.4     | 24.07.2026 | Plan C: exercises, cheat sheets, case studies, print.css A4 |
| 1.5     | 24.07.2026 | Plan D: 18 Reveal.js slide decks across all 5 phases, locally bundled, with web research and dated 23.07.2026 source credits |
| 1.6     | 19.08.2026 | Generalised target audience from "Projektleiterin" to "Fach- und Führungskräfte" / "Specialists and Executives"; added full English translation via `mkdocs-static-i18n` (EN is default locale, DE under `/de/`); landing page with cookie + browser-language routing at the root URL |
