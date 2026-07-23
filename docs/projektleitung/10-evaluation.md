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
