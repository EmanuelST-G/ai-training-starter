# Cheat-Sheet Phase 4 – Technik { .cheatsheet }

Nach dieser Phase kannst du RAG, Agents, Integration und produktiven Betrieb so einordnen, dass Architekturentscheidungen begründet, dokumentierbar und betreibbar bleiben.

## Kernbotschaften

1. Wissen nachschlagen → RAG; Verhalten anpassen → Fine-Tuning. Ein Fine-Tuning ersetzt keine aktuelle Wissensbasis.
2. RAG verankert Antworten in Quellen, macht sie aber nicht automatisch wahr — Quellen belegen Herkunft, nicht Korrektheit.
3. Berechtigungen müssen vor oder während des Retrievals greifen, nicht erst nach der Antwortgenerierung — sonst steht der Inhalt schon im Modell.
4. Ein Agent ist kein Synonym für „gute AI" — er ist eine Orchestrierung aus Modell, Werkzeugen, Kontext und Kontrolle.
5. Autonomie ist eine Prozessentscheidung: sie sollte mit dem Schadenpotenzial der Aktion steigen oder fallen.
6. Go-live ist kein Endpunkt — Drift, Modell-Updates und veränderte Nutzung erfordern kontinuierliche Evaluation und ein Betriebs-Runbook.

## Schlüsselbegriffe

- [RAG und Unternehmenswissen](../technik/12-rag.md)
- [Agents und agentische Prozesse](../technik/13-agents.md)
- [AI-Integration](../technik/14-integration.md)
- [Betrieb von AI-Lösungen](../technik/15-betrieb.md)
- [Embedding](../glossar.md#embedding)
- [Function Calling](../glossar.md#function-calling)
- [Drift](../glossar.md#drift)
- [Canary Deployment](../glossar.md#canary-deployment)

## Typische Fehler

- **Fine-Tuning als Wissensaktualisierung einsetzen** — Fine-Tuning ist teuer, Quellen fehlen, Aktualisierung wird zur Daueraufgabe.
- **RAG-Index einmal aufbauen und vergessen** — Drift, Versionskonflikte und alte Dokumente vergiften sonst die Antwortqualität.
- **Berechtigungen erst nach der Antwortgenerierung filtern** — vertrauliche Inhalte sind dann schon im Modell und können ausgeleitet werden.
- **Agenten mit Adminrechten des Entwicklers betreiben** — kompromittierter Agent wird zum maximalen Schadenvektor.
- **Versionierung nur auf Quellcode beschränken** — Prompt, Wissensquellen, Tools und Modellparameter gehören zum reproduzierbaren Paket.

## Vor dem nächsten Termin klären

- Welcher Anteil der Wissensbasis ist durchsuchbar, versioniert und mit Rechten versehen — und welcher nicht?
- Welche Tools bekommt der Agent, und welche Aktionen benötigen eine Freigabe vor dem Tool-Call?
- Wie ist Latenz, Throughput und Kosten pro Anfrage aktuell gemessen — und wo sind die Engpässe?
- Welche Drift-Signale werden überwacht, und wer reagiert auf welchen Alarm?
- Wie sieht der Not-Aus-Hebel aus, und wurde der Rollback schon einmal geübt?
- Welche Annahmen aus dem Pilot (Modell, Anbieter, Quellen) sind im Vertrag versioniert und exportierbar?
