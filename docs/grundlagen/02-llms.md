# Generative AI & Large Language Models

[← zurück zur Themenliste](../themenliste.md)
[Vorheriges: AI-Grundlagen](01-ai-grundlagen.md) · [Nächstes: Prompt Engineering](03-prompt-engineering.md)

## Lernziel

Verstehen, warum ein überzeugend formulierter AI-Output trotzdem falsch sein kann.

## Was sind LLMs?

Large Language Models sind KI-Modelle, die auf riesigen Mengen an Text trainiert wurden und Wahrscheinlichkeiten für das "nächste wahrscheinliche Wort" berechnen. Aus dieser einfachen Aufgabe entsteht durch Skalierung erstaunlich vielseitige Intelligenz.

## Grundprinzip "nächstes wahrscheinliches Wort"

Ein LLM zerlegt Text in **[Tokens](../glossar.md#token)** (häufig Wortteile, ca. 0,5–1 Token pro Wort) und sagt für jeden nächsten Token eine Wahrscheinlichkeitsverteilung vorher. Die Auswahl aus dieser Verteilung — gesteuert durch die **[Temperatur](../glossar.md#temperatur)** — ergibt den Text.

## Kontextfenster

Das **[Kontextfenster](../glossar.md#kontextfenster)** ist die maximale Länge an Eingabe + Ausgabe, die ein Modell gleichzeitig verarbeiten kann. Typische Werte 2026:

- GPT-4-Klasse: 128k bis 1M Tokens
- Claude Opus / Sonnet: 200k bis 1M Tokens
- Open-Source: stark variierend, 8k bis 200k

Was nicht ins Fenster passt, "weiß" das Modell nicht.

## System-Prompt, User-Prompt, Assistant-Response

- **[System-Prompt](../glossar.md#system-prompt):** Rollen- und Verhaltensanweisungen (vom Entwickler)
- **User-Prompt:** die eigentliche Anfrage
- **Assistant-Response:** die Antwort des Modells

## Anbieter im Überblick

| Anbieter | Modell-Reihe | Bemerkung |
|----------|--------------|-----------|
| OpenAI | GPT-4, GPT-5, o-Serie | Reasoning-Modelle mit starker Planungsfähigkeit |
| Anthropic | Claude Opus / Sonnet / Haiku | Lange Kontextfenster, vorsichtig bei Risiken |
| Google | Gemini | multimodal, enge Integration mit Workspace |
| Microsoft | Copilot | Vermarktung von OpenAI-Modellen + Integration |
| Open-Source | LLaMA, Mistral, Qwen | On-Premises und Edge einsetzbar |

## Halluzinationen

Eine [Halluzination](../glossar.md#halluzination) ist eine **falsche Aussage, die das Modell sicher präsentiert**. Quellen:

- Trainingsdaten enthalten den Fakt nicht
- Verteilung erlaubt plausible Lügen
- Modell kann nicht zwischen "wird oft gesagt" und "ist wahr" unterscheiden

Erkennung: Quellen verlangen, Cross-Check, gesundes Misstrauen.

## Temperatur und Determinismus

**[Temperatur](../glossar.md#temperatur)** regelt, wie "kreativ" oder "konservativ" das Modell antwortet:

- **T = 0**: greedy decoding, sehr deterministisch
- **T ≈ 0,7**: ausgewogen (typisch)
- **T ≥ 1**: sehr kreativ, höhere Halluzinationsrate

Für reproduzierbare Ausgaben: Temperatur 0, ggf. `seed`-Parameter festlegen.

## Strukturierte Ausgaben

Modelle können gezwungen werden, valide JSON- oder XML-Strukturen zu liefern — Voraussetzung für Tool-Aufrufe und zuverlässige Automatisierung. APIs bieten dafür `response_format`-Parameter oder "JSON Mode".

## Multimodale Modelle

Aktuelle [multimodale Modelle](../glossar.md#multimodal) verarbeiten nicht nur Text, sondern auch Bilder, Audio und teilweise Video. Das erweitert die Use Cases erheblich (Rechnungsscan, Diagrammanalyse, Audio-Transkription).

## [Reasoning-Modelle](../glossar.md#reasoning-modelle)

Modelle wie OpenAI o1/o3 oder Claude mit "Extended Thinking" zerlegen Aufgaben intern in Zwischenschritte. Sie sind langsamer und teurer, liefern aber bei Mathematik, Logik und mehrstufiger Planung oft deutlich bessere Ergebnisse.

## Grenzen von LLMs

- **Fehlendes aktuelles Wissen** — Trainingsstand beachten
- **Falsche Quellenangaben** — erfundene Paper, Urteile, URLs
- **Rechenfehler** — selbst starke Modelle rechnen nicht zuverlässig
- **Scheinsicherheit** — das Modell sagt nie "ich weiß es nicht" von sich aus
- **Kontextverlust** — bei langen Konversationen werden ältere Teile unscharf

!!! warning "Praxisfalle"
    „Das klingt überzeugend" ist das schwächste Argument für Korrektheit. Plausibilität und Wahrheit sind verschiedene Achsen.
