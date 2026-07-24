# Fallstudie 02: Vertriebscopilot für Angebotserstellung

**Branche:** IT-Dienstleister (Individualsoftware und Datenintegration)
**Unternehmensgröße:** ca. 150 Mitarbeitende, vier Vertriebsregionen in DACH
**KI-Komponente:** AI-Copilot zur Erstellung von Angebotsentwürfen aus CRM-Daten und Stichpunkten
**Ausgangslage (Zeitpunkt):** Q1/2026 – nach acht Monaten produktivem Einsatz
**Ergebnis-KPIs:** 4,5 h → 1,2 h Erstellungszeit pro Angebot; +28 % wöchentlich versendete Angebote; 142 Diskrepanzen in 6 Monaten deterministisch gefangen (31 mit direkter Auftragswirkung); Antwortquote auf Diskrepanz-Markierungen 41 % → 89 % nach anonymisiertem Ranking; 1.100 €/Monat KI-Kosten, geschätzte 320 Stunden/Monat Zeitersparnis

## Ausgangslage

Die Nordlicht Beratung & Entwicklung GmbH ist ein IT-Dienstleister mit Sitz in Hamburg und Standorten in Wien und Zürich. Das Unternehmen realisiert Individualsoftware, Datenpipelines und KI-Module für mittelständische Kunden aus Logistik, Versicherung und Maschinenbau. Vor Projektstart verbrachte der Vertrieb pro Angebot im Schnitt 4,5 Stunden: CRM-Daten prüfen, Leistungspositionen aus dem Leistungskatalog zusammenstellen, Kalkulationsblatt ausfüllen, Fließtext verfassen und mit der Rechtsabteilung abgleichen. Standardangebote mit bekannten Bausteinen machten rund 60 Prozent des Volumens aus, der Rest waren individuelle Anfragen mit spezifischen Anforderungen, Ausschreibungsbedingungen oder Drittanbieter-Komponenten. Die Außenwirkung schwankte stark zwischen Vertriebsregionen; Angebote aus Hamburg trafen meist innerhalb eines Werktags ein, aus Wien dauerte es regelmäßig drei bis fünf Werktage.

## Problem / Opportunity

Die Opportunity war eindeutig: Angebote innerhalb von 30 Minuten statt am Folgetag liefern, Vertriebszyklen um eine Woche verkürzen und die Außenwirkung über alle Regionen vereinheitlichen. Das Problem: Bei Standardfällen funktionierte ein LLM-Entwurf hervorragend, bei Sonderfällen jedoch produzierte das System plausible Formulierungen, die fachlich nicht zur Ausschreibung passten. Konkret: Es wurden Komponenten angeboten, die der Kunde explizit ausgeschlossen hatte, und Mengengerüste aus früheren Projekten ohne Bezug übernommen. Drei verlorene Aufträge in Q4/2025 mit einem Volumen von zusammen 1,8 Mio. Euro wurden intern auf das AI-System zurückgeführt, weil das Vertriebsteam den Entwurf ohne gründliche Prüfung an Kunden geschickt hatte. Die Geschäftsführung stoppte das System für zwei Wochen und beauftragte ein Diskrepanz-Audit durch die interne Revision.

## Lösungsansatz mit AI

Aufgebaut wurde ein Vertriebscopilot auf Basis von GPT-4o mini über die Azure OpenAI EU-Region. Die Pipeline lädt pro Anfrage strukturierte CRM-Daten (Kunde, Ansprechpartner, Branche, Historie, offene Anfragen), den aktuellen Leistungskatalog als versionierte JSON, das Ausschreibungsdokument als PDF (mit Textextraktion via Unstructured) und Stichpunkte der Vertrieblerin. Das System erzeugt daraus einen Angebotsentwurf mit vier Abschnitten: Anschreiben, Leistungsbeschreibung, Kalkulation und Annahmen. Der System-Prompt verpflichtet das Modell, Aussagen gegen die CRM- und Ausschreibungsdaten zu prüfen und Widersprüche explizit im Abschnitt „Annahmen" zu kennzeichnen.

Vor dem produktiven Roll-out wurde ein Diskrepanz-Kontrollsystem implementiert: Vor der Übergabe an die Vertrieberin prüft ein deterministisches Regelwerk den Entwurf gegen das Ausschreibungsdokument. Drei Klassen von Diskrepanzen werden markiert: Mengenabweichungen gegenüber genannten Stundenzahlen, fehlende Pflichtpositionen aus der Ausschreibung und ausgeschlossene Komponenten, die fälschlich enthalten sind. Diese Diskrepanzen werden im Copilot-Dashboard als rote Markierungen sichtbar, ähnlich wie ein Reviewer-Modus in einem Code-Editor. Der Entwurf geht erst an die Vertrieberin, wenn alle Klasse-1-Diskrepanzen (Ausschlusskriterien) geklärt sind. Der Human-in-the-Loop ist explizit: Kein Angebot verlässt das Haus ohne Freigabe durch eine Vertriebsmitarbeiter:in. Das System darf den Entwurf nur erstellen, niemals direkt versenden. Architektonisch wurde damit der vorherige manuelle Vier-Augen-Approval-Prozess mit Rechtsabteilungs-Stichprobe durch die automatisierte Plausibilitätsprüfung ersetzt; an die Stelle manueller Review-Loops trat das deterministische Regelwerk, das jede Anfrage gegen das Ausschreibungsdokument prüft, bevor sie an die Vertriebsmitarbeiter:in geht. Die persönliche Freigabe bleibt obligatorisch, aber sie erfolgt auf einer bereits automatisch vorgeprüften Entwurfsbasis.

