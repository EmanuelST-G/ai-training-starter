# Agents und agentische Prozesse

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Einen einfachen Agentenprozess als Ablaufdiagramm entwerfen und dabei Werkzeuge, Speicher, Freigaben und Abbruchbedingungen bewusst festlegen.

## Chatbot, Workflow oder Agent?

Nicht jede Anwendung, die ein Sprachmodell nutzt, ist ein Agent. Entscheidend ist, wer den nächsten Schritt bestimmt und ob das System außerhalb der Antwort handeln darf.

| Form | Ablauf | Entscheidung über nächsten Schritt | Beispiel |
|------|--------|------------------------------------|----------|
| Chatbot | Frage → Antwort | Nutzer:in gibt die nächste Frage ein | FAQ-Chat |
| Workflow | festgelegte Schritte und Regeln | Anwendung beziehungsweise Prozesslogik | Rechnung prüfen → verbuchen |
| Agent | Ziel → Plan → Tool-Aufruf → Beobachtung → nächster Schritt | Modell entscheidet innerhalb gesetzter Grenzen | Recherche mit Rückfragen und Quellen |

Ein Agent ist damit kein Synonym für „gute AI“. Er ist eine Orchestrierung aus Modell, Werkzeugen, Kontext und Kontrolllogik.

## Tools und Function Calling

