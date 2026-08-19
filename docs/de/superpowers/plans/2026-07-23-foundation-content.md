# AI-Schulungspaket – Foundation & Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** MkDocs-Material-Site für das AI-Schulungspaket aufsetzen, die bestehende Themenliste in 18 Themenblock-Seiten + Glossar aufteilen, und auf GitHub Pages deployen — sodass die ersten drei Lernphasen online abrufbar sind.

**Architecture:** Statische Site via MkDocs + Material-Theme. Markdown als Single Source of Truth unter `docs/`, gegliedert nach 5 Lernphasen. Automatischer Build & Deploy auf GitHub Pages via GitHub Actions. Die Folien (Reveal.js) und weiteres Material kommen in separaten Folge-Plänen.

**Tech Stack:**
- Python 3.10+ mit `mkdocs` 1.6.x und `mkdocs-material` 9.5.x
- Markdown mit `pymdownx`-Extensions (Tabbed, Highlight, Superfences, Tasklist)
- Material-Theme mit Light/Dark-Mode
- GitHub Actions + `mkdocs gh-deploy`
- Später (Folge-Plan): Reveal.js 4.x lokal eingebunden

## Global Constraints

- **Sprache:** durchgängig Deutsch (Kurssprache)
- **Markdown-Dialekt:** CommonMark + GFM-Tabellen + admonitions
- **Linking:** interne Links immer als relative Markdown-Links (`../../glossar.md#begriff`), nie rohe URLs auf andere Seiten
- **Dateinamen:** kleingeschrieben, Bindestriche statt Leerzeichen, Umlaute ausgeschrieben (`bewertung.md`, nicht `bewertung-äöü.md`)
- **Glossar-Anker:** jeder Begriff bekommt einen eigenen Anker im Format `### Begriff` → Link via `#begriff` (automatisch durch MkDocs)
- **Print-CSS:** Cheat-Sheets drucken auf A4 ohne Navigation
- **CI-Strenge:** `mkdocs build --strict` darf keine Warnungen ausgeben
- **GitHub Pages:** über `gh-pages`-Branch, automatisch via Action
- **Live-URL-Platzhalter:** `<github-user>.github.io/ai-training-starter/` — beim Deploy durch echten Usernamen ersetzen

---

## File Structure

Während dieses Plans entstehen:

```
ai-training-starter/
├── README.md                        # Vorhanden – wird in Task 11 ersetzt
├── requirements.txt                 # NEU – pinned Python-Abhängigkeiten
├── mkdocs.yml                       # NEU – MkDocs-Konfiguration
├── .github/workflows/deploy.yml     # NEU – CI für GitHub Pages
├── AI-Themenliste-fuer-Projektleitung.md  # Vorhanden – bleibt als historische Quelle stehen
├── docs/
│   ├── index.md                     # NEU – Startseite
│   ├── lernpfad.md                  # NEU – 5-Tage-Lernpfad
│   ├── themenliste.md               # NEU – Übersicht aller Themen
│   ├── stylesheets/print.css        # NEU – Druckoptimierung
│   ├── grundlagen/                  # NEU – Phase 1 (3 Dateien)
│   │   ├── 01-ai-grundlagen.md
│   │   ├── 02-llms.md
│   │   └── 03-prompt-engineering.md
│   ├── business/                    # NEU – Phase 2 (4 Dateien)
│   │   ├── 04-use-cases.md
│   │   ├── 05-bewertung.md
│   │   ├── 06-business-case.md
│   │   └── 07-daten.md
│   ├── projektleitung/              # NEU – Phase 3 (4 Dateien)
│   │   ├── 08-projektphasen.md
│   │   ├── 09-anforderungen.md
│   │   ├── 10-evaluation.md
│   │   └── 11-change.md
│   ├── glossar.md                   # NEU – alphabetisches Glossar
│   └── .gitignore                   # Ergänzt – site/ ausschließen
```

**Spätere Pläne** (nicht in diesem Plan enthalten):
- Phase 4 + 5 (`technik/` und `verantwortung/`)
- Übungen, Cheat-Sheets, Fallstudien, Folien

---

## Task 1: Python-Toolchain pinnen

**Files:**
- Create: `requirements.txt`
- Modify: `.gitignore`

- [ ] **Step 1: `requirements.txt` anlegen mit pinned Versionen**

Datei `requirements.txt`:

```
mkdocs==1.6.1
mkdocs-material==9.5.50
pymdown-extensions==10.10
```

- [ ] **Step 2: `.gitignore` um `site/` und Python-Artefakte erweitern**

Aktuelle `.gitignore` (`*.pdf` enthalten) ergänzen um:

```
# Python
__pycache__/
*.py[cod]
*.egg-info/
.venv/
venv/

# MkDocs build output
/site/
```

- [ ] **Step 3: Lokale Installation und Versionsprüfung**

```bash
python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt
mkdocs --version
```

Erwartet: `mkdocs, version 1.6.1`

- [ ] **Step 4: Commit**

```bash
git add requirements.txt .gitignore
git commit -m "chore: pin mkdocs material toolchain"
```

---

## Task 2: MkDocs-Grundkonfiguration anlegen

**Files:**
- Create: `mkdocs.yml`

- [ ] **Step 1: `mkdocs.yml` mit minimaler Konfiguration schreiben**

Datei `mkdocs.yml`:

```yaml
site_name: AI-Ausbildung Projektleitung
site_description: Schulungsunterlagen für die Projektleiterin im Bereich AI & Management
site_url: https://<github-user>.github.io/ai-training-starter/
repo_url: https://github.com/<github-user>/ai-training-starter
docs_dir: docs
use_directory_urls: true

theme:
  name: material
  features:
    - navigation.instant
    - navigation.tracking
    - navigation.sections
    - navigation.top
    - navigation.indexes
    - toc.follow
    - search.suggest
    - content.code.copy
  palette:
    - media: "(prefers-color-scheme: light)"
      scheme: default
      primary: indigo
      accent: indigo
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: indigo
      accent: indigo
  font:
    text: Roboto
    code: Roboto Mono

markdown_extensions:
  - admonition
  - attr_list
  - def_list
  - footnotes
  - md_in_html
  - tables
  - toc:
      permalink: true
  - pymdownx.highlight
  - pymdownx.superfences
  - pymdownx.tabbed
  - pymdownx.tasklist

plugins:
  - search

extra_css:
  - stylesheets/print.css

nav:
  - Startseite: index.md
  - Lernpfad: lernpfad.md
  - Themenliste: themenliste.md
```

`<github-user>` durch den echten GitHub-Usernamen ersetzen (per `git remote -v` prüfen).

- [ ] **Step 2: Leere Platzhalter-Seiten anlegen, damit `mkdocs build` durchläuft**

```bash
mkdir -p docs/stylesheets
for f in docs/index.md docs/lernpfad.md docs/themenliste.md docs/glossar.md; do
  echo "# $(basename $f .md)" > "$f"
done
echo "/* print */" > docs/stylesheets/print.css
```

- [ ] **Step 3: Build prüfen**

Run:
```bash
source .venv/bin/activate && mkdocs build --strict
```

Erwartet: keine Warnungen, Exit-Code 0, `site/index.html` existiert.

- [ ] **Step 4: Commit**

```bash
git add mkdocs.yml docs/index.md docs/lernpfad.md docs/themenliste.md docs/glossar.md docs/stylesheets/print.css
git commit -m "feat(docs): mkdocs grundkonfiguration mit material theme"
```

---

## Task 3: Startseite `docs/index.md` schreiben

**Files:**
- Modify: `docs/index.md`

- [ ] **Step 1: Inhalt komplett ersetzen**

`docs/index.md` mit folgendem Inhalt überschreiben:

```markdown
# AI-Ausbildung Projektleitung

Schulungsunterlagen für die Projektleiterin im Bereich AI & Management.

## Zielbild

Nach der Ausbildung kann die Projektleiterin:

- AI-Projekte fachlich beurteilen und steuern
- sinnvolle Use Cases identifizieren
- Anforderungen zwischen Business und Technik übersetzen
- Aufwand, Risiken und Nutzen realistisch einsätzen
- mit Entwicklern, Data Scientists, Management und Datenschutz auf Augenhöhe sprechen
- AI-Ergebnisse kritisch hinterfragen

Sie muss **nicht selbst Modelle programmieren**, aber verstehen, was technisch möglich, wirtschaftlich sinnvoll und organisatorisch notwendig ist.

## Schnellzugriff

<div class="grid cards" markdown>

- :material-clock-fast:{ .lg .middle } **[Lernpfad](lernpfad.md)**

    5-Tage-Schulungsplan als visuelle Roadmap.

- :material-book-open-variant:{ .lg .middle } **[Themenliste](themenliste.md)**

    18 Themenblöcke mit Lernzielen und Praxisübungen.

- :material-format-list-bulleted-square:{ .lg .middle } **[Glossar](glossar.md)**

    Alle wichtigen AI-Begriffe zum Nachschlagen.

</div>

## Phasen im Überblick

| Phase | Tag | Schwerpunkt | Inhalte |
|-------|-----|-------------|---------|
| 1 | Tag 1 | Grundlagen | AI-Grundlagen, LLMs, Prompt Engineering |
| 2 | Tag 2 | Business | Use Cases, Bewertung, Business Case, Daten |
| 3 | Tag 3 | Projektleitung | Projektphasen, Anforderungen, Evaluation, Change |
| 4 | Tag 4 | Technik | RAG, Agents, Integration, Betrieb |
| 5 | Tag 5 | Verantwortung | Datenschutz, Security, Responsible AI, Governance |
```

