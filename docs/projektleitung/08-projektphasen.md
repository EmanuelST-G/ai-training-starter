# AI-Projektmanagement

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Den Verlauf eines AI-Projekts realistisch planen und kommunizieren.

## Unterschiede zu klassischen IT-Projekten

- **Hohe Unsicherheit** zu Projektbeginn (Modell kann oder kann nicht funktionieren)
- **Machbarkeit muss empirisch geprüft** werden, nicht nur theoretisch
- **Datensituation** ist oft der Show-Stopper
- **Iteration** ist Standard, nicht Wasserfall
- **Fachabnahme** ist schwieriger, weil Ausgaben probabilistisch sind

## Projektphasen

1. **Problemdefinition** — welches konkrete Problem, welches Ziel
2. **Use-Case-Auswahl** — Selektion aus dem Portfolio
3. **Datenprüfung** — was haben wir, was fehlt
4. **[Proof of Concept (PoC)](../glossar.md#poc)** — funktioniert es prinzipiell?
5. **[Pilot](../glossar.md#pilot)** — wie verhält es sich im Realbetrieb mit echten Nutzern?
6. **[Evaluation](../glossar.md#evaluation)** — erreicht es die Qualitätsziele?
7. **Integration** — Anbindung an Bestandssysteme
8. **Produktiver Betrieb** — Go-Live mit Monitoring
9. **Monitoring und Verbesserung** — [Drift](../glossar.md#drift), Updates, neue Use Cases

## Anforderungen als überprüfbare Kriterien

Eine AI-Anforderung ist nur dann nützlich, wenn sie **messbar** ist.

❌ „Das Modell soll Vertragsrisiken erkennen."
✅ „Das Modell erkennt 90 % der im [Gold-Set](../glossar.md#gold-set) definierten Vertragsrisiken ([Recall](../glossar.md#recall) 0,9) bei einer False-Positive-Rate ≤ 0,1."

## Erwartungsmanagement

Vor Projektstart klären:

- Was ist „Erfolg" konkret?
- Welche Mindestqualität ist akzeptabel?
- Was passiert, wenn die Mindestqualität verfehlt wird?
- Welche Ressourcen für Evaluation sind da?

## Stakeholder-Management

- **Fachbereich** — Anforderungen, Akzeptanz
- **IT** — Integration, Infrastruktur
- **Datenschutz** — DSGVO, AI Act
- **Recht** — Verträge, IP
- **Betriebsrat** — Beschäftigtendatenschutz
- **Management** — Budget, Eskalation

## Abhängigkeiten zu Datenschutz, Security, IT

Diese Stakeholder sind **kein nachträgliches Impediment**, sondern frühzeitig einzubinden. Ein Use Case ohne Datenschutz-Freigabe ist kein fertiger Use Case.

## Entscheidungspunkte und Abbruchkriterien

Jede Phase braucht **harte Kriterien**, wann es weitergeht und wann nicht.

Beispiel: PoC → Pilot
- Recall ≥ 0,7 im Gold-Set
- Antwortzeit < 5 s
- Keine kritischen [Halluzinationen](../glossar.md#halluzination) in 50 Testfällen

## Umgang mit Experimenten und Fehlschlägen

AI-Projekte sind Forschungsprojekte. Ein Erfahrungswert aus DACH-AI-Projekten ca. 2024–2026: Rund 30–40 % der Pilotprojekte erreichen nicht die Produktion. Das ist stark branchenabhängig; exakte Zahlen variieren. Ein Fehlschlag ist **keine Schande**, sondern ein Projektrisiko, mit dem offen umzugehen ist.

## AI Product Owner und AI-Projektleitung

- **AI Product Owner:** priorisiert Use Cases, definiert Akzeptanz
- **AI-Projektleitung:** steuert Phasen, Risiken, Stakeholder, Budget
- **Data Engineer / ML Engineer:** baut und betreibt
- **Fachexperte:** liefert [Ground Truth](../glossar.md#ground-truth), bewertet Qualität

!!! warning "Der wichtigste Satz"
    Ein erfolgreicher PoC ist noch kein produktionsfähiges System. Wer früh „funktioniert" ruft, gefährdet die spätere Qualität.
