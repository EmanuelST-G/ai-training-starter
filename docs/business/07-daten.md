# Datenverständnis

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Welche Datenfragen vor dem Start eines AI-Projekts geklärt werden müssen.

## Datenqualität > Modellqualität

In den meisten Projekten ist die Datenqualität der Flaschenhals, nicht die Modellarchitektur. Vor dem Start prüfen:

- Sind die Daten vollständig?
- Sind sie aktuell?
- Sind sie korrekt?
- Sind sie repräsentativ für den Use Case?

## Datenquellen und Datenverantwortung

Pro Datenquelle braucht es eine **verantwortliche Person** (Data Owner). Ohne Owner keine Datenstrategie.

## Strukturierte und unstrukturierte Daten

- Strukturiert: SQL-Datenbanken, ERP, CRM, Excel
- Unstrukturiert: PDFs, E-Mails, Verträge, Bilder

Beide sind relevant — viele AI-Projekte leben davon, unstrukturierte Daten zugänglich zu machen.

## Trainings-, Test- und Validierungsdaten

- **[Trainingsdaten](../glossar.md#training)** sind die Beispiele, aus denen das Modell lernt
- **[Validierungsdaten](../glossar.md#validierung)** werden während der Entwicklung zur Hyperparameter-Abstimmung genutzt
- **[Testdaten](../glossar.md#testset)** sind unsichtbar bis zur finalen Abnahme

Werden diese vermischt, ist jede Genauigkeitsangabe wertlos.

## Labels und [Ground Truth](../glossar.md#ground-truth)

Ground Truth = "was die richtige Antwort ist". Wer legt sie fest? Wer prüft sie?

Projektleiterinnen sollten darauf bestehen, dass Ground Truth von **Fachexperten** definiert wird, nicht von Entwicklern allein.

## Datenqualität — fünf Dimensionen

| Dimension | Frage |
|-----------|-------|
| Vollständigkeit | Fehlen Werte? |
| Richtigkeit | Stimmen die Werte? |
| Aktualität | Wie alt sind sie? |
| Konsistenz | Gleicher Kunde, mehrere Schreibweisen? |
| Repräsentativität | Spiegeln die Daten die Realität der Anwendung? |

## [Bias](../glossar.md#bias) in Daten

Wenn die historischen Daten bestimmte Gruppen unterrepräsentieren, lernt das Modell die Diskriminierung mit. Beispiele: Bewerbungsdaten mit gender-tendenziösen Erfolgsmustern, Kreditdaten mit verzerrten Annahmen.

Gegenmaßnahmen:

- Daten-Audit vor Projektstart
- Faire Repräsentation prüfen
- Ergebnisse nach Gruppen stratifiziert auswerten

## Personenbezug und sensible Daten

Datenschutz im Sinne der [DSGVO](../glossar.md#dsgvo) beginnt bei der Frage: „Welche Daten **kommen rein**, welche dürfen **verarbeitet** werden, was darf das Modell daraus **ableiten**?"

- Klare Zweckbindung
- [Datenminimierung](../glossar.md#datenminimierung)
- Zugriffskontrolle
- Aufbewahrung und Löschung

## Datenklassifizierung

Typische Stufen:

- **Öffentlich** — keine Einschränkung
- **Intern** — Mitarbeiter
- **Vertraulich** — berechtigter Kreis
- **Streng vertraulich** — z. B. personenbezogene Daten, Geschäftsgeheimnisse

AI-Use-Cases sollten immer in der höchsten betroffenen Stufe bewertet werden.

## Data Governance

Data Governance regelt:

- Wer legt Qualitätskriterien fest?
- Wer prüft?
- Wer korrigiert?
- Wer haftet bei Fehlern?

## Zugriffsberechtigungen

Im AI-Kontext doppelt relevant:

- Wer darf das Modell trainieren / befüllen?
- Welche Daten bekommt das Modell bei Anfragen zu sehen?
- Welche Ausgaben dürfen das Unternehmen verlassen?

!!! warning "Compliance-Falle"
    Auch anonymisierte Daten können über Kombinationen reidentifizierbar sein. Das Modell kann daraus Personen rekonstruieren.