Hinweis: `grid cards` und Lucide-Icons werden vom Material-Theme gerendert, sofern die Material-Icons-Extension aktiviert ist. Falls sie nicht angezeigt werden, ist das okay — die Links funktionieren weiterhin.

- [ ] **Step 2: Build prüfen**

Run:
```bash
source .venv/bin/activate && mkdocs build --strict
```

Erwartet: keine Warnungen.

- [ ] **Step 3: Commit**

```bash
git add docs/index.md
git commit -m "feat(docs): startseite mit zielbild und schnellzugriff"
```

---

## Task 4: Lernpfad-Seite `docs/lernpfad.md`

**Files:**
- Modify: `docs/lernpfad.md`

- [ ] **Step 1: Inhalt aus Themenliste übernehmen**

`docs/lernpfad.md` mit folgendem Inhalt überschreiben:

```markdown
# Lernpfad – 5 Tage AI & Management

**Stand:** 23.07.2026
**Format:** 5 Schulungstage mit Möglichkeit zur Vertiefung auf 7 Tage

## Phase 1 – Grundlagen (Tag 1)

1. AI-Grundlagen — `grundlagen/01-ai-grundlagen.md`
2. Generative AI & LLMs — `grundlagen/02-llms.md`
3. Prompt Engineering — `grundlagen/03-prompt-engineering.md`
4. Grenzen und Halluzinationen (Teil von LLMs)

## Phase 2 – Business (Tag 2)

5. AI-Anwendungsfälle im Business — `business/04-use-cases.md`
6. Use-Case-Bewertung und Priorisierung — `business/05-bewertung.md`
7. Business Case und ROI — `business/06-business-case.md`
8. Datenverständnis — `business/07-daten.md`

## Phase 3 – Projektleitung (Tag 3)

9. AI-Projektmanagement — `projektleitung/08-projektphasen.md`
10. Anforderungen & User Stories — `projektleitung/09-anforderungen.md`
11. Evaluation und Qualitätsmessung — `projektleitung/10-evaluation.md`
12. Stakeholder- und Change-Management — `projektleitung/11-change.md`

## Phase 4 – Technikverständnis (Tag 4)

13. RAG und Unternehmenswissen
14. AI Agents und Automatisierung
15. Integrationen und APIs
16. Produktiver Betrieb und LLMOps

## Phase 5 – Verantwortung (Tag 5)

17. Datenschutz, Recht und EU AI Act
18. AI Security
19. Responsible AI
20. AI Governance

!!! info "Spätere Plan-Phasen"
    Phase 4 und 5 werden in einem Folge-Plan als `docs/technik/` und `docs/verantwortung/` ausgeliefert. Phase-1–3-Themendetails entstehen in Tasks 6, 7 und 8 des laufenden Plans.

## Priorisierung bei knapper Zeit

| Anteil | Themenfeld |
|--------|------------|
| 25 % | AI- und LLM-Grundverständnis |
| 25 % | Use-Case-Auswahl und Business Value |
| 20 % | AI-Projektmanagement und Evaluation |
| 15 % | Datenschutz, Security und Governance |
| 10 % | Daten, RAG und Agents |
| 5 %  | Prompt Engineering |

!!! tip "Kernbotschaft"
    Für eine Projektleiterin sind Use-Case-Auswahl, realistische Anforderungen, Evaluation, Risiko und Wirtschaftlichkeit deutlich wichtiger als perfektes Prompting.
```

- [ ] **Step 2: Build prüfen**

Run:
```bash
source .venv/bin/activate && mkdocs build --strict
```

Erwartet: keine Warnungen. (Die Themen-Pfade werden als Code-Format ohne Markdown-Link aufgeführt, damit kein strict-Mode-Broken-Link entsteht; die Hyperlinks baut Tasks 6, 7 und 8 in den Themenübersicht.)

- [ ] **Step 3: Commit**

```bash
git add docs/lernpfad.md
git commit -m "feat(docs): lernpfad mit 5 phasen und prioritierung"
```

---

## Task 5: Themenliste-Übersicht `docs/themenliste.md`

**Files:**
- Modify: `docs/themenliste.md`

- [ ] **Step 1: Inhalt schreiben**

`docs/themenliste.md` mit folgendem Inhalt überschreiben:

```markdown
# Themenliste

Übersicht aller 18 Themenblöcke des Curriculums, gruppiert nach Lernphase.

!!! note "Hinweis"
    Die Themen 6 (Business Case) und 11 (Change Management) sowie Phase 4 (Technik) und Phase 5 (Verantwortung) folgen in separaten Implementierungs-Plänen. Vollständige Inhalts-Vorlage: siehe `AI-Themenliste-fuer-Projektleitung.md` im Repository-Root.

## Phase 1 – Grundlagen

- AI-Grundlagen — `grundlagen/01-ai-grundlagen.md`
- Generative AI & Large Language Models — `grundlagen/02-llms.md`
- Prompt Engineering — `grundlagen/03-prompt-engineering.md`

## Phase 2 – Business

- AI-Anwendungsfälle im Business — `business/04-use-cases.md`
- Use-Case-Bewertung und Priorisierung — `business/05-bewertung.md`
- Datenverständnis — `business/07-daten.md`

## Phase 3 – Projektleitung

- AI-Projektmanagement — `projektleitung/08-projektphasen.md`
- Anforderungen & User Stories für AI — `projektleitung/09-anforderungen.md`
- Evaluation und Qualitätsmessung — `projektleitung/10-evaluation.md`
```

- [ ] **Step 2: Build prüfen**

Run:
```bash
source .venv/bin/activate && mkdocs build --strict
```

Erwartet: keine Warnungen. (Die Themen-Pfade werden als Code-Format ohne Markdown-Link aufgeführt, damit kein strict-Mode-Broken-Link entsteht; die Hyperlinks baut Tasks 6, 7 und 8 in den Themenübersicht.)

- [ ] **Step 3: Commit**

```bash
git add docs/themenliste.md
git commit -m "feat(docs): themenliste-uebersicht mit phase-1-bis-3-links"
```

---

## Task 6: Verzeichnisstruktur und Phase-1-Dateien anlegen

**Files:**
- Create: `docs/grundlagen/01-ai-grundlagen.md`
- Create: `docs/grundlagen/02-llms.md`
- Create: `docs/grundlagen/03-prompt-engineering.md`

- [ ] **Step 1: Phase-1-Verzeichnis anlegen**

```bash
mkdir -p docs/grundlagen docs/business docs/projektleitung
```

- [ ] **Step 2: `docs/grundlagen/01-ai-grundlagen.md` schreiben**

```markdown
# AI-Grundlagen

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Erklären können, wann AI sinnvoll ist und wann klassische Software die bessere Wahl wäre.

## Was ist künstliche Intelligenz?

Künstliche Intelligenz (AI) bezeichnet Software, die Aufgaben übernimmt, für die Menschen typischerweise Intelligenz benötigen — Sprache verstehen, Muster erkennen, Entscheidungen treffen. Heute meint „AI" in der Praxis fast immer **Machine Learning**: Modelle, die aus Daten generalisieren, statt explizit programmiert zu werden.

## Abgrenzung

| Ansatz | Eigenschaft |
|--------|-------------|
| Klassische Software | Deterministisch, regelbasiert |
| Regelbasierte Systeme | „Wenn X, dann Y"-Logik, oft mit Wissensbasis |
| Machine Learning | Lernt Muster aus Beispielen |
| Deep Learning | ML mit tiefen neuronalen Netzen |
| Generative AI | Erzeugt neue Inhalte (Text, Bild, Code) |

## Training, Inferenz und Modelle

- **Training:** Modell lernt aus Daten (einmalig oder fortlaufend)
- **Inferenz:** Modell liefert Vorhersagen für neue Eingaben
- **Modell:** gespeichertes Ergebnis des Trainings — die "kompilierte Erfahrung"

## Strukturierte und unstrukturierte Daten

- **Strukturiert:** Tabellen, Datenbanken, klar definiertes Schema
- **Unstrukturiert:** Texte, Bilder, Audio, Video

AI kann beide verarbeiten, aber Modelle unterscheiden sich stark darin, wofür sie geeignet sind.

## Wahrscheinlichkeiten statt deterministischer Ergebnisse

Anders als klassische Software gibt AI eine **Wahrscheinlichkeitsverteilung** über mögliche Antworten zurück. Das hat zwei praktische Konsequenzen:

1. Dieselbe Anfrage kann leicht unterschiedliche Antworten liefern.
2. Aussagen klingen oft sicher, sind aber nicht garantiert korrekt.

## Warum AI Fehler macht

- **Bias in den Trainingsdaten** — das Modell erbt Vorurteile
- **Distribution Shift** — die Welt verändert sich, das Modell nicht
- **Halluzinationen** — das Modell "erfindet" Inhalte, die plausibel klingen
- **Fehlende Aktualität** — das Modell kennt nichts nach seinem Trainingsstand

## Überblick über wichtige AI-Arten

- **Klassifikation** — E-Mail ist Spam oder nicht?
- **Prognose** — Verkaufszahlen nächste Woche?
- **Clustering** — welche Kunden sind ähnlich?
- **Empfehlungssysteme** — welcher Film passt?
- **Computer Vision** — was ist auf dem Bild?
- **Sprachverarbeitung (NLP)** — Text verstehen, generieren, übersetzen
- **Generative AI** — neue Inhalte erzeugen

!!! tip "Praxisbezug"
    Bei AI-Projekten ist die Frage „Was für eine Art AI brauchen wir?" meist der erste Trennpunkt zwischen sinnvollen und überdimensionierten Lösungen.

## Verwandte Begriffe

- [Generative AI & LLMs](02-llms.md)
- [Datenverständnis](../business/07-daten.md)
```

- [ ] **Step 3: `docs/grundlagen/02-llms.md` schreiben**

