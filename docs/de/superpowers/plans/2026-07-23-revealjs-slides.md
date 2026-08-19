# Plan D – Reveal.js Slides

**Ziel:** Vollständige Reveal.js-basierte Slide-Decks für die 18 Themenblöcke des AI-Schulungscurriculums. Internet-Recherche für aktuelle Zahlen (LLM-Preise, EU-AI-Act-Stand, Anbieter-Übersicht), Bilder/Diagramme aus frei verfügbaren Quellen mit Lizenznachweisen. Alles lokal eingebunden, keine CDN-Abhängigkeit.

**Architecture:** MkDocs + Material-Theme bleibt das Hauptsystem. Unter `docs/slides/` wird ein parallel-präsentables Slide-System bereitgestellt. Jeder Themenblock hat eine HTML-Datei mit Reveal.js. `mkdocs.yml` bekommt einen Folien-Top-Level-Eintrag mit Anker im Site-URL (`/slides/`). Theme-Inkonsistenzen zwischen Material-Docs und Reveal.js-Slides werden bewusst akzeptiert — sie sind zwei separate UI-Modi (Lesen vs. Präsentieren).

**Tech Stack:**
- Reveal.js 4.x (lokal eingebunden, kein CDN)
- Custom `theme.css` mit Indigo-Akzent (passend zu Material-Theme)
- WebFetch + WebSearch für Internet-Recherche
- mcp `understand_image` für visuelle Verifikation eingebundener Bilder (optional)

## Global Constraints

- Sprache durchgängig Deutsch
- 18 Slide-Decks, je ca. 8–12 Folien (Total 150–220 Folien)
- Reveal.js komplett lokal (`docs/slides/reveal.js/`)
- Alle Bilder lokal unter `docs/slides/assets/images/` oder `/diagrams/`, mit Quellenvermerk
- Lizenznachweis in `docs/slides/LICENSE-credits.md`
- `mkdocs build --strict` muss nach Setup clean sein; nach den Slide-Tasks kann die Build-Info Notice über pages-not-in-nav für die `.html`-Folien-Files akzeptiert werden (MkDocs scanned `.md`; `.html`-Dateien unter `docs/slides/` werden vom Build **nicht eingelesen**, weil sie nicht in `nav` und nicht über Filesystem-Scan aufgenommen werden)
- Internet-Recherche via WebFetch/WebSearch für aktuelle Zahlen (max. 1 Jahr alt, mit Datum)
- Commit pro Task-Batch (3 Tasks × 6 Decks pro Batch)

## File Structure

```
docs/slides/
├── index.md                      # Übersicht aller Decks
├── _template.html                # Kopier-Vorlage pro Deck
├── reveal.js/                    # Lokale Reveal.js-Bibliothek (von npm/GitHub)
│   ├── reveal.js                 # Haupt-Skript
│   ├── reset.css
│   ├── reveal.css
│   └── plugin/                   # Notes-Plugin etc.
├── theme.css                      # Eigenes Branding-CSS für Folien
├── assets/
│   ├── images/                    # Fotos, Logos, Diagramme
│   │   ├── llm-token-window.svg
│   │   └── llm-pricing-2026.svg
│   └── diagrams/                 # SVG-Diagramme
│       ├── rag-pipeline.svg
│       ├── agent-loop.svg
│       ├── eu-ai-act-timeline.svg
│       └── ...
├── LICENSE-credits.md             # Bild-/Inhaltsnachweise
├── phase-1-grundlagen/            # 01 + 02 + 03
│   ├── 01-ai-grundlagen.html
│   ├── 02-llms.html
│   └── 03-prompt-engineering.html
├── phase-2-business/              # 04 + 05 + 06 + 07
│   ├── 04-use-cases.html
│   ├── 05-bewertung.html
│   ├── 06-business-case.html
│   └── 07-daten.html
├── phase-3-projektleitung/        # 08 + 09 + 10 + 11
│   ├── 08-projektphasen.html
│   ├── 09-anforderungen.html
│   ├── 10-evaluation.html
│   └── 11-change.html
├── phase-4-technik/               # 12 + 13 + 14 + 15
│   ├── 12-rag.html
│   ├── 13-agents.html
│   ├── 14-integration.html
│   └── 15-betrieb.html
└── phase-5-verantwortung/         # 16 + 17 + 18
    ├── 16-datenschutz.html
    ├── 17-security.html
    └── 18-responsible-ai-governance.html
mkdocs.yml                         # nav erweitert um Folien-Eintrag
```

