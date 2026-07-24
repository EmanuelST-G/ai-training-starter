# Übung 05: Messbare Akzeptanzkriterien formulieren

[← zurück zur Übungsübersicht](index.md)

**Phase:** 3
**Dauer:** 30 Minuten
**Voraussetzung:** [Anforderungen und User Stories für AI](../projektleitung/09-anforderungen.md)
**Format:** Partnerarbeit

## Aufgabe

Ein Team plant einen Assistenten, der Servicemitarbeiter:innen Antwortentwürfe aus freigegebenen Handbüchern liefert. Die bisherige Anforderung lautet: „Die AI antwortet schnell, korrekt und sicher und nennt möglichst Quellen.“

Formuliert daraus mindestens sechs prüfbare Akzeptanzkriterien. Deckt fachliche Qualität, Quellen, Antwortzeit, Kosten, erlaubte Antworten und Fallback ab. Beschreibt zu jedem Kriterium, wie es abgenommen wird.

## Hinweise

- Verwendet Messgröße, Schwelle, Testmenge und Messzeitpunkt.
- Definiert auch, wann das System nicht antworten darf.
- Prozentwerte brauchen einen benannten Testdatensatz als Bezug.

## Lösung

Eine vollständige User Story lautet:

> Als Servicemitarbeiter:in möchte ich zu einer Kundenfrage einen belegten Antwortentwurf erhalten, damit ich schneller antworte und die fachliche Verantwortung vor dem Versand behalte.

Dazu passen folgende Akzeptanzkriterien:

| Nr. | Kriterium | Abnahme |
|-----|-----------|---------|
| 1 | Mindestens 90 % von 50 versionierten Gold-Set-Fragen werden fachlich korrekt beantwortet. | Zwei Fachexpert:innen bewerten blind; Uneinigkeit wird gemeinsam entschieden. |
| 2 | 100 % der fachlichen Aussagen enthalten Dokumenttitel, Abschnitt und Link auf eine freigegebene Quelle. | Automatischer Vollständigkeitstest plus manuelle Prüfung aller 50 Fälle. |
| 3 | In mindestens 95 % der Fälle stützt die angegebene Passage die Aussage tatsächlich. | Fachexpert:innen vergleichen Antwort und zitierte Passage. |
| 4 | Die Antwortzeit beträgt bei 100 parallelen Nutzer:innen p95 höchstens 5 Sekunden. | Lasttest in einer produktionsnahen Umgebung vor Go-live. |
| 5 | Die variablen Modell- und Suchkosten liegen im Monatsmittel bei höchstens 0,05 € je Anfrage. | Kosten-Dashboard über vier Pilotwochen, einschließlich Fehlversuchen. |
| 6 | Bei 20 Out-of-Scope-Fragen lehnt das System zu 100 % ab und nennt den zuständigen Eskalationsweg. | Negativtestset vor jeder Freigabe ausführen. |
| 7 | Ohne ausreichende Quelle erzeugt das System keinen Sachentwurf, sondern stellt eine Rückfrage oder eskaliert. | Zehn Testfälle mit absichtlich fehlender Quelle. |
| 8 | Kein Entwurf wird ohne sichtbare menschliche Freigabe versendet. | End-to-End-Test aller Rollen; Versand-API muss ungeprüfte Aufrufe blockieren. |

Die Kriterien sind gemeinsam auswertbar, bleiben aber getrennt. Ein Mittelwert darf beispielsweise eine Sicherheitsverletzung nicht gegen eine schnelle Antwort aufrechnen.

Als Go-live-Regel gilt: Alle Kriterien 2, 6, 7 und 8 sind K.-o.-Kriterien. Für Kriterien 1, 4 und 5 darf das Team nur mit dokumentierter Abweichung, verantwortlicher Freigabe und befristetem Verbesserungsplan fortfahren.

Für spätere Modell-, Prompt- oder Datenänderungen wird dasselbe Abnahmepaket als Regressionstest versioniert. Der Testbericht enthält mindestens:

- Systemversion, Testset-Version und ausführende Rollen
- Einzelergebnisse, Abweichungsentscheidung und Freigabedatum

## Reflexion

Probabilistische Systeme brauchen Akzeptanzkriterien für Qualität und für sicheres Nicht-Handeln. Die Projektleiterin macht aus Erwartungen belastbare Entscheidungen, indem sie Messverfahren, Schwellen und K.-o.-Kriterien schon vor dem Pilot vereinbart.
