# Anforderungen & User Stories für AI

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Statt „Die AI muss immer richtig sein" messbare Qualitätsziele formulieren.

## Business-Anforderung vs. technische Lösung

Eine Anforderung beschreibt, **was** erreicht werden soll. Nicht **wie**.

❌ „Wir nehmen GPT-4 mit RAG und einer Pinecone-Vektor-DB."
✅ „Unsere Vertriebsmitarbeiter können Vertragsfragen in 30 s mit Quellenangabe beantworten lassen."

## Funktionale Anforderungen

- Beantwortet bestimmte Fragetypen
- Liefert Quellenangaben
- Erlaubt Rückfragen
- Übernimmt Folgeaktionen (z. B. E-Mail-Entwurf)

## Nichtfunktionale Anforderungen

| Kategorie | Beispiel |
|-----------|----------|
| Genauigkeit | Recall ≥ 0,9 auf Gold-Set |
| Antwortzeit | p95 ≤ 5 s |
| Kosten | ≤ 0,05 € pro Anfrage |
| Verfügbarkeit | 99,5 % monatlich |
| Datenschutz | DSGVO-konform, keine PII zu externen Anbietern |
| Nachvollziehbarkeit | jede Antwort mit Quellenangabe |
| Skalierbarkeit | 50.000 Anfragen / Tag ohne Performance-Einbruch |

## Beispiel einer AI-User-Story

> Als **Vertriebsmitarbeiter:in** möchte ich **eine Vertragsanfrage in natürlicher Sprache stellen können**, damit **ich Kundenfragen sofort beantworten kann, ohne in drei Systemen zu suchen**.
>
> **Akzeptanzkriterien:**
> - Antwort enthält Quellenangabe mit Dokumentenname und Abschnitt
> - Antwortzeit ≤ 5 s (p95)
> - Mindestens 80 % der Antworten werden vom Nutzer ohne Nachfrage akzeptiert
> - Bei Unsicherheit Rückfrage statt Antwort

## Akzeptanzkriterien für probabilistische Systeme

Probabilistische Systeme können nie „immer richtig" sein. Stattdessen:

- **Mindest-Recall** auf einem Gold-Set
- **Maximal-False-Positive-Rate**
- **Quote unsicherer Antworten** (bei der das Modell nachfragen soll)
- **Feedback-Quote** der Nutzer (Korrektheit aus Nutzersicht)

## Definition erlaubter und nicht erlaubter Antworten

Worauf darf die AI antworten? Worauf nicht? Beispiele:

- ❌ Rechtsverbindliche Auskünfte
- ❌ Medizinische Diagnosen
- ❌ Spekulation über Personen
- ✅ Wissensfragen im definierten Themenbereich
- ✅ Operative Anweisungen aus Handbüchern

## Eskalations- und Fallback-Verhalten

- Bei Unsicherheit: menschlicher Experte übernehmen
- Bei Out-of-Scope-Frage: „Das kann ich nicht beantworten" + Anlaufstelle nennen
- Bei technischem Fehler: definierter Fallback-Prozess

## Anforderungen an Quellenangaben

Welche Informationen sollen beigefügt werden?

- Dokumentname
- Abschnitt / Seitenzahl
- Direktes Zitat bei paraphrasierter Antwort
- Link auf Originalquelle (wenn intern verfügbar)

## Human-in-the-Loop-Anforderungen

Definieren:

- Welche Aktionen brauchen Freigabe?
- Welche können autonom laufen?
- Wer gibt frei? (Single-Person-Approval oder Vier-Augen-Prinzip)

## Golden Datasets und Testfälle

Mindestens **20–50 Testfälle** je Use Case, die:

- Den Normalfall abdecken
- Edge Cases enthalten
- Bekannte Fehler reproduzieren
- Domänenspezifische Begriffe nutzen

!!! tip "Akzeptanzkriterien-Formel"
    Jede AI-Anforderung sollte das Wort „messen" oder „nachweisen" enthalten — sonst ist es keine Anforderung, sondern eine Hoffnung.