```markdown
# Generative AI & Large Language Models

[← zurück zur Themenliste](../themenliste.md)
[Vorheriges: AI-Grundlagen](01-ai-grundlagen.md) · [Nächstes: Prompt Engineering](03-prompt-engineering.md)

## Lernziel

Verstehen, warum ein überzeugend formulierter AI-Output trotzdem falsch sein kann.

## Was sind LLMs?

Large Language Models sind KI-Modelle, die auf riesigen Mengen an Text trainiert wurden und Wahrscheinlichkeiten für das "nächste wahrscheinliche Wort" berechnen. Aus dieser einfachen Aufgabe entsteht durch Skalierung erstaunlich vielseitige Intelligenz.

## Grundprinzip "nächstes wahrscheinliches Wort"

Ein LLM zerlegt Text in **Tokens** (häufig Wortteile, ca. 0,5–1 Token pro Wort) und sagt für jeden nächsten Token eine Wahrscheinlichkeitsverteilung vorher. Die Auswahl aus dieser Verteilung — gesteuert durch die **Temperatur** — ergibt den Text.

## Kontextfenster

Das **Kontextfenster** ist die maximale Länge an Eingabe + Ausgabe, die ein Modell gleichzeitig verarbeiten kann. Typische Werte 2026:

- GPT-4-Klasse: 128k bis 1M Tokens
- Claude Opus / Sonnet: 200k bis 1M Tokens
- Open-Source: stark variierend, 8k bis 200k

Was nicht ins Fenster passt, "weiß" das Modell nicht.

## System-Prompt, User-Prompt, Assistant-Response

- **System-Prompt:** Rollen- und Verhaltensanweisungen (vom Entwickler)
- **User-Prompt:** die eigentliche Anfrage
- **Assistant-Response:** die Antwort des Modells

## Anbieter im Überblick

| Anbieter | Modell-Reihe | Bemerkung |
|----------|--------------|-----------|
| OpenAI | GPT-4, GPT-5, o-Serie | Reasoning-Modelle mit starker Planungsfähigkeit |
| Anthropic | Claude Opus / Sonnet / Haiku | Lange Kontextfenster, vorsichtig bei Risiken |
| Google | Gemini | multimodal, enge Integration mit Workspace |
| Microsoft | Copilot | Vermarktung von OpenAI-Modellen + Integration |
| Open-Source | LLaMA, Mistral, Qwen | On-Premises und Edge einsetzbar |

## Halluzinationen

Eine Halluzination ist eine **falsche Aussage, die das Modell sicher präsentiert**. Quellen:

- Trainingsdaten enthalten den Fakt nicht
- Verteilung erlaubt plausible Lügen
- Modell kann nicht zwischen "wird oft gesagt" und "ist wahr" unterscheiden

Erkennung: Quellen verlangen, Cross-Check, gesundes Misstrauen.

## Temperatur und Determinismus

**Temperatur** regelt, wie "kreativ" oder "konservativ" das Modell antwortet:

- **T = 0**: greedy decoding, sehr deterministisch
- **T ≈ 0,7**: ausgewogen (typisch)
- **T ≥ 1**: sehr kreativ, höhere Halluzinationsrate

Für reproduzierbare Ausgaben: Temperatur 0, ggf. `seed`-Parameter festlegen.

## Strukturierte Ausgaben

Modelle können gezwungen werden, valide JSON- oder XML-Strukturen zu liefern — Voraussetzung für Tool-Aufrufe und zuverlässige Automatisierung. APIs bieten dafür `response_format`-Parameter oder "JSON Mode".

## Multimodale Modelle

Aktuelle Modelle verarbeiten nicht nur Text, sondern auch Bilder, Audio und teilweise Video. Das erweitert die Use Cases erheblich (Rechnungsscan, Diagrammanalyse, Audio-Transkription).

## Reasoning-Modelle

Modelle wie OpenAI o1/o3 oder Claude mit "Extended Thinking" zerlegen Aufgaben intern in Zwischenschritte. Sie sind langsamer und teurer, liefern aber bei Mathematik, Logik und mehrstufiger Planung oft deutlich bessere Ergebnisse.

## Grenzen von LLMs

- **Fehlendes aktuelles Wissen** — Trainingsstand beachten
- **Falsche Quellenangaben** — erfundene Paper, Urteile, URLs
- **Rechenfehler** — selbst starke Modelle rechnen nicht zuverlässig
- **Scheinsicherheit** — das Modell sagt nie "ich weiß es nicht" von sich aus
- **Kontextverlust** — bei langen Konversationen werden ältere Teile unscharf

!!! warning "Praxisfalle"
    „Das klingt überzeugend" ist das schwächste Argument für Korrektheit. Plausibilität und Wahrheit sind verschiedene Achsen.
```

- [ ] **Step 4: `docs/grundlagen/03-prompt-engineering.md` schreiben**

```markdown
# Prompt Engineering

[← zurück zur Themenliste](../themenliste.md)
[Vorheriges: Generative AI & LLMs](02-llms.md)

## Lernziel

Aus einem schlechten Prompt schrittweise einen stabilen Business-Prompt entwickeln.

## Aufbau eines guten Prompts

| Element | Zweck |
|---------|-------|
| Rolle | Wer soll das Modell sein? |
| Ziel | Was soll erreicht werden? |
| Kontext | Worum geht es, was ist Hintergrund? |
| Aufgabe | Konkrete Anweisung |
| Einschränkungen | Was darf nicht? |
| Ausgabeformat | Wie soll das Ergebnis aussehen? |
| Beispiele | Few-Shot-Vorgaben |

## Zero-Shot und Few-Shot

- **Zero-Shot:** nur die Aufgabe, keine Beispiele
- **Few-Shot:** 1–5 Beispiele für das gewünschte Schema

Few-Shot ist robuster für strukturierte Aufgaben, kostet aber Tokens.

## Iteratives Prompting

Ein guter Prompt entsteht fast nie im ersten Versuch. Vorgehen:

1. Ersten Wurf schreiben
2. An 5–10 Beispielen ausführen
3. Schwächen identifizieren (Halluzinationen, falsches Format, fehlender Kontext)
4. Prompt präzise anpassen
5. Wiederholen, bis Stabilität erreicht ist

## Prompt Templates

Für wiederkehrende Aufgaben: Prompt als Vorlage mit Platzhaltern. Versionierung in Git. Tools: `promptr`, `langchain`-Templates oder einfach Markdown-Dateien.

## Rückfragen durch das Modell

Modelle dürfen (und sollen) Rückfragen stellen, wenn die Aufgabe mehrdeutig ist. Das senkt die Halluzinationsrate drastisch. Im Prompt: *"Wenn etwas unklar ist, frage nach, statt zu raten."*

## Prompt-Patterns für Business-Aufgaben

| Aufgabe | Pattern |
|---------|---------|
| Zusammenfassung | „Fasse den folgenden Text in 5 Sätzen zusammen." |
| Analyse | Strukturiertes Schema vorgeben + Belege aus dem Text verlangen |
| Klassifikation | Kategorienliste vorgeben + Mehrfachauswahl erlauben |
| Dokumentenerstellung | Gliederung vorgeben + Stilbeispiel |
| Projektmanagement | RACI + Akzeptanzkriterien verlangen |
| Entscheidungsunterstützung | Pro/Contra mit geschätztem Impact |

## Typische Prompt-Fehler

- **Mehrere Aufgaben** in einem Prompt vermischen
- **Implizite Annahmen** statt expliziten Kontexts
- **Fehlende Ausgabeformat-Vorgabe** (das Modell "rät")
- **Negative Anweisungen** ("sag nicht X") statt positiver Formulierung
- **Zu lange Prompts** mit redundantem Kontext

!!! warning "Praxisfalle"
    Prompt Engineering allein ergibt **keine** zuverlässige AI-Anwendung. Dafür braucht es:
    - Evaluation (qualifizierte Testfälle)
    - Vordefinierte Tools / Function-Calling
    - Quellen (RAG) statt freier Erfindung
    - Human-in-the-Loop bei Konsequenzen
```

- [ ] **Step 5: Build prüfen**

Run:
```bash
source .venv/bin/activate && mkdocs build --strict
```

Erwartet: keine Warnungen.

- [ ] **Step 6: Commit**

```bash
git add docs/grundlagen/
git commit -m "feat(docs): phase 1 - grundlagen (3 themenbloecke)"
```

---

## Task 7: Phase 2 - Business

**Files:**
- Create: `docs/business/04-use-cases.md`
- Create: `docs/business/05-bewertung.md`
- Create: `docs/business/06-business-case.md`
- Create: `docs/business/07-daten.md`

- [ ] **Step 1: `docs/business/04-use-cases.md` schreiben**

