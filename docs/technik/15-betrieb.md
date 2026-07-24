# Betrieb von AI-Lösungen

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Planen können, wie eine AI-Lösung nach dem Go-live dauerhaft überwacht, evaluiert, aktualisiert und bei Störungen sicher weiterbetrieben wird.

## Go-live ist kein Endpunkt

Eine AI-Anwendung verändert sich auch dann, wenn kein eigener Code geändert wurde: Quelldaten werden aktualisiert, Nutzer:innen stellen neue Fragen, Anbieter ändern Modelle und Kosten, und Berechtigungen laufen aus. Betrieb bedeutet deshalb mehr als Serververfügbarkeit. Er umfasst Qualität, Sicherheit, Aktualität, Kosten und die fachliche Verantwortung für Entscheidungen.

## Entwicklungs-, Test- und Produktionsumgebung

| Umgebung | Zweck | Daten und Zugriff |
|----------|-------|------------------|
| Entwicklung | Schnittstellen, Prompts und Tool-Aufrufe bauen | synthetische oder anonymisierte Daten; weitgehende Logs |
| Test / Staging | reproduzierbare Abnahme und Regressionstests | repräsentative Testdaten; kontrollierte Rollen |
| Produktion | echter Prozess mit echten Nutzer:innen | produktive Daten; minimale Rechte und geschützte Logs |

Umgebungen brauchen getrennte Zugangsdaten, Datenbanken und Konfigurationen. Ein Test darf nicht versehentlich eine produktive E-Mail senden oder ein Ticket ändern. Produktionsdaten gehören nicht ungeprüft in Entwicklungslogs.

## Versionierung als zusammengehöriges Paket

Für eine reproduzierbare AI-Anwendung werden mehr Dinge versioniert als Quellcode:

- Modell-ID, Anbieter und relevante Modellparameter
- System- und Nutzer-Prompts einschließlich Vorlagen
- Tool-Schemas, Berechtigungen und Geschäftsregeln
- Wissensquellen, Parser, Chunking und Embedding-Modell
- Testdatensatz, erwartete Antworten und Bewertungsrubrik
- Konfiguration von Routing, Limits, Filtern und Fallbacks

Jede veröffentlichte Version bekommt eine ID und einen Änderungsgrund. So kann ein Team nachvollziehen, ob eine Qualitätsänderung vom Modell, Prompt, Datenbestand oder Code stammt. Ein Rollback muss dieses Paket wiederherstellen können, nicht nur die letzte Container-Version.

## Monitoring: Was muss sichtbar sein?

Technisches Monitoring zeigt nur einen Teil der Realität. Ein sinnvolles Dashboard verbindet mehrere Perspektiven:

| Bereich | Beispiele für Kennzahlen |
|---------|--------------------------|
| Qualität | Antworttreue, Quellenabdeckung, Retrieval-Recall, Akzeptanzquote |
| Kosten | Kosten pro Anfrage und Fall, Tokenvolumen, Anteil teurer Fallbacks |
| Antwortzeit | Zeit bis zur Antwort, Zeit bis zum ersten Token, Timeout-Quote |
| Fehler | HTTP-Fehler, Tool-Fehler, leere Treffer, Abbrüche, Wiederholungen |
| Nutzung | aktive Nutzer:innen, Fälle pro Prozess, Abbruch- und Eskalationsquote |
| Feedback | hilfreiche Antworten, Korrekturen, Beschwerden, Freitextmuster |

Metriken müssen nach Modellversion, Mandant, Prozess und Umgebung filterbar sein. Einzelne Beispielantworten und anonymisierte Traces erklären, **warum** sich ein Kennwert verändert hat. Logs sollten keine unnötigen personenbezogenen Inhalte oder Secrets enthalten.

## Drift erkennen und behandeln

