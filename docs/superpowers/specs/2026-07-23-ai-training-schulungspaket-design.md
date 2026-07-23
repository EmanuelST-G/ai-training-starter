# AI-Ausbildung Projektleitung – Schulungspaket Design

**Stand:** 23.07.2026
**Status:** Design genehmigt (Brainstorming-Phase abgeschlossen)
**Autor:** Emanuel Stoisser (mit Claude)
**Version:** 1.0
**Hosting-Ziel:** GitHub Pages, sodass die fertige Site direkt aus dem Repository aufgerufen werden kann

---

## Ziel

Aus der bestehenden Themenliste `AI-Themenliste-fuer-Projektleitung.md` (v1.0) wird ein vollständiges, web-basiertes Schulungspaket für die Projektleiterin. Das Paket umfasst fünf im README vorgesehene Ergänzungen und eine saubere, durchsuchbare Struktur.

## Nicht-Ziele (YAGNI)

- Keine interaktiven AI-Features (Chatbot, Embedding-Suche über das Web)
- Kein LMS, kein Nutzer-Tracking, kein Login
- Keine automatische Folien-Generierung aus Markdown (Reveal.js-Folien werden manuell erstellt)
- Keine Übersetzung in andere Sprachen
- Kein CI-Build der Folien (sie liegen statisch im Repo)

---

## Zielgruppe und Kontext

- **Nutzerin:** Projektleiterin, Master in Business & Management
- **Umfang:** ca. 5–7 Schulungstage
- **Vorhandenes Material:** Themenliste v1.0 (18 Themenblöcke, 5-Tage-Lernpfad, Priorisierung, Übungsliste)
- **Beobachtung:** Die `README.md` verweist auf eine nicht existierende Datei `ai-training-themenliste.md` — wird im Zuge der Umstrukturierung behoben

---

## Architektur

### Werkzeuge

- **Static-Site-Generator:** MkDocs
- **Theme:** Material for MkDocs (`mkdocs-material`)
- **Folien-Framework:** Reveal.js (lokale Kopie im Repo, keine CDN-Abhängigkeit)
- **Hosting:** GitHub Pages via `mkdocs gh-deploy`
- **CI/CD:** GitHub Actions Workflow `.github/workflows/deploy.yml`

### Format-Strategie

- **Markdown als Single Source of Truth** für alle textuellen Inhalte
- **Reveal.js-HTML** für Präsentationsfolien (separates Verzeichnis, vom MkDocs-Build durchgereicht)
- **Material-Theme-Suche** erfasst Glossar, Themenblöcke und Übungen
- **Cheat-Sheets druckoptimiert** via `docs/stylesheets/print.css`

---

## Repository-Struktur

```
ai-training-starter/
├── README.md                        # Überarbeitete Startseite
├── mkdocs.yml                       # MkDocs-Konfiguration
├── docs/
│   ├── index.md                     # Landing-Page
│   ├── lernpfad.md                  # 5-Tage-Plan
│   ├── themenliste.md               # Übersicht aller Themen
│   ├── grundlagen/                  # Phase 1
│   │   ├── 01-ai-grundlagen.md
│   │   ├── 02-llms.md
│   │   └── 03-prompt-engineering.md
│   ├── business/                    # Phase 2
│   │   ├── 04-use-cases.md
│   │   ├── 05-bewertung.md
│   │   ├── 06-business-case.md
│   │   └── 07-daten.md
│   ├── projektleitung/              # Phase 3
│   │   ├── 08-projektphasen.md
│   │   ├── 09-anforderungen.md
│   │   ├── 10-evaluation.md
│   │   └── 11-change.md
│   ├── technik/                     # Phase 4
│   │   ├── 12-rag.md
│   │   ├── 13-agents.md
│   │   ├── 14-integration.md
│   │   └── 15-betrieb.md
│   ├── verantwortung/               # Phase 5
│   │   ├── 16-datenschutz.md
│   │   ├── 17-security.md
│   │   ├── 18-responsible-ai.md
│   │   └── 19-governance.md
│   ├── glossar.md                   # Alphabetisches Glossar
│   ├── uebungen/                    # Übungsaufgaben
│   │   ├── index.md                 # Übersicht
│   │   ├── 01-prompts.md
│   │   ├── 02-halluzinationen.md
│   │   └── ... (12–15 Übungen)
│   ├── cheatsheets/                 # Cheat-Sheets
│   │   ├── index.md                 # Übersicht
│   │   ├── phase-1-grundlagen.md
│   │   ├── phase-2-business.md
│   │   ├── phase-3-projektleitung.md
│   │   ├── phase-4-technik.md
│   │   └── phase-5-verantwortung.md
│   ├── fallstudien/                 # 3 Fallstudien
│   │   ├── index.md
│   │   ├── 01-rag-wissensassistent.md
│   │   ├── 02-vertriebscopilot.md
│   │   └── 03-agent-email.md
│   ├── slides/                      # Reveal.js-Folien
│   │   ├── index.md                 # Übersicht der Folien
│   │   ├── phase-1/
│   │   │   ├── 01-ai-grundlagen.html
│   │   │   └── ...
│   │   ├── reveal.js/               # Lokale Reveal.js-Bibliothek
│   │   └── theme.css                # Eigenes Branding-CSS
│   └── stylesheets/
│       └── print.css                # Druckoptimierung
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Pages Deploy
└── .gitignore
```

