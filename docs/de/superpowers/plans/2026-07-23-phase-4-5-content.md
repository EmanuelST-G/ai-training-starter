# Plan B – Phase 4 + Phase 5 + Glossar-Erweiterung

**Ziel:** Die beiden noch fehlenden Lernphasen (Technikverständnis + Verantwortung) online bringen, sodass das Curriculum vollständig ist (alle 18 Themenblöcke). Plus Glossar um die zugehörigen Fachbegriffe erweitern.

**Architecture:** Erweitert den bestehenden MkDocs + Material-Setup. Zwei neue Themenverzeichnisse (`docs/technik/`, `docs/verantwortung/`) mit je 4 Topic-Pages. Navigation in `mkdocs.yml` ergänzen, Themenliste auf echte Markdown-Links umstellen, Glossar um die RAG/Security/Governance-Begriffe erweitern.

**Tech Stack:** bestehend (Python 3.14, mkdocs 1.6.1, mkdocs-material 9.5.50)

## Global Constraints

- Alle Markdown-Dateien POSIX-trailing-Newline, Umlaute ausgeschrieben
- Interne Links als relative Markdown-Links wo das Ziel existiert, sonst Backtick-Pfad
- `mkdocs build --strict` muss nach jeder Task clean sein (kein WARNING/ERROR)
- Build-Workflow und CI bleiben unverändert; Plan B nutzt sie automatisch
- NAV-Erweiterung in `mkdocs.yml` mit den Sektionen "Phase 4 – Technik" und "Phase 5 – Verantwortung"
- Glossar-Einträge alphabetisch sortiert, Headlines mit `### Begriff`

---

## File Structure

```
docs/
├── technik/                          # NEU – Phase 4 (4 Dateien)
│   ├── 12-rag.md
│   ├── 13-agents.md
│   ├── 14-integration.md
│   └── 15-betrieb.md
├── verantwortung/                    # NEU – Phase 5 (4 Dateien)
│   ├── 16-datenschutz.md
│   ├── 17-security.md
│   ├── 18-responsible-ai.md
│   └── 19-governance.md
├── glossar.md                        # Erweitert um ~15 Begriffe
└── themenliste.md                    # Markdown-Links statt Backticks, alle 18 Themen
mkdocs.yml                           # nav erweitert um Phase 4 + 5
```

---

## Task 1: Phase-4-Dateien anlegen (RAG, Agents, Integration, Betrieb)

**Files:**
- Create: `docs/technik/12-rag.md`
- Create: `docs/technik/13-agents.md`
- Create: `docs/technik/14-integration.md`
- Create: `docs/technik/15-betrieb.md`

Inhaltliche Vorgaben (jede Datei: H1 + Back-Link + Lernziel + Kernkonzepte + Praxis-Tipp + Querverweise mit Glossar-Ankern wo vorhanden):

