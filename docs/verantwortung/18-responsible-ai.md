# Responsible AI

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Eigene AI-Systeme so verantworten, dass Verantwortlichkeiten klar sind, Risiken früh sichtbar werden und Entscheidungen überprüfbar bleiben.

## Was bedeutet Responsible AI?

[Responsible AI](../glossar.md#responsible-ai) beschreibt die Entwicklung und Nutzung von AI-Systemen unter Berücksichtigung ethischer, sozialer und rechtlicher Aspekte. Es ist kein Produktmerkmal, sondern eine Haltung: Technische Möglichkeiten werden gegen Auswirkungen auf Menschen, Organisation und Gesellschaft abgewogen.

Vier Leitlinien prägen den Begriff:

- **Verantwortlichkeit:** Eine Person oder Rolle steht für jede Entscheidung gerade.
- **Fairness:** Niemand wird systematisch benachteiligt.
- **Transparenz:** Betroffene und Prüfende verstehen, wie eine Entscheidung zustande kommt.
- **Nachvollziehbarkeit:** Daten, Modell und Prozess lassen sich später rekonstruieren.

## Verantwortlichkeit und Ownership

Ein AI-System ohne klare Verantwortlichkeit wird im Problemfall zum „Nobody's baby". Ownership heißt: Eine Person kennt Zweck, Daten, Modell, Tests, Grenzen, Budget und Stakeholder – und entscheidet im Zweifel.

- Pro System ein:e AI Product Owner mit Vertretungsregelung.
- Geschäftliche und technische Verantwortung sind getrennt benannt.
- Änderungen am System benötigen eine dokumentierte Freigabe.
- Verantwortliche Person kennt die Pflichten aus DSGVO und EU AI Act.

## AI-Systeminventar

Ein Inventar ist die Grundlage jeder verantwortlichen AI-Arbeit. Es beantwortet: Welche AI-Systeme haben wir überhaupt im Einsatz?

Mindestdaten pro Eintrag:

- Name und Zweck in einem Satz
- Verantwortliche:r (fachlich, technisch, datenschutzrechtlich)
- Datenquellen und Rechtsgrundlage
- Modell, Anbieter, Version, Hosting-Region
- Risikoklasse und betroffene Personengruppen
- Aktuelle Phase (Pilot, Produktion, außer Betrieb)
- Verknüpfte Prozesse, KPIs und Letzter Review

[Systeminventar](../glossar.md#systeminventar) lebt von Disziplin: neue Systeme werden vor Produktivschaltung eingetragen, Stilllegungen ebenso.

## Risikoklassifizierung

Nicht jedes AI-System trägt das gleiche Risiko. Eine sinnvolle Klassifizierung unterscheidet nach Auswirkung auf Betroffene und Reversibilität:

| Klasse | Beispiele | Pflichten |
|--------|-----------|-----------|
| Gering | Texte zusammenfassen, interne Recherche | Standardfreigabe, Monitoring, Logging |
| Mittel | Entscheidungsvorschläge mit Folgen für einzelne Personen | Bias-Tests, Erklärbarkeit, Human-in-the-Loop |
| Hoch | Bonität, Personaleinsatz, Gesundheit, kritische Infrastruktur | Eigene Freigabe, kontinuierliche Überwachung, Audit |

Die Klassifizierung entscheidet über Testtiefe, Freigaben, Dokumentation und Überwachung. Sie wird bei jeder größeren Änderung neu bewertet.

## Fairness und Diskriminierung

[Fairness](../glossar.md#fairness) bedeutet, dass ein System niemanden systematisch benachteiligt. Diskriminierung entsteht durch:

- Verzerrte Trainingsdaten (historische Diskriminierung, Unterrepräsentation)
- Ungerechte Zielfunktionen (eine Metrik, die andere Schäden verdeckt)
- Aggregierte Auswertungen, die Minderheiten verdecken

Gegenmaßnahmen:

- Daten-Audit vor Projektstart: Repräsentation, Labels, Herkunft
- Stratifizierte Evaluation: Ergebnisse nach Geschlecht, Alter, Region, Sprache oder anderen relevanten Merkmalen auswerten
- Mehrere Fairness-Definitionen gegeneinander abwägen – es gibt keinen universellen Maßstab
- Beschwerdekanal und Eskalation für Betroffene

## Transparenz und Erklärbarkeit

Transparenz richtet sich an Nutzer:innen, Betroffene und Prüfende. Erklärbarkeit richtet sich an diejenigen, die eine Entscheidung nachvollziehen oder anfechten wollen.

- **Für Nutzer:innen:** Klar, dass eine AI beteiligt ist, welche Daten sie nutzt und welche Rechte bestehen.
- **Für Betroffene:** Eine Antwort auf „warum wurde mir X zugewiesen?" – auch in nicht-technischer Sprache.
- **Für Prüfende:** Dokumentation der Eingaben, Regeln, Schwellen und Beispielantworten.

[Erklärbarkeit](../glossar.md#erklarbarkeit) ist bei komplexen Modellen nur näherungsweise möglich. Entscheidend ist, dass die Erklärung das Vertrauen verdient: keine erfundenen Kausalitäten, kein Schönreden von Statistik.

## Nachvollziehbarkeit

Nachvollziehbarkeit heißt: Aus einer konkreten Entscheidung lässt sich der Weg dorthin rekonstruieren. Dafür werden mindestens folgende Daten festgehalten:

- Eingaben (mit Zeitstempel und Nutzer:in)
- Modell- und Versions-ID
- Wissensquellen (bei RAG), zitierte Chunks
- Tool-Aufrufe mit Parametern und Ergebnissen
- Berechtigungsprüfungen
- Vom Menschen getroffene Freigaben

Aufbewahrungsfristen und Zugriff auf diese Daten sind im Voraus zu regeln, nicht erst beim Vorfall.

## Auditierbarkeit

[Auditierbarkeit](../glossar.md#auditierbarkeit) geht über Nachvollziehbarkeit hinaus: Ein Audit prüft, ob das System die vereinbarten Regeln einhält. Dazu gehören interne Kontrollen, externe Prüfungen und Aufsichtsbehörden.

Auditierbar ist ein System, wenn

- Dokumentation aktuell, versioniert und abrufbar ist,
- Logs vollständig und geschützt sind,
- Verantwortlichkeiten eindeutig benannt sind,
- Tests reproduzierbar sind,
- Abweichungen und Korrekturen nachvollziehbar dokumentiert werden.

## Bias-Erkennung und Mitigation

Bias zeigt sich nicht immer auf den ersten Blick. Erkennung braucht Daten, Methoden und kritische Distanz.

- **Datenprüfung:** Stichproben auf Repräsentation, Labels und Ausreißer. Vergleich mit der erwarteten Verteilung der Betroffenen.
- **Modellprüfung:** Stratifizierte Metriken (Accuracy, Fehlerraten, False Positives/Negatives) nach sensiblen Gruppen.
- **Verhaltensprüfung:** Stichproben aus realen Anfragen, gezielte Adversarial-Tests, Red Teaming.

Mitigation heißt nicht „Bias entfernen", sondern Auswirkungen begrenzen:

- Repräsentativere Daten oder synthetische Ergänzungen
- Gewichtung, Schwellen oder Constraints im Modell
- Nachgelagerte Korrekturen oder menschliche Prüfung
- Bewusste Entscheidung, einen Use Case nicht zu realisieren

## Vom Prinzip zur Routine

Responsible AI wird ernst, wenn es operativ wird:

- Eigene Checklisten für Design, Implementierung, Go-live und Betrieb
- Reviewer:innen mit Fach- und Domänenkompetenz
- Regelmäßige Termine, in denen Risiken offen diskutiert werden
- Lernbereitschaft: Fehler werden als Daten verstanden, nicht als Schuld

!!! tip "Praxistipp"
    Hängt an jedes AI-Projekt eine einseitige „Responsible-AI-Notiz": Zweck, Verantwortliche, Risikoklasse, sensible Gruppen, bekannte Grenzen, letzte Prüfung, nächste Prüfung. Sie zwingt zu Klarheit und liefert im Audit den schnellen Einstieg.

## Glossar-Querverweise

- [Responsible AI](../glossar.md#responsible-ai)
- [Verantwortlichkeit](../glossar.md#verantwortlichkeit)
- [Human-in-the-Loop](../glossar.md#human-in-the-loop)
- [Bias](../glossar.md#bias)
- [Compliance](../glossar.md#compliance)
- [Fairness](../glossar.md#fairness)
- [Erklärbarkeit](../glossar.md#erklarbarkeit)
- [Auditierbarkeit](../glossar.md#auditierbarkeit)
