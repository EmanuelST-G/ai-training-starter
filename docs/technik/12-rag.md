# RAG und interne Wissensassistenten

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Erklären können, wie ein interner Wissensassistent mit Retrieval-Augmented Generation arbeitet und welche organisatorischen und technischen Voraussetzungen für verlässliche Antworten nötig sind.

## Was ist Retrieval-Augmented Generation?

Ein [RAG-System](../glossar.md#rag-retrieval-augmented-generation) verbindet ein Sprachmodell mit einer durchsuchbaren Wissensbasis. Vor jeder Antwort sucht das System passende interne Inhalte und gibt die gefundenen Textstellen zusammen mit der Frage an das Modell. Die Antwort wird dadurch in konkreten Quellen **verankert** ([Grounding](../glossar.md#grounding)).

Ein LLM kennt Unternehmenswissen nicht automatisch:

- Interne Richtlinien, Verträge und Projektdokumente waren meist nicht Teil des Trainings.
- Trainingswissen hat einen Stichtag und wird nicht bei jeder Dokumentänderung aktualisiert.
- Modellgewichte sind kein Dokumentenarchiv und liefern keine verlässliche Quellenreferenz.
- Zugriffsrechte aus SharePoint, DMS oder Intranet werden nicht automatisch übernommen.

RAG ergänzt also das Modell um aktuelles, kontrolliertes Wissen. Es macht Antworten nicht automatisch wahr, aber überprüfbarer.

## Grundablauf eines Wissensassistenten

1. Dokumente aus freigegebenen Quellen einlesen.
2. Inhalte bereinigen, strukturieren und in Abschnitte teilen.
3. Abschnitte als Embeddings indexieren und mit Metadaten speichern.
4. Zur Nutzerfrage passende Abschnitte suchen.
5. Zugriffsrechte prüfen und die Treffer gegebenenfalls neu sortieren.
6. Antwort nur auf Basis der freigegebenen Treffer erzeugen und Quellen anzeigen.

## Dokumente aufbereiten und segmentieren

Rohdokumente eignen sich selten direkt für die Suche. PDFs können Kopfzeilen, Tabellen oder gescannte Seiten enthalten; Präsentationen verteilen eine Aussage über mehrere Folien. Deshalb umfasst die Aufbereitung typischerweise:

- Text extrahieren, bei Scans gegebenenfalls mit OCR
- Navigation, wiederkehrende Fußzeilen und Dubletten entfernen
- Überschriften, Tabellen und Listen möglichst erhalten
- Sprache, Dokumenttyp, Eigentümer:in, Gültigkeit und Vertraulichkeit als Metadaten erfassen
- Inhalte in sinnvolle Segmente oder „Chunks“ teilen

Chunks müssen groß genug für den fachlichen Zusammenhang und klein genug für präzises Retrieval sein. Eine starre Trennung nach Zeichenanzahl kann Aussagen auseinanderreißen. Besser sind fachliche Grenzen wie Überschriften, Absätze oder einzelne Prozessschritte; eine kleine Überlappung erhält Übergänge.

## Embeddings und semantische Suche

Ein [Embedding](../glossar.md#embedding) übersetzt einen Textabschnitt in eine Zahlenfolge, die seine Bedeutung repräsentiert. Ähnliche Inhalte liegen in diesem Vektorraum näher beieinander. Dadurch kann die Suche „Reisekosten abrechnen“ mit einem Abschnitt über „Spesenprozess“ verbinden, obwohl nicht dieselben Wörter vorkommen.

Semantische Suche ersetzt die klassische Stichwortsuche nicht immer. Produktnummern, Paragrafen oder exakte Namen werden häufig besser lexikalisch gefunden. In der Praxis kombiniert eine **hybride Suche** beide Verfahren und sortiert die Treffer anschließend neu.

## Vektor-Datenbanken

Eine [Vektor-Datenbank](../glossar.md#vektor-datenbank) speichert Embeddings und sucht effizient nach ähnlichen Vektoren. Zu jedem Vektor gehören außerdem:

- der zugehörige Textabschnitt oder ein Verweis darauf,
- Dokument-ID, Titel und Abschnitt,
- Version und Gültigkeitsdatum,
- Herkunft und Link zum Original,
- Berechtigungs- und Mandanteninformationen.

Die Vektor-Datenbank ist nicht zwingend das führende Dokumentensystem. Das DMS oder Intranet bleibt die verbindliche Quelle; der Index ist eine abgeleitete, erneuerbare Suchstruktur.

## Retrieval und Antwortgenerierung

Beim **Retrieval** wird die Frage in eine Suchanfrage überführt. Das System holt zunächst mehrere Kandidaten, filtert sie nach Metadaten und Berechtigungen und wählt die fachlich besten Passagen aus. Ein Re-Ranker kann diese Auswahl verbessern.

Erst danach beginnt die Generierung. Ein guter System-Prompt verpflichtet das Modell,

- nur die bereitgestellten Quellen zu verwenden,
- Widersprüche sichtbar zu machen,
- fehlende Informationen klar zu benennen,
- keine Quelle oder Fundstelle zu erfinden.

„Dazu liegen mir keine ausreichenden Quellen vor“ ist ein korrektes Ergebnis und oft wertvoller als eine plausible Vermutung.

## Quellenangaben und Nachvollziehbarkeit

Jede fachliche Aussage sollte auf konkrete Fundstellen zurückführbar sein. Eine brauchbare Quellenanzeige enthält mindestens Dokumenttitel, Abschnitt, Version oder Datum und einen Link zum Original. Nutzer:innen müssen die relevante Passage öffnen können, nicht nur den Dateinamen sehen.

Für Audit und Fehleranalyse sollte das System zusätzlich protokollieren, welche Dokumentversionen und Segmente zur Antwort verwendet wurden. Quellenangaben beweisen allerdings nur die Herkunft. Sie garantieren nicht, dass ein veraltetes oder fehlerhaftes Quelldokument richtig ist.

## Berechtigungen auf Dokumentebene

Die Suche darf nur Inhalte berücksichtigen, die die anfragende Person lesen darf. Berechtigungen müssen deshalb **vor oder während des Retrievals** wirken, nicht erst nach der Antwortgenerierung.

Wichtige Regeln sind:

- Zugriffslisten aus dem Quellsystem in den Index übernehmen und synchronisieren.
- Nutzeridentität und Gruppenmitgliedschaften bei jeder Anfrage prüfen.
- Caches, Suchprotokolle und Quellen-Vorschauen ebenfalls mandanten- und rechtegetrennt behandeln.
- Gelöschte Freigaben zeitnah aus dem Index entfernen.

Ein nachträgliches Ausblenden der Quellen reicht nicht: Das Modell könnte vertrauliche Inhalte bereits in die Antwort aufgenommen haben.

## Aktualisierung des Wissens

Ein RAG-System benötigt einen geregelten Aktualisierungsprozess. Änderungen können ereignisgesteuert oder in regelmäßigen Läufen verarbeitet werden. Dabei müssen neue, geänderte und gelöschte Dokumente berücksichtigt werden.

Zum Betrieb gehören Frischeziele, zum Beispiel „Änderungen sind spätestens nach zwei Stunden auffindbar“, sowie Kontrollen auf fehlgeschlagene Importe. Versionen dürfen nicht unbemerkt nebeneinander konkurrieren; abgelöste Richtlinien sollten als ungültig markiert oder aus dem aktiven Index entfernt werden.

## RAG oder Fine-Tuning?

| Ansatz | Vorteile | Nachteile | Geeignet für |
|--------|----------|-----------|--------------|
| RAG | Wissen schnell aktualisierbar; Quellen sichtbar; Dokumentrechte anwendbar | Retrieval kann falsche Passagen wählen; zusätzliche Suchinfrastruktur | Fakten aus wechselnden internen Dokumenten |
| [Fine-Tuning](../glossar.md#fine-tuning) | Verhalten, Stil und Ausgabeformat können stabiler werden | Wissen schwer aktualisierbar; Quellen fehlen; Training und Tests aufwendig | Wiederkehrendes Verhalten oder domänenspezifische Formate |
| Kombination | Fachwissen per RAG, gewünschtes Verhalten per Fine-Tuning | Höhere Komplexität und mehr Betriebsaufwand | Reife Anwendungen mit klar belegtem Bedarf |

Als Faustregel gilt: **Wissen nachschlagen → RAG; Verhalten anpassen → Fine-Tuning.** Ein Fine-Tuning ist kein guter Ersatz für eine aktuelle Wissensbasis.

## Typische Fehler und Gegenmaßnahmen

| Fehlerbild | Mögliche Ursache | Gegenmaßnahme |
|------------|------------------|---------------|
| Falsche Dokumente gefunden | schlechte Segmentierung, fehlende Metadaten, zu breite Suche | Suchfälle testen, hybride Suche und Re-Ranking einsetzen |
| Antwort widerspricht der Quelle | Prompt ignoriert Kontext oder mehrere Quellen widersprechen sich | Quellenbindung verschärfen, Widersprüche ausgeben, Antworttreue evaluieren |
| Veraltete Dokumente erscheinen | Import oder Löschprozess fehlerhaft | Frische überwachen, Gültigkeit filtern, Index neu aufbauen |
| Fehlende Zugriffsprüfung | Rechte nur in der Oberfläche geprüft | ACL-Filter im Retrieval erzwingen und mit Rollen testen |
| Keine belastbare Antwort | relevante Passage fehlt oder wird nicht gefunden | Abdeckung der Wissensbasis und Retrieval-Recall messen |

## Qualität regelmäßig evaluieren

Ein Gold-Set aus realen Fragen sollte erwartete Antworten, zulässige Quellen und Rollen enthalten. Getrennt gemessen werden mindestens: Wurde die richtige Passage gefunden? Ist die Antwort durch diese Passage belegt? Funktionieren Ablehnung und Berechtigungen? So lässt sich unterscheiden, ob ein Fehler aus Retrieval, Dokumentqualität oder Generierung stammt.

!!! tip "Praxisbezug"
    Startet mit einem kleinen, fachlich klar abgegrenzten Dokumenten-Set. Prüft regelmäßig reale Fragen, Quellen und Berechtigungen, bevor weitere Bereiche aufgenommen werden. Ein kleiner sauber evaluierter Index ist wertvoller als ein unkontrollierter Vollimport.

## Glossar-Querverweise

- [RAG (Retrieval-Augmented Generation)](../glossar.md#rag-retrieval-augmented-generation)
- [Embedding](../glossar.md#embedding)
- [Vektor-Datenbank](../glossar.md#vektor-datenbank)
- [Grounding](../glossar.md#grounding)
- [Ähnlichkeitssuche](../glossar.md#ahnlichkeitssuche)
