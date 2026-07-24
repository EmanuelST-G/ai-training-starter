# AI-Integration in Bestandssysteme

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

AI-Anwendungen an bestehende Systeme anbinden und dabei Integrationspfad, Datenfluss, Berechtigungen, Kosten und Betriebsgrenzen begründet auswählen.

## Integrationspfade

| Pfad | Beschreibung | Stärken | Typische Grenzen |
|------|--------------|---------|------------------|
| API | Anwendung ruft ein AI- oder Fachsystem über eine definierte Schnittstelle auf | kontrollierbar, automatisierbar, gut testbar | Entwicklung und Betrieb der Schnittstelle nötig |
| Embedded UI | AI-Funktion ist in eine bestehende Oberfläche eingebettet | vertrauter Kontext, geringe Wechselkosten | Abhängigkeit von UI- und Lizenzmöglichkeiten |
| Side-by-Side | eigenständige AI-Oberfläche arbeitet neben dem Bestandssystem | schneller Pilot, flexible Gestaltung | Nutzer:innen wechseln zwischen Kontexten |
| Batch | große Mengen werden zeitversetzt verarbeitet | günstig planbar, kein Echtzeitdruck | keine sofortige Antwort, Wiederanlauf muss sicher sein |

Der Integrationspfad sollte vom Arbeitsprozess ausgehen. Eine technisch elegante API hilft wenig, wenn Nutzer:innen dafür ihren täglichen Kontext verlassen müssen.

## Authentifizierung und Autorisierung

Authentifizierung beantwortet „Wer ruft auf?“. Autorisierung beantwortet „Was darf diese Identität sehen oder tun?“. Beides muss zwischen UI, Integrationsservice, AI-Anbieter und Bestandssystem konsistent sein.

Bewährte Grundsätze:

- Service-zu-Service-Zugriffe mit kurzlebigen Tokens oder einem passenden Identitätsdienst absichern.
- Secrets nicht in Prompts, Quellcode, Logs oder Browser-JavaScript speichern.
- Least Privilege anwenden: Ein Zusammenfassungsdienst braucht meist Leserechte, keine Schreibrechte.
- Nutzeridentität und Mandant bis zum Datenabruf durchreichen, statt einen gemeinsamen Vollzugriff zu verwenden.
- Eingaben und Tool-Parameter validieren; externe Antworten als untrusted data behandeln.

Besonders bei RAG und Tools darf ein Integrationsservice keine Rechte erweitern, die die Person im Quellsystem nicht besitzt.

## Datenflüsse: Pull, Push und Events

| Muster | Ablauf | Geeignet für | Zu beachten |
|--------|--------|--------------|-------------|
| Pull | AI-Service fragt Daten bei Bedarf ab | aktuelle Einzelanfrage | Latenz und Last auf dem Quellsystem |
| Push | Bestandssystem übermittelt Daten an AI-Service | geplante Synchronisation, Batch | Datenminimierung, Duplikate und Löschung |
| Event-getrieben | Änderung löst Verarbeitung aus | zeitnahe Aktualisierung und Automatisierung | Reihenfolge, Wiederholung und Dead-Letter-Fälle |

Bei Push und Events sollten nur die tatsächlich benötigten Felder übertragen werden. Jede Nachricht braucht eine ID, einen Zeitstempel und eine nachvollziehbare Quelle. Wiederholte Zustellung muss sicher sein; dafür helfen idempotente Verarbeitung und ein gespeicherter Verarbeitungsstatus.

## Latenz, Throughput und Rate Limits

Die wahrgenommene Latenz umfasst Netzwerk, Authentifizierung, Datenabfrage, Retrieval, Modellantwort und Darstellung. Streaming kann die Zeit bis zum ersten sichtbaren Text verkürzen, ändert aber nicht automatisch die Gesamtzeit.

