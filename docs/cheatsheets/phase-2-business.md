# Cheat-Sheet Phase 2 – Business { .cheatsheet }

Nach dieser Phase kannst du Use Cases strukturiert bewerten, einen wirtschaftlich belastbaren Business Case aufsetzen und Datenrisiken frühzeitig adressieren.

## Kernbotschaften

1. AI lohnt sich vor allem bei hoher Frequenz, niedriger Komplexität, strukturierten Eingaben und tolerabler Fehlerrate.
2. „Coolness" ist kein Business Value — ein Use Case ohne messbaren Nutzen verschwindet nach sechs Monaten.
3. Drei-Szenarien-Rechnung (Best / Realistic / Worst) ist Pflicht, inklusive eines Szenarios ohne AI-Erfolg.
4. Datenqualität ist in den meisten Projekten der Flaschenhals, nicht die Modellarchitektur — vollständig, aktuell, korrekt, repräsentativ.
5. Datenklassifizierung bestimmt, ob ein Use Case überhaupt zulässig ist; Bewertung erfolgt in der höchsten betroffenen Stufe.
6. Anonymisierte Daten können über Kombinationen reidentifizierbar sein — das Modell kann Personen rekonstruieren.

## Schlüsselbegriffe

- [AI-Anwendungsfälle](../business/04-use-cases.md)
- [Use-Case-Bewertung](../business/05-bewertung.md)
- [Business Case und Wirtschaftlichkeit](../business/06-business-case.md)
- [Datenverständnis](../business/07-daten.md)
- [Human-in-the-Loop](../glossar.md#human-in-the-loop)
- [Copilot](../glossar.md#copilot)
- [TCO (Total Cost of Ownership)](../glossar.md#tco-total-cost-of-ownership)
- [Bias](../glossar.md#bias)

## Typische Fehler

- **Use Cases nach Tech-Hype statt nach Problemen auswählen** — daraus folgt ein Pilot ohne Akzeptanz.
- **Lizenzkosten mit Gesamtkosten verwechseln** — API-Nutzung, Datenaufbereitung, Evaluation und Betrieb treiben den TCO.
- **ROI nur als Punktschätzung angeben** — ohne Szenarien fehlt die Grundlage für eine fundierte Entscheidung.
- **Datenschutz erst im Pilot prüfen** — Use Cases ohne DSGVO-Freigabe sind keine fertigen Use Cases.
- **Produktivitätsgewinne aus Studien ungeprüft übernehmen** — 10–25 % im Betrieb sind realistischer als 30–60 % aus Piloten.

## Vor dem nächsten Termin klären

- Welche drei konkreten Geschäftsprobleme stehen für die nächste AI-Initiative tatsächlich auf der Agenda?
- Welche Datenquellen sind verfügbar, wer ist Data Owner, und in welcher Klassifizierungsstufe liegen sie?
- Wie hoch sind realistische API-, Lizenz- und Betriebskosten pro Anfrage und pro Monat?
- Welche Stakeholder (Datenschutz, IT, Fachbereich, Management) müssen vor dem nächsten Meilenstein eingebunden werden?
- Welche Erfolgskennzahl definiert „fertig" — und ab welchem Wert gilt der Use Case als gescheitert?
- Wo liegen Bias-Risiken in den historischen Daten, die das Modell übernehmen könnte?

!!! info "Druckhinweis"
    Dieses Cheat-Sheet ist für A4 optimiert; via Browser-Druck oder `git clone` als PDF nutzbar.
