# Cheat-Sheet Phase 1 – Grundlagen { .cheatsheet }

Nach dieser Phase kannst du einordnen, wann AI sinnvoll ist, wie LLMs funktionieren und wie du stabile Prompts formulierst.

## Kernbotschaften

1. AI heißt in der Praxis fast immer Machine Learning: Modelle generalisieren aus Daten statt expliziter Regeln.
2. LLMs berechnen Wort-für-Wort eine Wahrscheinlichkeitsverteilung — daraus folgt, dass dieselbe Anfrage leicht unterschiedliche Antworten liefern kann.
3. Halluzinationen sind sicher klingende Falschaussagen; Plausibilität ist nicht Wahrheit.
4. Prompt Engineering ist iterativ: Erster Wurf → an 5–10 Beispielen testen → Schwächen identifizieren → Prompt präzise anpassen.
5. Kontextfenster, Temperatur und System-Prompt bestimmen das Verhalten stärker als das Modell an sich.
6. Prompt Engineering allein ergibt keine zuverlässige Anwendung — Evaluation, Quellen (RAG) und Human-in-the-Loop bleiben nötig.

## Schlüsselbegriffe

- [AI-Grundlagen](../grundlagen/01-ai-grundlagen.md)
- [Generative AI & LLMs](../grundlagen/02-llms.md)
- [Prompt Engineering](../grundlagen/03-prompt-engineering.md)
- [Künstliche Intelligenz](../glossar.md#kunstliche-intelligenz-ai)
- [Halluzination](../glossar.md#halluzination)
- [Token](../glossar.md#token)
- [Temperatur](../glossar.md#temperatur)
- [Few-Shot-Prompting](../glossar.md#few-shot-prompting)

## Typische Fehler

- **AI mit klassischer Software verwechseln** — AI liefert Wahrscheinlichkeiten, keine Garantien; eine deterministische Antwort ist nicht zu erwarten.
- **Halluzinationen übersehen, weil der Ton überzeugt** — Plausibilität prüfen, Quellen verlangen, Fakten querchecken.
- **Mehrere Aufgaben in einem Prompt vermischen** — liefert generische, oberflächliche Antworten statt klarer Ergebnisse.
- **Negative Anweisungen statt positiver Formulierung** — „sag nicht X" funktioniert schlechter als „formuliere in folgender Struktur".
- **Prompt Engineering als einmalige Aufgabe sehen** — ohne Versionspflege und Testset zerfällt die Qualität nach jedem Modell-Update.

## Vor dem nächsten Termin klären

- Welche AI-Aufgaben in deinem Verantwortungsbereich eignen sich für Assistenz, welche für Automatisierung?
- Welche Daten, Modelle und Anbieter sind in eurer Organisation bereits freigegeben?
- Wer darf welche Inhalte in AI-Tools eingeben (PII, Geschäftsgeheimnisse, Quellcode)?
- Welche Halluzinations-Risiken sind im anstehenden Use Case kritisch (rechtsverbindliche Aussagen, Personenbezug)?
- Welche Mindestqualität (Recall, False-Positive-Rate) muss ein späterer AI-Use Case erfüllen, um nutzbar zu sein?
- Welche Erwartungen hat das Management an „AI in drei Monaten" — und wo ist eine ehrliche Korrektur nötig?

!!! info "Druckhinweis"
    Dieses Cheat-Sheet ist für A4 optimiert; via Browser-Druck oder `git clone` als PDF nutzbar.