---

## Inhalts-Komponenten

### 1. Folien-Templates (Reveal.js)

Jede Themenblock-Folie folgt diesem Schema:

| # | Inhalt |
|---|--------|
| 1 | Titel + Lernziel |
| 2 | Überblick / Gliederung |
| 3–N | Kernkonzepte (Stichpunkte, Diagramme) |
| N+1 | Praxisaufgabe |
| N+2 | Reflexion / Take-aways |

- **Volumen:** 18 Themen × 8–12 Folien ≈ 150–220 Folien
- **Iterative Umsetzung:** zunächst 2–3 Themen als Vorlage, dann Rest
- **Template-Datei:** `docs/slides/_template.html` als Kopier-Vorlage
- **Branding:** `slides/theme.css` für konsistente Farben (Material Indigo als Akzent)

### 2. Übungsaufgaben mit Lösungen

Standard-Schema pro Übung:

```markdown
# Übung XY: <Titel>

**Phase:** <1–5>
**Dauer:** <Minuten>
**Voraussetzung:** <Themenblock-Referenz>
**Format:** <Einzelarbeit | Partnerarbeit | Gruppenarbeit>

## Aufgabe
<konkrete Aufgabenstellung>

## Hinweise
<Tipps, falls gewünscht>

## Lösung
<vollständige Lösung mit Erklärung>

## Reflexion
<Was kann die Projektleiterin daraus mitnehmen?>
```

**Geplanter Umfang:** 12–15 Übungen, abgeleitet aus der Liste "Praktische Übungen" in der Themenliste plus 2–3 zusätzliche (z. B. Prompt-Injection-Demo, AI-Risikoregister).

**Schwierigkeitsgrade:**
- **Einsteiger:** Prompts formulieren, Halluzinationen erkennen
- **Fortgeschritten:** Use-Case-Canvas, Akzeptanzkriterien
- **Projektleitung:** Vollständiger Projektplan, Risikoregister

### 3. Glossar

- **Alphabetisch sortiert**, ein Eintrag pro Begriff
- **Format:**
  ```markdown
  ### Begriff
  Kurze Definition (1–2 Sätze).
  Verwandt: [[Link]]
  ```
- **Umfang:** ca. 100–150 Begriffe aus den 18 Themenblöcken extrahiert
- **Suche:** in Material-Theme-Suche eingebunden (Begriffe erscheinen auch in Themenseiten)
- **Pflege:** Begriffe in Themenseiten markiert und mit `[[Glossar#Begriff]]` querverlinkt

### 4. Cheat-Sheets pro Phase

Pro Phase **genau eine Seite**, A4-druckoptimiert:

- **3–5 Kernbotschaften** als Merksätze
- **Wichtigste Begriffe** der Phase (Verweis auf Glossar)
- **Typische Fehler / Anti-Patterns**
- **Mini-Checkliste:** "Vor dem nächsten Termin klären"
- **Druck-Stylesheet:** `docs/stylesheets/print.css` sorgt für saubere A4-Ausgabe

### 5. Fallstudien (3 kompakte Cases)

Jede Fallstudie ca. 1–2 Seiten mit folgender Struktur:

- **Ausgangslage** (fiktives, aber realistisches Unternehmen)
- **Problem / Opportunity**
- **Lösungsansatz mit AI**
- **Was lief gut, was nicht**
- **Lessons Learned für Projektleiterinnen**

