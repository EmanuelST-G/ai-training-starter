# Übung 07: Einen kontrollierten Agentenprozess skizzieren

[← zurück zur Übungsübersicht](index.md)

**Phase:** 4
**Dauer:** 45 Minuten
**Voraussetzung:** [Agents und agentische Prozesse](../technik/13-agents.md)
**Format:** Einzelarbeit

## Aufgabe

Ein Agent soll interne Support-Tickets lesen, in freigegebenen Wissensartikeln suchen und einen Antwortentwurf erstellen. Nur ein Mensch darf die Nachricht senden. Verfügbare Tools sind `ticket_lesen`, `wissen_suchen`, `entwurf_speichern` und `antwort_senden`.

Skizziere Ziel, Schritte, Entscheidungen, Tool-Rechte, Freigabe und Abbruchbedingungen. Entscheide außerdem, ob `antwort_senden` überhaupt zum Toolset des Agenten gehören sollte.

## Hinweise

- Unterscheide Lesen, Schreiben und Außenwirkung.
- Begrenze Wiederholungen, Zeit und Suchraum.
- Behandle Tickettext und Wissensartikel als nicht vertrauenswürdige Daten.

## Lösung

Ein kontrollierter Ablauf sieht so aus:

```text
Ticket-ID erhalten
  → ticket_lesen (nur zugewiesene Queue)
  → Eingabe auf Geheimnisse und Prompt Injection prüfen
     → auffällig: markieren und an Security/Fachteam eskalieren
     → unauffällig: wissen_suchen (nur freigegebene Artikel)
        → keine belastbare Quelle: Rückfrage-Entwurf oder Eskalation
        → Quelle vorhanden: Antwortentwurf mit Fundstelle erzeugen
           → fachliche Regeln prüfen
              → nicht bestanden: stoppen und Fachteam informieren
              → bestanden: entwurf_speichern
                 → Mensch prüft und bearbeitet
                    → abgelehnt: Feedback speichern, nicht senden
                    → freigegeben: separates Versandsystem sendet
```

Die Tool-Rechte werden wie folgt begrenzt:

| Tool | Recht und Schranke |
|------|--------------------|
| `ticket_lesen` | Nur Tickets der Service-Queue, keine fremden Mandanten. |
| `wissen_suchen` | Lesend, ACL-gefiltert, höchstens fünf Treffer pro Suche. |
| `entwurf_speichern` | Nur Entwurfsstatus, keine Änderung am Originalticket. |
| `antwort_senden` | Nicht im Agenten-Toolset; Aufruf nur durch freigegebenen Workflow. |

`antwort_senden` sollte entfernt werden. So kann weder eine Fehlplanung noch eine indirekte Prompt Injection die menschliche Freigabe umgehen. Der Freigabedialog zeigt Empfänger:in, vollständigen Text und Quellen.

Technische Abbruchbedingungen sind maximal drei Suchläufe, höchstens zwei Minuten Laufzeit, Kostenlimit pro Ticket, fehlende Berechtigung, widersprüchliche Quellen, erkannte Injection und jede nicht validierbare Tool-Eingabe. Nach einem Tool-Fehler ist genau eine Wiederholung erlaubt; danach wird mit Fehlercode eskaliert.

Im Audit-Log stehen Ticket-ID, Agenten- und Prompt-Version, Quellen-IDs, Tool-Aufrufe, Abbruchgrund und menschliche Entscheidung, aber keine unnötigen personenbezogenen Volltexte.

## Reflexion

Agentensicherheit entsteht durch Prozess- und Toolgrenzen, nicht durch die Bitte an das Modell, vorsichtig zu sein. Die Projektleiterin entscheidet über den Autonomiegrad und muss Außenwirkung, Freigabe und sicheren Abbruch explizit beauftragen.