[Drift](../glossar.md#drift) ist eine relevante Veränderung der Daten-, Anfrage- oder Modellverteilung gegenüber dem Zustand, für den die Lösung getestet wurde. [Drift Detection](../glossar.md#drift-detection) sucht solche Veränderungen automatisiert oder über regelmäßige Auswertungen.

Drei Formen sind besonders nützlich:

- **Data Drift:** Eingaben oder Quelldaten ändern sich, etwa neue Produktgruppen oder andere Sprache.
- **Concept Drift:** Die Beziehung zwischen Eingabe und gewünschter Antwort ändert sich, etwa nach einer Prozessreform.
- **Model Drift:** Ein Anbieter- oder Modellupdate verändert Qualität, Stil, Kosten oder Tool-Verhalten.

Erkennung kombiniert statistische Signale mit fachlichen Stichproben. Ein Alarm braucht eine Schwelle, eine verantwortliche Rolle und eine Maßnahme: Datenpipeline prüfen, Prompt anpassen, Version zurücksetzen oder Betrieb begrenzen. Ein Alarm ohne Runbook bleibt nur ein Diagramm.

## Anbieter- oder Modellwechsel: Plan B

Ein [Vendor Lock-in](../glossar.md#vendor-lock-in) wird nicht erst beim Kündigungsgespräch sichtbar. Wichtige Gegenmaßnahmen sind:

1. Anbieterzugriffe hinter einem internen Gateway oder Adapter kapseln.
2. Ein eigenes Nachrichten- und Tool-Format verwenden, statt überall proprietäre Felder zu verteilen.
3. Prompts, Testfälle, Quellen und Bewertung außerhalb des Anbieters versionieren.
4. Modellabhängigkeiten wie Kontextfenster, Tokenisierung, Vision und Tool-Semantik dokumentieren.
5. Einen zweiten Anbieter oder ein kleineres lokales Modell mit denselben Testfällen prüfen.
6. Export, Löschung und erneute Indexierung regelmäßig üben.

Portabilität heißt nicht, dass jedes Modell dieselbe Qualität liefert. Sie bedeutet, dass ein Wechsel planbar und messbar ist, statt den gesamten Prozess zu blockieren.

## Fallback-Modelle

Ein Fallback kann bei Überlastung, Timeout oder einem temporären Anbieterfehler einspringen. Es ist kein automatischer Qualitätsersatz: Ein kleineres Modell kann andere Formate, Quellenbindung oder Tool-Aufrufe liefern.

Vor dem Einsatz werden Fallbacks mit den wichtigsten Testfällen geprüft. Für jeden Fehler wird entschieden, ob ein erneuter Versuch, ein alternatives Modell, eine Warteschlange oder ein manueller Prozess angemessen ist. Antworten müssen als Fallback gekennzeichnet werden, wenn sich Qualität oder Datenschutzbedingungen unterscheiden. Ein Fallback darf keine Berechtigungsprüfung umgehen.

## Rate Limits und Verfügbarkeit

Ein [Rate Limit](../glossar.md#rate-limit) begrenzt Anfragen oder Tokens in einem Zeitfenster. Die Anwendung muss Quoten für Nutzer:innen, Mandanten und Gesamtservice zusammen betrachten. [Throughput](../glossar.md#throughput) kann sinken, obwohl der Anbieter erreichbar ist, etwa wegen eigener Datenbank- oder Queue-Grenzen.

Für Ausfälle und Spitzenlast gehören dazu:

- exponentielles Backoff mit zufälliger Streuung,
- Queueing und Priorisierung dringender Fälle,
- harte Timeouts und Begrenzung paralleler Anfragen,
- Circuit Breaker statt endloser Wiederholungen,
- eine verständliche Meldung und ein manueller Ersatzprozess.

Das [SLO (Service Level Objective)](../glossar.md#slo-service-level-objective) sollte auch Qualitäts- und Frischeziele enthalten, nicht nur Erreichbarkeit.

## Incident- und Change-Management

Ein AI-Incident kann ein technischer Ausfall, eine falsche fachliche Antwort, ein Datenleck oder ein unerlaubter Tool-Aufruf sein. Das Runbook benennt Bereitschaft, Eskalationsweg, Sofortmaßnahme, Beweissicherung und Kommunikation.

Nach einer Störung wird geklärt:

- Welche Nutzer:innen, Daten und Entscheidungen waren betroffen?
- Welche Version und welche Quellen wurden verwendet?
- Kann der Fehler reproduziert und sicher korrigiert werden?
- Muss Betrieb pausiert, zurückgerollt oder auf Assistenz reduziert werden?
- Welche Erkenntnis wird in Testset, Monitoring oder Prozess übernommen?

Änderungen durchlaufen eine dokumentierte Prüfung. Dazu gehören Modell- und Promptänderungen ebenso wie neue Wissensquellen, Berechtigungsregeln und Tool-Funktionen.

## Canary, Shadow und Rollback

Beim [Canary Deployment](../glossar.md#canary-deployment) erhält eine neue Version zunächst einen kleinen Anteil echter Anfragen. Mit [Shadow Traffic](../glossar.md#shadow-traffic) wird sie parallel auf Kopien ausgeführt, ohne ihre Antwort an Nutzer:innen auszuliefern. Beide Verfahren benötigen Datenschutzprüfung und eine klare Abbruchschwelle.

Ein Rollback wird vor dem Rollout geübt. Wenn Antworten nicht deterministisch sind, wird nicht nach Textgleichheit, sondern nach fachlichen Kriterien, Quellen und Sicherheitsregeln entschieden. Die alte Version bleibt so lange verfügbar, bis die neue nachweislich stabil ist.

## Kontinuierliche Evaluation

Das Testset enthält einfache Standardfälle, schwierige Grenzfälle, neue reale Beispiele und negative Fälle, bei denen das System ablehnen soll. Nach jeder relevanten Änderung laufen Regressionstests; in Produktion werden Stichproben und Nutzerfeedback ergänzt.

Evaluation sollte getrennt beantworten:

- Findet die Anwendung die richtigen Informationen?
- Ist die Antwort durch die Informationen belegt?
- Werden Rechte, Datenschutz und Sicherheitsregeln eingehalten?
- Sind Latenz und Kosten im vereinbarten Rahmen?

Ein steigender Durchschnitt kann kritische Minderheiten verdecken. Ergebnisse daher nach Prozess, Sprache, Rolle und Risikoklasse aufschlüsseln.

!!! tip "Praxistipp"
    Erstellt vor dem Go-live ein einseitiges Betriebs-Runbook: aktuelle Version, Qualitäts-SLO, Kostenalarm, Fallback, Not-Aus, zuständige Person und Rollback-Befehl. Wenn diese Angaben fehlen, ist die Lösung noch nicht produktionsbereit.

## Glossar-Querverweise

- [SLO (Service Level Objective)](../glossar.md#slo-service-level-objective)
- [Drift](../glossar.md#drift)
- [Drift Detection](../glossar.md#drift-detection)
- [Canary Deployment](../glossar.md#canary-deployment)
- [Shadow Traffic](../glossar.md#shadow-traffic)
- [Rate Limit](../glossar.md#rate-limit)
- [Throughput](../glossar.md#throughput)
- [Vendor Lock-in](../glossar.md#vendor-lock-in)
- [Regressionstest](../glossar.md#regressionstest)
- [Evaluation](../glossar.md#evaluation)
