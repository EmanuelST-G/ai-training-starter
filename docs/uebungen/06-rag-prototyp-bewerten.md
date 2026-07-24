# Übung 06: Einen RAG-Prototyp bewerten

[← zurück zur Übungsübersicht](index.md)

**Phase:** 4
**Dauer:** 45 Minuten
**Voraussetzung:** [RAG und interne Wissensassistenten](../technik/12-rag.md)
**Format:** Gruppenarbeit

## Aufgabe

Ein RAG-Prototyp für Reiserichtlinien wurde getestet. Die Freigabeschwellen lauten: Retrieval-Trefferquote mindestens 85 %, fachlich korrekte Antworten mindestens 80 %, korrekte Quellenangabe 100 %, sichere Ablehnung mindestens 90 % und keine Berechtigungsverletzung.

Die Ergebnisse:

- Bei 20 beantwortbaren Fragen wurde 16-mal die richtige Passage gefunden.
- 14 Antworten waren fachlich korrekt.
- 18 Antworten zeigten eine Quelle; in 16 Fällen stützte sie die Aussage.
- Von 10 unbeantwortbaren Fragen wurden 8 sicher abgelehnt.
- In 8 Rollentests erschienen zweimal Inhalte aus gesperrten Dokumenten.
- Drei Antworten nutzten eine abgelöste Richtlinienversion.

Berechnet die Kennzahlen, trefft eine Go-/No-Go-Entscheidung und priorisiert vier Maßnahmen.

## Hinweise

- Bewertet Retrieval, Generierung und Berechtigung getrennt.
- Eine gute Durchschnittsquote heilt kein Datenleck.
- Gebt für jede Maßnahme einen erneuten Test an.

## Lösung

| Qualitätsdimension | Ergebnis | Schwelle | Bewertung |
|--------------------|----------|----------|-----------|
| Retrieval-Trefferquote | 16/20 = 80 % | ≥ 85 % | nicht bestanden |
| Fachliche Korrektheit | 14/20 = 70 % | ≥ 80 % | nicht bestanden |
| Quelle angezeigt | 18/20 = 90 % | 100 % | nicht bestanden |
| Quelle stützt Antwort | 16/20 = 80 % | 100 % | nicht bestanden |
| Sichere Ablehnung | 8/10 = 80 % | ≥ 90 % | nicht bestanden |
| Berechtigungsverletzung | 2/8 = 25 % | 0 % | kritischer Fehler |
| Veraltete Antwort | 3 Fälle | 0 freigegeben | nicht bestanden |

Die Entscheidung lautet eindeutig **No-Go**. Insbesondere die zwei Berechtigungsverletzungen sind ein K.-o.-Fehler; das System darf mit vertraulichen Dokumenten nicht weiter pilotiert werden.

Priorisierte Maßnahmen:

1. **Zugriffsfilter vor dem Retrieval erzwingen.** Rollen- und Dokumentrechte werden serverseitig geprüft. Danach alle acht Rollentests plus neue Negativrollen ohne Leak wiederholen.
2. **Gültigkeit im Index bereinigen.** Version und Gültigkeitsdatum als Pflichtmetadaten setzen, abgelöste Dokumente entfernen und drei betroffene Fragen erneut testen.
3. **Retrieval verbessern.** Fehlerfälle auf Segmentierung, Metadaten und Suchbegriffe analysieren; hybride Suche oder Re-Ranking testen. Ziel sind mindestens 17 richtige Passagen bei denselben 20 Fragen.
4. **Antwortbindung und Ablehnung verschärfen.** Nur belegte Aussagen zulassen und bei fehlender Passage ablehnen. Alle 20 Antwortfälle und 10 Negativfälle erneut ausführen.

Erst wenn das unveränderte, versionierte Testset alle Schwellen erfüllt und zusätzliche Rollentests keine Leaks zeigen, darf eine neue Pilotentscheidung erfolgen. Ein bloßer Promptwechsel ohne Regressionstest reicht nicht.

## Reflexion

Bei RAG müssen Suche, Antworttreue, Aktualität und Rechte jeweils eigene Qualitätsziele haben. Die Projektleiterin schützt den Go-live, indem sie kritische Sicherheitskriterien nicht mit guten Durchschnittswerten verrechnen lässt.