```markdown
# AI-Anwendungsfälle im Business

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Aus einem Problem einen konkreten, bewertbaren AI-Use-Case formulieren können.

## Prozesse analysieren und AI-Potenziale identifizieren

Heuristik für die ersten Ideen:

- **Hohe Frequenz** (> 100 Wiederholungen pro Monat)
- **Hoher manueller Aufwand** bei niedriger Komplexität
- **Strukturierte Daten** oder klare Eingaben
- **Tolerante Fehlerrate** (< 5 % Fehler sind okay)
- **Schriftlich/textbasiert** statt physikalischer Welt

Was AI schlecht kann: kausale Begründung über kontrafaktische Szenarien, physische Welt wahrnehmen, langfristige strategische Entscheidungen.

## Typische Use Cases

- Dokumentenanalyse (Verträge, Rechnungen, Audits)
- Wissenssuche in internen Beständen
- Kundenservice / First-Level-Support
- E-Mail-Verarbeitung / Triage
- Angebotserstellung aus CRM-Daten
- Meeting-Zusammenfassungen
- Reporting (KPIs aus Datenquellen)
- Forecasting (Nachfrage, Abverkauf)
- Qualitätsprüfung (Texte, Bilder)
- Vertragsanalyse (Klauseln, Risiken)
- Marketing & Content
- Softwareentwicklung (Code-Vorschläge, Tests, Refactoring)

## Assistenz vs. vollständige Automatisierung

| Grad | Beispiel | Risiko |
|------|----------|--------|
| Vollständige Automatisierung | Spam-Filter, Auto-Vervollständigung | Niedrig, weil Fehler reversibel |
| Assistenz | Copilot für Kundenservice-Antwort | Mittel — Mensch prüft |
| Vollautonom | AI-Agent beantwortet Kunden ohne Prüfung | Hoch — rechtlich und qualitativ |

## Human-in-the-Loop

Wo Fehler Folgen haben, **muss** ein Mensch die Ausgabe prüfen oder freigeben. Das hat zwei Effekte:

- Qualität wird messbar besser
- Time-to-Value sinkt (Mensch liest trotzdem)

## AI als Copilot, Reviewer oder autonomer Agent

- **Copilot:** Vorschlag, Mensch entscheidet
- **Reviewer:** Mensch macht, AI prüft
- **Autonomer Agent:** AI entscheidet und handelt

## Ungeeignete Use Cases erkennen

- Wenn klassische Regel-Software billiger und zuverlässiger ist
- Wenn die Fehlerrate unter 0,1 % liegen muss
- Wenn Trainingsdaten fehlen oder Bias-dominiert sind
- Wenn ethische, regulatorische oder reputationsrelevante Konsequenzen drohen

## Build vs. Buy

| Faktor | Build | Buy |
|--------|-------|-----|
| Spezifischer Vorteil erforderlich | ja | nein |
| Daten sind unique | ja | egal |
| Zeitkritisch | nein | ja |
| Volumen rechtfertigt Custom-Lösung | hoch | niedrig |

## Standardprodukt vs. individuelle Lösung

Microsoft 365 Copilot, Salesforce Einstein, ServiceNow AI — wenn 70 % der Anforderungen reichen, ist Standard fast immer billiger. Individuelle Lösungen nur, wenn die Differenzierung am Use Case hängt.

!!! tip "Entscheidungsfrage"
    Welche Eigenschaft unterscheidet euch von Wettbewerbern — und ist diese Eigenschaft AI-relevant?
```

- [ ] **Step 2: `docs/business/05-bewertung.md` schreiben**

```markdown
# Use-Case-Bewertung und Priorisierung

[← zurück zur Themenliste](../themenliste.md)
[Vorheriges: AI-Anwendungsfälle](04-use-cases.md) · [Nächstes: Business Case](06-business-case.md)

## Lernziel

Eine einfache AI-Use-Case-Matrix erstellen.

## Bewertungsfragen

Für jeden Use Case strukturiert beantworten:

- Welches Problem wird gelöst?
- Wer ist die Zielgruppe?
- Wie läuft der aktuelle Prozess?
- Welche Verbesserung wird erwartet?
- Sind geeignete Daten vorhanden?
- Wie hoch ist das Fehlerrisiko?
- Ist menschliche Kontrolle notwendig?
- Wie häufig wird der Prozess ausgeführt?
- Wie viel Zeit / Geld wird gespart?
- Wie komplex ist die Integration?
- Welche rechtlichen Risiken bestehen?
- Wie wird der Erfolg gemessen?

## Priorisierungskriterien

| Kriterium | Skala |
|-----------|-------|
| Business Value | 1 (gering) – 5 (hoch) |
| Technische Machbarkeit | 1 (Risiko) – 5 (Standard) |
| Datenverfügbarkeit | 1 (fehlt) – 5 (vollständig) |
| Risiko (rechtlich, Reputation) | 1 (hoch) – 5 (gering) |
| Umsetzungsaufwand (klein = hoch) | 1 (groß) – 5 (klein) |
| Time-to-Value (klein = hoch) | 1 (Jahre) – 5 (Wochen) |

## Beispiel-Matrix

| Use Case | BV | TM | DV | R | UA | TtV | Score |
|----------|----|----|----|----|----|-----|-------|
| Meeting-Zusammenfassung | 4 | 5 | 5 | 5 | 4 | 5 | **28** |
| Vertragsanalyse | 5 | 3 | 4 | 2 | 2 | 3 | **19** |
| Kundenservice-Agent | 4 | 3 | 3 | 3 | 2 | 3 | **18** |
| Wissensassistent intern | 4 | 4 | 3 | 4 | 4 | 4 | **23** |

Score = Summe (max. 30). Höher = besser priorisiert.

## Praxis-Übung

Use Cases sammeln, Matrix bauen, Top 3 diskutieren. Siehe [Übungen](../uebungen/index.md) (im Folgeplan).

!!! warning "Häufige Falle"
    „Coolness" rechtfertigt keinen Use Case. Ohne messbaren Business Value verschwindet das Projekt nach 6 Monaten.
```

(Inhalt mit `docs/business/05-bewertung.md` Verzeichnis — Verzeichnis wurde in Task 6 bereits angelegt.)

- [ ] **Step 3: `docs/business/06-business-case.md` schreiben**

```markdown
# Business Case und Wirtschaftlichkeit

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Einen Business Case mit mehreren Szenarien erstellen, statt nur Lizenzkosten zu vergleichen.

## Kostenarten

- Modellentwicklung (Custom-Entwicklung)
- Lizenzen (Plattformgebühren pro Nutzer/Monat)
- API-Nutzung / Tokens
- Infrastruktur (Compute, Storage, Vektor-DB)
- Datenaufbereitung (manuell + Tools)
- Integration (in Bestandssysteme)
- Evaluation (interne Tests, Gold-Set-Pflege)
- Betrieb und Monitoring (LLMOps)
- Change Management (Schulungen, Kommunikation)

## Cloud vs. On-Premises

| Aspekt | Cloud | On-Premises |
|--------|-------|-------------|
| Time-to-Market | Tage | Monate |
| Datenschutz | abhängig vom Anbieter | maximal |
| Kostenverlauf | OPEX, skalierend | CAPEX + OPEX |
| Vendor Lock-in | hoch | gering |

## Kleine vs. große Modelle

- **Großes Modell** (GPT-4-Klasse): bessere Qualität, höhere Kosten pro Token, oft Cloud-only
- **Kleines Modell** (z. B. 7B, lokal): billiger, oft ausreichend für Klassifikation/Extraktion, on-premises möglich

## Kosten pro Anfrage

Beispiel: RAG-Anfrage mit 2k Input + 500 Output Tokens.

- GPT-4o: ca. $0,01
- Claude Haiku: ca. $0,003
- Eigenes 7B-Modell on-prem: $0,0003 + Strom

Bei 50.000 Anfragen / Monat: **$500 vs. $150 vs. $15**. Auch bei niedrigem Stückpreis summieren sich Volumen.

## ROI und Total Cost of Ownership

ROI = (Nutzen − Kosten) / Kosten

Aber: viele Nutzen sind **nicht direkt messbar** (Mitarbeiterzufriedenheit, Time-to-Market). Hier helfen Szenarien.

## Drei-Szenarien-Rechnung

| Szenario | Nutzen/Jahr | Kosten/Jahr | ROI |
|----------|-------------|-------------|------|
| Best Case | 800.000 € | 200.000 € | 300 % |
| Realistic | 400.000 € | 250.000 € | 60 % |
| Worst Case | 80.000 € | 300.000 € | −73 % |

Entscheidung fällt meist auf Realistic mit Worst-Case-Floor.

## Versteckte Kosten

- Manuelle Qualitätsprüfung der AI-Outputs
- Prompt-Engineering-Wartung (Modell-Updates zerschlagen Prompts)
- Datenpflege (RAG-Quellen aktuell halten)
- Incident Response

## Produktivitätsgewinn realistisch messen

Studien überschätzen oft den Effekt. Realistisch:

- 30–60 % der Zeitersparnis in Pilotstudien
- 10–25 % im produktiven Betrieb (Reibungsverluste)
- Schwankt stark nach Use Case

## Skalierungseffekte

AI-Lösungen skalieren in Token-Kosten linear, im Personalaufwand sublinear — der Punkt, an dem sich die Lösung rechnet, hängt vom Volumen ab.

!!! tip "Praxistipp"
    Vor Vertragsunterschrift: drei Szenarien rechnen, davon **eines ohne AI-Erfolg** (Was kostet das Projekt, wenn die AI nur 50 % der versprochenen Wirkung liefert?).
```

- [ ] **Step 4: `docs/business/07-daten.md` schreiben**

