# Datenschutz, Recht und EU AI Act

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Datenschutz-, Vertrags- und Regulierungsfragen für AI-Projekte so vorbereiten, dass sie vor Produktivschaltung keine rechtlichen Lücken, ungeklärten Verantwortlichkeiten oder unzulässigen Datenflüsse enthalten.

## DSGVO-Grundlagen für AI-Projekte

Die [DSGVO](../glossar.md#dsgvo) regelt jede Verarbeitung personenbezogener Daten in der EU – unabhängig davon, ob ein Mensch oder ein Modell die Daten verarbeitet. Für AI-Projekte sind drei Begriffe zentral:

- **Personenbezogene Daten** sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Dazu zählen Name, Adresse, E-Mail, aber auch Pseudonyme, Gerätekennungen, Standortdaten und freie Texte mit Personenbezug.
- **Besondere Datenkategorien** (Art. 9 DSGVO) sind besonders schutzwürdig: Gesundheitsdaten, biometrische Daten, genetische Daten, ethnische Herkunft, politische Meinungen, religiöse Überzeugungen, Gewerkschaftszugehörigkeit, Sexualleben oder sexuelle Orientierung. Für sie gilt ein grundsätzliches Verbot mit wenigen Ausnahmen.
- **Pseudonymisierung** ersetzt direkte Identifikatoren durch ein Pseudonym, bleibt aber personenbezogen. **Anonymisierung** hebt den Personenbezug auf – gelingt in der Praxis selten, weil scheinbar harmlose Merkmale eine Re-Identifikation ermöglichen können.

AI-Modelle können aus scheinbar anonymen Daten Personen rekonstruieren (Inferenz). Auch die Wahrscheinlichkeit, mit der ein Modell ein bestimmtes Merkmal korrekt vorhersagt, kann ein personenbezogenes Datum sein.

## Rechtsgrundlage und Zweckbindung

Jede Verarbeitung braucht eine Rechtsgrundlage (Art. 6 DSGVO): Einwilligung, Vertrag, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliches Interesse oder berechtigtes Interesse. Die Zwecke müssen vor der Verarbeitung festgelegt und dokumentiert werden. Eine nachträgliche Zweckänderung ist nur unter engen Voraussetzungen möglich.

Für AI-Projekte heißt das:

- Vor dem ersten Training oder Prompt klären: Was ist der Zweck? Welche Daten sind nötig? Welche Rechtsgrundlage trägt die Verarbeitung?
- Eingaben, die in ein AI-Tool gehen, müssen denselben Zweck haben wie die zugrunde liegende Verarbeitung.
- Eine Einwilligung muss freiwillig, spezifisch, informiert und unmissverständlich sein. Pauschale „AI-Consent"-Klauseln reichen nicht.

## Datenminimierung

[Datenminimierung](../glossar.md#datenminimierung) ist ein DSGVO-Grundsatz: Nur die für den Zweck erforderlichen Daten dürfen verarbeitet werden. Für AI-Projekte bedeutet das konkret:

- Vor jeder Eingabe fragen: Wird dieses Feld wirklich gebraucht?
- Sensible Felder wie Geburtsdatum, Gesundheitsmerkmale oder interne IDs standardmäßig nicht an AI-Dienste übergeben.
- Beispiel-Prompts mit echten Kundendaten sind tabu – auch intern.
- Bei RAG nur die Dokumente indexieren, die der jeweilige Nutzerkreis sehen darf.

Datenminimierung ist kein technisches Detail, sondern eine frühe Designentscheidung. Was nicht ins System gelangt, kann später nicht leaken.

## Auftragsverarbeitung

Bei einer [Auftragsverarbeitung](../glossar.md#auftragsverarbeitung) verarbeitet ein Auftragsverarbeiter personenbezogene Daten im Auftrag des [Verantwortlichen](../glossar.md#verantwortlicher). Klassische AI-SaaS-Anbieter sind fast immer Auftragsverarbeiter – auch wenn sie es im Marketing nicht so nennen. Pflichten:

- Schriftlicher Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO mit konkreten Regelungen zu Zweck, Dauer, Art der Daten, Pflichten und Unterauftragsverarbeitern.
- Der Anbieter darf Daten nur auf dokumentierte Weisung verarbeiten.
- Subunternehmer (z. B. Cloud-Provider, Embedding-Dienste) müssen offengelegt und genehmigt werden.
- Der Anbieter muss technische und organisatorische Maßnahmen nachweisen (TOMs).
- Am Ende der Zusammenarbeit sind Daten zu löschen oder zurückzugeben, sofern nicht gesetzliche Pflichten dem entgegenstehen.

Ein Beispiel-AVV enthält: Vertragsgegenstand, Dauer, Art und Zweck der Verarbeitung, Kategorien betroffener Personen und Daten, Rechte des Verantwortlichen, Pflicht zur Vertraulichkeit, TOMs, Subunternehmerliste, Unterstützung bei Betroffenenrechten, Meldepflichten bei Vorfällen, Audit-Rechte und Löschpflichten. Vor Unterzeichnung sollte die Rechtsabteilung den AVV gegen den Anbieter-Standard prüfen.

## Drittlandtransfer (Schrems-II, Standardvertragsklauseln)

Wenn personenbezogene Daten in Länder außerhalb des EWR übertragen werden, braucht die Übertragung ein besonderes Schutzniveau. Die wichtigsten Bausteine:

- **Angemessenheitsbeschluss** der EU-Kommission: Für wenige Länder (z. B. Schweiz, Kanada, Japan in Teilen) gilt ein gleichwertiges Schutzniveau.
- **EU-Standardvertragsklauseln (SCC)**: Vertragliche Module, die Pflichten aus dem EWR in Drittländer übertragen. Sie allein reichen nach Schrems-II nicht – sie brauchen ein **Transfer Impact Assessment** (TIA), das die Rechtslage im Empfängerland und die tatsächlichen Schutzmaßnahmen bewertet.
- **Ergänzende Maßnahmen**: Verschlüsselung mit eigener Schlüsselhoheit, Pseudonymisierung, Verträge mit Subunternehmern und strenge Zugriffskontrolle können ein Drittland-Risiko mindern.

Für typische US-Anbieter bedeutet das: Vertrag mit SCC-Modulen, TIA, Nachweis der TOMs, und in der Praxis oft die Forderung, dass der Anbieter Daten in EU-Regionen hosten kann. Cloud-Konfigurationen müssen diese Anforderungen widerspiegeln.

## Nutzung von Eingaben zu Trainingszwecken (US-Anbieter)

Viele US-Anbieter behalten sich in den Standard-AGB vor, Eingaben und Ausgaben zur Verbesserung der Modelle zu verwenden. Das ist für die DSGVO riskant, weil die Daten dann außerhalb der vereinbarten Zwecke verarbeitet werden. Praxis:

- **Opt-out aktivieren**: Die meisten großen Anbieter bieten ein Admin-Opt-out für die Verwendung von Eingaben zu Trainingszwecken. Es muss vor produktiver Nutzung gesetzt werden.
- **Vertragliche Klarheit**: AVV und Auftrag müssen die Datenverwendung auf den konkreten Zweck beschränken.
- **Trennung sensibler Workloads**: Für Daten mit erhöhtem Schutzbedarf eigene Verträge, eigene Mandanten oder EU-Hosting nutzen.
- **Self-Hosting oder On-Premises**: Wenn ein Anbieter die Nutzung nicht ausschließen kann, ist Eigenbetrieb die ehrlichere Antwort.

Ohne Opt-out und ohne vertragliche Begrenzung landen Geschäftsgeheimnisse, personenbezogene Daten und Quellcode möglicherweise im nächsten Modell-Update des Anbieters.

## Urheberrecht und geistiges Eigentum

AI-Modelle werden mit großen Datenmengen trainiert, deren Urheberrecht nicht abschließend geklärt ist. Relevante Fragen für Projekte:

- Wessen Inhalte sind in den Trainingsdaten? Dürfen sie für den gewählten Zweck verarbeitet werden?
- Sind Outputs urheberrechtlich geschützt? Im EU-Recht fehlt für rein maschinell erzeugte Werke die menschliche Schöpfungshöhe.
- Wer haftet, wenn Outputs bestehende Werke übernehmen oder Urheberrechte verletzen?
- Welche Lizenz haben Eingaben? Mitarbeiter-Outputs in Copiloten gehören meist dem Arbeitgeber; Kunden-Eingaben bleiben beim Kunden.

Vertragliche Regelungen mit Anbietern müssen Nutzungsrechte an Outputs, Haftung für Urheberrechtsverletzungen und die Frage der Trainingsdatenverwendung klar adressieren.

## Vertrauliche Unternehmensinformationen

AI-Tools sind kein sicherer Ort für Geschäftsgeheimnisse, M&A-Informationen, Personalakten oder Sicherheitsvorfälle. Risiken entstehen durch Eingaben, Logs, Caches und Retrieval-Indizes. Wichtige Regeln:

- Verbotene Inhalte in Eingaben klar benennen und durchsetzen.
- Trainierte oder geteilte Inhalte in Mitarbeiter:innen-Schulungen ausdrücklich thematisieren.
- Auftragsverarbeitung und Geheimhaltungsvereinbarungen (NDA) mit Anbietern verbinden.
- Logs, Caches und Telemetriedaten regelmäßig auf ungewollte Inhalte prüfen.

## Transparenz gegenüber Nutzer:innen

Nutzer:innen müssen erkennen können, dass sie mit einem AI-System interagieren, welche Daten verarbeitet werden und welche Rechte sie haben. Praktische Maßnahmen:

- Klare Kennzeichnung von AI-generierten Inhalten.
- Hinweis auf Trainingsdatenverwendung, Speicherdauer und Drittlandtransfer in der Datenschutzerklärung.
- Erklärung, wann ein Mensch die Ausgabe prüft und wer verantwortlich ist.
- Einfacher Weg, Auskunft, Löschung oder Widerspruch auszuüben.

Transparenz ist nicht nur DSGVO-Pflicht – sie ist Voraussetzung für Vertrauen und Akzeptanz.

## Dokumentationspflichten

Artikel 30 DSGVO verlangt ein **Verzeichnis der Verarbeitungstätigkeiten**. Für AI-Projekte enthält es typischerweise:

- Bezeichnung und Zweck der Verarbeitung
- Verantwortlicher, Ansprechperson, beteiligte Auftragsverarbeiter
- Kategorien betroffener Personen und Daten
- Empfänger und Drittlandtransfer mit Rechtsgrundlage
- Löschfristen und TOMs
- Rechtsgrundlage je Verarbeitungsschritt

Zusätzlich brauchen Hochrisiko-Verarbeitungen eine **Datenschutz-Folgenabschätzung** ([DSFA](../glossar.md#datenschutz-folgenabschatzung-dsfa)) nach Art. 35 DSGVO. Eingaben in öffentlich verfügbare AI-Tools ohne ausreichende Schutzmaßnahmen sind ein typischer DSFA-Anlass.

## EU AI Act – Überblick

Der EU AI Act ist seit 2024 in Kraft und wird gestaffelt angewendet. Er verfolgt einen risikobasierten Ansatz: Je höher das Risiko, desto strenger die Pflichten.

### Verbotene Praktiken

Bestimmte Anwendungen sind unabhängig von der Risikoklasse verboten – etwa das Ausnutzen von Schutzbedürftigen, Social Scoring durch öffentliche Stellen oder biometrische Echtzeit-Überwachung im öffentlichen Raum (mit engen Ausnahmen).

### [Hochrisiko-System](../glossar.md#hochrisiko-system) (Anhang III)

Anhang III listet Bereiche mit erhöhtem Risiko: Personalentscheidungen, Kreditwürdigkeit, Bildung, Strafverfolgung, kritische Infrastruktur, Migration und mehr. Für diese Systeme gelten Pflichten zu Risikomanagement, Daten-Governance, technischer Dokumentation, Aufzeichnungen, Aufsicht durch Menschen, Genauigkeit, Robustheit und Cybersicherheit.

### Transparenzpflichten

Anbieter und Betreiber müssen Nutzer:innen erkennbar machen, dass sie mit einem AI-System interagieren. Bestimmte Inhalte (z. B. synthetische Medien) müssen gekennzeichnet werden.

### General-Purpose AI (Code of Practice)

Für allgemeine KI-Modelle – insbesondere solche mit „systemischen Risiken" – gelten zusätzliche Pflichten zu Trainingsdaten, Dokumentation, Sicherheitstests und Vorfallsmanagement. Der Code of Practice der EU-Kommission konkretisiert die Erwartungen.

### [AI Literacy](../glossar.md#ai-literacy) (Art. 4)

Anbieter und Betreiber müssen sicherstellen, dass Mitarbeiter:innen ein angemessenes Verständnis von AI-Systemen, ihrer Funktionsweise, ihren Grenzen und Risiken haben. Schulung ist damit regulatorische Pflicht – nicht nur Good Practice.

## Rollen und Verantwortlichkeiten

Im AI-Kontext sind mehrere Rollen zu unterscheiden:

- **[Verantwortlicher](../glossar.md#verantwortlicher)** nach DSGVO: entscheidet über Zweck und Mittel.
- Auftragsverarbeiter: verarbeitet im Auftrag.
- Anbieter und Betreiber nach AI Act: treffen die regulatorischen Pflichten je nach Rolle.
- AI Product Owner: verantwortet fachlich und operativ ein konkretes AI-System.
- Datenschutzbeauftragte:r: berät und prüft.
- CISO/CDO: tragen Sicherheits- bzw. Datenverantwortung.

Eine Rollenmatrix mit Namenszuordnung und Vertretungsregelung gehört in jedes AI-Projekt.

## Wann externe Stellen eingebunden werden müssen

Bestimmte Vorhaben brauchen früh die Einbindung von Datenschutz, Rechtsabteilung, Betriebsrat oder Aufsichtsbehörden:

- Verarbeitung besonderer Datenkategorien oder umfangreicher Profile
- Geplanter Drittlandtransfer oder US-Anbieter ohne SCC/TIA
- AI-Tools, die Mitarbeiter:innen bewerten oder überwachen (Betriebsrat)
- Hochrisiko-Systeme nach AI Act – Dokumentations- und Aufsichtspflichten
- Wesentliche Änderungen am Zweck oder an Datenflüssen

!!! info "Hinweis"
    Unternehmensspezifische Vorgaben – etwa zur KI-Richtlinie, zu Freigaben und Audit – ergänzen die regulatorischen Pflichten. Klärt zu Beginn, wer welche Rolle hat und welche Schwellen automatisch eine Prüfung auslösen.

## Glossar-Querverweise

- [DSGVO](../glossar.md#dsgvo)
- [Auftragsverarbeitung](../glossar.md#auftragsverarbeitung)
- [Hochrisiko-System](../glossar.md#hochrisiko-system)
- [AI Literacy](../glossar.md#ai-literacy)
- [Verantwortlicher](../glossar.md#verantwortlicher)
- [Datenminimierung](../glossar.md#datenminimierung)
- [Datenschutz-Folgenabschätzung (DSFA)](../glossar.md#datenschutz-folgenabschatzung-dsfa)
- [Compliance](../glossar.md#compliance)
