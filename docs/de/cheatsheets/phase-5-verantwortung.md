# Cheat-Sheet Phase 5 – Verantwortung { .cheatsheet }

Nach dieser Phase kannst du Datenschutz, Security, Responsible AI und Governance so zusammenführen, dass AI-Systeme regelkonform, überprüfbar und abschaltbar in Betrieb gehen.

## Kernbotschaften

1. AI-Sicherheit ist eine eigene Disziplin: klassische Firewalls reichen nicht — Risiko steckt im Modell, in Inhalten und in Tool-Aufrufen.
2. Prompt Injection ist die häufigste und gefährlichste Angriffsklasse — externe Inhalte sind „untrusted data", nicht Anweisung.
3. Datenminimierung ist Designentscheidung: was nicht ins System gelangt, kann später nicht leaken.
4. Verantwortlichkeit schlägt Prinzip: ein System ohne benannte Person wird im Problemfall zum „Nobody's baby".
5. Governance funktioniert nicht als Kontrolle, sondern als gemeinsame Sprache — Datenschutz, Security und Fach früh einbinden.
6. Jedes AI-System braucht einen Not-Aus und einen geübten Rollback — wer noch nie abgeschaltet hat, schaltet im Ernstfall nicht.

## Schlüsselbegriffe

- [Datenschutz, Recht und EU AI Act](../verantwortung/16-datenschutz.md)
- [AI Security](../verantwortung/17-security.md)
- [Responsible AI](../verantwortung/18-responsible-ai.md)
- [AI Governance](../verantwortung/19-governance.md)
- [DSGVO](../glossar.md#dsgvo)
- [Auftragsverarbeitung](../glossar.md#auftragsverarbeitung)
- [Hochrisiko-System](../glossar.md#hochrisiko-system)
- [Verantwortlichkeit](../glossar.md#verantwortlichkeit)

## Typische Fehler

- **Datenschutz erst beim Rollout prüfen** — Use Cases ohne DSGVO- und AI-Act-Bewertung sind nicht produktionsreif.
- **Opt-out für Trainingsdaten nicht setzen** — Eingaben landen im nächsten Modell-Update des Anbieters.
- **Geschäftsgeheimnisse in AI-Tools eingeben** — Logs, Caches und Retrieval-Indizes werden zu Datenabflusskanälen.
- **AI-Systeme ohne Verantwortliche betreiben** — Ownership, Vertretung und Befugnisse müssen vor Go-live stehen.
- **Sicherheit als Modell-Eigenschaft behandeln** — Architektur, Tool-Restriktion, Eingabevalidierung und Ausgabefilter bleiben nötig.

## Vor dem nächsten Termin klären

- Welche AI-Systeme sind im Inventar erfasst, und wer ist AI Product Owner pro System?
- Welche Verarbeitungen sind DSGVO-pflichtig (Verzeichnis, DSFA, AVV, SCC/TIA) — und welche Lücken sind offen?
- Welche Sicherheitsrisiken (Prompt Injection, RAG-Poisoning, überprivilegierte Agents) wurden explizit geprüft?
- Welche Bias-, Fairness- und Erklärbarkeitsanforderungen gelten für die nächste Auswertung?
- Welche Freigaben (Lab / Pilot / Produktion) stehen aus, und wer entscheidet mit welcher Frist?
- Wie ist der Not-Aus-Hebel pro System definiert, und wann wurde er zuletzt geübt?

!!! info "Druckhinweis"
    Dieses Cheat-Sheet ist für A4 optimiert; via Browser-Druck oder `git clone` als PDF nutzbar.
