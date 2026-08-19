# Plan C – Supplements & Fallstudien

**Ziel:** Die im Spec versprochenen drei Ergänzungen ausliefern: 12–15 Übungsaufgaben mit Lösungen, 5 druckoptimierte Cheat-Sheets, 3 kompakte Fallstudien. Plus die noch leere `print.css` mit A4-Druckregeln befüllen.

**Architecture:** Reine Markdown-Erweiterung des bestehenden MkDocs-Sites. Keine neuen Build-Schritte. `docs/uebungen/`, `docs/cheatsheets/`, `docs/fallstudien/` jeweils mit eigenem `index.md`. Übungen nach Phasen geordnet (mind. eine pro Phase). Cheat-Sheets eine Seite pro Phase. Fallstudien drei eigenständige Files. `mkdocs.yml` Nav erhält drei neue Top-Level-Einträge.

**Tech Stack:** bestehend

## Global Constraints

- Sprache durchgängig Deutsch
- Übungen folgen einheitlichem Schema (Aufgabe / Hinweise / Lösung / Reflexion)
- Cheat-Sheets druckfreundlich (CSS für A4 in `docs/stylesheets/print.css`)
- Fallstudien kompakt (max 2 Seiten je File), fiktive aber realistische Szenarien
- `mkdocs build --strict` clean
- Interne Links zu existierenden Themenseiten verwenden (sonst Backtick-Pfad)
- Dateien mit POSIX-Trailing-Newline, kein Trailing-Whitespace

## File Structure

```
docs/
├── stylesheets/print.css        # erweitert
├── uebungen/                    # NEU
│   ├── index.md                 # Übersicht mit Links zu allen Übungen
│   ├── 01-prompts-formulieren.md
│   ├── 02-halluzinationen-erkennen.md
│   ├── 03-use-cases-priorisieren.md
│   ├── 04-business-case-3-szenarien.md
│   ├── 05-akzeptanzkriterien-formulieren.md
│   ├── 06-rag-prototyp-bewerten.md
│   ├── 07-agentenprozess-skizzieren.md
│   ├── 08-prompt-injection-demo.md
│   ├── 09-eval-raster-erstellen.md
│   ├── 10-risikoregister-erstellen.md
│   ├── 11-projektplan-von-poc-zu-betrieb.md
│   ├── 12-change-kommunikation.md
│   ├── 13-datenschutz-folgenabschatzung.md
│   └── 14-leitlinien-responsible-ai.md
├── cheatsheets/                 # NEU
│   ├── index.md
│   ├── phase-1-grundlagen.md
│   ├── phase-2-business.md
│   ├── phase-3-projektleitung.md
│   ├── phase-4-technik.md
│   └── phase-5-verantwortung.md
└── fallstudien/                 # NEU
    ├── index.md
    ├── 01-rag-wissensassistent-mittelstand.md
    ├── 02-vertriebscopilot-angebotserstellung.md
    └── 03-agenten-email-triage-kundenservice.md
mkdocs.yml                       # nav erweitert
```

## Task 1: Navigation + Index-Seiten + print.css

**Files:**
- Modify: `mkdocs.yml` (nav-Erweiterung um Übungen, Cheat-Sheets, Fallstudien)
- Create: `docs/uebungen/index.md` (Übersicht)
- Create: `docs/cheatsheets/index.md` (Übersicht)
- Create: `docs/fallstudien/index.md` (Übersicht)
- Modify: `docs/stylesheets/print.css` (A4-Druckregeln)

`print.css` Inhalt (≥ ~30 Zeilen): @page mit A4/1,5cm Rändern, Schriftgröße 11pt für `.md-typeset`, Cheat-Sheet-Sectionen mit `page-break-inside: avoid` und `break-inside: avoid`, Tabellen-/Code-Font-Anpassung, dunkle Modus-Farben für `print-color-adjust: exact`.

Die drei `index.md` Seiten listen alle Inhalte der jeweiligen Sektion. Für Übungen: kurze Tabelle mit Name, Phase, Dauer. Für Cheat-Sheets: kurze Aufzählung. Für Fallstudien: Cards mit Link + 1-Satz-Abstract.

`mkdocs.yml` nav ergänzen:

```yaml
  - Übungen: uebungen/index.md
  - Cheat-Sheets: cheatsheets/index.md
  - Fallstudien: fallstudien/index.md
```

Commit: `feat(nav): uebungen cheatsheets fallstudien indexes und print.css`.

