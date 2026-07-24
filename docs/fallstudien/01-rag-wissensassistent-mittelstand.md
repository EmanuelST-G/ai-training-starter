# Fallstudie 01: RAG-Wissensassistent im Mittelstand

**Branche:** Industrieller Mittelstand (Maschinen- und Anlagenbau)
**Unternehmensgröße:** ca. 600 Mitarbeitende, drei Produktionsstandorte in Süddeutschland
**KI-Komponente:** Interner RAG-Wissensassistent über heterogene Maschinenbau-Dokumentation
**Ausgangslage (Zeitpunkt):** Q3/2025 – Stand der Re-Evaluation, 12 Monate nach produktivem Roll-out im Q3/2024 (PoC Q1/2024)
**Ergebnis-KPIs:** 280 → 80 → 220 Anfragen/Woche (Akzeptanz-Verlauf nach Pflege-Disziplin); 4.200 €/Monat Betriebskosten; mittlere Antwortzeit <4 s; 96 % Quellenabdeckung bei Standardthemen (Drehmomenttabellen, Stücklisten); 17 % Drift-Alerts pro Quartal

## Ausgangslage

Die Mayer & Rieger Werkzeugtechnik GmbH produziert Sondermaschinen und Sonderwerkzeuge für die Automobil- und Luftfahrtindustrie. Über Jahrzehnte sind rund 8.000 technische Dokumente entstanden: Konstruktionszeichnungen als PDF, Stücklisten in Excel, Inbetriebnahmeprotokolle, Serviceberichte, freigegebene Konstruktionsrichtlinien und zahlreiche Confluence-Seiten der Entwicklungsabteilung. Das Wissen liegt verstreut in drei DMS-Systemen, einem SharePoint und einem verwaisten Wiki. 60 Prozent der Belegschaft sind erfahrene Mitarbeitende in Produktion und Service; 40 Prozent sind seit 2020 neu eingestellt. Aussagen wie „das hat Herr Falk früher gemacht" häuften sich. Im Q1/2024 startete die IT einen RAG-Pilotbetrieb auf Basis von Azure AI Search als Vektor-Index und GPT-4o für die Generierung; der produktive Roll-out erfolgte im Q3/2024, die hier beschriebene Re-Evaluation in Q3/2025. Ziel war, Wissen unabhängig von Einzelpersonen zugänglich zu machen und neue Mitarbeitende schneller produktiv zu bekommen.

## Problem / Opportunity

Die Opportunity war klar: Suchzeiten im Service von durchschnittlich 25 Minuten pro Anfrage reduzieren, Einarbeitungszeit neuer Servicetechniker:innen verkürzen und das „Wissen in Köpfen" gegen Fluktuation sichern. Das Problem zeigte sich erst nach dem produktiven Roll-out: Die Wissensbasis alterte schneller als das Pilotteam reagieren konnte. Konstruktionsrichtlinien wurden 2024 mehrfach überarbeitet, alte Versionen blieben indexiert. Mehrere tausend neue Serviceberichte pro Quartal wurden nur sporadisch nachindexiert, weil die zuständigen Mitarbeitenden keinen klaren Pflege-Auftrag hatten. Mitarbeitende erhielten Antworten mit veralteten Drehmomentwerten, falschen Sicherheitshinweisen und Bezügen auf Werkzeuge, die längst ausgelistet waren. Das Vertrauen sank messbar, die Nutzungsquote brach von 280 Anfragen pro Woche auf unter 80 ein. Die Geschäftsführung zog die IT zur Rechenschaft, die Pilotphase wurde formal als „erfolgreich mit Auflagen" gewertet.

## Lösungsansatz mit AI

