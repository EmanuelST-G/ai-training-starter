# AI & Management – Themenliste für die Ausbildung der Projektleiterin

**Stand:** 23.07.2026
**Zielgruppe:** Projektleiterin, Master in Business & Management
**Umfang:** ca. 5–7 Schulungstage (je nach Vertiefung)
**Version:** 1.0

---

## Zielbild

Nach der Ausbildung kann die Projektleiterin:

- AI-Projekte fachlich beurteilen und steuern
- sinnvolle Use Cases identifizieren
- Anforderungen zwischen Business und Technik übersetzen
- Aufwand, Risiken und Nutzen realistisch einschätzen
- mit Entwicklern, Data Scientists, Management und Datenschutz auf Augenhöhe sprechen
- AI-Ergebnisse kritisch hinterfragen

Sie muss **nicht selbst Modelle programmieren**, aber verstehen, was technisch möglich, wirtschaftlich sinnvoll und organisatorisch notwendig ist.

---

## Inhalt

1. [AI-Grundlagen](#1-ai-grundlagen)
2. [Generative AI & LLMs](#2-generative-ai--large-language-models)
3. [Prompt Engineering](#3-prompt-engineering)
4. [AI-Anwendungsfälle im Business](#4-ai-anwendungsfälle-im-business)
5. [Use-Case-Bewertung und Priorisierung](#5-use-case-bewertung-und-priorisierung)
6. [Datenverständnis](#6-datenverständnis)
7. [RAG und Unternehmenswissen](#7-rag-und-unternehmenswissen)
8. [AI Agents und Automatisierung](#8-ai-agents-und-automatisierung)
9. [AI-Projektmanagement](#9-ai-projektmanagement)
10. [Anforderungen & User Stories für AI](#10-anforderungen--user-stories-für-ai)
11. [Evaluation und Qualitätsmessung](#11-evaluation-und-qualitätsmessung)
12. [Kosten und Wirtschaftlichkeit](#12-kosten-und-wirtschaftlichkeit)
13. [Datenschutz, Recht und EU AI Act](#13-datenschutz-recht-und-eu-ai-act)
14. [AI Security](#14-ai-security)
15. [AI Governance und Responsible AI](#15-ai-governance-und-responsible-ai)
16. [Produktiver Betrieb und LLMOps](#16-produktiver-betrieb-und-llmops)
17. [Change Management und AI Adoption](#17-change-management-und-ai-adoption)
18. [Strategische AI-Kompetenz](#18-strategische-ai-kompetenz)

---

## 1. AI-Grundlagen

- Was ist künstliche Intelligenz?
- Abgrenzung:
  - klassische Software
  - regelbasierte Systeme
  - Machine Learning
  - Deep Learning
  - generative AI
- Training, Inferenz und Modelle
- strukturierte und unstrukturierte Daten
- Wahrscheinlichkeiten statt deterministischer Ergebnisse
- Warum AI Fehler macht
- Überblick über wichtige AI-Arten:
  - Klassifikation
  - Prognose
  - Clustering
  - Empfehlungssysteme
  - Computer Vision
  - Sprachverarbeitung
  - generative AI

**Lernziel:** Erklären können, wann AI sinnvoll ist und wann klassische Software die bessere Wahl wäre.

---

## 2. Generative AI & Large Language Models

- Was sind LLMs?
- Grundprinzip Tokens und „nächstes wahrscheinliches Wort"
- Kontextfenster
- System-Prompt, User-Prompt, Assistant-Response
- Wichtige Anbieter im Überblick:
  - OpenAI (ChatGPT)
  - Anthropic (Claude)
  - Google (Gemini)
  - Microsoft Copilot
  - Open-Source-Modelle (LLaMA, Mistral, Qwen)
- Halluzinationen
- Temperatur und Determinismus
- strukturierte Ausgaben (JSON, Tool Calls)
- multimodale Modelle (Text, Bild, Audio, Video)
- Reasoning-Modelle
- Grenzen von LLMs:
  - fehlendes aktuelles Wissen
  - falsche Quellenangaben
  - Rechenfehler
  - Scheinsicherheit
  - Kontextverlust bei langen Gesprächen

**Lernziel:** Verstehen, warum ein überzeugend formulierter AI-Output trotzdem falsch sein kann.

---

## 3. Prompt Engineering

- Aufbau eines guten Prompts:
  - Rolle
  - Ziel
  - Kontext
  - Aufgabe
  - Einschränkungen
  - gewünschtes Ausgabeformat
  - Beispiele
- Zero-Shot und Few-Shot Prompting
- iteratives Prompting
- Prompt Templates
- gute Rückfragen durch das Modell
- Prompt-Patterns für:
  - Zusammenfassungen
  - Analysen
  - Klassifikation
  - Dokumentenerstellung
  - Projektmanagement
  - Entscheidungsunterstützung
- typische Prompt-Fehler
- Warum Prompt Engineering allein keine zuverlässige AI-Anwendung ergibt

**Praxis:** Aus einem schlechten Prompt schrittweise einen stabilen Business-Prompt entwickeln.

---

## 4. AI-Anwendungsfälle im Business

- Prozesse analysieren und AI-Potenziale identifizieren
- typische Use Cases:
  - Dokumentenanalyse
  - Wissenssuche
  - Kundenservice
  - E-Mail-Verarbeitung
  - Angebotserstellung
  - Meeting-Zusammenfassungen
  - Reporting
  - Forecasting
  - Qualitätsprüfung
  - Vertragsanalyse
  - Marketing & Content
  - Softwareentwicklung
- Assistenz vs. vollständige Automatisierung
- Human-in-the-Loop
- AI als Copilot, Reviewer oder autonomer Agent
- ungeeignete Use Cases erkennen
- Build vs. Buy
- Standardprodukt vs. individuelle Lösung

**Lernziel:** Aus einem Problem einen konkreten, bewertbaren AI-Use-Case formulieren können.

---

## 5. Use-Case-Bewertung und Priorisierung

Für jeden AI-Use-Case strukturiert bewerten:

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

Priorisierung nach:

- Business Value
- technische Machbarkeit
- Datenverfügbarkeit
- Risiko
- Umsetzungsaufwand
- Time-to-Value

**Praxis:** Eine einfache AI-Use-Case-Matrix erstellen.

---

## 6. Datenverständnis

- Warum Datenqualität meistens wichtiger ist als das Modell
- Datenquellen und Datenverantwortung
- strukturierte und unstrukturierte Daten
- Trainings-, Test- und Validierungsdaten
- Labels und Ground Truth
- Datenqualität:
  - Vollständigkeit
  - Richtigkeit
  - Aktualität
  - Konsistenz
  - Repräsentativität
- Bias in Daten
- personenbezogene und sensible Daten
- Datenklassifizierung
- Data Governance
- Zugriffsberechtigungen
- Aufbewahrung und Löschung

**Lernziel:** Welche Datenfragen vor dem Start eines AI-Projekts geklärt werden müssen.

---

## 7. RAG und Unternehmenswissen

- Was ist Retrieval-Augmented Generation?
- Warum ein LLM Unternehmenswissen nicht automatisch kennt
- Dokumente aufbereiten und segmentieren
- Embeddings und semantische Suche – konzeptionell
- Vektordatenbanken
- Retrieval und Antwortgenerierung
- Quellenangaben und Nachvollziehbarkeit
- Berechtigungen auf Dokumentebene
- Aktualisierung des Wissens
- RAG vs. Fine-Tuning
- typische Fehler:
  - falsche Dokumente gefunden
  - relevante Information nicht gefunden
  - Antwort widerspricht der Quelle
  - veraltete Dokumente
  - fehlende Zugriffsprüfung

**Lernziel:** Wie ein interner Wissensassistent grundsätzlich funktioniert.

---

## 8. AI Agents und Automatisierung

- Unterschied: Chatbot, Workflow, Agent
- Tools und Function Calling
- AI kann:
  - Informationen suchen
  - APIs aufrufen
  - Dokumente erstellen
  - Aktionen durchführen
- Single-Agent- und Multi-Agent-Systeme
- Speicher und Kontext
- Planung und Ausführung
- Autonomiegrade
- Freigabeschritte
- Fehlerbehandlung und Abbruchbedingungen
- Agentic Workflows vs. klassische Automatisierung
- Risiken autonomer Aktionen
- Warum nicht jeder Prozess einen Agenten braucht

**Praxis:** Einen einfachen Agentenprozess als Ablaufdiagramm entwerfen.

---

## 9. AI-Projektmanagement

- Unterschiede zwischen klassischen IT- und AI-Projekten
- hohe Unsicherheit zu Projektbeginn
- Machbarkeit nicht nur theoretisch, sondern mit echten Daten prüfen
- Projektphasen:
  1. Problemdefinition
  2. Use-Case-Auswahl
  3. Datenprüfung
  4. Proof of Concept
  5. Pilot
  6. Evaluation
  7. Integration
  8. produktiver Betrieb
  9. Monitoring und Verbesserung
- Anforderungen als überprüfbare Kriterien formulieren
- Erwartungsmanagement
- Stakeholdermanagement
- Abhängigkeiten zu Datenschutz, Security, IT
- Entscheidungspunkte und Abbruchkriterien
- Umgang mit Experimenten und Fehlschlägen
- AI Product Owner und AI-Projektleitung

> **Wichtig:** Ein erfolgreicher PoC ist noch kein produktionsfähiges System.

---

## 10. Anforderungen & User Stories für AI

- Business-Anforderung vs. technische Lösung
- funktionale Anforderungen
- nichtfunktionale Anforderungen:
  - Genauigkeit
  - Antwortzeit
  - Kosten
  - Verfügbarkeit
  - Datenschutz
  - Nachvollziehbarkeit
  - Skalierbarkeit
- Beispiel einer AI-User-Story
- Akzeptanzkriterien für probabilistische Systeme
- Definition erlaubter und nicht erlaubter Antworten
- Eskalations- und Fallback-Verhalten
- Anforderungen an Quellenangaben
- Human-in-the-Loop-Anforderungen
- Golden Datasets und Testfälle

**Lernziel:** Statt „Die AI muss immer richtig sein" messbare Qualitätsziele formulieren.

---

## 11. Evaluation und Qualitätsmessung

- Warum einzelne Demo-Beispiele nicht ausreichen
- Offline- und Online-Evaluation
- fachliche Testdatensätze
- Ground Truth
- Metriken je nach Anwendung:
  - Accuracy
  - Precision & Recall
  - False Positives / False Negatives
  - Antwortqualität
  - Quellenkorrektheit
  - Halluzinationsrate
  - Task Completion Rate
  - Bearbeitungszeit
  - Nutzerzufriedenheit
- LLM-as-a-Judge und dessen Grenzen
- A/B-Tests
- fachliche Abnahme
- Red Teaming
- Regressionstests nach Modell- oder Promptänderungen

**Praxis:** Bewertungsraster für 20–50 echte Testfälle entwickeln.

---

## 12. Kosten und Wirtschaftlichkeit

- Kostenarten:
  - Modellentwicklung
  - Lizenzen
  - API-Nutzung / Tokens
  - Infrastruktur
  - Datenaufbereitung
  - Integration
  - Evaluation
  - Betrieb und Monitoring
  - Change Management
- Cloud vs. On-Premises
- kleine vs. große Modelle
- Kosten pro Anfrage und pro Prozess
- ROI und Total Cost of Ownership
- Opportunitätskosten
- Produktivitätsgewinn realistisch messen
- Skalierungseffekte
- versteckte Kosten manueller Qualitätskontrolle

**Lernziel:** Einen Business Case mit mehreren Szenarien erstellen, statt nur Lizenzkosten zu vergleichen.

---

## 13. Datenschutz, Recht und EU AI Act

- DSGVO-Grundlagen für AI-Projekte
- personenbezogene und besondere Datenkategorien
- Rechtsgrundlage und Zweckbindung
- Datenminimierung
- Auftragsverarbeitung
- Drittlandtransfer
- Nutzung von Eingaben zu Trainingszwecken
- Urheberrecht und geistiges Eigentum
- vertrauliche Unternehmensinformationen
- Transparenz gegenüber Nutzern
- Dokumentationspflichten
- EU AI Act:
  - verbotene Praktiken
  - Hochrisiko-Systeme
  - Transparenzpflichten
  - General-Purpose AI
  - AI Literacy
- Rollen und Verantwortlichkeiten
- Wann Datenschutz, Rechtsabteilung und Betriebsrat eingebunden werden müssen

> **Hinweis:** Unternehmensspezifische Vorgaben durch Datenschutz-/Rechtsabteilung ergänzen.

---

## 14. AI Security

- Prompt Injection
- Indirect Prompt Injection über Dokumente und Webseiten
- Datenabfluss (Daten-Leakage)
- Jailbreaks
- unsichere Tool-Aufrufe
- überprivilegierte Agents
- manipulierte Wissensquellen
- Supply-Chain-Risiken
- Zugriffskontrolle
- Secrets und API Keys
- Logging ohne sensible Inhalte preiszugeben
- Freigaben für kritische Aktionen
- Least-Privilege-Prinzip
- Incident Response für AI-Systeme

**Lernziel:** Warum ein Agent nicht dieselben Berechtigungen wie ein Administrator erhalten darf.

---

## 15. AI Governance und Responsible AI

- Verantwortlichkeit und Ownership
- AI-Systeminventar
- Risikoklassifizierung
- Freigabeprozesse
- Dokumentation:
  - Zweck
  - Daten
  - Modell
  - Tests
  - bekannte Grenzen
  - Verantwortliche
- Fairness und Diskriminierung
- Transparenz und Erklärbarkeit
- Nachvollziehbarkeit
- Auditierbarkeit
- Modell- und Prompt-Versionierung
- Lieferantenmanagement
- regelmäßige Neubewertung
- Abschaltung und Rückfalllösung

---

## 16. Produktiver Betrieb und LLMOps

Auf Management-Niveau:

- Entwicklungs-, Test- und Produktionsumgebungen
- Versionierung von:
  - Modellen
  - Prompts
  - Wissensquellen
  - Testdatensätzen
- Monitoring:
  - Qualität
  - Kosten
  - Antwortzeit
  - Fehler
  - Nutzerfeedback
- Modell- und Daten-Drift
- Anbieter- oder Modellwechsel
- Fallback-Modelle
- Rate Limits und Verfügbarkeit
- Incident- und Change-Management
- kontinuierliche Evaluation

**Lernziel:** Eine AI-Lösung muss nach dem Go-live dauerhaft betreut werden.

---

## 17. Change Management und AI Adoption

- Ängste und Widerstände bei Mitarbeitern
- AI als Unterstützung statt bloßer Personalabbau
- Kommunikation über Möglichkeiten und Grenzen
- Schulung verschiedener Nutzergruppen
- AI Champions und Multiplikatoren
- Nutzungsrichtlinien
- Feedback-Kanäle
- Shadow AI
- Prozessveränderung statt nur Tool-Einführung
- Messung der tatsächlichen Nutzung
- verantwortungsbewusste AI-Kultur

---

## 18. Strategische AI-Kompetenz

- AI-Strategie aus Unternehmensstrategie ableiten
- Make, Buy oder Partner
- Plattformstrategie
- Anbieterabhängigkeit und Vendor Lock-in
- Cloud, On-Premises und hybride Lösungen
- zentrale Plattform vs. dezentrale Lösungen
- Aufbau interner Kompetenzen
- AI-Portfoliomanagement
- Quick Wins vs. strategische Fähigkeiten
- Wettbewerbsvorteil durch Daten, Prozesse oder Distribution
- Technologische Entwicklung beobachten, ohne jedem Hype zu folgen

---

## Empfohlene Reihenfolge als Lernpfad

### Phase 1 – Grundlagen (Tag 1)

1. AI-Grundlagen
2. Generative AI & LLMs
3. Prompt Engineering
4. Grenzen und Halluzinationen

### Phase 2 – Business (Tag 2)

5. Use Cases identifizieren
6. Use Cases priorisieren
7. Business Case und ROI
8. Datenverständnis

### Phase 3 – Projektleitung (Tag 3)

9. AI-Projektphasen
10. Anforderungen und Akzeptanzkriterien
11. Evaluation und Qualität
12. Stakeholder- und Change-Management

### Phase 4 – Technologieverständnis (Tag 4)

13. RAG
14. AI Agents
15. Integrationen und APIs
16. Produktiver Betrieb

### Phase 5 – Verantwortung (Tag 5)

17. Datenschutz und EU AI Act
18. AI Security
19. Responsible AI
20. AI Governance

---

## Praktische Übungen

- Einen schlechten und einen guten Prompt vergleichen
- Eine Halluzination gezielt provozieren und erkennen
- 10 mögliche AI-Use-Cases im Unternehmen sammeln
- Use Cases nach Wert, Risiko und Machbarkeit priorisieren
- Einen Use Case als AI-Projekt-Canvas ausarbeiten
- Business Case mit Best-, Realistic- und Worst-Case rechnen
- Akzeptanzkriterien für einen Wissensassistenten formulieren
- RAG-Prototyp mit echten Dokumenten testen
- 20 fachliche Testfragen samt erwarteten Antworten erstellen
- Eine Prompt-Injection demonstrieren
- AI-Risikoregister erstellen
- Vollständigen Projektplan vom PoC bis Betrieb entwickeln

---

## Priorisierung bei knapper Zeit

Wenn nur begrenzt Zeit zur Verfügung steht:

| Anteil | Themenfeld |
|---|---|
| 25 % | AI- und LLM-Grundverständnis |
| 25 % | Use-Case-Auswahl und Business Value |
| 20 % | AI-Projektmanagement und Evaluation |
| 15 % | Datenschutz, Security und Governance |
| 10 % | Daten, RAG und Agents |
| 5 % | Prompt Engineering |

**Kernbotschaft:** Für eine Projektleiterin sind Use-Case-Auswahl, realistische Anforderungen, Evaluation, Risiko und Wirtschaftlichkeit deutlich wichtiger als perfektes Prompting.
