# Übung 10: Ein AI-Risikoregister erstellen

[← zurück zur Übungsübersicht](index.md)

**Phase:** 5
**Dauer:** 45 Minuten
**Voraussetzung:** [AI Governance](../verantwortung/19-governance.md)
**Format:** Gruppenarbeit

## Aufgabe

Ein Kundenservice-Agent liest E-Mails, sucht Bestelldaten, erstellt Antworten und darf nach menschlicher Freigabe Gutschriften bis 100 € auslösen. Bewertet mindestens sieben Risiken auf einer Skala von 1 bis 5 für Eintrittswahrscheinlichkeit (W) und Auswirkung (A). Der Score ist W × A.

Das Register muss Ursache, Folge, präventive Maßnahme, Frühindikator, verantwortliche Rolle und Reaktion enthalten. Markiert Risiken ab Score 15 als rot, ab 8 als gelb und darunter als grün. Formuliert abschließend eine Freigabeentscheidung.

## Hinweise

- Erfasst technische, rechtliche, fachliche und organisatorische Risiken.
- „Monitoring“ allein ist keine präventive Maßnahme.
- Kritische Einzelrisiken können unabhängig vom Score ein K.-o.-Kriterium sein.

## Lösung

Ein belastbares Musterregister ist:

| Risiko | Ursache | Auswirkung | W | A | Score | Maßnahme und Frühindikator | Owner und Reaktion |
|--------|---------|------------|---|---|-------|----------------------------|--------------------|
| Indirekte Prompt Injection aus E-Mail | Bösartige oder kompromittierte Absender-E-Mail enthält versteckte Anweisungen für das Modell | Modell führt unbeabsichtigte Tool-Aufrufe aus, Gutschriften oder Datenabfluss möglich | 4 | 5 | 20 rot | Inhalte als Daten behandeln, Tool-Rechte begrenzen; Indikator: erkannte Rollenwechsel | CISO; Lauf stoppen, Fall sichern, Regeln testen |
| Unberechtigte Gutschrift | Agent überschreitet Freigabegrenze oder umgeht Vier-Augen-Prüfung | Finanzieller Schaden und Reputationsverlust durch nicht autorisierte Erstattungen | 3 | 5 | 15 rot | Betrag und Kunden-ID serverseitig validieren, Vier-Augen-Freigabe; Indikator: Häufung knapp unter 100 € | Process Owner; Gutschrift sperren und prüfen |
| Falsche Serviceantwort | Halluzinierte Fakten oder falsche Quellenangaben aus dem Modell | Kunden erhalten fehlerhafte Auskunft, Beschwerden und Korrekturaufwand steigen | 4 | 3 | 12 gelb | Quellenpflicht und Gold-Set; Indikator: steigende Korrekturquote | Fachbereich; Antwort zurückziehen, Fall ins Testset |
| Offenlegung fremder Bestelldaten | Fehlende oder fehlerhafte Mandantentrennung im Datenzugriff | Verstoß gegen Datenschutz und Vertraulichkeit, DSGVO-Meldepflicht | 2 | 5 | 10 gelb | Mandanten- und Identitätsprüfung vor Abruf; Indikator: verweigerte Cross-Account-Abfragen | Datenschutz; Zugriff stoppen und Vorfall bewerten |
| Doppelter Tool-Aufruf bei Timeout | Fehlende Idempotenz in Tool-Aufrufen bei Netzwerk- oder API-Timeouts | Doppelte Buchungen, Bestellungen oder Gutschriften, Kundenbeschwerden | 3 | 4 | 12 gelb | Idempotenzschlüssel und Statusprüfung; Indikator: gleiche Request-ID mehrfach | IT-Betrieb; Buchung blockieren oder rückgängig machen |
| Modell- oder Prompt-Drift | Modell-Updates, Prompt-Änderungen oder Datenverschiebung ohne ausreichende Regression | Antwortqualität sinkt schleichend, Akzeptanz und Vertrauen gehen zurück | 3 | 3 | 9 gelb | Versionierung und Regressionstest; Indikator: Qualitätswert fällt unter Schwelle | AI Product Owner; Rollback auf freigegebene Version |
| Unvollständiges Audit-Log | Fehlende Pflichtfelder oder unzureichende Persistenz von Tool- und Freigabeevents | Nachweispflichten nicht erfüllbar, Vorfallanalyse und Audit scheitern | 2 | 4 | 8 gelb | Pflichtfelder und manipulationsgeschützter Speicher; Indikator: fehlende Tool-ID | IT-Betrieb; Außenwirkung sperren, Logs reparieren |
| Sinkende Akzeptanz im Serviceteam | Mangelnde Schulung, fehlende Feedbackkanäle oder schlechte UX im Agenten-Cockpit | Geringe Nutzung, Workarounds außerhalb des Systems, ROI des Projekts sinkt | 3 | 2 | 6 grün | Schulung und Feedbackkanal; Indikator: aktive Nutzung unter 50 % | Change Lead; Interviews und Prozessanpassung |

Vor Pilotstart müssen die beiden roten Risiken auf höchstens gelb reduziert werden. Zusätzlich gelten Datenzugriff ohne Berechtigung und Gutschrift ohne wirksame menschliche Freigabe als K.-o.-Fehler, selbst wenn ihre geschätzte Wahrscheinlichkeit sinkt.

Die Freigabe lautet daher **bedingt nicht freigegeben**. Ein begrenzter Shadow-Mode ohne Versand und Gutschrift ist zulässig, sobald Testdaten freigegeben sind. Für den echten Pilot müssen Injection-Regressionstests, Rollenprüfungen, Idempotenztest und dokumentierte Freigabe erfolgreich sein.

Das Register wird wöchentlich im Pilot, monatlich im Betrieb und anlassbezogen nach Änderungen oder Vorfällen überprüft. Jede Neubewertung erhält Datum, Beleg und entscheidende Rolle.

Für jedes gelbe Restrisiko dokumentiert der Owner außerdem:

- wer es bis zu welchem Termin akzeptiert oder weiter reduziert,
- welcher Messwert die Wirksamkeit der Maßnahme belegt,
- welcher Schwellenwert den Agenten automatisch in den Shadow-Mode zurücksetzt.

## Reflexion

Ein Risikoregister ist ein Steuerungsinstrument, wenn es konkrete Owner, Indikatoren und Reaktionen enthält. Die Projektleiterin nutzt den Score zur Priorisierung, behält aber harte Sicherheits- und Datenschutzgrenzen als nicht verhandelbare Freigabekriterien bei.
