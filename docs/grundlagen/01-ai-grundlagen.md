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
