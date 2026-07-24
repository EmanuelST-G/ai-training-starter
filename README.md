# AI-Ausbildung Projektleitung

Schulungsunterlagen und Materialien für die Projektleiterin im Bereich AI & Management.

**🌐 Live-Site:** [https://EmanuelST-G.github.io/ai-training-starter/](https://EmanuelST-G.github.io/ai-training-starter/)

## Inhalte

- **Lernpfad** — 5-Tage-Schulungsplan mit Lernzielen
- **Themenliste** — Übersicht über 18 Themenblöcke; Phasen 1–3 sind bereits verfügbar
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
| 1.2     | 23.07.2026  | Phase 1–3 in `nav` ergänzt, Glossar-Querverweise, README-Push-Trigger |
| 1.3     | 24.07.2026  | Phase 4 (Technik) + Phase 5 (Verantwortung) mit 8 neuen Themen, Glossar auf 144 Einträge erweitert |
| 1.4     | 24.07.2026  | Plan C: Übungen, Cheat-Sheets, Fallstudien, print.css A4 |
| 1.5     | 24.07.2026  | Plan D: 18 Reveal.js-Folien über alle 5 Phasen, lokal gebundelt, mit Internet-Recherche und Stand-23.07.2026-Quellenvermerken |