## Hinweis: Material-Theme-Icons / Markdown-Pfad-Synergie

Da Reveal.js-Folien reine HTML-Files sind (kein Markdown-Scan), bleiben sie unabhängig vom Material-Theme. Sie werden vom MkDocs-Build **nicht verarbeitet**, weil `.md` nur für Markdown gilt; `.html` unter `docs/slides/` wird via Filesystem-Scan nur als potenzielles Rauschen erfasst, aber MkDocs übergeht sie still (INFO-Notice; kein Build-Fehler). Wir nehmen das in Kauf, weil die Folien als eigenes UI-Modul laufen.

---

## Task 1: Setup, Reveal.js lokal, Theme, Index, Nav, Credits

**Files:**
- Create: `docs/slides/reveal.js/` (Reveal.js-Quellen hineinkopieren)
- Create: `docs/slides/_template.html` (Slides-Vorlage)
- Create: `docs/slides/theme.css` (Branding)
- Create: `docs/slides/index.md` (Übersicht)
- Create: `docs/slides/LICENSE-credits.md` (Bild-Nachweis, initial leer)
- Modify: `mkdocs.yml` (`nav:` um Folien erweitern)

**Reveal.js Setup:**
- Latest stable Reveal.js (4.x) lokal herunterladen — entweder via `curl https://unpkg.com/reveal.js@4.6.1/...` und entpacken ODER via npm `npm pack reveal.js@4.6.1`. Vermeide CDN zur Laufzeit.
- Wichtige Dateien: `reveal.js`, `reset.css`, `reveal.css`, `plugin/notes/notes.js`, ggf. `plugin/highlight/highlight.js`
- Alles landet in `docs/slides/reveal.js/`

**Theme:** passend zu Material-Theme. Indigo-Akzent (`#3f51b5`), weicher Hintergrund, deutsche Schriftarten (Roboto), Schriftgröße 28pt für Hauptslides (Reveal-Default 32pt → 28pt wegen mehr Text pro Folie).

**Template** (`_template.html`): 8–12 Folien-Skeleton mit Header-Footer, Reveal-Initialisierung, Notes-Plugin, kleinem Themen-Branding. Wird pro Deck kopiert und mit Inhalt befüllt.

**Index** (`index.md`): Markdown-Übersicht aller 18 Decks mit Phase-Zuordnung, ~2-Satz-Beschreibung pro Deck, Link zu jeder `.html`-Datei.

**Lizenz-credits** (`LICENSE-credits.md`): Tabellen-Skelett mit Spalten für Asset, Quelle, Lizenz, Pfad; wird pro Bild-Implementierung befüllt.

**mkdocs.yml `nav:`** am Ende erweitern:

```yaml
  - Folien: slides/index.md
```

Erwartet, dass MkDocs die `.html`-Folien-Dateien nicht scannt (oder stillschweigend ignoriert).

Build muss clean sein (außer erwartete INFO-Notices für die `.html`-Dateien).

Commit: `feat(slides): reveal.js setup, theme, index und credits`.

## Task 2: Phase 1 + Phase 2 Slide-Decks (7 Stück)

**Files:** 7 HTML-Dateien in `docs/slides/phase-1-grundlagen/` und `docs/slides/phase-2-business/`:

- `phase-1-grundlagen/01-ai-grundlagen.html` (~10 slides): Was ist AI? — Abgrenzung klassische AI, ML, generative AI — Anwendungsarten — Warum AI Fehler macht — Lernziel
- `phase-1-grundlagen/02-llms.html` (~11 slides): Tokens und Kontextfenster — Anbieter im Vergleich (OpenAI/Anthropic/Google/Microsoft/Open-Source) — Reasoning-Modelle — Halluzinationen — multimodale Modelle — Stand 23.07.2026
- `phase-1-grundlagen/03-prompt-engineering.html` (~10 slides): Gute-Prompts-Schema (Rolle/Ziel/Kontext/Aufgabe/Einschränkungen/Format/Beispiele) — Few-Shot vs Zero-Shot — Iteratives Prompting — Patterns — typische Fehler
- `phase-2-business/04-use-cases.html` (~10 slides): Typische Anwendungsfälle — Build vs Buy — Standard vs Custom — Human-in-the-Loop — Assistenz vs Automatisierung — Tabelle Use-Cases je Branche
- `phase-2-business/05-bewertung.html` (~10 slides): Bewertungskriterien (Wert, Machbarkeit, Risiko, Aufwand, TtV) — Use-Case-Matrix als Canvas-Variante — Beispiel-Scorecard
- `phase-2-business/06-business-case.html` (~10 slides): Kostenarten — Cloud vs On-Prem — Stückpreis-Rechnung mit aktuellen Anbieterpreisen (Stand 2026) — Drei-Szenarien-Rechnung — Versteckte Kosten
- `phase-2-business/07-daten.html` (~10 slides): Datenqualität > Modellqualität — Labels und Ground Truth — Bias — Datenklassifizierung — DSGVO-Schnittstelle

