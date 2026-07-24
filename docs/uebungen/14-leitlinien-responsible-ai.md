# Übung 14: Operative Leitlinien für Responsible AI entwickeln

[← zurück zur Übungsübersicht](index.md)

**Phase:** 5
**Dauer:** 45 Minuten
**Voraussetzung:** [Responsible AI](../verantwortung/18-responsible-ai.md)
**Format:** Gruppenarbeit

## Aufgabe

Ein Unternehmen nutzt AI bereits für Textentwürfe, Wissenssuche und Kundenservice, hat aber nur den Satz „Wir setzen AI verantwortungsvoll ein“. Entwickelt acht verbindliche Leitlinien. Jede Leitlinie braucht Geltungsbereich, verantwortliche Rolle, Mindestkontrolle und prüfbaren Nachweis.

Recherchiert zwei aktuelle Primärrahmen, zum Beispiel eine Rechtsquelle und einen anerkannten Risikomanagementstandard. Dokumentiert Version, Abrufdatum, übernommenes Prinzip und eine Lücke gegenüber dem Unternehmenskontext. Legt außerdem Freigabe, Review und Ausnahmeprozess fest.

## Hinweise

- Formuliert „muss“ statt unverbindlicher Wertewörter.
- Verbindet ethische Prinzipien mit Artefakten und Entscheidungen.
- Kleine Assistenzsysteme brauchen weniger Kontrolle als Systeme mit Personenwirkung.

## Lösung

Ein einsetzbarer Leitliniensatz lautet:

| Nr. | Verbindliche Leitlinie | Owner | Mindestkontrolle und Nachweis |
|-----|------------------------|-------|-------------------------------|
| 1 | Jeder AI-Einsatz muss einen dokumentierten legitimen Zweck und klare Nicht-Ziele haben. | AI Product Owner | Eintrag im Systeminventar und genehmigter Use-Case-Canvas |
| 2 | Für jedes System müssen fachliche, technische und rechtliche Verantwortung namentlich benannt sein. | Sponsor | RACI mit Vertretung und datierter Freigabe |
| 3 | Es dürfen nur erforderliche, rechtmäßig nutzbare Daten verarbeitet werden. | Data Owner, DSB | Dateninventar, Rechtsgrundlage, Lösch- und Berechtigungskonzept |
| 4 | Systeme mit Wirkung auf Personen müssen auf Benachteiligung getestet und anfechtbar sein. | Fachbereich, Responsible-AI-Review | stratifizierte Metriken, Beschwerde- und Korrekturweg |
| 5 | Nutzer:innen müssen AI-Beteiligung, Grenzen, Datenverwendung und verantwortliche Stelle erkennen. | Product Owner | freigegebener Transparenztext und Oberflächentest |
| 6 | Außenwirksame oder irreversible Aktionen müssen risikogerecht menschlich freigegeben werden. | Process Owner | technische Freigabesperre und Audit-Log |
| 7 | Sicherheit, Robustheit und sichere Ablehnung müssen vor Go-live und nach Änderungen getestet werden. | CISO, Eval Lead | versioniertes Gold-Set, Red-Team- und Regressionsergebnis |
| 8 | Betrieb, Vorfälle, Änderungen und Abschaltung müssen überwacht und regelmäßig neu bewertet werden. | Service Owner | Dashboard, Incident-Runbook, Reviewprotokoll und getesteter Not-Aus |

Die Kontrolldichte folgt der Risikoklasse. Ein interner Formulierungsvorschlag kann mit Standardprüfung starten; Bewerberbewertung oder autonomer Kundenkontakt benötigt unabhängige Prüfung, strengere Gates und kontinuierliche Überwachung.

**Governance:** Neue Systeme gehen erst nach Eintrag im Inventar und risikobasierter Freigabe in den Pilot. Ein interdisziplinäres Gremium prüft mindestens halbjährlich und anlassbezogen bei Modell-, Daten-, Zweck- oder Rechtsänderung. Ausnahmen sind befristet, nennen Begründung, kompensierende Kontrolle, Owner und Enddatum; sie dürfen gesetzliche oder K.-o.-Vorgaben nicht außer Kraft setzen.

Ein vollständiger Recherchevermerk kann als Primärrahmen die Verordnung (EU) 2024/1689 und das NIST AI Risk Management Framework 1.0 prüfen. Er hält Fassung, Originalherausgeber, URL und Abrufdatum fest, ordnet konkrete Leitlinien zu und dokumentiert Lücken: Ein allgemeiner Standard beantwortet beispielsweise nicht automatisch deutsche Mitbestimmung, interne Datenklassen oder den unternehmenseigenen Freigabeweg.

Die Leitlinien sind erst wirksam, wenn Auditstichproben die genannten Artefakte finden und Verstöße eine definierte Konsequenz auslösen. Ein bloß veröffentlichtes Wertepapier erfüllt diese Lösung nicht.

Die jährliche Wirksamkeitsprüfung beantwortet mindestens:

- Sind alle produktiven und experimentellen Systeme inventarisiert?
- Haben Ausnahmen ein gültiges Enddatum und wirksame Ersatzkontrollen?
- Wurden Beschwerden, Vorfälle und Modelländerungen in neue Tests übersetzt?

## Reflexion

Responsible AI wird steuerbar, wenn Prinzipien in Owner, Kontrollen, Nachweise und Stopprechte übersetzt werden. Die Projektleiterin sorgt dafür, dass Leitlinien proportional zum Risiko gelten und auch bei Zeit- oder Erfolgsdruck überprüfbar bleiben.