```markdown
# Datenverständnis

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Welche Datenfragen vor dem Start eines AI-Projekts geklärt werden müssen.

## Datenqualität > Modellqualität

In den meisten Projekten ist die Datenqualität der Flaschenhals, nicht die Modellarchitektur. Vor dem Start prüfen:

- Sind die Daten vollständig?
- Sind sie aktuell?
- Sind sie korrekt?
- Sind sie repräsentativ für den Use Case?

## Datenquellen und Datenverantwortung

Pro Datenquelle braucht es eine **verantwortliche Person** (Data Owner). Ohne Owner keine Datenstrategie.

## Strukturierte und unstrukturierte Daten

- Strukturiert: SQL-Datenbanken, ERP, CRM, Excel
- Unstrukturiert: PDFs, E-Mails, Verträge, Bilder

Beide sind relevant — viele AI-Projekte leben davon, unstrukturierte Daten zugänglich zu machen.

## Trainings-, Test- und Validierungsdaten

- **Trainingsdaten** sind die Beispiele, aus denen das Modell lernt
- **Validierungsdaten** werden während der Entwicklung zur Hyperparameter-Abstimmung genutzt
- **Testdaten** sind unsichtbar bis zur finalen Abnahme

Werden diese vermischt, ist jede Genauigkeitsangabe wertlos.

## Labels und Ground Truth

Ground Truth = "was die richtige Antwort ist". Wer legt sie fest? Wer prüft sie?

Projektleiterinnen sollten darauf bestehen, dass Ground Truth von **Fachexperten** definiert wird, nicht von Entwicklern allein.

## Datenqualität — fünf Dimensionen

| Dimension | Frage |
|-----------|-------|
| Vollständigkeit | Fehlen Werte? |
| Richtigkeit | Stimmen die Werte? |
| Aktualität | Wie alt sind sie? |
| Konsistenz | Gleicher Kunde, mehrere Schreibweisen? |
| Repräsentativität | Spiegeln die Daten die Realität der Anwendung? |

## Bias in Daten

Wenn die historischen Daten bestimmte Gruppen unterrepräsentieren, lernt das Modell die Diskriminierung mit. Beispiele: Bewerbungsdaten mit gender-tendenziösen Erfolgsmustern, Kreditdaten mit verzerrten Annahmen.

Gegenmaßnahmen:
- Daten-Audit vor Projektstart
- Faire Repräsentation prüfen
- Ergebnisse nach Gruppen stratifiziert auswerten

## Personenbezug und sensible Daten

Datenschutz beginnt bei der Frage: „Welche Daten **kommen rein**, welche dürfen **verarbeitet** werden, was darf das Modell daraus **ableiten**?"

- Klare Zweckbindung
- Datenminimierung
- Zugriffskontrolle
- Aufbewahrung und Löschung

## Datenklassifizierung

Typische Stufen:

- **Öffentlich** — keine Einschränkung
- **Intern** — Mitarbeiter
- **Vertraulich** — berechtigter Kreis
- **Streng vertraulich** — z. B. personenbezogene Daten, Geschäftsgeheimnisse

AI-Use-Cases sollten immer in der höchsten betroffenen Stufe bewertet werden.

## Data Governance

Data Governance regelt:

- Wer legt Qualitätskriterien fest?
- Wer prüft?
- Wer korrigiert?
- Wer haftet bei Fehlern?

## Zugriffsberechtigungen

Im AI-Kontext doppelt relevant:

- Wer darf das Modell trainieren / befüllen?
- Welche Daten bekommt das Modell bei Anfragen zu sehen?
- Welche Ausgaben dürfen das Unternehmen verlassen?

!!! warning "Compliance-Falle"
    Auch anonymisierte Daten können über Kombinationen reidentifizierbar sein. Das Modell kann daraus Personen rekonstruieren.
```

- [ ] **Step 5: Build prüfen**

Run:
```bash
source .venv/bin/activate && mkdocs build --strict
```

Erwartet: keine Warnungen.

- [ ] **Step 6: Commit**

```bash
git add docs/business/
git commit -m "feat(docs): phase 2 - business (4 themenbloecke)"
```

---

## Task 8: Phase 3 - Projektleitung

**Files:**
- Create: `docs/projektleitung/08-projektphasen.md`
- Create: `docs/projektleitung/09-anforderungen.md`
- Create: `docs/projektleitung/10-evaluation.md`
- Create: `docs/projektleitung/11-change.md`

- [ ] **Step 1: `docs/projektleitung/08-projektphasen.md` schreiben**

```markdown
# AI-Projektmanagement

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Den Verlauf eines AI-Projekts realistisch planen und kommunizieren.

## Unterschiede zu klassischen IT-Projekten

- **Hohe Unsicherheit** zu Projektbeginn (Modell kann oder kann nicht funktionieren)
- **Machbarkeit muss empirisch geprüft** werden, nicht nur theoretisch
- **Datensituation** ist oft der Show-Stopper
- **Iteration** ist Standard, nicht Wasserfall
- **Fachabnahme** ist schwieriger, weil Ausgaben probabilistisch sind

## Projektphasen

1. **Problemdefinition** — welches konkrete Problem, welches Ziel
2. **Use-Case-Auswahl** — Selektion aus dem Portfolio
3. **Datenprüfung** — was haben wir, was fehlt
4. **Proof of Concept (PoC)** — funktioniert es prinzipiell?
5. **Pilot** — wie verhält es sich im Realbetrieb mit echten Nutzern?
6. **Evaluation** — erreicht es die Qualitätsziele?
7. **Integration** — Anbindung an Bestandssysteme
8. **Produktiver Betrieb** — Go-Live mit Monitoring
9. **Monitoring und Verbesserung** — Drift, Updates, neue Use Cases

## Anforderungen als überprüfbare Kriterien

Eine AI-Anforderung ist nur dann nützlich, wenn sie **messbar** ist.

❌ „Das Modell soll Vertragsrisiken erkennen."
✅ „Das Modell erkennt 90 % der in Gold-Set definierten Vertragsrisiken (Recall 0,9) bei einer False-Positive-Rate ≤ 0,1."

## Erwartungsmanagement

Vor Projektstart klären:

- Was ist „Erfolg" konkret?
- Welche Mindestqualität ist akzeptabel?
- Was passiert, wenn die Mindestqualität verfehlt wird?
- Welche Ressourcen für Evaluation sind da?

## Stakeholder-Management

- **Fachbereich** — Anforderungen, Akzeptanz
- **IT** — Integration, Infrastruktur
- **Datenschutz** — DSGVO, AI Act
- **Recht** — Verträge, IP
- **Betriebsrat** — Beschäftigtendatenschutz
- **Management** — Budget, Eskalation

## Abhängigkeiten zu Datenschutz, Security, IT

Diese Stakeholder sind **kein nachträgliches Impediment**, sondern frühzeitig einzubinden. Ein Use Case ohne Datenschutz-Freigabe ist kein fertiger Use Case.

## Entscheidungspunkte und Abbruchkriterien

Jede Phase braucht **harte Kriterien**, wann es weitergeht und wann nicht.

Beispiel: PoC → Pilot
- Recall ≥ 0,7 im Gold-Set
- Antwortzeit < 5 s
- Keine kritischen Halluzinationen in 50 Testfällen

## Umgang mit Experimenten und Fehlschlägen

AI-Projekte sind Forschungsprojekte. 30–40 % der Pilotprojekte erreichen nicht die Produktion. Das ist **keine Schande**, sondern Risiko. Offen damit umgehen.

## AI Product Owner und AI-Projektleitung

- **AI Product Owner:** priorisiert Use Cases, definiert Akzeptanz
- **AI-Projektleitung:** steuert Phasen, Risiken, Stakeholder, Budget
- **Data Engineer / ML Engineer:** baut und betreibt
- **Fachexperte:** liefert Ground Truth, bewertet Qualität

!!! warning "Der wichtigste Satz"
    Ein erfolgreicher PoC ist noch kein produktionsfähiges System. Wer früh „funktioniert" ruft, gefährdet die spätere Qualität.
```

- [ ] **Step 2: `docs/projektleitung/09-anforderungen.md` schreiben**

```markdown
# Anforderungen & User Stories für AI

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Statt „Die AI muss immer richtig sein" messbare Qualitätsziele formulieren.

## Business-Anforderung vs. technische Lösung

Eine Anforderung beschreibt, **was** erreicht werden soll. Nicht **wie**.

❌ „Wir nehmen GPT-4 mit RAG und einer Pinecone-Vektor-DB."
✅ „Unsere Vertriebsmitarbeiter können Vertragsfragen in 30 s mit Quellenangabe beantworten lassen."

## Funktionale Anforderungen

- Beantwortet bestimmte Fragetypen
- Liefert Quellenangaben
- Erlaubt Rückfragen
- Übernimmt Folgeaktionen (z. B. E-Mail-Entwurf)

## Nichtfunktionale Anforderungen

| Kategorie | Beispiel |
|-----------|----------|
| Genauigkeit | Recall ≥ 0,9 auf Gold-Set |
| Antwortzeit | p95 ≤ 5 s |
| Kosten | ≤ 0,05 € pro Anfrage |
| Verfügbarkeit | 99,5 % monatlich |
| Datenschutz | DSGVO-konform, keine PII zu externen Anbietern |
| Nachvollziehbarkeit | jede Antwort mit Quellenangabe |
| Skalierbarkeit | 50.000 Anfragen / Tag ohne Performance-Einbruch |

## Beispiel einer AI-User-Story

> Als **Vertriebsmitarbeiter:in** möchte ich **eine Vertragsanfrage in natürlicher Sprache stellen können**, damit **ich Kundenfragen sofort beantworten kann, ohne in drei Systemen zu suchen**.
>
> **Akzeptanzkriterien:**
> - Antwort enthält Quellenangabe mit Dokumentenname und Abschnitt
> - Antwortzeit ≤ 5 s (p95)
> - Mindestens 80 % der Antworten werden vom Nutzer ohne Nachfrage akzeptiert
> - Bei Unsicherheit Rückfrage statt Antwort

## Akzeptanzkriterien für probabilistische Systeme

Probabilistische Systeme können nie „immer richtig" sein. Stattdessen:

- **Mindest-Recall** auf einem Gold-Set
- **Maximal-False-Positive-Rate**
- **Quote unsicherer Antworten** (bei der das Modell nachfragen soll)
- **Feedback-Quote** der Nutzer (Korrektheit aus Nutzersicht)

## Definition erlaubter und nicht erlaubter Antworten

Worauf darf die AI antworten? Worauf nicht? Beispiele:

- ❌ Rechtsverbindliche Auskünfte
- ❌ Medizinische Diagnosen
- ❌ Spekulation über Personen
- ✅ Wissensfragen im definierten Themenbereich
- ✅ Operative Anweisungen aus Handbüchern

## Eskalations- und Fallback-Verhalten

- Bei Unsicherheit: menschlicher Experte übernehmen
- Bei Out-of-Scope-Frage: „Das kann ich nicht beantworten" + Anlaufstelle nennen
- Bei technischem Fehler: definierter Fallback-Prozess

## Anforderungen an Quellenangaben

Welche Informationen sollen beigefügt werden?

- Dokumentname
- Abschnitt / Seitenzahl
- Direktes Zitat bei paraphrasierter Antwort
- Link auf Originalquelle (wenn intern verfügbar)

## Human-in-the-Loop-Anforderungen

Definieren:

- Welche Aktionen brauchen Freigabe?
- Welche können autonom laufen?
- Wer gibt frei? (Single-Person-Approval oder Vier-Augen-Prinzip)

## Golden Datasets und Testfälle

Mindestens **20–50 Testfälle** je Use Case, die:

- Den Normalfall abdecken
- Edge Cases enthalten
- Bekannte Fehler reproduzieren
- Domänenspezifische Begriffe nutzen

!!! tip "Akzeptanzkriterien-Formel"
    Jede AI-Anforderung sollte das Wort „messen" oder „nachweisen" enthalten — sonst ist es keine Anforderung, sondern eine Hoffnung.
```