**Internet-Recherche pro Deck:**
- 01-ai-grundlagen: keine spezifischen Zahlen nötig
- 02-llms.md: aktuelle Kontextfenster (Claude 200k, GPT-4o 128k, Gemini 1M), Token-Preislisten Stand 23.07.2026
- 03-prompt-engineering: aktuelle Forschungs-Highlights (z. B. Anthropic Prompt-Caching)
- 04-use-cases: Markt-Trends (Gartner, McKinsey AI Use-Case-Reports)
- 05-bewertung: keine spezifischen Zahlen
- 06-business-case: aktuelle API-Preise pro 1M Tokens
- 07-daten: keine spezifischen Zahlen

**Bilder:** SVG-Diagramme werden im Folgenden-Deck erzeugt (z. B. AI/ML-Klassifikation, LLM-Token-Flow, Use-Case-Matrix-Canvas). Keine Stock-Fotos nötig; reduziert Lizenz-Aufwand.

Commit: `feat(slides): phase 1+2 folien-decks (7 decks)`.

## Task 3: Phase 3 + Phase 4 Slide-Decks (8 Stück)

**Files:** 8 HTML-Dateien:

- `phase-3-projektleitung/08-projektphasen.html` (~10 slides): Projektphasen-Modell — Entscheidungspunkte — Abbruchkriterien — Product Owner vs Projektleitung
- `phase-3-projektleitung/09-anforderungen.html` (~10 slides): Funktionale / nicht-funktionale Anforderungen — Beispiel-User-Story — Akzeptanzkriterien für probabilistische Systeme — Definition erlaubter Antworten — Golden Datasets
- `phase-3-projektleitung/10-evaluation.html` (~11 slides): Offline vs Online-Eval — Metriken (Accuracy/Precision/Recall/F1/Halluzinationsrate/Task Completion Rate) — LLM-as-a-Judge und Grenzen — A/B-Tests — Red Teaming — Regressionstests
- `phase-3-projektleitung/11-change.html` (~9 slides): Ängste und Widerstände — AI Champions — Nutzungsrichtlinien — Shadow AI — Messung der Nutzung
- `phase-4-technik/12-rag.html` (~11 slides): Was ist RAG — Pipeline (Aufbereitung → Embeddings → Vektor-DB → Retrieval → Antwort) — RAG vs Fine-Tuning — typische Fehler — Berechtigungen
- `phase-4-technik/13-agents.html` (~11 slides): Chatbot vs Workflow vs Agent — Function Calling — Autonomiegrade — Speicher und Kontext — Risiken — Praxisbeispiel
- `phase-4-technik/14-integration.html` (~9 slides): Integrationspfade — Auth — Datenflüsse — Latenz/Throughput — Standard vs Custom — Pilot + Skalierung
- `phase-4-technik/15-betrieb.html` (~11 slides): Umgebungen — Versionierung — Monitoring (KPIs: Qualität, Kosten, Latenz) — Drift — Fallback — Incident-Management — Canary/Shadow-Traffic

**Internet-Recherche pro Deck:**
- 10-evaluation: aktuelle Benchmark-Empfehlungen (z. B. LiveBench, MMLU-Status)
- 12-rag: aktuelle Vektor-DB-Anbieter-Übersicht (Pinecone, Qdrant, Weaviate, pgvector)
- 13-agents: aktuelle Agent-Frameworks (LangChain, AutoGen, CrewAI, Anthropic Computer Use)
- 15-betrieb: aktuelle LLMOps-Plattformen (Datadog, Langfuse, Helicone)