**Geplante Fälle:**

1. **RAG-Wissensassistent** im Mittelstand (interne Handbücher durchsuchbar machen)
2. **Vertriebscopilot** für Angebotserstellung (Entwurf aus Stichpunkten + Historie)
3. **Agent-basierte E-Mail-Triage** im Kundenservice (E-Mails klassifizieren und vorsortieren)

---

## Navigation und User Flow

### Startseite (`docs/index.md`)

- Zielbild und Zielgruppe prominent oben
- 5-Tage-Lernpfad als visuelle Roadmap
- Schnellzugriff-Karten auf: Themenliste · Glossar · Übungen · Cheat-Sheets · Folien · Fallstudien
- Phasen-Boxen mit Verlinkung zu allen Inhalten der jeweiligen Phase

### Seitenleiste (Material-Theme)

- Phasen als Sektionen mit einklappbaren Themenblöcken
- Globale Inhalte (Glossar, Übungen, Cheat-Sheets, Fallstudien, Folien) als Top-Level-Einträge
- Reihenfolge folgt Lernpfad

### Suche

- Material-Theme-Suche (`/` zum Fokussieren)
- Erfasst Glossar, Themeninhalte, Übungen
- Folien werden NICHT durchsucht (separate HTML-Dateien)

---

## mkdocs.yml (Konfiguration)

```yaml
site_name: AI-Ausbildung Projektleitung
site_description: Schulungsunterlagen für die Projektleiterin im Bereich AI & Management
repo_url: https://github.com/EmanuelST-G/ai-training-starter

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

nav:
  - Startseite: index.md
  - Lernpfad: lernpfad.md
  - Themenliste: themenliste.md
  - Phase 1 – Grundlagen:
      - AI-Grundlagen: grundlagen/01-ai-grundlagen.md
      - LLMs: grundlagen/02-llms.md
      - Prompt Engineering: grundlagen/03-prompt-engineering.md
  - Phase 2 – Business:
      - Use Cases: business/04-use-cases.md
      - Bewertung: business/05-bewertung.md
      - Business Case: business/06-business-case.md
      - Daten: business/07-daten.md
  - Phase 3 – Projektleitung:
      - Projektphasen: projektleitung/08-projektphasen.md
      - Anforderungen: projektleitung/09-anforderungen.md
      - Evaluation: projektleitung/10-evaluation.md
      - Change Management: projektleitung/11-change.md
  - Phase 4 – Technik:
      - RAG: technik/12-rag.md
      - Agents: technik/13-agents.md
      - Integration: technik/14-integration.md
      - Betrieb: technik/15-betrieb.md
  - Phase 5 – Verantwortung:
      - Datenschutz: verantwortung/16-datenschutz.md
      - Security: verantwortung/17-security.md
      - Responsible AI: verantwortung/18-responsible-ai.md
      - Governance: verantwortung/19-governance.md
  - Glossar: glossar.md
  - Übungen: uebungen/index.md
  - Cheat-Sheets: cheatsheets/index.md
  - Fallstudien: fallstudien/index.md
  - Folien: slides/index.md
```

---

## Build und Deployment

- **Lokal:** `mkdocs serve` startet Dev-Server auf `http://127.0.0.1:8000`
- **Build:** `mkdocs build` erzeugt statische Site in `site/`
- **GitHub Pages:** `mkdocs gh-deploy` pusht `site/` in einen `gh-pages`-Branch; **Live-URL:** `https://<github-user>.github.io/ai-training-starter/`
- **CI/CD:** `.github/workflows/deploy.yml` läuft bei Push auf `main`, installiert `mkdocs-material`, ruft `mkdocs gh-deploy --force`
- **Sichtbarkeit der Site:** die URL wird im README und in der Repository-Beschreibung (GitHub "About"-Sektion) verlinkt, damit Besucher sie sofort finden
- **Folien:** statische HTML-Dateien in `docs/slides/`, vom Build kopiert und unter `<Live-URL>/slides/...` erreichbar

---

## Umgang mit dem vorhandenen Material

- `AI-Themenliste-fuer-Projektleitung.md` → **Inhalt wird aufgeteilt:**
  - Übersichts-Seite `docs/themenliste.md`
  - Detaillierte Inhalte → 18 Themenblock-Dateien in `docs/{phase}/XX-*.md`
