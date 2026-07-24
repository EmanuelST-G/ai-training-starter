# Fallstudie 03: Agent-basierte E-Mail-Triage im Kundenservice

**Branche:** Versandhandel (Multichannel, Mode und Wohnaccessoires)
**Unternehmensgröße:** ca. 1.200 Mitarbeitende, drei Logistikzentren, 14 Service-Postfächer
**KI-Komponente:** Agent zur E-Mail-Klassifizierung und zum Routing in 14 Service-Kategorien
**Ausgangslage (Zeitpunkt):** Q4/2025 – nach elf Monaten produktivem Einsatz
**Ergebnis-KPIs:** 4,2 h → 9 s mittlere Triage-Zeit pro Mail; 78 % Einfach-Klassifikation mit Konfidenz >0,85; 31 % schnellere Kunden-Antwortzeit; 96 % Injection-Erkennungsrate auf 2.000-Mails-Testset (2,1 % Falsch-Positiv); 14 % Mehrthemen-Mails im Eingang; 1.800 €/Monat Agent-Betriebskosten

## Ausgangslage

Die Alpenrose Versand GmbH betreibt einen klassischen Versandhandel mit Katalog, Webshop und stationären Outlets in Süddeutschland und Österreich. Pro Werktag gehen zwischen 4.500 und 7.000 Kunden-E-Mails ein. Bis 2024 sortierten acht Service-Mitarbeiter:innen in der Eingangstriage die Mails manuell in 14 Kategorien (Bestellung, Versand, Retoure, Reklamation, Datenschutz, Newsletter, Werbekunden, Großkunden, Karriere, Presse, IT-Störung, Sicherheit, Compliance, Sonstiges) und leiteten sie an die zuständigen Postfächer weiter. Die Triage war fehleranfällig: Bei Lastspitzen am Montag blieben Mails über 14 Stunden unbearbeitet, falsche Zuordnungen führten zu Mehrfachweiterleitungen und Kundenbeschwerden, und die Fluktuation in der Triage-Rolle war mit 38 Prozent p. a. ungewöhnlich hoch. Anfang 2025 startete ein internes Projekt zur Automatisierung der Triage mit einem LLM-Agenten, der die manuelle Vorsortierung Schritt für Schritt übernehmen sollte.

## Problem / Opportunity

Die Opportunity war klar: Eine konsistente Triage binnen Sekunden, eine messbar kürzere Antwortzeit und eine spürbare Entlastung der Triage-Rolle, deren Fluktuation traditionell hoch war. Das Problem zeigte sich in drei Varianten. Erstens funktionierte die Klassifikation bei strukturierten Anfragen hervorragend. Zweitens versagte das System bei Mehrthemen-Mails (Bestellung mit anhängender Reklamation und Datenschutzfrage) – es wählte meist das erste erkannte Thema, was zu falschem Routing und doppelter Bearbeitung führte. Drittens, und das wurde der wichtigste Lerneffekt: Im September 2025 erreichte den Triage-Agenten eine Kundenmail im Betreff „Lieferung beschädigt" mit einem PDF-Anhang, der einen versteckten [Prompt-Injection](../glossar.md#prompt-injection)-Versuch enthielt. Der Mailtext enthielt gegen Ende eine scheinbar harmlose Floskel mit Anweisungen an das Modell. Der Agent interpretierte die Floskel als Systemanweisung und leitete die Mail an die Sicherheitskategorie weiter, während gleichzeitig eine interne Notiz an einen Sicherheits-Mailverteiler gesetzt wurde, die normalerweise nur dem SOC vorbehalten ist.

## Lösungsansatz mit AI