## Task 2: 14 Übungsaufgaben mit Lösungen

**Files:** 14 Files unter `docs/uebungen/01-14-*.md` (siehe oben)

Jede Übung folgt strikt diesem Schema:

```markdown
# Übung XY: <Titel>

[← zurück zur Übungsübersicht](index.md)

**Phase:** <1–5>
**Dauer:** <Minuten>
**Voraussetzung:** <Themenblock-Referenz oder Phase>
**Format:** <Einzelarbeit | Partnerarbeit | Gruppenarbeit>

## Aufgabe
<konkrete Aufgabenstellung>

## Hinweise
<Tipps, falls gewünscht>

## Lösung
<vollständige Lösung mit Erklärung>

## Reflexion
<was nimmt die Projektleiterin mit? 2–3 Sätze>
```

Schwierigkeitsgrade:
- 01–03 einfach (Phase 1)
- 04–07 mittel (Phase 2 + 4)
- 08–10 fortgeschritten (Phase 5)
- 11–14 Projektleitung (Phase 3, mit Eigenrecherche-Anteil)

Commit: `feat(docs): 14 uebungsaufgaben mit loesungen`.

## Task 3: 5 Cheat-Sheets pro Phase

**Files:** 5 Files unter `docs/cheatsheets/phase-*.md`

Jedes Cheat-Sheet hat:
- `# Cheat-Sheet Phase X – <Titel>` H1 (Phase als Kurzangabe)
- 1-Satz-Lernziel
- 4–6 Kernbotschaften als nummerierte Merksätze
- 5–8 wichtigste Begriffe als Liste (jeweils Markdown-Link zum Glossar)
- 3–5 typische Fehler / Anti-Patterns
- Mini-Checkliste „Vor dem nächsten Termin klären"
- Druckhinweis („für A4 optimiert; via Browser-Druck oder `git clone`")

Commit: `feat(docs): 5 cheatsheets pro phase`.

## Task 4: 3 Fallstudien

**Files:** 3 Files unter `docs/fallstudien/01-03-*.md`

Jede Fallstudie hat:
- `# Fallstudie XY: <Titel>` H1
- `**Branche:** …`, `**Unternehmensgröße:** …`, `**KI-Komponente:** …`
- `## Ausgangslage` (kompakt, 1 Absatz)
- `## Problem / Opportunity` (1 Absatz)
- `## Lösungsansatz mit AI` (was wurde gebaut/versucht)
- `## Was lief gut, was nicht` (ehrlich, 1 Absatz)
- `## Lessons Learned für Projektleiterinnen` (3–5 Bullet Points)

Die drei Fälle sind:
1. **RAG-Wissensassistent im Mittelstand** (Industrie- oder Maschinenbau-Mittelstand, ~600 MA, interner Wissensassistent über 8000 Maschinenbau-Dokumente, Scheitern an Wissens-Aktualisierung; Lehre: Pflege-Disziplin + Drift-Detection)
2. **Vertriebscopilot für Angebotserstellung** (Dienstleister, ~150 MA, AI-Entwurf aus CRM-Daten + Stichpunkten; gelungen bei Standardfällen, gescheitert bei Nischen-Individualisierung; Lehre: Human-in-the-Loop + Diskrepanzkontrolle)
3. **Agent-basierte E-Mail-Triage im Kundenservice** (Versandhandel, ~1200 MA, E-Mail-Klassifizierung + Routing-Agent; Erfolg bei strukturierten Anfragen, Prompt-Injection-Versuch in Kundenmail; Lehre: Input-Validierung + Eskalationspfade)

Commit: `feat(docs): 3 fallstudien mit lessons learned`.

## Task 5: Verification + Push

- `mkdocs build --strict` (clean)
- HTTP-Sanity-Check analog Task 12 (Startseite, eine Übung, ein Cheat-Sheet, eine Fallstudie)
- README bumpen (v1.4)
- Push `git push origin main`
- Branch `main` clean

Commit: `docs(readme): v1.4 mit uebungen cheatsheets fallstudien`.

---

## Self-Review

| Spec-Anforderung | Abgedeckt durch |
|---|---|
| 12–15 Übungen mit Lösungen | Task 2 (14 Übungen) |
| 5 Cheat-Sheets pro Phase | Task 3 |
| 3 Fallstudien | Task 4 |
| Print.css für A4 | Task 1 |
| Spec-konformes Schema pro Übung | Task 2 |