- [ ] **Step 3: `docs/projektleitung/10-evaluation.md` schreiben**

```markdown
# Evaluation und Qualitätsmessung

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Ein Bewertungsraster für 20–50 echte Testfälle entwickeln.

## Warum Demo-Beispiele nicht reichen

„Das Modell hat im Meeting gut ausgesehen" ist kein Beleg für Produktionstauglichkeit. Dafür braucht es:

- Strukturiertes Testset (Gold-Set)
- Quantitative Metriken
- Reproduzierbarkeit
- Wiederholung nach jeder Änderung

## Offline- und Online-Evaluation

- **Offline:** Test-Set, vor dem Rollout
- **Online:** Nutzer-Feedback, Conversion, Bearbeitungszeit, Beschwerden

## Fachliche Testdatensätze

Testfälle müssen von **Fachexperten** erstellt werden, nicht von Entwicklern. Sonst testet man das Modell gegen die eigene Meinung.

## Ground Truth

Ground Truth ist das **menschlich festgelegt richtige Ergebnis**. Pro Testfall:

- Frage / Aufgabe
- Erwartete Antwort
- Optional: Begründung, warum das die richtige Antwort ist

## Metriken je nach Anwendung

| Anwendung | Metriken |
|-----------|----------|
| Klassifikation | Accuracy, Precision, Recall, F1 |
| Extraktion | Token-F1, Exact-Match |
| Generative Antwort | BLEU / ROUGE (Schwäche), LLM-as-a-Judge, manuelle Bewertung |
| RAG | Quellenkorrektheit, Antwort-Korrektheit, Halluzinationsrate |
| Konversation | Task Completion Rate, Nutzerzufriedenheit, Bearbeitungszeit |

## False Positives / False Negatives

- **False Positive:** AI gibt eine Antwort, die nicht hätte gegeben werden sollen
- **False Negative:** AI gibt keine Antwort, obwohl sie hätte antworten können

Was teurer ist, hängt vom Use Case ab:

- Bei Compliance-Checks: False Negative teurer (Risiko übersehen)
- Bei Werbung: False Positive teurer (Kunde verärgert)

## Antwortqualität

Für generative Antworten helfen strukturierte Bewertungsrubriken:

- **Korrektheit** (1–5)
- **Vollständigkeit** (1–5)
- **Verständlichkeit** (1–5)
- **Quellenangabe** vorhanden? (ja/nein)
- **Tonfall** passend? (ja/nein)

## LLM-as-a-Judge — Grenzen

Ein LLM kann ein anderes LLM bewerten — ist aber **nicht** neutral. Probleme:

- Bevorzugt eloquente Antworten
- Hat eigene Bias
- Übersieht fachliche Fehler

Nur als **eine** von mehreren Methoden einsetzen, nicht als einzige.

## A/B-Tests

Vergleich zweier Modellversionen oder Promptvarianten mit echtem Traffic. Achtung:

- Statistische Signifikanz brauchen
- Carry-Over-Effekte
- Ethische Bedenken bei ungleicher Qualität

## Fachliche Abnahme

Unverzichtbar: **Fachexperte** gibt endgültig frei. Wer das nicht einplant, baut Produkte, die niemand verantworten will.

## Red Teaming

 gezielte Suche nach Schwachstellen:

- Prompt-Injection
- Jailbreaks
- Bias in der Ausgabe
- Falsche Quellenangaben
- Verhalten bei Out-of-Scope-Fragen

## Regressionstests

Nach jeder Modell- oder Prompt-Änderung: vollständiges Gold-Set erneut durchlaufen. Sonst wandern Fehler unbemerkt zurück.

!!! warning "Eval ohne Konsequenz"
    Evaluation ohne klaren Prozess „nicht bestanden → Projekt zurück auf Start" ist Theater. Wer kein Nein akzeptiert, hat keine Evaluation.
```

- [ ] **Step 4: `docs/projektleitung/11-change.md` schreiben**

```markdown
# Change Management und AI-Adoption

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Eine AI-Einführung so kommunizieren, dass sie als Unterstützung und nicht als Bedrohung wahrgenommen wird.

## Ängste und Widerstände

- **Jobverlust** — häufigste Sorge
- **Kontrollverlust** — „das Ding entscheidet"
- **Inkompetenz** — „ich verstehe das nicht"
- **Sinnverlust** — „nur noch Knopf drücken"
- **Rechtliche Unsicherheit** — „wer haftet, wenn die AI irrt?"

## AI als Unterstützung, nicht Personalabbau

Kommunikationsregeln:

- AI übernimmt **Aufgaben**, nicht **Rollen**
- Wer Aufgaben abgibt, gewinnt Zeit für wertschöpfende Tätigkeit
- Keine Entlassungswellen versprechen (sondern Erweiterung)

## Kommunikation über Möglichkeiten UND Grenzen

Wer nur Chancen verkauft, verliert Glaubwürdigkeit beim ersten Fehler. Wer beides nennt, gewinnt sie zurück.

## Schulung verschiedener Nutzergruppen

- **Power-User** — Prompting, Tool-Verständnis
- **Gelegenheitsnutzer** — was kann die AI, was nicht
- **Manager** — Output-Bewertung, Risikointerpretation
- **Datenschutz-Belegschaft** — Compliance-Pflichten

## AI Champions und Multiplikatoren

Pro Team eine Person, die:

- Neue Use Cases vorschlägt
- Kolleg:innen coacht
- Feedback an die AI-Verantwortlichen gibt

## Nutzungsrichtlinien

Klar dokumentieren:

- Welche Eingaben sind erlaubt (keine PII in öffentliche Tools)
- Welche Ausgaben dürfen wie verwendet werden
- Welche KI-Tools dürfen genutzt werden

## Shadow AI

Mitarbeiter:innen nutzen **heimlich** KI-Tools. Drei Gegenmaßnahmen:

1. Erlaubte Tools einfach zugänglich machen
2. Anreize schaffen, sichtbar darüber zu sprechen
3. Schulungen anbieten, die Mehrwert schaffen

## Prozessveränderung statt nur Tool-Einführung

Die AI ist Mittel, nicht Zweck. Frage: Welcher **Prozess** ändert sich — und ist das überhaupt sinnvoll?

## Messung der tatsächlichen Nutzung

- Anzahl aktiver Nutzer:innen pro Quartal
- Anzahl Anfragen pro Nutzer:in
- Quote „hilfreich / nicht hilfreich"
- Verweildauer im Tool

Wenn Metriken stagnieren: nicht das Tool ist gescheitert, sondern das Change-Programm.

## Verantwortungsbewusste AI-Kultur

- Lernen aus Fehlern statt Schuldzuweisung
- Offenheit über Unsicherheiten
- Zeit und Budget für Evaluation
- Ethische Diskussion als regelmäßiger Termin

!!! tip "Praxistipp"
    Die Einführung ist gescheitert, wenn das Tool viel kostet und wenig genutzt wird. Das hat fast nie technische Gründe.
```

- [ ] **Step 5: Build prüfen**

Run:
```bash
source .venv/bin/activate && mkdocs build --strict
```

Erwartet: keine Warnungen.

- [ ] **Step 6: Commit**

```bash
git add docs/projektleitung/
git commit -m "feat(docs): phase 3 - projektleitung (4 themenbloecke)"
```

---

## Task 9: Glossar aufbauen

**Files:**
- Modify: `docs/glossar.md`
- Modify: `mkdocs.yml` — `glossar.md` aus `exclude_docs` entfernen und `Glossar: glossar.md` zur `nav`-Sektion hinzufügen

- [ ] **Step 1: `mkdocs.yml` aktualisieren — Glossar einbinden**

In `mkdocs.yml`:
1. In der `exclude_docs`-Zeile `glossar.md` entfernen (sodass nur `superpowers/` stehen bleibt).
2. In der `nav`-Sektion (am Ende, vor `nav` schließt) folgenden Eintrag hinzufügen:
   ```yaml
      - Glossar: glossar.md
   ```

- [ ] **Step 2: Glossar mit initialen 30 Begriffen füllen**

`docs/glossar.md` mit folgendem Inhalt überschreiben:

