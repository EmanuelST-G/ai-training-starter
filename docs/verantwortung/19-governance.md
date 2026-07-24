# AI Governance

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Eine AI-Governance aufbauen, die Freigaben, Dokumentation, Versionierung, Lieferantenmanagement und Abschaltung so regelt, dass AI-Systeme kontrolliert in Betrieb gehen, kontrolliert weiterlaufen und kontrolliert wieder verschwinden können.

## Was AI Governance leistet

[Governance](../glossar.md#governance) beantwortet die organisatorischen Fragen rund um AI-Systeme: Wer entscheidet was? Welche Belege sind nötig? Wie werden Änderungen freigegeben? Wer trägt welche Verantwortung? Sie ist das Bindeglied zwischen Verantwortung auf Papier und Verantwortung im Alltag.

Eine wirksame Governance ist schlank, klar und wird tatsächlich gelebt. Sie schafft keine Bürokratie um der Bürokratie willen, sondern verhindert, dass Systeme ohne Wissen der Verantwortlichen produktiv gehen.

## AI-Systeminventar als Register

Das `Systeminventar (folgt im Glossar mit Phase 4+5)` ist der zentrale Bestandteil jeder Governance. Es enthält alle AI-Systeme – auch experimentelle und stillgelegte.

Pro Eintrag werden dokumentiert:

- Eindeutige ID, Name und Verantwortliche:r
- Zweck, betroffene Personengruppen und Geschäftsprozess
- Datenquellen, Rechtsgrundlage, Hosting-Region
- Modell, Anbieter, Version, Wissensquellen
- Phase (Idee, Lab, Pilot, Produktion, Außer Betrieb)
- Risikoklasse, letzte und nächste Überprüfung
- Verknüpfte Dokumente (Freigabe, DSFA, Tests, Notfallplan)

Das Register ist kein Excel-Tagewerk. Es gehört in eine zentrale, durchsuchbare Datenquelle mit klaren Pflegepflichten.

## Freigabeprozesse in Stufen

AI-Systeme durchlaufen typischerweise drei Stufen, bevor sie breit genutzt werden:

1. **Lab:** isolierte Experimente mit synthetischen oder anonymisierten Daten, eingeschränkte Nutzer:innen, kurze Wirkungszyklen.
2. **Pilot:** Einsatz in einem klar abgegrenzten Prozess mit echten Nutzer:innen, gemessenen Akzeptanzkriterien und definierten Abbruchbedingungen.
3. **Produktion:** breite Nutzung mit Monitoring, Freigaben, Dokumentation und Notfallplan.

Jede Stufe braucht eine dokumentierte Freigabe mit konkreten Kriterien:

- Qualität auf Gold-Set erfüllt
- Datenschutz- und Sicherheitsprüfung abgeschlossen
- Verantwortliche benannt, Betriebsfenster definiert
- Rollback und Abschaltung vorbereitet
- Schulungen und Kommunikation erfolgt

Freigaben werden nicht in einem Tool vergeben, das niemand kennt. Sie folgen einem sichtbaren Prozess mit Fristen und Eskalation.

## Dokumentationspflichten

Eine AI-Anwendung wird in einem Dossier beschrieben, das jederzeit prüfbar ist:

- **Zweck:** Was leistet das System, was nicht? Für welche Nutzer:innen, in welchem Prozess?
- **Daten:** Welche Quellen, welche Felder, welche Berechtigungen, welche Aufbewahrung?
- **Modell:** Anbieter, Modell-ID, Version, Wissensquellen, Embedding, Routing, Tools.
- **Tests:** Gold-Set, Bewertungskriterien, Stratifizierung, Bias- und Sicherheitstests.
- **Bekannte Grenzen:** dokumentierte Schwächen, Ausschlüsse, Eskalationspfade.
- **Verantwortliche:** AI Product Owner, Datenschutz, IT-Security, Fachbereich, Vertretung.

Die Dokumentation wird mit jeder signifikanten Änderung aktualisiert. Sie ist Teil des Audit-Antwortsets.

## Modell- und Prompt-Versionierung

Eine reproduzierbare AI-Anwendung versioniert mehr als Quellcode. Die `Modell-Registry (folgt im Glossar mit Phase 4+5)` hält für jede ausgelieferte Version fest:

- Modell-ID, Anbieter, Parameter
- System- und Nutzer-Prompts, Vorlagen
- Tool-Schemas, Berechtigungen, Geschäftsregeln
- Wissensquellen, Index-Version, Embedding-Modell
- Testdatensatz, Bewertungsrubrik
- Konfiguration von Routing, Filtern, Fallbacks

Jede Version bekommt eine eindeutige ID und einen Änderungsgrund. Ein Rollback stellt genau dieses Paket wieder her – nicht nur den letzten Container-Stand.

## Lieferantenmanagement

`Vendor Management (folgt im Glossar mit Phase 4+5)` für AI-Anbieter unterscheidet sich vom klassischen Einkauf. Geprüft werden:

- AVV, SCC, TIA, Hosting-Region und Subunternehmer
- Sicherheitszertifikate und Auditberichte (z. B. ISO 27001, SOC 2)
- Verfügbarkeit, Vorfallsmeldungen, Mitwirkungspflichten
- Exit-Strategie: Datenexport, Löschung, Übergang auf Alternativen
- Wirtschaftliche Stabilität und Roadmap des Anbieters

Vertragliche Regelungen allein reichen nicht. Die tatsächliche Praxis muss regelmäßig überprüft werden: Werden Defaults eingehalten? Werden Updates transparent kommuniziert? Reagieren Supportkanäle verlässlich?

## Regelmäßige Neubewertung

AI-Systeme verändern sich – durch neue Daten, neue Modelle, neue Nutzer:innen. Eine Governance verlangt eine geplante Neubewertung in festen Intervallen und anlassbezogen:

- **Regelmäßig:** z. B. halbjährliche Review-Sessions pro System
- **Anlassbezogen:** Modellwechsel des Anbieters, neue Datenquellen, regulatorische Änderungen, Vorfälle, Beschwerden

Inhalt der Neubewertung: Aktualität von Zweck und Daten, Qualität auf neuem Testset, Drift, Kostenentwicklung, Sicherheits- und Datenschutzlage, Verantwortlichkeiten noch passend?

## Abschaltung und Rückfalllösung

Jedes AI-System braucht einen Plan für das Ende – ob geplant oder im Notfall.

- **Reguläre Abschaltung:** Ankündigung, Migration der Nutzer:innen, Datenexport und -löschung, Außerbetriebnahme der Tools.
- **Notfall-Abschaltung (Not-Aus):** Ein dokumentierter Hebel, der das System sofort stoppt – vom Kill-Switch im Gateway bis zur Deaktivierung des API-Keys.
- **Rückfalllösung:** Manueller Prozess oder einfacheres Verfahren, das die Kernaufgabe übernimmt, bis das AI-System wieder verfügbar ist.

Die Abschaltung wird im Voraus geübt, nicht erst beim Vorfall. Wer noch nie das Not-Aus gedrückt hat, drückt es im Ernstfall nicht.

## Rollen in der AI Governance

Eine wirksame Governance verteilt Verantwortung über mehrere Rollen:

- **AI Product Owner:** verantwortet ein konkretes System fachlich und operativ, pflegt das Dossier und steuert die Freigaben.
- **AI-Steuerungsgremium:** entscheidet über Portfolioprioritäten, Standards, Eskalationen und übergreifende Risiken.
- **Datenschutzbeauftragte:r (CDO/CDP):** bewertet Datenschutz, Verzeichnis der Verarbeitungstätigkeiten, DSFA, AI-Act-Konformität.
- **CISO / IT-Security:** verantwortet Sicherheitsarchitektur, Vorfallsmeldungen, Red-Teaming.
- **Fachbereich:** definiert Akzeptanzkriterien, schult Anwender:innen, meldet Auffälligkeiten.
- **Rechtsabteilung und Betriebsrat:** werden bei grenzüberschreitenden Vorhaben eingebunden.

Die Rollen sind ergänzend, nicht konkurrierend. Klare Übergaben und gemeinsame Termine verhindern Lücken.

## Standards und Leitlinien

Eine Governance lebt von nachvollziehbaren Standards:

- **KI-Richtlinie des Unternehmens:** erlaubte Anbieter, Datenklassen, Verhaltensregeln
- **Freigabe- und Eskalationsleitfaden:** Kriterien, Beteiligte, Fristen, Formulare
- **Teststandards:** Mindestgröße und Stratifizierung von Testsets, Pflichttests
- **Sicherheits- und Datenschutzstandards:** mit konkreten Anforderungen an AI
- **Schulungsplan:** AI Literacy nach EU AI Act Art. 4 für betroffene Rollen

Standards werden regelmäßig auf Aktualität geprüft. Was vor zwei Jahren sinnvoll war, kann durch Modell- oder Regulierungsentwicklung überholt sein.

## Governance in der Zusammenarbeit

Governance funktioniert nicht als Kontrolle, sondern als gemeinsame Sprache. Drei Gewohnheiten helfen:

- **Früh einbinden:** Datenschutz, Security und Fachbereich werden in der Ideenphase gehört, nicht erst beim Rollout.
- **Risiken benennen:** Eine offene Risikoliste mit Bewertung und Maßnahmen ist wertvoller als ein Compliance-Deck.
- **Erfolge feiern:** Auch Responsible-AI-Maßnahmen verdienen Sichtbarkeit, nicht nur die Systeme selbst.

!!! tip "Praxistipp"
    Beginnt mit einem schlanken Governance-Setup: Inventar, Freigabeprozess, Dossier-Vorlage, Not-Aus-Plan. Es muss nicht alles am ersten Tag perfekt sein – es muss überhaupt da sein und gelebt werden.

## Glossar-Querverweise

- [Governance](../glossar.md#governance)
- [Verantwortlichkeit](../glossar.md#verantwortlichkeit)
- [Compliance](../glossar.md#compliance)
- [Make-or-Buy](../glossar.md#make-or-buy)
- [Pilot](../glossar.md#pilot)
- [Red Teaming](../glossar.md#red-teaming)
- `Modell-Registry (folgt im Glossar mit Phase 4+5)`
- `Systeminventar (folgt im Glossar mit Phase 4+5)`
- `Vendor Management (folgt im Glossar mit Phase 4+5)`
