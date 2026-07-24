# Glossar

Alphabetisches Verzeichnis der wichtigsten AI-Begriffe für die Projektleitung.

!!! info "Wie nutzen"
    - Suchfeld oben rechts nutzen (`/` zum Fokussieren)
    - Begriffsanker: jeder Eintrag hat einen Direktlink über `#begriff`
    - Themenseiten verlinken relevante Begriffe mit `#begriff` weiter unten auf der jeweiligen Seite

## A

### A/B-Test
Kontrollierter Vergleich zweier Varianten mit vergleichbaren Nutzergruppen oder Traffic-Anteilen, um Unterschiede in Wirkung und Qualität zu messen.

### Accuracy
Anteil korrekter Vorhersagen an allen Vorhersagen. Mehr in [Evaluation](projektleitung/10-evaluation.md).

### Agent-Drift
Verschlechterung der Agent-Leistung über Zeit durch Änderungen im Kontext oder der Tool-Verfügbarkeit.

### Agent-Loop
Wiederholte Ausführung von Tool-Aufrufen durch ein Agentic-System.

### Agents
AI-Systeme, die eigenständig planen und Aktionen über Tools ausführen. Mehr in [Generative AI & LLMs](grundlagen/02-llms.md).

### AI Act (EU)
Europäische Verordnung zur Regulierung von KI-Systemen, 2024 in Kraft, gestaffelte Anwendung ab 2025. Mehr in `verantwortung/16-datenschutz.md` (Folgeplan).

### AI Literacy
Fähigkeit, AI-Konzepte zu verstehen, AI-Tools kritisch zu nutzen und gesellschaftliche Implikationen einzuordnen. Mehr in `verantwortung/19-governance.md` (Folgeplan).

### Akzeptanzkriterien
Messbare Bedingungen, die eine Lösung erfüllen muss, damit Fachbereich und Auftraggeber sie abnehmen können.

### Anhang III (EU AI Act)
Liste von AI-Anwendungsfällen, die laut EU AI Act als hochriskant gelten.

### Annotation
Manuelle Markierung von Beispielen, um Trainingsdaten oder Ground Truth aufzubauen.

### Anweisungs-Prompt
Vom Entwickler gesetzter Prompt, der das Verhalten des Modells über die gesamte Konversation hinweg beeinflusst. Synonym: System-Prompt.

### Assistenz vs. Automatisierung
Assistenz = Mensch prüft jede AI-Ausgabe. Automatisierung = AI handelt autonom.

### Audit-Trail
Vollständige, unveränderliche Aufzeichnung von Systemereignissen für Compliance und Forensik.

### Auftragsverarbeitung
Verarbeitung personenbezogener Daten im Auftrag des Verantwortlichen durch einen Auftragsverarbeiter (DSGVO-Begriff).

## Ä

### Ähnlichkeitssuche
Suche nach den Embeddings in einer Vektor-Datenbank, die einer Anfrage am nächsten liegen (Nearest-Neighbor-Lookup).

## B

### Bias
Systematische Verzerrung in Daten oder Modellen, die zu unfairen Ergebnissen führt. Mehr in [Datenverständnis](business/07-daten.md).

### Bias-Audit
Systematische Prüfung eines AI-Systems auf statistische Diskriminierung gegenüber geschützten Gruppen.

### BLEU
Metrik für maschinelle Übersetzung und Textgenerierung, misst n-Gram-Überlappung mit Referenztexten.

### Branching
Aufteilen einer Aufgabe in mehrere parallele Bearbeitungspfade (z. B. durch mehrere Agents).

## C

### Canary Deployment
Rollout-Strategie, bei der eine neue Version zunächst an einem kleinen Anteil des Traffics ausgerollt wird, bevor sie breit verfügbar wird.

### Chain-of-Thought (CoT)
Prompting-Technik, die das Modell anleitet, Zwischenschritte explizit zu zeigen. Mehr in [Prompt Engineering](grundlagen/03-prompt-engineering.md).