```markdown
# Glossar

Alphabetisches Verzeichnis der wichtigsten AI-Begriffe für die Projektleitung.

!!! info "Wie nutzen"
    - Suchfeld oben rechts nutzen (`/` zum Fokussieren)
    - Begriffsanker: jeder Eintrag hat einen Direktlink über `#begriff`
    - Themenseiten verlinken relevante Begriffe mit `#begriff` weiter unten auf der jeweiligen Seite

## A

### Agents
AI-Systeme, die eigenständig planen und Aktionen über Tools ausführen. Mehr in [Generative AI & LLMs](grundlagen/02-llms.md).

### AI Act (EU)
Europäische Verordnung zur Regulierung von KI-Systemen, 2024 in Kraft, gestaffelte Anwendung ab 2025. Mehr in [Datenschutz](verantwortung/16-datenschutz.md) (Folgeplan).

### Annotation
Manuelle Markierung von Beispielen, um Trainingsdaten oder Ground Truth aufzubauen.

### Anweisungs-Prompt
Vom Entwickler gesetzter Prompt, der das Verhalten des Modells über die gesamte Konversation hinweg beeinflusst. Synonym: System-Prompt.

### Accuracy
Anteil korrekter Vorhersagen an allen Vorhersagen. Mehr in [Evaluation](projektleitung/10-evaluation.md).

### Assistenz vs. Automatisierung
Assistenz = Mensch prüft jede AI-Ausgabe. Automatisierung = AI handelt autonom.

## B

### Bias
Systematische Verzerrung in Daten oder Modellen, die zu unfairen Ergebnissen führt. Mehr in [Datenverständnis](business/07-daten.md).

### BLEU
Metrik für maschinelle Übersetzung und Textgenerierung, misst n-Gram-Überlappung mit Referenztexten.

### Branching
Aufteilen einer Aufgabe in mehrere parallele Bearbeitungspfade (z. B. durch mehrere Agents).

## C

### Chain-of-Thought (CoT)
Prompting-Technik, die das Modell anleitet, Zwischenschritte explizit zu zeigen. Mehr in [Prompt Engineering](grundlagen/03-prompt-engineering.md).

### Chat-Modus
Interaktive Konversation ohne persistenter Anwendungslogik (Beispiel: ChatGPT).

### Compliance
Einhaltung gesetzlicher, regulatorischer und interner Vorschriften.

### Computer Vision
AI-Fachgebiet, das Bilder und Videos interpretiert.

### Context Window
Maximale Token-Anzahl, die ein Modell gleichzeitig verarbeiten kann.

### Copilot
AI-System, das Vorschläge macht, während der Mensch die Kontrolle behält.

## D

### Datenschutz-Folgenabschätzung (DSFA)
Prozess zur Bewertung von Risiken für Personen bei Datenverarbeitungen.

### Deep Learning
Machine Learning mit tiefen neuronalen Netzen.

### Drift
Veränderung der Daten- oder Modellverteilung über Zeit, die zu Qualitätsverlust führt.

## E

### Embedding
Vektorielle Repräsentation von Text, Bildern oder anderen Daten, die semantische Ähnlichkeit abbildet.

### End-to-End-Pipeline
Datenverarbeitungskette von der Rohquelle bis zum Endprodukt ohne manuelle Zwischenschritte.

### Ethical AI
Siehe [Responsible AI](verantwortung/18-responsible-ai.md) (Folgeplan).

### Evaluation
Strukturierte Messung der Modellqualität auf Testdaten. Mehr in [Evaluation und Qualitätsmessung](projektleitung/10-evaluation.md).

## F

### False Negative
Tatsächlich relevanter Fall, der vom Modell übersehen wurde.

### False Positive
Vom Modell als relevant markierter Fall, der irrelevant ist.

### Few-Shot-Prompting
Prompting mit 1–5 Beispielen im Prompt.

### Fine-Tuning
Nachtraining eines Modells auf domänenspezifischen Daten.

### Function Calling
Mechanismus, mit dem Modelle strukturierte Tool-Aufrufe auslösen können.

## G