Über [Function Calling](../glossar.md#function-calling) kann ein Modell einen strukturierten [Tool-Aufruf](../glossar.md#tool-aufruf) anfordern. Die Anwendung führt die Funktion aus und sendet das Ergebnis zurück. Das Modell erhält dadurch keine direkten Datenbankrechte und kann nicht eigenmächtig beliebige Befehle ausführen.

Ein Tool sollte einen klaren Zweck, typisierte Eingaben und ein verständliches Ergebnis haben. Für jedes Tool sind mindestens zu klären:

- Wann darf der Agent es verwenden?
- Welche Identität und Rechte gelten?
- Ist die Aktion nur lesend oder verändert sie Daten?
- Wie werden Fehler, Zeitüberschreitung und Wiederholungen behandelt?
- Welche Eingaben müssen vor einer Außenwirkung freigegeben werden?

Typische Fähigkeiten sind:

- Informationen suchen oder Datensätze lesen,
- eine API aufrufen und strukturierte Ergebnisse übernehmen,
- ein Dokument oder einen Entwurf erstellen,
- eine Aktion wie eine Bestellung, Änderung oder Nachricht auslösen.

Für schreibende oder irreversible Tools sind kleine, explizite Schnittstellen sicherer als ein allgemeines „Führe beliebigen Code aus“.

## Der Agentenzyklus

Ein kontrollierter Agentenprozess kann so aussehen:

```text
Ziel erhalten
    │
    ▼
Kontext prüfen ──► Plan erstellen
    │                  │
    │                  ▼
    │              Tool auswählen
    │                  │
    │                  ▼
    ◄──────── Ergebnis prüfen
    │                  │
    ├── Ziel erreicht? ── Ja ──► Antwort / Ergebnis
    │
    └── Nein ──► Re-Plan oder Abbruch
```

Die Anwendung sollte die maximale Anzahl von Schleifen, die erlaubten Tools und die Zeit pro Schritt technisch durchsetzen. Ein Prompt mit „arbeite, bis es fertig ist“ ist keine ausreichende Begrenzung.

## Single-Agent- und Multi-Agent-Systeme

Ein **Single-Agent** erledigt die Aufgabe mit einem Modell und einem Toolset. Das ist meist einfacher zu verstehen, zu testen und zu betreiben. Ein **Multi-Agent-System** teilt die Aufgabe auf Rollen auf, zum Beispiel Recherche, Fachprüfung und Zusammenfassung.

Multi-Agent-Systeme können parallel arbeiten und unterschiedliche Kontexte verwenden. Sie bringen aber zusätzliche Übergaben, Kosten, Fehlerquellen und Verantwortungsfragen mit. Die Rollen, Eingabeformate und Abnahmekriterien müssen deshalb klar definiert sein. Delegation ist nur dann sinnvoll, wenn die Teilaufgaben wirklich unabhängig sind oder unterschiedliche Fachkompetenz benötigen.

## Speicher und Kontext

Der Kontext enthält Informationen für den aktuellen Arbeitsschritt: Nutzerziel, bisherige Tool-Ergebnisse, Regeln und relevante Dokumente. Ein zu großer Kontext erschwert Priorisierung und erhöht Kosten.

[Memory](../glossar.md#memory) speichert Informationen über mehrere Schritte oder Sitzungen. Dabei müssen Zweck, Lebensdauer und Löschregeln klar sein. Ein Agent sollte nicht ungeprüft jede Unterhaltung als dauerhaftes Gedächtnis speichern. Besonders sensible Daten, Zugangsdaten und zufällige Modellannahmen gehören nicht in einen persistenten Speicher.

Praktische Trennung:

- **Kurzzeitkontext:** aktuelle Anfrage und noch nicht abgeschlossene Arbeit
- **Arbeitsgedächtnis:** Zwischenstände, Beobachtungen und offene Punkte für diesen Lauf
- **Langzeitspeicher:** bewusst ausgewählte, überprüfte Informationen über mehrere Läufe

## Planung und Re-Plan

Beim [Plan](../glossar.md#plan) wird ein Ziel in überprüfbare Schritte zerlegt. Jeder Schritt sollte ein erwartetes Ergebnis haben, damit der Agent erkennen kann, ob er weiterarbeiten darf. Ein guter Plan ist eine Hypothese, keine Garantie.

Ein [Re-Plan](../glossar.md#re-plan) ist nötig, wenn ein Tool nicht verfügbar ist, Daten widersprüchlich sind oder ein Zwischenergebnis das Ziel verändert. Der Agent darf dabei nicht einfach die ursprüngliche Einschränkung vergessen. Änderungen am Ziel, an Berechtigungen oder am Budget brauchen eine neue Freigabe.

## Autonomiegrade

| Grad | Verhalten | Geeignet für | Erforderliche Kontrolle |
|------|-----------|--------------|-------------------------|
| Assistenz | Agent schlägt Schritte und Entwürfe vor | Recherche, Textentwürfe | Mensch prüft alles vor Verwendung |
| Genehmigt | Agent arbeitet vor, Aktionen werden bestätigt | Ticket- oder Bestellvorbereitung | Freigabe vor jeder Außenwirkung |
| Eingeschränkt | Agent darf definierte, reversible Aktionen ausführen | Statuspflege, interne Abfragen | Rollen, Regeln, Logs und Stichproben |
| Vollautonom | Agent handelt innerhalb eines festgelegten Rahmens selbstständig | eng begrenzte, gut messbare Prozesse | Not-Aus, Budget, Monitoring und Eskalation |

Autonomie ist eine Prozessentscheidung, keine reine Modell-Eigenschaft. Sie sollte mit dem Schadenpotenzial der Aktion steigen oder fallen.

## Freigabeschritte

Freigaben sollten an konkrete Risiken gebunden sein. Eine Person bestätigt beispielsweise Empfänger:in, Betrag, Datensätze und vorgeschlagene Änderung, statt nur einen unverständlichen „Agent fortsetzen“-Button zu sehen. Die Freigabe muss vor dem Tool-Aufruf erfolgen und im Audit-Log nachvollziehbar sein.

Nützliche Schranken sind:

- Lesewerkzeuge standardmäßig erlauben, Schreibwerkzeuge standardmäßig sperren.
- Erlaubte Ziele, Betragsgrenzen und Datenbereiche technisch beschränken.
- Aktionen idempotent machen, damit ein Timeout keine Doppelbuchung erzeugt.
- Für hohe Risiken eine zweite Person oder ein Vier-Augen-Prinzip verlangen.

## Fehlerbehandlung und Abbruch

Agenten brauchen normale Fehlerpfade. Bei einem Tool-Fehler sollte der Agent eine begrenzte Wiederholung versuchen, das Problem klassifizieren und danach entweder eine sichere Alternative wählen oder abbrechen. Wiederholungen ohne neue Information verschleiern Fehler und treiben Kosten hoch.

Abbruchbedingungen sind zum Beispiel:

- Zeit-, Token- oder Kostenbudget überschritten
- maximale Anzahl von Tool-Aufrufen erreicht
- Berechtigung fehlt oder Datenquelle nicht erreichbar
- Ergebnis widerspricht einer fachlichen Regel
- notwendige Nutzerfreigabe bleibt aus
- Anzeichen für Prompt Injection oder unerwartete Tool-Eingabe

Ein Abbruch mit verständlicher Begründung ist ein Qualitätsmerkmal, kein Versagen.

## Agentische Workflows oder klassische Automatisierung?

Klassische Automatisierung ist besser, wenn Regeln vollständig bekannt, Eingaben stabil und Entscheidungen deterministisch sind. Ein Agent lohnt sich eher bei unstrukturierten Informationen, wechselnden Teilaufgaben und notwendiger sprachlicher Interaktion.

Nicht jeder Prozess braucht einen Agenten:

- Eine feste Datenübertragung braucht meist eine Pipeline.
- Eine Freigabe mit drei klaren Regeln braucht einen Workflow.
- Ein Chatbot mit Antworten aus einem geprüften FAQ braucht nicht zwingend Planung.
- Ein Agent ist kein Ersatz für fehlende Prozessverantwortung oder schlechte Stammdaten.

## Praxisaufgabe: Prozess skizzieren

!!! tip "Praxisaufgabe"
    Wählt einen kleinen Vorgang, zum Beispiel „Support-Ticket mit Wissensartikel beantworten“. Zeichnet anschließend mindestens Ziel, Kontext, Tools, Entscheidungspunkte und Abbruch.

Ein mögliches Ergebnis:

```text
Ticket lesen
   │
   ├── Wissenssuche ──► passende Artikel gefunden?
   │                         │
   │                         ├── Nein ──► an Fachteam eskalieren
   │                         │
   │                         └── Ja ──► Antwortentwurf erstellen
   │                                      │
   │                                      ▼
   │                              Mensch gibt frei?
   │                                      │
   │                         Nein ────────┴──────── Ja
   │                         überarbeiten            senden
```

Markiert in der Skizze außerdem, welche Daten gelesen werden dürfen, welches Tool eine Außenwirkung hat und wann der Agent sicher stoppt.

## Glossar-Querverweise

- [Agents](../glossar.md#agents)
- [Function Calling](../glossar.md#function-calling)
- [Tool-Aufruf](../glossar.md#tool-aufruf)
- [Memory](../glossar.md#memory)
- [Plan](../glossar.md#plan)
- [Re-Plan](../glossar.md#re-plan)
- [Human-in-the-Loop](../glossar.md#human-in-the-loop)
- [Branching](../glossar.md#branching)