### Change Management
Geplante Begleitung organisatorischer Veränderungen durch Kommunikation, Beteiligung, Schulung und Erfolgsmessung.

### Chat-Modus
Interaktive Konversation ohne persistente Anwendungslogik (Beispiel: ChatGPT).

### Compliance
Einhaltung gesetzlicher, regulatorischer und interner Vorschriften.

### Computer Vision
AI-Fachgebiet, das Bilder und Videos interpretiert.

### Context Drift
Verschlechterung der Modellqualität durch veränderte Verteilung der Eingabedaten.

### Context Window
Maximale Token-Anzahl, die ein Modell gleichzeitig verarbeiten kann.

### Copilot
AI-System, das Vorschläge macht, während der Mensch die Kontrolle behält.

### Cosine Similarity
Ähnlichkeitsmaß zwischen zwei Embedding-Vektoren, gemessen als Kosinus des Winkels zwischen ihnen.

## D

### Datenminimierung
DSGVO-Grundsatz, nach dem nur die für einen klaren Zweck erforderlichen personenbezogenen Daten verarbeitet werden dürfen.

### Datenschutz-Folgenabschätzung (DSFA)
Prozess zur Bewertung von Risiken für Personen bei Datenverarbeitungen.

### Deep Learning
Machine Learning mit tiefen neuronalen Netzen.

### Drift
Veränderung der Daten- oder Modellverteilung über Zeit, die zu Qualitätsverlust führt.

### Drift Detection
Automatisierte Überwachung, die Verteilungsverschiebungen in Eingabedaten oder Modell-Outputs erkennt.

### Drittlandtransfer
Übermittlung personenbezogener Daten in Länder außerhalb des EWR.

### DSGVO
Datenschutz-Grundverordnung der EU, in Kraft seit 2018, regelt Verarbeitung personenbezogener Daten.

## E

### Embedding
Vektorielle Repräsentation von Text, Bildern oder anderen Daten, die semantische Ähnlichkeit abbildet.

### End-to-End-Pipeline
Datenverarbeitungskette von der Rohquelle bis zum Endprodukt ohne manuelle Zwischenschritte.

### Episodic Memory
Gedächtnisteil eines Agenten, der vergangene Aktionen und Ergebnisse für spätere Entscheidungen speichert.

### Ethical AI
Siehe `verantwortung/18-responsible-ai.md` (Folgeplan).

### Evaluation
Strukturierte Messung der Modellqualität auf Testdaten. Mehr in [Evaluation und Qualitätsmessung](projektleitung/10-evaluation.md).

## F

### Fallback-Modell
Sekundäres Modell, das bei Ausfall oder Qualitätsverlust des primären Modells aktiviert wird.

### False Negative
Tatsächlich relevanter Fall, der vom Modell übersehen wurde.

### False Positive
Vom Modell als relevanter markierter Fall, der irrelevant ist.

### Federated Learning
Trainingsverfahren, bei dem Modelle lokal aktualisiert und nur Parameter aggregiert werden.

### Few-Shot-Prompting
Prompting mit 1–5 Beispielen im Prompt.

### Fine-Tuning
Nachtraining eines Modells auf domänenspezifischen Daten.

### Forgetting (Recht auf Vergessenwerden)
DSGVO-Pflicht, personenbezogene Daten auf Anfrage zu löschen.

### Function Calling
Mechanismus, mit dem Modelle strukturierte Tool-Aufrufe auslösen können.

## G