### Genauigkeit
Siehe [Accuracy](#accuracy).

### Generative AI
AI-Systeme, die neue Inhalte erzeugen (Text, Bilder, Code, Audio).

### GFM
GitHub Flavored Markdown — Erweiterung von CommonMark um Tabellen, Tasklisten etc.

### Gold-Set
Manuell kuratiertes Testset mit bekannten korrekten Antworten.

### Governance
Strukturen und Regeln zur Steuerung von AI-Systemen im Unternehmen.

### Grounding
Verankerung von AI-Antworten in nachweisbaren Quellen (typisch für RAG).

## H

### Halluzination
Plausibel klingende, aber falsche AI-Ausgabe. Mehr in [Generative AI & LLMs](grundlagen/02-llms.md).

### Human-in-the-Loop
Menschliche Prüfung oder Freigabe als Teil des AI-Workflows.

## I

### Inferenz
Anwendung eines trainierten Modells auf neue Eingaben.

### Instruction Tuning
Training eines Modells, Instruktionen in natürlicher Sprache zu folgen.

### Integrations-Test
Test, der das Zusammenspiel mehrerer Komponenten prüft.

## J

### Jailbreak
Prompt-Technik, die Sicherheitsregeln eines Modells umgeht.

## K

### Klassifikation
AI-Aufgabe: Eingabe einer von mehreren Kategorien zuordnen.

### Kontextfenster
Siehe [Context Window](#context-window).

### Künstliche Intelligenz (AI)
Oberbegriff für Software, die Aufgaben übernimmt, für die Menschen Intelligenz benötigen.

## L

### Large Language Model (LLM)
Sprachmodell mit Milliarden von Parametern, trainiert auf riesigen Textmengen.

### Latenz
Zeit zwischen Anfrage und Antwort.

### Lernrate
Hyperparameter, der die Schrittgröße beim Training bestimmt.

### LLMOps
Betriebspraktiken für LLM-basierte Systeme.

### Logging
Strukturierte Aufzeichnung von Systemereignissen.

## M

### Machine Learning
Teilgebiet von AI: Modelle lernen aus Daten statt durch explizite Regeln.

### Mensch im Prozess
Siehe [Human-in-the-Loop](#human-in-the-loop).

### Modell-Drift
Veränderung der Modellqualität über Zeit durch veränderte Eingabedaten.

### Multimodal
Modelle, die mehrere Datenarten verarbeiten (Text, Bild, Audio, Video).

## N

### Natural Language Processing (NLP)
Verarbeitung natürlicher Sprache durch Software.

### Neuronales Netz
Funktionsarchitektur, inspiriert von biologischen Neuronen.

## O

### Open-Source-Modelle
Öffentlich verfügbare Modelle, oft mit frei nutzbaren Gewichten.

### Overfitting
Modell passt sich zu stark an Trainingsdaten an und generalisiert schlecht.

## P

### Precision
Anteil korrekter positiver Vorhersagen an allen positiven Vorhersagen.

### Pre-Training
Erstes Training eines Modells auf riesigen Datenmengen.

### Prompt
Eingabe an ein KI-Modell.

### Prompt Engineering
Disziplin, effektive Prompts zu schreiben.

### Prompt Injection
Angriff, der schädliche Anweisungen in den Prompt einschleust.

### Provenienz
Herkunft und Bearbeitungshistorie von Daten oder Outputs.

## Q

### Quantisierung
Reduktion der numerischen Präzision eines Modells (für Edge-Deployment).

## R

### RAG (Retrieval-Augmented Generation)
Architektur, bei der das Modell vor der Antwort Quellen aus einer Wissensbasis abruft.

### Reasoning-Modelle
Modelle, die intern in Zwischenschritten denken, bevor sie antworten.

### Recall
Anteil gefundener relevanter Fälle an allen relevanten Fällen.

### Red Teaming
Gezielte Suche nach Schwachstellen durch simulierte Angriffe.

### Responsible AI
AI-Entwicklung und -Nutzung unter Berücksichtigung ethischer, sozialer und rechtlicher Aspekte.

### ROUGE
Metrik für Textzusammenfassungen, misst Überlappung mit Referenzzusammenfassungen.

## S

### Schluss-Prompt
Letzte Anweisung im Prompt, die das Ausgabeformat festlegt.

### Self-Consistency
Technik, mehrere Antworten zu generieren und die häufigste zu wählen.

### Streaming
Auslieferung der Antwort in Echtzeit-Token, statt auf die komplette Antwort zu warten.

### Strukturierte Ausgabe
Ausgabe in einem definierten Format (z. B. JSON-Schema).

### System-Prompt
Siehe [Anweisungs-Prompt](#anweisungs-prompt).

## T

### Temperatur
Steuerungsparameter, der die Zufälligkeit der Modellausgabe beeinflusst.

### Testset
Siehe [Gold-Set](#gold-set).

### Token
Grundeinheit, in die ein Modell Text zerlegt (oft Wortteile).

### Tool Calling
Siehe [Function Calling](#function-calling).

### Training
Prozess, in dem ein Modell aus Daten lernt.

### Transformer
Modellarchitektur, die Grundlage der meisten modernen LLMs.

## U

### Uncertainty
Maß für die Unsicherheit einer Vorhersage.

### Unterversorgung
Daten-Situation, in der wichtige Gruppen unterrepräsentiert sind.

## V

### Validierung
Bewertung der Modellleistung auf vom Training getrennten Daten während der Entwicklung.

### Vektor-Datenbank
Datenbank zur effizienten Suche nach ähnlichen Embeddings.

### Verantwortlichkeit
Klar geregelte Person oder Rolle, die für ein AI-System zuständig ist.

## W

### Wahrscheinlichkeit
Mathematische Größe für die Plausibilität eines Ereignisses.

### Wissensassistent
AI-System, das Mitarbeiter:innen beim Zugriff auf Unternehmenswissen unterstützt.

## Z

### Zero-Shot-Prompting
Prompting ohne Beispiele.
```

- [ ] **Step 3: Build prüfen**

Run:
```bash
source .venv/bin/activate && mkdocs build --strict
```

Erwartet: keine Warnungen. `Glossar` taucht in der Seitenleiste und auf der Startseite-Suche auf.

- [ ] **Step 4: Glossar auf 100+ Begriffe erweitern (Spec-Ziel) und Commit**

Die obige Vorlage enthält ~80 Begriffe. Erweitere das Glossar um **mindestens 20 weitere fehlende Begriffe**, sodass die Spec-Zielgröße (100–150 Begriffe) erreicht wird. Besonders sinnvoll:

- **Datenschutz/Governance-Begriffe** (Phase 5, im Folge-Plan): DSGVO, Auftragsverarbeitung, Hochrisiko-System, AI Literacy, Roherhebung, Verantwortlicher
- **RAG/Agents-Begriffe** (Phase 4): Vektor-Datenbank, Ähnlichkeitssuche, Cosine Similarity, Tool-Aufruf, Reasoning Chain, Memory/Episodic Memory, Plan/Re-Plan
- **Operations-Begriffe**: Latenz, Throughput, Rate Limit, SLO/SLA, Canary Deployment, Shadow Traffic, Drift Detection
- **Business-Begriffe**: ROI, TCO, Time-to-Value, Vendor Lock-in, Make-or-Buy, Opportunitätskosten

Geprüft mit:

```bash
grep -cE '^### [A-ZÄÖÜa-zäöüß-]+' docs/glossar.md
```

Erwartet: ≥ 100.

Dann committen:

```bash
git add docs/glossar.md
git commit -m "feat(docs): glossar mit 100+ alphabetisch sortierten begriffen"
```

---

## Task 10: GitHub Actions Workflow für Deploy

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: Repository-Settings (manuell, nicht im Code)

- [ ] **Step 1: Workflow-Datei anlegen**

Verzeichnis `.github/workflows/` und Datei `.github/workflows/deploy.yml` mit folgendem Inhalt anlegen (dies ist die korrekte, finale Version — GitHub Actions `actions/deploy-pages` braucht `actions/configure-pages` + `actions/upload-pages-artifact`):

```yaml
name: Deploy MkDocs to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    name: Build site
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.11"
          cache: pip

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt

      - name: Build site (strict)
        run: mkdocs build --strict

      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: site

  deploy:
    name: Deploy to GitHub Pages
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: github pages deploy workflow"
```

- [ ] **Step 3: Repository-Einstellungen manuell prüfen (OUT OF BAND)**

Diese Schritte können nicht über das Repository ausgeführt werden. Der Nutzer muss in GitHub unter `Settings → Pages` Folgendes einstellen:

- Source: „GitHub Actions"
- Branch: `main`

Sobald der nächste Push auf `main` läuft, wird die Site unter `https://<github-user>.github.io/ai-training-starter/` verfügbar.

---

## Task 11: README überarbeiten und Live-URL verlinken

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Inhalt komplett ersetzen**

`README.md` mit folgendem Inhalt überschreiben:

```markdown
# AI-Ausbildung Projektleitung

Schulungsunterlagen und Materialien für die Projektleiterin im Bereich AI & Management.

**🌐 Live-Site:** [https://<github-user>.github.io/ai-training-starter/](https://<github-user>.github.io/ai-training-starter/)

## Inhalte

- **Lernpfad** — 5-Tage-Schulungsplan mit Lernzielen
- **Themenliste** — 18 Themenblöcke mit Lernzielen und Praxisübungen
- **Glossar** — alphabetisches Verzeichnis aller wichtigen AI-Begriffe

## Struktur

- `docs/` — Markdown-Quellen für die MkDocs-Site
- `AI-Themenliste-fuer-Projektleitung.md` — historische Originalfassung (bleibt als Referenz stehen)
- `mkdocs.yml` — Site-Konfiguration
- `requirements.txt` — pinned Python-Abhängigkeiten

## Lokal bauen

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve    # http://127.0.0.1:8000
```

Für einen statischen Build:

```bash
mkdocs build --strict
```

Das Ergebnis liegt in `site/`.

## Deployment

Push auf `main` löst die GitHub Actions Workflow `.github/workflows/deploy.yml` aus, die die Site nach GitHub Pages deployed (URL siehe oben).

## Versionierung

| Version | Datum       | Änderung |
|---------|-------------|----------|
| 1.0     | 23.07.2026  | Initiale Themenliste |
| 1.1     | 23.07.2026  | MkDocs-Site mit Phase 1–3, Glossar, GitHub-Pages-Deploy |
```

`<github-user>` durch den echten Usernamen ersetzen.

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: readme mit live-url und lokaler build-anleitung"
```

---

## Task 12: Final-Verifikation

**Files:**
- Potentiell: `docs/grundlagen/01-ai-grundlagen.md` (Cross-Task-Link-Cleanup)

- [ ] **Step 1: Build und Link-Prüfung**

Run:
```bash
source .venv/bin/activate
mkdocs build --strict 2>&1 | tee /tmp/mkdocs.log
```

Erwartet:
- Exit-Code 0
- `INFO - Documentation built in X seconds`
- Keine `WARNING` oder `ERROR`-Zeilen

Falls WARNING erscheint: zugehörige Datei reparieren, dann erneut bauen.

- [ ] **Step 2: Cross-Task-Link-Cleanup (bekannte Nacharbeit aus Task 6)**

In `docs/grundlagen/01-ai-grundlagen.md` steht noch der Backtick-Verweis `` `business/07-daten.md` (folgt in Phase 2) ``. Da `docs/business/07-daten.md` jetzt existiert (Task 7), ersetzen durch einen Markdown-Link:

```markdown
- [Datenverständnis](../business/07-daten.md)
```

Erneut `mkdocs build --strict` ausführen — Build muss clean bleiben.

- [ ] **Step 3: Lokal im Browser prüfen**

```bash
source .venv/bin/activate
mkdocs serve &
sleep 4
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8000/
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8000/grundlagen/01-ai-grundlagen/
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8000/glossar/
pkill -f "mkdocs serve"
```

Erwartet: jede URL gibt `200` zurück.

- [ ] **Step 4: Push-Hinweis für den Nutzer (nicht selbst pushen!)**

!!! warning "Out of band"
    Den `git push origin main` führt der Mensch aus, nicht der Implementer. Wenn der Workflow auf GitHub noch nie gelaufen ist, muss vorher in `Settings → Pages → Source: GitHub Actions` aktiviert werden.

!!! info "Ergebnis dieses Plans"
    Nach Abschluss ist die Site für Phase 1–3 + Glossar live. Phase 4 + 5, Übungen, Cheat-Sheets, Fallstudien und Folien kommen in Folge-Plänen.

---

## Self-Review

**1. Spec coverage:**

| Spec-Anforderung | Abgedeckt durch |
|---|---|
| MkDocs Material-Theme | Task 2 |
| Repository-Struktur (Phase-Verzeichnisse) | Task 6, 7, 8 |
| `index.md` als Landing-Page | Task 3 |
| `lernpfad.md` | Task 4 |
| `themenliste.md` Übersicht | Task 5 |
| 18 Themenblöcke | Tasks 6–8 (Phase 1–3 = 11) — **Phase 4–5 im Folge-Plan** |
| Glossar (100–150 Begriffe, initial 80+ im Glossar) | Task 9 |
| `mkdocs.yml` mit Navigation | Task 2 |
| GitHub Actions Workflow | Task 10 |
| README mit Live-URL | Task 11 |
| Build-Verifikation (`mkdocs build --strict`) | Tasks 6/7/8/9/12 |
| `print.css` als leerer Stub | Task 2 (Step 2), wird im Folgeplan ausgebaut |
| Folien (Reveal.js) | **Nicht im Scope** dieses Plans — eigener Folge-Plan |
| Übungen, Cheat-Sheets, Fallstudien | **Nicht im Scope** — eigene Folge-Pläne |

**Lücke:** Phase 4 + 5 (Themen 12–18 + Glossar-Begriffe wie `RAG`, `Agent`, `Embedding` etc.). Das ist im Spec explizit als späterer Plan vorgesehen — siehe Aufteilung am Anfang.

**2. Placeholder scan:**

- `<github-user>` — expliziter Platzhalter mit Anweisung zum Ersetzen (Tasks 2, 10, 11, 12). OK, mit Anleitung versehen.
- „im Folge-Plan" / „im Folgeplan" — bewusst, da explizit aus dem Scope dieses Plans ausgenommen. OK.

**3. Type consistency:**

- Konsistente Verzeichnisnamen (`grundlagen`, `business`, `projektleitung`) in Tasks 6–8, 9 und Navigation.
- Konsistente Dateinamen (`XX-thema.md`-Schema) in Task 6–8.
- Link-Format relativ (`../themenliste.md`) einheitlich in allen neuen Markdown-Dateien.
- Glossar-Anker (`### Begriff`) → Links via `#begriff` automatisch — MkDocs-Material-Standard.

Keine Inkonsistenzen gefunden.

---

## Hinweis auf Folgepläne

Dieser Plan deckt die **Foundation + Phase 1–3 + Glossar** ab und liefert eine funktionierende, deployte Site. Drei Folgepläne sind im Spec vorgesehen:

- **Plan B:** Phase 4 (`technik/`) + Phase 5 (`verantwortung/`) + Glossar-Erweiterung
- **Plan C:** Übungen, Cheat-Sheets, Fallstudien
- **Plan D:** Reveal.js-Folien (Template + 18 Decks mit Internet-Recherche und Bildern)

Diese Pläne werden nach Abschluss dieses Plans separat erstellt und ausgeführt.
