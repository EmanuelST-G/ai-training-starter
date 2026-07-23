# AI-Anwendungsfälle im Business

[← zurück zur Themenliste](../themenliste.md)

## Lernziel

Aus einem Problem einen konkreten, bewertbaren AI-Use-Case formulieren können.

## Prozesse analysieren und AI-Potenziale identifizieren

Heuristik für die ersten Ideen:

- **Hohe Frequenz** (> 100 Wiederholungen pro Monat)
- **Hoher manueller Aufwand** bei niedriger Komplexität
- **Strukturierte Daten** oder klare Eingaben
- **Tolerante Fehlerrate** (< 5 % Fehler sind okay)
- **Schriftlich/textbasiert** statt physikalischer Welt

Was AI schlecht kann: kausale Begründung über kontrafaktische Szenarien, physische Welt wahrnehmen, langfristige strategische Entscheidungen.

## Typische Use Cases

- Dokumentenanalyse (Verträge, Rechnungen, Audits)
- Wissenssuche in internen Beständen
- Kundenservice / First-Level-Support
- E-Mail-Verarbeitung / Triage
- Angebotserstellung aus CRM-Daten
- Meeting-Zusammenfassungen
- Reporting (KPIs aus Datenquellen)
- Forecasting (Nachfrage, Abverkauf)
- Qualitätsprüfung (Texte, Bilder)
- Vertragsanalyse (Klauseln, Risiken)
- Marketing & Content
- Softwareentwicklung (Code-Vorschläge, Tests, Refactoring)

## Assistenz vs. vollständige Automatisierung

| Grad | Beispiel | Risiko |
|------|----------|--------|
| Vollständige Automatisierung | Spam-Filter, Auto-Vervollständigung | Niedrig, weil Fehler reversibel |
| Assistenz | Copilot für Kundenservice-Antwort | Mittel — Mensch prüft |
| Vollautonom | AI-Agent beantwortet Kunden ohne Prüfung | Hoch — rechtlich und qualitativ |

## Human-in-the-Loop

Wo Fehler Folgen haben, **muss** ein Mensch die Ausgabe prüfen oder freigeben. Das hat zwei Effekte:

- Qualität wird messbar besser
- Time-to-Value sinkt (Mensch liest trotzdem)

## AI als Copilot, Reviewer oder autonomer Agent

- **Copilot:** Vorschlag, Mensch entscheidet
- **Reviewer:** Mensch macht, AI prüft
- **Autonomer Agent:** AI entscheidet und handelt

## Ungeeignete Use Cases erkennen

- Wenn klassische Regel-Software billiger und zuverlässiger ist
- Wenn die Fehlerrate unter 0,1 % liegen muss
- Wenn Trainingsdaten fehlen oder Bias-dominiert sind
- Wenn ethische, regulatorische oder reputationsrelevante Konsequenzen drohen

## Build vs. Buy

| Faktor | Build | Buy |
|--------|-------|-----|
| Spezifischer Vorteil erforderlich | ja | nein |
| Daten sind unique | ja | egal |
| Zeitkritisch | nein | ja |
| Volumen rechtfertigt Custom-Lösung | hoch | niedrig |

## Standardprodukt vs. individuelle Lösung

Microsoft 365 Copilot, Salesforce Einstein, ServiceNow AI — wenn 70 % der Anforderungen reichen, ist Standard fast immer billiger. Individuelle Lösungen nur, wenn die Differenzierung am Use Case hängt.

!!! tip "Entscheidungsfrage"
    Welche Eigenschaft unterscheidet euch von Wettbewerbern — und ist diese Eigenschaft AI-relevant?