Das Dashboard zeigt zusätzlich pro Vertrieblerin die durchschnittliche Bearbeitungszeit, die Anzahl erkannter Diskrepanzen pro Angebot, die Quote der Angebote, die ohne Nacharbeit an Kunden gehen, und ein anonymisiertes Ranking der Review-Disziplin im Team.

## Was lief gut, was nicht

Gut liefen Standardangebote: Die durchschnittliche Erstellungszeit sank von 4,5 auf 1,2 Stunden, die Anzahl pro Woche versendeter Angebote stieg um 28 Prozent. Vertriebsmitarbeiter:innen berichteten, dass der Copilot vor allem die Fließtextarbeit sinnvoll vorstrukturiert und die Anschreiben-Qualität über alle Regionen vereinheitlicht hat. Ebenfalls positiv: das deterministische Regelwerk hat in den ersten sechs Monaten 142 Diskrepanzen gefangen, davon 31 mit direkter Auswirkung auf die Auftragsvergabe. Die Schadensquote pro Angebot sank um geschätzt 40 Prozent. Nicht funktioniert hat die Disziplin bei Nischenangeboten: Erfahrene Vertriebsmitarbeiter:innen vertrauten ihrer eigenen Plausibilitätsprüfung und übersahen dabei regelmäßig die automatischen Diskrepanz-Markierungen, weil sie das Ergebnis intuitiv „im Gefühl" prüften. Der frühere manuelle Vier-Augen-Approval-Prozess, der diese Schwäche aufgefangen hätte, war durch das deterministische Regelwerk ersetzt worden und konnte die erfahrenen Kolleg:innen nicht mehr ausgleichen – die automatisierte Markierung muss von der Vertriebsmitarbeiter:in aktiv quittiert werden, ein blinder Klick auf „Freigeben" bleibt aber architektonisch möglich. Drei Fälle in Q4/2025 mit inkonsistenten Stundenzahlen und falschen Komponenten wurden erst nach Beschwerden der Kunden entdeckt. Die Antwortquote des Vertriebsteams auf Diskrepanz-Markierungen lag anfangs bei 41 Prozent; erst eine monatliche Auswertung mit anonymisiertem Ranking pro Vertrieblerin und die Pflicht, jede Klasse-1-Diskrepanz vor der Freigabe einzeln zu kommentieren, brachte sie auf 89 Prozent. Die KI-Kosten von rund 1.100 Euro pro Monat stehen einer geschätzten Zeitersparnis von 320 Stunden pro Monat gegenüber.

## Lessons Learned für Projektleiterinnen

- **[Human-in-the-Loop](../glossar.md#human-in-the-loop) ist nicht optional, sondern Pflicht**. Ein Copilot, der direkt an Kunden schreiben darf, braucht eine harte Freigabe-Architektur – nicht nur eine Empfehlung in einer Schulung.
- **Diskrepanz-Kontrolle gehört vor die Übergabe**, nicht in einen Review danach. Deterministische Regeln für Ausschlusskriterien verhindern mehr Schäden als jede Schulung.
- **Standard-Use-Cases dürfen nicht über Sonderfälle hinwegtäuschen**. Erfolgsmetriken müssen zwischen Standard- und Nischenangeboten unterscheiden, sonst wird das Risiko unsichtbar und die Geschäftsführung sieht nur die schöne Statistik.
- **Erfahrene Mitarbeiter:innen überspringen Review-Schritte am häufigsten**. UX und Prozessdesign müssen Review-Pflichten auch für „alte Hasen" abbilden, nicht nur Schulungen für neue Kolleg:innen.
- **AI im Vertrieb ist Vertrauensarbeit**. Eine kleine öffentliche Fehlerquote (zum Beispiel ein prominenter „Copilot-Fehltritt") beschädigt die Glaubwürdigkeit stärker als jede Effizienzsteigerung sie aufbaut – entsprechend müssen Vorfälle sofort und transparent kommuniziert werden.

## Verlauf & Zahlen

| Metrik | Vorher (manuell, ohne Copilot) | Nachher (Stand Q1/2026) |
|---|---|---|
| Erstellungszeit pro Angebot | 4,5 h (CRM + Katalog + Kalkulation + Fließtext + Rechtsabgleich) | 1,2 h (mit Copilot + Diskrepanz-Kontrolle) |
| Wöchentlich versendete Angebote | Baseline | +28 % |
| Erkannte Diskrepanzen (6 Monate) | 0 (manuelle Stichprobe, ~10 % Stichprobenquote) | 142 deterministisch gefangen, davon 31 mit direkter Auftragswirkung |
| Antwortquote auf Diskrepanz-Markierungen | n/a | 41 % initial → 89 % nach Ranking + Kommentar-Pflicht |
| KI-Kosten | n/a | 1.100 €/Monat (GPT-4o mini + Azure OpenAI EU) |
| Geschätzte Zeitersparnis pro Monat | n/a | 320 Stunden |