Aufgebaut wurde ein [Agent](../glossar.md#agents) mit zwei Werkzeugen: ein Klassifikations-Tool, das die E-Mail gegen 14 Kategorienlabels prüft und einen Konfidenzwert zurückgibt, sowie ein Routing-Tool, das die Mail an das zuständige Postfach weiterleitet. Beide Tools arbeiten mit Least-Privilege-Rechten: Das Routing-Tool darf ausschließlich in die freigegebenen Postfächer schreiben, das Klassifikations-Tool ausschließlich lesen. Das Modell ist GPT-4o mini über die Azure OpenAI EU-Region. Die Ein- und Ausgaben werden zusätzlich mit Microsoft Defender for Cloud Apps auf bekannte Injection-Muster geprüft.

Input-Validierung: Jede eingehende Mail wird vor der Modellverarbeitung durch eine klassische Pipeline geleitet – MIME-Parsing, Extraktion von Text und Anhängen, Längenbegrenzung, Entfernung typischer Injection-Muster („Ignoriere alle vorherigen Anweisungen", „Du bist jetzt…", mehrstufige Rollenspiele, leere Floskeln in Anhängen). Wird ein Muster erkannt, wird die Mail nicht gelöscht, sondern markiert an die Triage-Mitarbeiter:innen geleitet. Die Erkennungsrate dieser Pipeline lag nach drei Monaten Feintuning bei 96 Prozent auf einem Testset von 2.000 bekannten Injection-Mails; falsche Positive lagen bei 2,1 Prozent und wurden in einem separaten Monitoring-Dashboard sichtbar gemacht.

Eskalationspfade sind explizit ausprogrammiert: Bei einer Modell-Konfidenz unter 0,7 geht die Mail an die manuelle Triage. Bei erkannter möglicher Injection (Musterheuristik oder Modell-Selbstmeldung) geht die Mail an ein Sicherheits-Postfach, das nur von drei namentlich benannten Mitarbeiter:innen gelesen wird. Bei Mehrthemen-Erkennung (mehr als eine Kategorie oberhalb der Schwelle) wird die Mail dupliziert an alle erkannten Postfächer weitergeleitet, mit einer Markierung „Mehrthemen-Mail" im Header. Eine retrospektive Analyse nach dem Vorfall ergab, dass 14 Prozent aller Eingangsmails Mehrthemen-Mails sind. Der beschriebene Vorfall wurde in einer Postmortem-Analyse ausgewertet und führte zu drei konkreten Änderungen am Eskalations- und Pipeline-Design (Vorfall vs. danach):

**Vorfall (Stand September 2025):** Die Heuristik zur Injection-Erkennung lief *parallel* zum Modellaufruf, nicht davor. Im konkreten Fall rief das Klassifikations-Tool das Modell zuerst auf, das Modell interpretierte die Floskel als Systemanweisung, leitete die Mail an die Sicherheitskategorie weiter und setzte parallel eine Sicherheits-Notiz an den SOC-Verteiler. Erst danach signalisierte die Heuristik einen Treffer; die Mail landete im normalen Triage-Flow der Sicherheitskategorie, das Sicherheits-Postfach war zu diesem Zeitpunkt noch nicht der primäre Auffang-Pfad.

**Nachher (Stand Q4/2025):** Die Heuristik läuft jetzt *strikt vor* jedem Modellaufruf. Erkennt die Pipeline ein Injection-Muster, geht die Mail nicht mehr in den normalen Triage-Flow, sondern direkt in ein dediziertes Sicherheits-Postfach, das nur von drei namentlich benannten Mitarbeiter:innen gelesen wird; das Sicherheits-Postfach erhält zusätzlich eine Low-Priority-Kopie aller auffälligen Eingangsmails zur retrospektiven Mustererkennung. Ein simulierter Injection-Test wurde in den wöchentlichen Regressionstest aufgenommen, damit ein erneutes Vertauschen der Pipeline-Reihenfolge sofort auffällt.

## Was lief gut, was nicht

Gut lief die Standard-Triage: Bei rund 78 Prozent der Eingangsmails lieferte das Modell eine korrekte Einfach-Klassifikation mit Konfidenz über 0,85. Die durchschnittliche Triage-Zeit sank von 4,2 Stunden auf 9 Sekunden, die Antwortzeit auf Kundenmails verbesserte sich um 31 Prozent, und die manuelle Triage reduzierte sich auf die problematischen 22 Prozent, wo menschliche Expertise weiterhin nötig war. Die Kosten des Agentenbetriebs lagen bei rund 1.800 Euro pro Monat. Ebenfalls positiv: Im beschriebenen Vorfall hat das System zwar eine Sicherheitsmail fälschlich erzeugt, aber die Eingangsvalidierung hat parallel eine Markierung an die Security-Mitarbeiter:innen gesetzt, sodass der Vorfall innerhalb von zwei Stunden entdeckt und analysiert wurde. Es kam zu keinem Datenabfluss, die Mail landete im richtigen Sicherheitspostfach. Nicht funktioniert hat das Mehrthemen-Handling in den ersten Wochen – die Rate der Mehrfachweiterleitungen stieg von 6 auf 18 Prozent, was einzelne Postfächer überlastete. Ebenfalls unbefriedigend: die Injection-Erkennung hat im erwähnten Fall zu langsam reagiert (Heuristik lief parallel zum Modellaufruf statt davor), sodass das Modell die Mail bereits an die Sicherheitskategorie geroutet hatte, bevor die Heuristik das Muster bestätigte; die Lehrbaustelle „Reihenfolge der Pipelines" wurde danach unmittelbar geschlossen. Der Vorfall wurde der Aufsicht gemeldet und in einer außerordentlichen Schulung des Triage-Teams aufgearbeitet.

## Lessons Learned für Projektleiterinnen

- **Input-Validierung gehört vor das Modell**, nicht parallel dazu. Eine heuristische Eingangsprüfung ist die billigste und wirksamste Verteidigungslinie gegen [Prompt Injection](../glossar.md#prompt-injection).
- **Eskalationspfade sind Pflicht, nicht Kür**. Jeder Agent braucht definierte Auslöser (Konfidenz, Mustererkennung, Mehrdeutigkeit) und ein klares Eskalationsziel mit namentlich benannten Empfänger:innen.
- **Agenten mit Außenwirkung brauchen Least-Privilege-Tools**. Ein Routing-Tool, das nur in definierte Postfächer schreiben darf, ist sicherer als ein freies „any API"-Tool mit weitreichenden Rechten.
- **Mehrthemen-Eingaben sind häufiger als gedacht**. Eine ernsthafte Triage-Architektur muss Duplizierung und Multi-Routing von Anfang an mitdenken und in einem Dashboard sichtbar machen.
- **Sicherheitsvorfälle werden durch Observability entdeckt**, nicht durch Glück. Logs, Audit-Trails und Alarmketten müssen vor dem produktiven Roll-out stehen, nicht danach, sonst dauert die Aufarbeitung Tage statt Stunden.

## Verlauf & Zahlen

| Metrik | Vorher (manuell, 8 Triage-MA) | Nachher (Stand Q4/2025) |
|---|---|---|
| Mittlere Triage-Zeit pro Mail | 4,2 h (bei Lastspitzen bis 14 h unbearbeitet) | 9 s (automatisch) |
| Anteil korrekte Einfach-Klassifikation | ~85 % in ruhigen Phasen, deutlich weniger bei Spitzenlast | 78 % mit Konfidenz >0,85 (modellbasiert) |
| Antwortzeit auf Kundenmails | Baseline | −31 % (kürzer) |
| Mehrfachweiterleitungs-Quote | ~6 % (manuell) | 18 % Spitze in den ersten Wochen → 7 % nach Duplizierungs-Fix |
| Injection-Erkennung (Pipeline-Reihenfolge) | nicht vorhanden / parallel zum Modell | 96 % vor Modell, 2,1 % Falsch-Positiv |
| Mehrthemen-Mails im Eingang | nicht systematisch erfasst | 14 % (aus retrospektiver Analyse) |
| Agent-Betriebskosten | n/a | 1.800 €/Monat (GPT-4o mini + Defender for Cloud Apps) |
