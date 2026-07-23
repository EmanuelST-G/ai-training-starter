# Business Case und Wirtschaftlichkeit

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Einen Business Case mit mehreren Szenarien erstellen, statt nur Lizenzkosten zu vergleichen.

## Kostenarten

- Modellentwicklung (Custom-Entwicklung)
- Lizenzen (Plattformgebühren pro Nutzer/Monat)
- API-Nutzung / [Tokens](../glossar.md#token)
- Infrastruktur (Compute, Storage, [Vektor-DB](../glossar.md#vektor-datenbank))
- Datenaufbereitung (manuell + Tools)
- Integration (in Bestandssysteme)
- [Evaluation](../glossar.md#evaluation) (interne Tests, Gold-Set-Pflege)
- Betrieb und Monitoring ([LLMOps](../glossar.md#llmops))
- Change Management (Schulungen, Kommunikation)

## Cloud vs. On-Premises

| Aspekt | Cloud | On-Premises |
|--------|-------|-------------|
| Time-to-Market | Tage | Monate |
| Datenschutz | abhängig vom Anbieter | maximal |
| Kostenverlauf | OPEX, skalierend | CAPEX + OPEX |
| [Vendor Lock-in](../glossar.md#vendor-lock-in) | hoch | gering |

## Kleine vs. große Modelle

- **Großes Modell** (GPT-4-Klasse): bessere Qualität, höhere Kosten pro Token, oft Cloud-only
- **Kleines Modell** (z. B. 7B, lokal): billiger, oft ausreichend für Klassifikation/Extraktion, on-premises möglich

## Kosten pro Anfrage

Beispiel: [RAG](../glossar.md#rag-retrieval-augmented-generation)-Anfrage mit 2k Input + 500 Output Tokens.

- GPT-4o: ca. $0,01
- Claude Haiku: ca. $0,003
- Eigenes 7B-Modell on-prem: $0,0003 + Strom

Bei 50.000 Anfragen / Monat: **$500 vs. $150 vs. $15**. Auch bei niedrigem Stückpreis summieren sich Volumen.

## [ROI](../glossar.md#roi-return-on-investment) und [Total Cost of Ownership](../glossar.md#tco-total-cost-of-ownership)

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