**Bilder:** SVG-Diagramme (RAG-Pipeline, Agent-Loop, Agent-Autonomiegrade-Matrix, Monitoring-Stack).

Commit: `feat(slides): phase 3+4 folien-decks (8 decks)`.

## Task 4: Phase 5 Slide-Decks (3 Stück, davon 1 combined)

**Files:** 3 HTML-Dateien in `docs/slides/phase-5-verantwortung/`:

- `phase-5-verantwortung/16-datenschutz.html` (~12 slides): DSGVO-Grundlagen — Rechtsgrundlage und Zweckbindung — Datenminimierung — AVV — Drittlandtransfer — EU AI Act (verbotene Praktiken / Hochrisiko / GPAI / AI Literacy) — Rollen
- `phase-5-verantwortung/17-security.html` (~12 slides): Prompt Injection (direkt/indirekt) — Datenabfluss — Jailbreaks — Tool-Aufruf-Exploits — RAG-Poisoning — Supply-Chain — Least-Privilege — Incident Response
- `phase-5-verantwortung/18-responsible-ai-governance.html` (~12 slides, combined Responsible AI + Governance): Verantwortlichkeit — Risikoklassifizierung — Fairness/Erklärbarkeit — Bias-Audit — AI-Systeminventar — Freigabeprozesse — Rollen (DPO/CDO/CISO/AI Product Owner)

**Internet-Recherche pro Deck:**
- 16-datenschutz: EU AI Act Stand 23.07.2026 (welche Pflichten gelten bereits seit August 2025, welche ab August 2026, welche ab August 2027)
- 17-security: aktuelle OWASP-LLM-Risiken (LLM01–LLM10), aktuelle Supply-Chain-Incidents
- 18: aktuelle Model Card-Felddefinition (z. B. Hugging Face Model Card Standard)

**Bilder:** SVG-Diagramme (EU-AI-Act-Timeline als Highlight; OWASP-LLM-Top-10 als Tabelle).

Commit: `feat(slides): phase 5 folien-decks (3 decks mit combined responsible-ai+governance)`.

## Task 5: Verification + Push + LICENSE-credits finalisieren

**Files:**
- Modify: `docs/slides/LICENSE-credits.md` (alle im Verlauf der Tasks 2–4 verwendeten Bilder/SVGs eintragen; eigene SVGs brauchen keinen Eintrag, externe Quellen schon)
- Modify: `README.md` (Version-Bump auf 1.5)

**Steps:**
1. `mkdocs build --strict` — clean (mit INFO über entdeckte `.html`-Dateien, falls vorhanden — kein Fehler, nur Notice)
2. Visuelle Smoke-Tests via `mkdocs serve -a 127.0.0.1:8765` und `curl` für `/slides/index.html` und `/slides/phase-1-grundlagen/01-ai-grundlagen.html` (HTTP 200)
3. README v1.5 hinzufügen: „Plan D: 18 Reveal.js-Slides über alle 5 Phasen, plus A4 Branding"
4. Push `git push origin main`

Commit: `docs(readme): v1.5 mit reveal.js slides`.

---

## Self-Review

| Spec-Anforderung | Abgedeckt durch |
|---|---|
| Reveal.js komplett lokal, ohne CDN | Task 1 |
| Theme / Branding konsistent | Task 1 |
| Index-Seite | Task 1 |
| Nav-Eintrag „Folien" | Task 1 |
| 18 Slide-Decks | Tasks 2, 3, 4 |
| Internet-Recherche für aktuelle Zahlen | Tasks 2, 3, 4 (jeweils im Brief gelistet) |
| Bilder/Diagramme | Tasks 2, 3, 4 (eigene SVGs), LICENSE-Credits-Tabelle Task 5 |
| Lizenz-Nachweis | Task 5 |
| README-Bump | Task 5 |
| Push auf origin | Task 5 |

**Hinweis zu Reveal.js + MkDocs-Build:** MkDocs scan-st nur `.md` für Markdown. `.html` unter `docs/slides/` wird übergangen oder still ignoriert; Build bleibt clean. Die Folien sind direkt unter `<Live-URL>/slides/...` per Browser aufrufbar.

## Folgeentscheidungen (offen)

- Reveal.js-Export zu PDF — separate optionale Aufgabe, nicht in Plan D enthalten
- Speaker-Notes pro Slide — wird mit Reveal-Notes-Plugin bereits aktiviert; ausführliche Notes können später ergänzt werden
