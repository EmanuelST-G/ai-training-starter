# Übung 04: Einen Business Case in drei Szenarien rechnen

[← zurück zur Übungsübersicht](index.md)

**Phase:** 2
**Dauer:** 45 Minuten
**Voraussetzung:** [Business Case und Wirtschaftlichkeit](../business/06-business-case.md)
**Format:** Einzelarbeit

## Aufgabe

Für einen internen Wissensassistenten gelten folgende Annahmen:

- 250 Beschäftigte, 6 Suchen pro Woche, 18 Minuten heutiger Aufwand
- 48 Arbeitswochen und 46 € Vollkosten pro Arbeitsstunde
- Jahr-1-Kosten: Integration 80.000 €, Datenaufbereitung 45.000 €, Change 25.000 €, Plattform 72.000 €, Betrieb 40.000 €, Evaluation 18.000 €
- Best Case: 80 % Nutzung, 70 % der theoretischen Zeitersparnis realisiert
- Realistic Case: 60 % Nutzung, 50 % realisiert
- Worst Case: 35 % Nutzung, 30 % realisiert

Berechne für alle drei Szenarien Nutzen, Jahr-1-Kosten, Nettoeffekt und ROI. Gib eine Entscheidungsempfehlung mit zwei Bedingungen für einen Pilot ab.

## Hinweise

- Theoretischer Nutzen = Personen × Suchen × Zeit × Wochen × Stundensatz.
- Szenarionutzen = theoretischer Nutzen × Nutzungsquote × Realisierungsfaktor.
- ROI = (Nutzen − Kosten) / Kosten.

## Lösung

Zuerst wird das maximale jährliche Zeitpotenzial berechnet:

```text
250 × 6 × 18/60 Stunden × 48 = 21.600 Stunden
21.600 × 46 € = 993.600 € theoretischer Nutzen
```

Die Jahr-1-Kosten sind in allen Szenarien zunächst gleich:

```text
80.000 + 45.000 + 25.000 + 72.000 + 40.000 + 18.000
= 280.000 €
```

| Szenario | Rechnung Nutzen | Nutzen | Nettoeffekt | ROI |
|----------|------------------|--------|-------------|-----|
| Best | 993.600 € × 0,80 × 0,70 | 556.416 € | 276.416 € | 98,7 % |
| Realistic | 993.600 € × 0,60 × 0,50 | 298.080 € | 18.080 € | 6,5 % |
| Worst | 993.600 € × 0,35 × 0,30 | 104.328 € | −175.672 € | −62,7 % |

Die Rechnung zeigt einen nur knapp positiven realistischen Fall und ein erhebliches Verlustrisiko. Sie rechtfertigt daher keinen sofortigen Vollausbau, aber einen begrenzten Pilot, der die zwei größten Annahmen misst.

**Empfehlung:** Pilot freigeben, wenn erstens Nutzungsquote und tatsächlich eingesparte Bearbeitungszeit über mindestens acht Wochen gemessen werden und zweitens ein Abbruch erfolgt, falls der hochgerechnete realistische Nutzen unter 280.000 € bleibt. Zusätzlich sind Qualitätsprüfung und Zeit für menschliche Kontrolle in der Messung zu berücksichtigen; sonst wird Bruttozeit als Nutzen überschätzt.

Nicht monetarisierte Vorteile wie schnellere Einarbeitung dürfen ergänzend dokumentiert werden, aber nicht die negative Worst-Case-Rechnung verdecken.

## Reflexion

Drei Szenarien machen sichtbar, welche Annahmen den Business Case tragen und wie groß die Verlustspanne ist. Die Projektleiterin sollte einen Pilot deshalb als Messinstrument für Nutzung und Nettozeitersparnis planen, nicht als vorweggenommene Produktionsfreigabe.