**`docs/technik/12-rag.md`** (~120 Zeilen)
- Lernziel: Wie ein interner Wissensassistent grundsätzlich funktioniert
- Was ist Retrieval-Augmented Generation, warum LLMs Unternehmenswissen nicht automatisch kennen
- Dokumente aufbereiten und segmentieren
- Embeddings und semantische Suche – konzeptionell
- Vektordatenbanken
- Retrieval und Antwortgenerierung
- Quellenangaben und Nachvollziehbarkeit
- Berechtigungen auf Dokumentebene
- Aktualisierung des Wissens
- RAG vs. Fine-Tuning (Tabelle: Vorteile/Nachteile)
- Typische Fehler (falsche Dokumente gefunden, Antwort widerspricht Quelle, veraltete Dokumente, fehlende Zugriffsprüfung)
- Glossar-Querverweise: [[../glossar.md#rag-retrieval-augmented-generation|RAG]], [[../glossar.md#embeddings|Embeddings]], [[../glossar.md#vector-datenbank|Vektor-Datenbank]]
- !!! tip "Praxisbezug": Startet mit kleinen Dokumenten-Sets, evaluiert regelmäßig

**`docs/technik/13-agents.md`** (~120 Zeilen)
- Lernziel: Einen einfachen Agentenprozess als Ablaufdiagramm entwerfen
- Unterschied: Chatbot, Workflow, Agent (Tabelle)
- Tools und Function Calling
- AI kann: Informationen suchen, APIs aufrufen, Dokumente erstellen, Aktionen durchführen
- Single-Agent- und Multi-Agent-Systeme
- Speicher und Kontext
- Planung und Ausführung
- Autonomiegrade (Tabelle: Assistenz / Genehmigt / Eingeschränkt / Vollautonom)
- Freigabeschritte
- Fehlerbehandlung und Abbruchbedingungen
- Agentic Workflows vs. klassische Automatisierung
- Risiken autonomer Aktionen
- Warum nicht jeder Prozess einen Agenten braucht
- Praxisaufgabe: einfachen Agentenprozess skizzieren (ASCII-Diagramm)
- Glossar-Querverweise: Agents, Tool-Aufruf, Function Calling, Memory, Plan/Re-Plan

**`docs/technik/14-integration.md`** (~80 Zeilen)
- Lernziel: AI-Anwendungen an Bestandssysteme anbinden
- Integrationspfade: API, Embedded UI, Side-by-Side, Batch
- Authentifizierung und Autorisierung
- Datenflüsse: Pull vs. Push vs. Event-getrieben
- Latenz, Throughput, Rate Limits
- Stückpreis pro Anfrage und SLA
- Standard-Integrationen: Microsoft 365 Copilot, Salesforce Einstein, ServiceNow AI
- Custom-Integrationen: wann sinnvoll
- Pilotbetrieb und Skalierung
- Glossar-Querverweise: API, Event-Streaming, SLO/SLA

**`docs/technik/15-betrieb.md`** (~120 Zeilen)
- Lernziel: Eine AI-Lösung muss nach dem Go-live dauerhaft betreut werden
- Entwicklungs-, Test- und Produktionsumgebungen
- Versionierung: Modelle, Prompts, Wissensquellen, Testdatensätze
- Monitoring: Qualität, Kosten, Antwortzeit, Fehler, Nutzerfeedback
- Modell- und Daten-Drift (Definition + Erkennung)
- Anbieter- oder Modellwechsel (Plan B Strategie)
- Fallback-Modelle
- Rate Limits und Verfügbarkeit
- Incident- und Change-Management
- Kontinuierliche Evaluation
- Glossar-Querverweise: SLO, Drift Detection, Canary Deployment, Shadow Traffic, Rate Limit, Throughput

Build-Verifikation am Ende: `source .venv/bin/activate && mkdocs build --strict` muss clean sein. Commit-Message: `feat(docs): phase 4 - technik (4 themenbloecke)`.

---

## Task 2: Phase-5-Dateien anlegen (Datenschutz, Security, Responsible AI, Governance)

**Files:**
- Create: `docs/verantwortung/16-datenschutz.md`
- Create: `docs/verantwortung/17-security.md`
- Create: `docs/verantwortung/18-responsible-ai.md`
- Create: `docs/verantwortung/19-governance.md`

**`docs/verantwortung/16-datenschutz.md`** (~130 Zeilen)
- DSGVO-Grundlagen: personenbezogene Daten, besondere Datenkategorien
- Rechtsgrundlage und Zweckbindung
- Datenminimierung
- Auftragsverarbeitung (Beispiel-Vertrag)
- Drittlandtransfer (Schrems-II, Standardvertragsklauseln)
- Nutzung von Eingaben zu Trainingszwecken (US-Anbieter-typisch: Opt-out)
- Urheberrecht und geistiges Eigentum
- Vertrauliche Unternehmensinformationen
- Transparenz gegenüber Nutzern
- Dokumentationspflichten (Verzeichnis Verarbeitungstätigkeiten)
- EU AI Act:
  - Verbotene Praktiken
  - Hochrisiko-Systeme (Anhang III)
  - Transparenzpflichten
  - General-Purpose AI (Code of Practice)
  - AI Literacy (Art. 4)
- Rollen und Verantwortlichkeiten
- Wann Datenschutz/Rechtsabteilung/Betriebsrat eingebunden werden muss
- !!! info "Hinweis": Unternehmensspezifische Vorgaben ergänzen
- Glossar: DSGVO, Auftragsverarbeitung, Hochrisiko-System, AI Literacy, Verantwortlicher

**`docs/verantwortung/17-security.md`** (~130 Zeilen)
- Prompt Injection (direkt + indirekt über Dokumente/Webseiten)
- Datenabfluss (Daten-Leakage) Beispiele
- Jailbreaks
- Unsichere Tool-Aufrufe
- Überprivilegierte Agents
- Manipulierte Wissensquellen (RAG-Poisoning)
- Supply-Chain-Risiken
- Zugriffskontrolle und Least-Privilege-Prinzip
- Secrets und API Keys
- Logging ohne sensible Inhalte (PII-Filter)
- Freigaben für kritische Aktionen
- Incident Response für AI-Systeme (Forensik-spezifisch)
- Glossar: Prompt Injection, Jailbreak, Least-Privilege, Supply-Chain, Incident Response

**`docs/verantwortung/18-responsible-ai.md`** (~100 Zeilen)
- Verantwortlichkeit und Ownership
- AI-Systeminventar
- Risikoklassifizierung
- Fairness und Diskriminierung
- Transparenz und Erklärbarkeit
- Nachvollziehbarkeit
- Auditierbarkeit
- Bias-Erkennung und Mitigation
- Glossar: Responsible AI, Fairness, Erklärbarkeit, Auditierbarkeit

**`docs/verantwortung/19-governance.md`** (~110 Zeilen)
- AI-Systeminventar (Register)
- Freigabeprozesse (Stufen: Lab → Pilot → Produktion)
- Dokumentationspflichten: Zweck, Daten, Modell, Tests, bekannte Grenzen, Verantwortliche
- Modell- und Prompt-Versionierung
- Lieferantenmanagement
- Regelmäßige Neubewertung
- Abschaltung und Rückfalllösung
- Rollen: AI Product Owner, AI-Steuerungsgremium, CISO/CDO-Kooperation
- Glossar: Governance, Modell-Registry, Systeminventar, Vendor Management

Build-Verifikation, Commit: `feat(docs): phase 5 - verantwortung (4 themenbloecke)`.

---

## Task 3: Navigation und Themenliste-Update

**Files:**
- Modify: `mkdocs.yml` (`nav:` erweitern)
- Modify: `docs/themenliste.md` (Markdown-Links statt Backticks)
- Modify: `docs/lernpfad.md` (Phase 4 + 5 als echte Links, nicht mehr „folgt im Folge-Plan")
- Modify: `docs/index.md` (Phasen-Tabelle vervollständigen, falls betroffen)

`mkdocs.yml` `nav:` nach `Phase 3 – Projektleitung` ergänzen:

```yaml
  - Phase 4 – Technik:
      - RAG und Unternehmenswissen: technik/12-rag.md
      - AI Agents und Automatisierung: technik/13-agents.md
      - Integrationen und APIs: technik/14-integration.md
      - Produktiver Betrieb und LLMOps: technik/15-betrieb.md
  - Phase 5 – Verantwortung:
      - Datenschutz und EU AI Act: verantwortung/16-datenschutz.md
      - AI Security: verantwortung/17-security.md
      - Responsible AI: verantwortung/18-responsible-ai.md
      - AI Governance: verantwortung/19-governance.md
```

`docs/themenliste.md`: alle 18 Themen als Markdown-Links, ohne Hinweis auf fehlende Inhalte.

`docs/lernpfad.md`: Phase 4 + 5 Einträge von Plain-Text auf Markdown-Links umstellen (Ziele `technik/`, `verantwortung/`). Hinweis-Box „Spätere Plan-Phasen" entsprechend anpassen oder entfernen.

Build-Verifikation, Commit: `feat(nav): phase 4+5 in nav und themenliste`.

---

## Task 4: Glossar-Erweiterung

**Files:**
- Modify: `docs/glossar.md` (~15 neue Begriffe)

Hinzuzufügende Begriffe (alphabetisch eingeordnet, je 1–2 Sätze):

- **Agent-Drift** (Phase 4): Verschlechterung der Agent-Leistung über Zeit durch Änderungen im Kontext oder der Tool-Verfügbarkeit.
- **Agent-Loop** (Phase 4): Wiederholte Ausführung von Tool-Aufrufen durch ein Agentic-System.
- **Anhang III (EU AI Act)** (Phase 5): Liste von AI-Anwendungsfällen, die als hochriskant gelten.
- **Audit-Trail** (Phase 5): Vollständige, unveränderliche Aufzeichnung von Systemereignissen für Compliance und Forensik.
- **Bias-Audit** (Phase 5): Systematische Prüfung eines AI-Systems auf statistische Diskriminierung gegenüber geschützten Gruppen.
- **Canary Deployment** (Phase 4): Rollout-Strategie, bei der eine neue Modellversion nur einem kleinen Prozentsatz des Traffics ausgesetzt wird.
- **Context Drift** (Phase 4): Verschlechterung der Modellqualität durch veränderte Verteilung der Eingabedaten.
- **Datenminimierung** (Phase 5): DSGVO-Prinzip, nur die für den Zweck notwendigen Daten zu verarbeiten.
- **Drittlandtransfer** (Phase 5): Übermittlung personenbezogener Daten in Länder außerhalb des EWR.
- **DSFA / DPIA** (Phase 5): Datenschutz-Folgenabschätzung – vorgeschrieben für risikoreiche Verarbeitungen.
- **EU AI Act** (Phase 5): EU-Verordnung 2024/1689 zur Regulierung von KI-Systemen, stufenweise ab 2025 anwendbar.
- **Fallback-Modell** (Phase 4): Sekundäres Modell, das bei Ausfall oder Qualitätsverlust des primären Modells aktiviert wird.
- **Federated Learning** (Phase 4): Trainingsverfahren, bei dem Modelle lokal aktualisiert und nur Parameter aggregiert werden.
- **Forgetting (Recht auf Vergessenwerden)** (Phase 5): DSGVO-Pflicht, personenbezogene Daten auf Anfrage zu löschen.
- **General-Purpose AI** (Phase 5): AI-Modelle, die für eine breite Palette von Aufgaben eingesetzt werden können (z. B. LLMs).
- **Hochrisiko-System** (Phase 5): AI-System, das laut EU AI Act erhöhten Compliance-Anforderungen unterliegt.
- **Incident Response** (Phase 5): Strukturierte Reaktion auf Sicherheitsvorfälle, oft mit definierten Rollen und Eskalationsstufen.
- **Indirect Prompt Injection** (Phase 5): Angriff, bei dem schädliche Anweisungen über externe Inhalte (Dokumente, Webseiten) an das Modell gelangen.
- **Least-Privilege** (Phase 5): Sicherheitsprinzip, jedem Akteur nur die minimal nötigen Berechtigungen zu geben.
- **Lieferantenmanagement** (Phase 5): Prozess zur Bewertung und laufenden Kontrolle von AI-Anbietern.
- **Mandantenfähigkeit** (Phase 4): Fähigkeit einer AI-Lösung, Daten mehrerer Kunden oder Abteilungen isoliert zu verarbeiten.
- **Model Card** (Phase 5): Standardisiertes Dokument, das Fähigkeiten, Grenzen und Trainingsbedingungen eines Modells beschreibt.
- **Prompt-Injection** (Phase 5): Angriff, der schädliche Anweisungen direkt in Prompts einschleust.
- **RAG-Poisoning** (Phase 5): Angriff, bei dem die Wissensbasis eines RAG-Systems mit manipulierten Inhalten kontaminiert wird.
- **Red Teaming** (Phase 5): Systematische Suche nach Schwachstellen durch simulierte Angriffe.
- **Schatten-IT / Shadow AI** (Phase 5): Nutzung von AI-Tools ohne Wissen oder Freigabe der IT-/Sicherheitsabteilung.
- **Supply-Chain-Risiko** (Phase 5): Risiko durch kompromittierte Komponenten in der AI-Lieferkette (Modelle, Daten, Tools).
- **Vendor Lock-in** (Phase 4): Abhängigkeit von einem Anbieter, die Wechselkosten unangemessen hoch macht.
- **Verzeichnis der Verarbeitungstätigkeiten** (Phase 5): DSGVO-Pflicht-Dokumentation aller Datenverarbeitungen.

Insgesamt ~15–20 zusätzliche Begriffe. Verifikation: `grep -cE '^### ' docs/glossar.md` muss ≥ 140 sein.

Commit: `feat(docs): glossar um rag/security/governance-begriffe erweitert`.

---

## Task 5: Build- und Index-Verifikation

**Files:** keine Änderungen, nur Verifikation

- `mkdocs build --strict` (mit `set -o pipefail`) muss clean sein
- Alle 8 neuen Themen erscheinen via Filesystem-Discovery und in der Navigation
- Glossar-Anker für neue Begriffe funktionieren (intern testen)
- Optional: lokaler HTTP-Check analog zu Plan-A-Task 12 (Startseite, eine Phase-4-Seite, eine Phase-5-Seite)
- Commit falls nötig (z. B. README-Update mit Versionsnummer-Bump von 1.2 → 1.3)
- Branch-Übersicht im Ledger aktualisieren

Optionaler Commit: `docs(readme): v1.3 mit phase 4+5`.

---

## Self-Review

| Spec-Anforderung | Abgedeckt durch |
|---|---|
| Phase 4 (`docs/technik/`) – 4 Topic-Pages | Task 1 |
| Phase 5 (`docs/verantwortung/`) – 4 Topic-Pages | Task 2 |
| Navigation um Phase 4+5 erweitert | Task 3 |
| Themenliste zeigt alle 18 mit Markdown-Links | Task 3 |
| Lernpfad zeigt Phase 4+5 als echte Links | Task 3 |
| Glossar um RAG/Security/Governance-Begriffe erweitert | Task 4 |
| Build bleibt strict-clean | Task 5 |
| Optional README-Update | Task 5 |

**Lücke:** Slides, Übungen, Cheat-Sheets, Fallstudien – separat in Plan C und Plan D.
