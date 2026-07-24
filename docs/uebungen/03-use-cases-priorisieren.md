# Übung 03: AI-Use-Cases nachvollziehbar priorisieren

[← zurück zur Übungsübersicht](index.md)

**Phase:** 1
**Dauer:** 30 Minuten
**Voraussetzung:** [Use-Case-Bewertung und Priorisierung](../business/05-bewertung.md)
**Format:** Gruppenarbeit

## Aufgabe

Ein Unternehmen diskutiert vier AI-Use-Cases. Bewertet jeden Fall von 1 bis 5 in den Kriterien Business Value (BV), technische Machbarkeit (TM), Datenverfügbarkeit (DV), Risiko (R; 5 = geringes Risiko), Umsetzungsaufwand (UA; 5 = klein) und Time-to-Value (TtV; 5 = kurz).

- **A Meeting-Protokolle:** 400 Meetings/Monat, Transkripte vorhanden, Mensch prüft, Standardschnittstelle.
- **B Vertragsfreigabe:** hoher möglicher Nutzen, wenige gelabelte Verträge, rechtsverbindliche Entscheidung, tiefe ERP-Integration.
- **C Interne Wissenssuche:** 900 Suchen/Monat, Handbücher vorhanden, nur Antwortvorschläge mit Quellen, DMS-Connector verfügbar.
- **D Bewerber-Ranking:** 120 Fälle/Monat, historische Daten lückenhaft, unmittelbare Wirkung auf Personen, Betriebsrat nicht eingebunden.

Bildet den ungewichteten Gesamtscore, wählt einen Start-Use-Case und nennt ein K.-o.-Risiko, das durch einen hohen Score nicht überstimmt werden darf.

## Hinweise

- Verwendet ganze Punkte und dokumentiert strittige Annahmen.
- Ein hoher Business Value kompensiert kein unvertretbares Personenrisiko.
- Bei Punktegleichstand gewinnt der risikoärmere Fall.

## Lösung

Eine konsistente Musterbewertung ist:

| Use Case | BV | TM | DV | R | UA | TtV | Summe |
|----------|----|----|----|---|----|-----|-------|
| A Meeting-Protokolle | 3 | 5 | 5 | 5 | 5 | 5 | **28** |
| B Vertragsfreigabe | 5 | 2 | 2 | 1 | 1 | 2 | **13** |
| C Interne Wissenssuche | 4 | 4 | 4 | 4 | 4 | 4 | **24** |
| D Bewerber-Ranking | 3 | 2 | 2 | 1 | 2 | 2 | **12** |

**A** hat den höchsten Score und eignet sich als schneller Lern-Use-Case. Eingaben liegen vor, die Integration ist überschaubar und ein Mensch prüft das Ergebnis. Als erstes strategisch relevantes Pilotprojekt ist auch **C** vertretbar: Der Score ist etwas niedriger, der Nutzen aber höher und Quellen machen Antworten prüfbar.

Die Bewertung ist keine mathematische Wahrheit. Zum Beispiel kann die Gruppe den Business Value von A mit 4 statt 3 bewerten, wenn Protokollpflege nachweislich viel Arbeitszeit bindet. Das ändert die Empfehlung nicht, solange Annahme und Datenquelle dokumentiert sind.

K.-o.-Risiken sind hier:

- D darf ohne Prüfung von Diskriminierung, Rechtslage und Mitbestimmung nicht starten.
- B darf keine rechtsverbindliche Freigabe autonom treffen.
- Für C muss die Suche Dokumentberechtigungen vor der Antwort durchsetzen.

Damit lautet die Portfolioentscheidung: A als kurzfristigen Einstieg starten, C parallel fachlich vorbereiten, B auf Assistenz statt Autonomie zuschneiden und D bis zur Governance-Prüfung stoppen.

## Reflexion

Eine Score-Matrix macht Annahmen und Prioritäten diskutierbar, ersetzt aber keine Risikofreigabe. Die Projektleiterin sollte deshalb neben dem Rang immer K.-o.-Kriterien, Datenquellen und die verantwortliche Entscheidung festhalten.
