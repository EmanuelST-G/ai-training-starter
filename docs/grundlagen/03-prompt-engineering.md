# Prompt Engineering

[← zurück zur Themenliste](../themenliste.md)
[Vorheriges: Generative AI & LLMs](02-llms.md)

## Lernziel

Aus einem schlechten Prompt schrittweise einen stabilen Business-Prompt entwickeln.

## Aufbau eines guten Prompts

| Element | Zweck |
|---------|-------|
| Rolle | Wer soll das Modell sein? |
| Ziel | Was soll erreicht werden? |
| Kontext | Worum geht es, was ist Hintergrund? |
| Aufgabe | Konkrete Anweisung |
| Einschränkungen | Was darf nicht? |
| Ausgabeformat | Wie soll das Ergebnis aussehen? |
| Beispiele | Few-Shot-Vorgaben |

## Zero-Shot und Few-Shot

- **Zero-Shot:** nur die Aufgabe, keine Beispiele
- **Few-Shot:** 1–5 Beispiele für das gewünschte Schema

Few-Shot ist robuster für strukturierte Aufgaben, kostet aber Tokens.

## Iteratives Prompting

Ein guter Prompt entsteht fast nie im ersten Versuch. Vorgehen:

1. Ersten Wurf schreiben
2. An 5–10 Beispielen ausführen
3. Schwächen identifizieren (Halluzinationen, falsches Format, fehlender Kontext)
4. Prompt präzise anpassen
5. Wiederholen, bis Stabilität erreicht ist

## Prompt Templates

Für wiederkehrende Aufgaben: Prompt als Vorlage mit Platzhaltern. Versionierung in Git. Tools: `promptr`, `langchain`-Templates oder einfach Markdown-Dateien.

## Rückfragen durch das Modell

Modelle dürfen (und sollen) Rückfragen stellen, wenn die Aufgabe mehrdeutig ist. Das senkt die Halluzinationsrate drastisch. Im Prompt: *"Wenn etwas unklar ist, frage nach, statt zu raten."*

## Prompt-Patterns für Business-Aufgaben

| Aufgabe | Pattern |
|---------|---------|
| Zusammenfassung | „Fasse den folgenden Text in 5 Sätzen zusammen." |
| Analyse | Strukturiertes Schema vorgeben + Belege aus dem Text verlangen |
| Klassifikation | Kategorienliste vorgeben + Mehrfachauswahl erlauben |
| Dokumentenerstellung | Gliederung vorgeben + Stilbeispiel |
| Projektmanagement | RACI + Akzeptanzkriterien verlangen |
| Entscheidungsunterstützung | Pro/Contra mit geschätztem Impact |

## Typische Prompt-Fehler

- **Mehrere Aufgaben** in einem Prompt vermischen
- **Implizite Annahmen** statt expliziten Kontexts
- **Fehlende Ausgabeformat-Vorgabe** (das Modell "rät")
- **Negative Anweisungen** ("sag nicht X") statt positiver Formulierung
- **Zu lange Prompts** mit redundantem Kontext

!!! warning "Praxisfalle"
    Prompt Engineering allein ergibt **keine** zuverlässige AI-Anwendung. Dafür braucht es:
    - Evaluation (qualifizierte Testfälle)
    - Vordefinierte Tools / Function-Calling
    - Quellen (RAG) statt freier Erfindung
    - Human-in-the-Loop bei Konsequenzen