[Throughput](../glossar.md#throughput) beschreibt, wie viele Anfragen pro Zeiteinheit verarbeitet werden. Ein Bestandssystem kann dabei der Engpass sein, auch wenn das Modell viele Anfragen annimmt. Ein [Rate Limit](../glossar.md#rate-limit) des Anbieters muss mit Quoten der eigenen API und Datenbank abgestimmt werden.

Für die Planung helfen:

- Zeitbudgets je Teilstrecke und ein Timeout pro Abhängigkeit
- begrenzte Wiederholungen mit Backoff statt sofortiger Lastspitze
- Queue oder Batch-Verarbeitung für nicht dringende Aufgaben
- Schutz vor Überlastung durch Circuit Breaker und Bulkheads
- definierte Antwort bei Nichtverfügbarkeit, zum Beispiel manueller Prozess oder gespeicherter Entwurf

## Kosten, Stückpreis und SLA

Der Stückpreis einer Anfrage ist mehr als der Modellpreis. Er umfasst Eingabe- und Ausgabetokens, Embedding- und Suchkosten, Infrastruktur, Überwachung, Support und gegebenenfalls Lizenzen. Für einen belastbaren Business Case werden typische und maximale Kontextgrößen sowie Fehlversuche gemessen.

Eine [SLA (Service Level Agreement)](../glossar.md#sla-service-level-agreement) regelt vertragliche Zusagen eines Anbieters. Ein internes [SLO (Service Level Objective)](../glossar.md#slo-service-level-objective) legt fest, welches Ziel die eigene Lösung erreichen soll, etwa Verfügbarkeit, Antwortzeit oder Erfolgsquote. Beides sollte zu den Erwartungen des Fachprozesses passen: Eine interne Recherche toleriert eventuell mehr Wartezeit als eine Hotline.

## Standard-Integrationen

Produkte wie Microsoft 365 Copilot, Salesforce Einstein oder ServiceNow AI bringen vorgefertigte Konnektoren, Rollenmodelle und Betriebsverantwortung mit. Das kann einen schnellen Start ermöglichen, ersetzt aber keine Prüfung von:

- Datenresidenz, Vertragsbedingungen und Lizenzmodell,
- tatsächlich synchronisierten Quellen und deren Aktualität,
- Berechtigungsvererbung und Mandantentrennung,
- Exportierbarkeit der Prompts, Konfigurationen und Ergebnisse,
- Messbarkeit der Qualität und Möglichkeit zum Anbieterwechsel.

Ein Produktname ist kein Nachweis dafür, dass ein konkreter Prozessfall unterstützt wird. Vor dem Rollout sollte ein repräsentativer Ablauf mit echten Rollen und Testdaten geprüft werden.

## Custom-Integration: Wann sinnvoll?

Eine eigene Integration lohnt sich, wenn vorhandene Produkte den Prozess, die Datenhoheit oder die erforderliche Steuerung nicht ausreichend abbilden. Beispiele sind eine domänenspezifische Suchlogik, mehrere Datenquellen mit einheitlicher Berechtigungsprüfung oder ein klar abgegrenztes Tool für einen internen Prozess.

Sie bringt aber dauerhafte Verantwortung für Schnittstellen, Sicherheitsupdates, Monitoring, Modellwechsel und Support. „Wir können das selbst bauen“ ist daher erst dann ein gutes Argument, wenn ein verantwortliches Team, ein Budget und ein Wartungsplan vorhanden sind.

## Pilotbetrieb und Skalierung

Ein Pilot sollte einen begrenzten Prozess, eine definierte Nutzergruppe und messbare Akzeptanzkriterien haben. Technisch werden dabei nicht nur die glücklichen Fälle getestet, sondern auch fehlende Rechte, leere Antworten, Anbieterfehler, Spitzenlast und Abbruch.

Vor der Skalierung sollte feststehen:

1. Welche Qualitäts- und Zeitziele erreicht wurden.
2. Welche Daten tatsächlich übertragen und gespeichert werden.
3. Wie Kosten pro Fall und Supportaufwand aussehen.
4. Wer Fehler entscheidet, korrigiert und kommuniziert.
5. Wie ein Rollback oder manueller Ersatzprozess funktioniert.

Erst danach werden Nutzerzahl, Datenvolumen und Autonomie schrittweise erhöht. Jede Stufe braucht Messwerte und eine Rückfalloption.

!!! tip "Praxistipp"
    Startet den Pilot möglichst mit lesendem Zugriff und einem klaren manuellen Rückfallweg. Aktiviert schreibende Aktionen erst, wenn Rechte, Fehlerfälle, Stückkosten und Qualität mit echten Rollen messbar beherrscht werden.

## Glossar-Querverweise

- [Streaming](../glossar.md#streaming)
- [Throughput](../glossar.md#throughput)
- [Rate Limit](../glossar.md#rate-limit)
- [SLA (Service Level Agreement)](../glossar.md#sla-service-level-agreement)
- [SLO (Service Level Objective)](../glossar.md#slo-service-level-objective)
- [API](../glossar.md#api)
- [Event-Streaming](../glossar.md#event-streaming)