### Genauigkeit
Siehe [Accuracy](#accuracy).

### General-Purpose AI
AI-Modelle, die für eine breite Palette von Aufgaben eingesetzt werden können (z. B. LLMs).

### Generative AI
AI-Systeme, die neue Inhalte erzeugen (Text, Bilder, Code, Audio).

### GFM
GitHub Flavored Markdown — Erweiterung von CommonMark um Tabellen, Tasklisten etc.

### Gold-Set
Manuell kuratiertes Testset mit bekannten korrekten Antworten.

### Governance
Strukturen und Regeln zur Steuerung von AI-Systemen im Unternehmen.

### Ground Truth
Fachlich festgelegte Referenzantwort oder korrekte Kennzeichnung, gegen die Modell-Ausgaben bewertet werden.

### Grounding
Verankerung von AI-Antworten in nachweisbaren Quellen (typisch für RAG).

## H

### Halluzination
Plausibel klingende, aber falsche AI-Ausgabe. Mehr in [Generative AI & LLMs](grundlagen/02-llms.md).

### Hochrisiko-System
Kategorie im AI Act, die Anwendungen umfasst, die erhebliche Risiken für Gesundheit, Sicherheit oder Grundrechte bergen.

### Human-in-the-Loop
Menschliche Prüfung oder Freigabe als Teil des AI-Workflows.

## I

### Incident Response
Strukturierte Reaktion auf Sicherheitsvorfälle, oft mit definierten Rollen und Eskalationsstufen.

### Indirect Prompt Injection
Angriff, bei dem schädliche Anweisungen über externe Inhalte (Dokumente, Webseiten) an das Modell gelangen.

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

### Least-Privilege
Sicherheitsprinzip, jedem Akteur nur die minimal nötigen Berechtigungen zu geben.

### Lernrate
Hyperparameter, der die Schrittgröße beim Training bestimmt.

### Lieferantenmanagement
Prozess zur Bewertung und laufenden Kontrolle von AI-Anbietern.

### LLM-as-a-Judge
Evaluationsmethode, bei der ein Sprachmodell Antworten anhand eines vorgegebenen Bewertungsrasters beurteilt; menschliche Kontrolle bleibt erforderlich.

### LLMOps
Betriebspraktiken für LLM-basierte Systeme.

### Logging
Strukturierte Aufzeichnung von Systemereignissen.

## M

### Machine Learning
Teilgebiet von AI: Modelle lernen aus Daten statt durch explizite Regeln.

### Make-or-Buy
Entscheidung, eine AI-Fähigkeit selbst zu entwickeln oder als Dienstleistung/Produkt zuzukaufen.

### Mandantenfähigkeit
Fähigkeit einer AI-Lösung, Daten mehrerer Kunden oder Abteilungen isoliert zu verarbeiten.

### Memory
Komponente eines Agenten, die Informationen über mehrere Konversations- oder Arbeitsschritte hinweg speichert.

### Mensch im Prozess
Siehe [Human-in-the-Loop](#human-in-the-loop).

### Model Card
Standardisiertes Dokument, das Fähigkeiten, Grenzen und Trainingsbedingungen eines Modells beschreibt.

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

### Opportunitätskosten
Wert der besten nicht gewählten Alternative, der durch eine Entscheidung entgangen ist (z. B. eigene Entwicklung vs. Zukauf).

### Overfitting
Modell passt sich zu stark an Trainingsdaten an und generalisiert schlecht.

## P

### Pilot
Begrenzter Einsatz einer AI-Lösung mit echten Nutzer:innen und realen Prozessen, bevor über den breiten Rollout entschieden wird.

### Plan
Schritt eines Agenten, in dem aus einem Ziel eine strukturierte Aktionsfolge abgeleitet wird.

### PoC
Proof of Concept: zeitlich begrenzter Machbarkeitsnachweis, der prüft, ob ein Ansatz grundsätzlich funktioniert.

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

### RAG-Poisoning
Angriff, bei dem die Wissensbasis eines RAG-Systems mit manipulierten Inhalten kontaminiert wird.

### Rate Limit
Begrenzung der Anzahl an Anfragen, die ein Client innerhalb eines Zeitfensters an einen AI-Service stellen darf.

### Reasoning-Modelle
Modelle, die intern in Zwischenschritten denken, bevor sie antworten.

### Reasoning Chain
Explizit dokumentierte Kette von Zwischenschritten, die ein Modell zu seiner Schlussfolgerung führt.

### Recall
Anteil gefundener relevanter Fälle an allen relevanten Fällen.

### Red Teaming
Gezielte Suche nach Schwachstellen durch simulierte Angriffe.

### Regressionstest
Wiederholung eines festgelegten Testsets nach Änderungen, um erneut auftretende oder neu eingeführte Fehler zu erkennen.

### Re-Plan
Erneutes Erstellen eines Plans, wenn ein Agent feststellt, dass der ursprüngliche Plan nicht mehr zielführend ist.

### Responsible AI
AI-Entwicklung und -Nutzung unter Berücksichtigung ethischer, sozialer und rechtlicher Aspekte.

### Roherhebung
Erstmalige Gewinnung und Dokumentation personenbezogener Daten direkt bei den Betroffenen, inklusive Rechtsgrundlage und Zweckbindung.

### ROI (Return on Investment)
Kennzahl, die den Gewinn einer Investition ins Verhältnis zu den eingesetzten Kosten setzt.

### ROUGE
Metrik für Textzusammenfassungen, misst Überlappung mit Referenzzusammenfassungen.

## S

### Schluss-Prompt
Letzte Anweisung im Prompt, die das Ausgabeformat festlegt.

### Self-Consistency
Technik, mehrere Antworten zu generieren und die häufigste zu wählen.

### Shadow AI
Nicht freigegebene oder unbekannte Nutzung von AI-Werkzeugen durch Beschäftigte außerhalb der vorgesehenen Governance- und Sicherheitsprozesse.

### Shadow Traffic
Verkehrsanfragen, die parallel zu Produktion an eine neue Modellversion gespiegelt werden, ohne dass Antworten an Endnutzer:innen ausgeliefert werden.

### SLA (Service Level Agreement)
Vertragliche Vereinbarung über Verfügbarkeit, Reaktionszeit und Konsequenzen bei Verfehlen.

### SLO (Service Level Objective)
Internes Ziel für Zuverlässigkeits- oder Qualitätskennzahlen eines Dienstes (z. B. 99,9% Verfügbarkeit).

### Streaming
Auslieferung der Antwort in Echtzeit-Token, statt auf die komplette Antwort zu warten.

### Strukturierte Ausgabe
Ausgabe in einem definierten Format (z. B. JSON-Schema).

### Supply-Chain-Risiko
Risiko durch kompromittierte Komponenten in der AI-Lieferkette (Modelle, Daten, Tools).

### System-Prompt
Siehe [Anweisungs-Prompt](#anweisungs-prompt).

## T

### Temperatur
Steuerungsparameter, der die Zufälligkeit der Modellausgabe beeinflusst.

### TCO (Total Cost of Ownership)
Gesamtkosten über den Lebenszyklus eines AI-Systems (Lizenzen, Infrastruktur, Betrieb, Schulung).

### Testset
Siehe [Gold-Set](#gold-set).

### Throughput
Anzahl an Anfragen, die ein System pro Zeiteinheit verarbeiten kann.

### Time-to-Value
Zeit von Projektstart bis zum ersten messbaren Nutzen für die Anwender:innen.

### Token
Grundeinheit, in die ein Modell Text zerlegt (oft Wortteile).

### Tool-Aufruf
Siehe [Function Calling](#function-calling).

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

### Vendor Lock-in
Abhängigkeit von einem einzelnen Anbieter, die Wechsel oder Migration zu Alternativen erschwert.

### Verantwortlicher
DSGVO-Begriff: natürliche oder juristische Person, die über Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet.

### Verantwortlichkeit
Klar geregelte Person oder Rolle, die für ein AI-System zuständig ist.

### Verzeichnis der Verarbeitungstätigkeiten
DSGVO-Pflicht-Dokumentation aller Datenverarbeitungen.

## W

### Wahrscheinlichkeit
Mathematische Größe für die Plausibilität eines Ereignisses.

### Wissensassistent
AI-System, das Mitarbeiter:innen beim Zugriff auf Unternehmenswissen unterstützt.

## Z

### Zero-Shot-Prompting
Prompting ohne Beispiele.