- `README.md` → **komplett überarbeitet:**
  - Kurze Beschreibung des Pakets
  - **Direkter Link auf die Live-Site** unter GitHub Pages (`https://<user>.github.io/ai-training-starter/`)
  - Link auf lokales `docs/themenliste.md` als Markdown-Quelle
  - Lokale Build-Anleitung (`pip install mkdocs-material`, `mkdocs serve`)
  - Hinweis zur Repository-Struktur für Mitwirkende
- Toter Link auf `ai-training-themenliste.md` entfällt

---

## Test- und Qualitätsstrategie

### Build-Tests (CI)

- `mkdocs build --strict` muss ohne Warnungen durchlaufen
- Alle internen Links müssen gültig sein (`--strict` aktiviert diese Prüfung)
- Reveal.js-HTML-Dateien müssen valide sein (manuell prüfen, im Browser öffnen)

### Inhaltliche Qualität

- **Längenprüfung:** Keine Themenseite > 3000 Wörter (in Cheat-Sheet aufteilen)
- **Glossar-Vollständigkeit:** Alle fett markierten Begriffe in Themenseiten haben einen Glossar-Eintrag
- **Übungs-Selbsttest:** Jede Übung muss mit der dokumentierten Lösung reproduzierbar sein

### Manuelle Reviews

- Folien werden im Browser geprüft (Navigation, Schriftgröße, Kontrast)
- Cheat-Sheets werden als PDF ausgedruckt und Layout geprüft

---

## Erfolgskriterien

1. **`mkdocs serve` startet ohne Fehler**, alle Seiten sind erreichbar
2. **GitHub Pages Deployment** funktioniert automatisch bei `main`-Push; die Site ist direkt unter `https://<user>.github.io/ai-training-starter/` aufrufbar (Live-URL wird im README prominent verlinkt)
3. **Suche** findet Glossar-Begriffe, Themeninhalte und Übungen
4. **18 Themenblöcke** sind aus der Themenliste v1.0 übernommen
5. **12+ Übungen, 5 Cheat-Sheets, 3 Fallstudien, 1 Glossar** sind verfügbar
6. **Reveal.js-Folien** sind für mindestens 3 Themenblöcke erstellt (Template-Vorlage)
7. **README** verweist korrekt auf `docs/themenliste.md`, die Live-URL und die lokale Build-Anleitung

---

## Risiken und Gegenmaßnahmen

| Risiko | Gegenmaßnahme |
|--------|---------------|
| Reveal.js wird nicht heruntergeladen (kein Internet) | Lokale Kopie im Repo (`docs/slides/reveal.js/`) |
| Python/mkdocs nicht installiert | Build-Anleitung in README, alternative: statische HTML-Site direkt ausliefern |
| Volumen zu groß für eine Iteration | Phasenweiser Rollout: erst Phase 1–3, dann 4–5 |
| Inkonsistente Markenfarbe | Theme-CSS einmal definieren, von allen Folien referenziert |
| Glossar veraltet | Datum im Header, "letzte Aktualisierung" auf Glossar-Seite |

---

## Platzhalter in diesem Dokument

- **`<github-user>` / `<user>`** in URLs: steht für den GitHub-Account-Namen des Repos. Bei `git remote -v` oder in den Repository-Einstellungen nachschlagen und vor dem ersten Deploy ersetzen.
- **`...` in Verzeichnisbäumen:** steht für weitere, gleichartige Dateien (z. B. mehrere Übungen oder Folien).

---

## Folgeentscheidungen (offen)

Diese werden **nicht** im aktuellen Implementierungszyklus entschieden:

- Hosting-URL (eigene Domain vs. `<user>.github.io/ai-training-starter/`)
- PDF-Download der Cheat-Sheets (manuell via Browser-Druck vs. CI-generiert)
- Übersetzungen (EN-Version)
- Anbindung an LMS / Kursverwaltung

---

## Was passiert nach diesem Design

1. Implementierungsplan mit `superpowers:writing-plans` Skill erstellen
2. Plan in `docs/superpowers/plans/2026-07-23-ai-training-schulungspaket-plan.md` ablegen
3. Implementierung in Iterationen (Phase 1–3 zuerst, dann Phase 4–5)
4. Folien-Templates iterativ: 2–3 Vorlagen, dann Rest