Aufgebaut wurde ein klassischer [RAG-Stack](../glossar.md#rag-retrieval-augmented-generation): Azure Blob Storage als Dokumentenquelle, ein Azure AI Search Index mit Hybrid-Suche (Vektor plus BM25) und Re-Ranking über Cohere Rerank v3, GPT-4o als Antwortmodell über die Azure OpenAI Resource mit Datenresidenz EU. Die Pipeline verwendet Unstructured-IO für die Vorverarbeitung. Dokumente werden in Chunks von 800 Tokens mit 100 Tokens Overlap zerlegt; jede Chunk trägt Metadaten wie Dokument-ID, Gültigkeitsdatum, Eigentümer:in und Freigabestatus. Der System-Prompt verpflichtet das Modell, ausschließlich die gelieferten Quellen zu nutzen, Widersprüche zu nennen und fehlende Informationen explizit als solche zu kennzeichnen.

In Phase 2 wurde ein Retrieval-Dashboard in Power BI aufgesetzt. Es zeigt pro Abteilung die Top-Themen, die retrieval-Konfidenz, die Anzahl leerer Antworten und einen Drift-Indikator: Weicht die Verteilung der zurückgegebenen Chunks signifikant von der Verteilung der letzten 30 Tage ab, schlägt der Indikator aus. Ergänzend wurde ein wöchentlicher „Wissens-Steckbrief" als E-Mail an die Dokumenteneigentümer:innen versendet, der neu indexierte, geänderte und gelöschte Dokumente auflistet und auf fehlende Antworten hinweist.

Zentral war die Erkenntnis aus Monat neun: Ohne definierte Pflege-Disziplin altert jede Wissensbasis in wenigen Wochen. Eingeführt wurden drei Maßnahmen. Erstens: ein monatlicher Pflege-Slot pro Dokumenteneigentümer:in (90 Minuten, im Kalender blockiert), in dem neue Dokumente eingespielt, alte Versionen invalidiert und Lücken im Index manuell geschlossen werden. Zweitens: ein zweistufiger [Drift-Detection](../glossar.md#drift-detection)-Prozess – ein automatischer Vergleich zwischen erwarteter und tatsächlicher Quellenverteilung pro Quartal, plus ein manuelles Stichproben-Audit von 50 zufälligen Antworten pro Woche durch die IT. Drittens: ein Stilllegungs-Workflow, der Dokumente mit `gueltig_bis` in der Vergangenheit aus dem aktiven Index entfernt, statt sie unklar nebeneinander stehen zu lassen.

## Was lief gut, was nicht

Gut lief die initiale Akzeptanz: In den ersten drei Wochen nach Roll-out verzeichnete das System rund 1.500 Suchvorgänge pro Tag, die mittlere Antwortzeit lag unter vier Sekunden. Das Hybrid-Retrieval mit Re-Ranking lieferte bei Standardthemen wie Drehmomenttabellen und Stücklisten sehr präzise Treffer, die Quellenanzeige wurde von Service und Inbetriebnahme ausdrücklich gelobt. Ebenfalls positiv: die Kosten blieben im ersten Betriebsjahr mit etwa 4.200 Euro pro Monat deutlich unter dem Business-Case. Nicht funktioniert hat die Skalierung der Pflege: Von 142 Dokumenteneigentümer:innen hielten im ersten Halbjahr nur 38 den monatlichen Pflege-Slot ein, die Übrigen reagierten erst auf Eskalation. Drift-Detection schlug zwar bei 17 Prozent aller Quartalsauswertungen an, doch die Korrekturmaßnahmen verzögerten sich um Wochen. Folge: Drei sicherheitsrelevante Inkonsistenzen wurden erst durch Beinahe-Vorfälle in der Werkstatt entdeckt. Das Pilotprojekt gilt intern als Erfolg mit deutlichem Verbesserungspotenzial, eine zweite Ausbaustufe wurde für Q1/2026 budgetiert.

## Lessons Learned für Projektleiterinnen

- **Pflege-Disziplin ist Produktbestandteil**, nicht IT-Aufgabe. Ein RAG-System ohne definierte Eigentümer:innen, Pflege-Slots und Stilllegungs-Regeln wird innerhalb weniger Monate zur Belastung.
- **[Drift-Detection](../glossar.md#drift-detection) muss früh kommen**, nicht nach einem Schaden. Quartalsweise Vergleiche zwischen erwarteter und beobachteter Quellenverteilung decken Wissenslücken auf, bevor Nutzer:innen sie finden.
- **Quellen und Gültigkeit gehören in die Antwort**, nicht nur ins Backend. Eine sichtbare Gültigkeitsanzeige („gültig bis 03/2024, ersetzt durch V2.1") macht Alterung für Anwender:innen erkennbar und stärkt das Vertrauen.
- **Stichproben-Audits sind nicht delegierbar**. 50 zufällige Antworten pro Woche durch eine fachlich versierte Person sind billiger als ein Sicherheitsvorfall und liefern wertvolle Schulungsimpulse.
- **Business-Case rechnet ohne Pflegeaufwand**. Realistische TCO-Modelle müssen den personellen Aufwand für Wissenspflege, Audits und Eskalationen ab Monat eins enthalten, sonst kippt die Wirtschaftlichkeit nach dem ersten Halbjahr.

## Verlauf & Zahlen

| Metrik | Vorher (vor Pflege-Disziplin) | Nachher (Stand Q3/2025) |
|---|---|---|
| Anfragen pro Woche (Akzeptanz) | 280 → 80 (Einbruch durch veraltete Inhalte) | 220 (nach Pflege-Slot + Stilllegungs-Workflow) |
| Mittlere Antwortzeit | n/a (manuelle Suche, Ø 25 min) | <4 s |
| Pflege-Disziplin (142 Dokumenteneigentümer:innen) | 38 hielten Pflege-Slot ein (27 %) | 89 hielten Pflege-Slot ein (63 %, nach Eskalations-Routine) |
| Drift-Alerts pro Quartal | nicht erhoben | 17 % der Quartale schlugen Alarm |
| Sicherheitsrelevante Inkonsistenzen | 3 Beinahe-Vorfälle in der Werkstatt entdeckt | 0 im letzten Quartal vor Re-Evaluation |
| Betriebskosten | n/a | 4.200 €/Monat (GPT-4o + Azure AI Search + Cohere Rerank) |
