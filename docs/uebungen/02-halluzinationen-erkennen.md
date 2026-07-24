# Übung 02: Halluzinationen systematisch erkennen

[← zurück zur Übungsübersicht](index.md)

**Phase:** 1
**Dauer:** 20 Minuten
**Voraussetzung:** [Generative AI und LLMs](../grundlagen/02-llms.md)
**Format:** Partnerarbeit

## Aufgabe

Für das fiktive Projekt „Nordlicht“ ist nur Folgendes belegt:

- Freigabe des Piloten: 12. Juni durch den Fachbereich
- 60 Testfälle, davon 48 fachlich korrekt
- Betrieb in einer EU-Cloud-Region
- Noch keine Freigabe durch Datenschutz
- Geplanter Pilot mit 25 internen Nutzer:innen

Ein AI-Assistent schreibt: „Nordlicht wurde am 12. Juni von Fachbereich und Datenschutz freigegeben. Die Genauigkeit beträgt 85 %. Das System läuft vollständig DSGVO-konform auf deutschen Servern. 25 Kund:innen nutzen es bereits produktiv, und laut ISO-27001-Audit gab es keine Sicherheitsmängel.“

Markiert jede Behauptung als **belegt**, **berechenbar**, **widersprüchlich** oder **unbelegt**. Formuliert anschließend eine korrigierte Antwort und einen Prüfplan für die offenen Aussagen.

## Hinweise

- Eine präzise Zahl kann trotzdem falsch sein.
- „EU-Region“ ist nicht gleichbedeutend mit „deutsche Server“.
- Trennt fehlende Evidenz von einem nachgewiesenen Widerspruch.

## Lösung

| Behauptung | Einstufung | Begründung |
|------------|------------|------------|
| Freigabe am 12. Juni durch den Fachbereich | belegt | Datum und Rolle stehen in den Fakten. |
| Freigabe durch Datenschutz | widersprüchlich | Laut Fakten liegt sie noch nicht vor. |
| Genauigkeit 85 % | widersprüchlich | 48 von 60 ergeben 80 %, nicht 85 %. |
| vollständig DSGVO-konform | unbelegt | Hosting allein weist keine DSGVO-Konformität nach. |
| deutsche Server | unbelegt | Belegt ist nur eine EU-Cloud-Region. |
| 25 Kund:innen nutzen das System produktiv | widersprüchlich | Geplant sind 25 interne Pilotnutzer:innen; Produktion ist nicht belegt. |
| ISO-27001-Audit ohne Mängel | unbelegt | Ein Audit wurde in den Fakten nicht erwähnt. |

Eine sachlich korrigierte Antwort lautet:

> Der Fachbereich gab den Pilot am 12. Juni frei. In 60 Testfällen waren 48 Antworten fachlich korrekt; das entspricht 80 %. Der Pilot ist für 25 interne Nutzer:innen in einer EU-Cloud-Region geplant. Die Datenschutzfreigabe steht noch aus. Zu Produktionsbetrieb, Serverland und ISO-27001-Audit liegen keine Angaben vor.

Der Prüfplan ordnet jede offene Aussage einer Primärquelle zu:

1. Datenschutzfreigabe im Freigabeprotokoll und bei der zuständigen Datenschutzrolle prüfen.
2. Cloud-Region und konkreten Speicherort in Vertrag, Administrationskonfiguration und Subunternehmerliste abgleichen.
3. Testquote aus dem versionierten Testbericht nachrechnen.
4. Nutzerstatus anhand Pilotplan und Zugriffsprotokoll klären.
5. Ein behauptetes Audit nur mit Auditbericht, Geltungsbereich und Datum akzeptieren.

Die Übung ist bestanden, wenn keine unbelegte Aussage in die korrigierte Antwort übernommen wird und die berechnete Quote 80 % beträgt.

## Reflexion

Halluzinationen erkennt man nicht am Tonfall, sondern durch den Abgleich jeder Aussage mit einer belastbaren Quelle. Die Projektleiterin braucht deshalb eine Evidenzkette und darf technische Angaben wie Hosting-Region oder Zertifikat nicht als pauschalen Compliance-Nachweis behandeln.
