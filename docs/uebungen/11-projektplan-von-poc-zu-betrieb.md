# Übung 11: Vom PoC zum produktiven Betrieb planen

[← zurück zur Übungsübersicht](index.md)

**Phase:** 3
**Dauer:** 60 Minuten
**Voraussetzung:** [AI-Projektmanagement](../projektleitung/08-projektphasen.md)
**Format:** Einzelarbeit

## Aufgabe

Plane für einen RAG-Wissensassistenten den Weg vom erfolgreichen Laborversuch zum Betrieb. Im PoC wurden 30 synthetische Fragen getestet; für den Pilot sollen 40 Beschäftigte echte Handbücher nutzen. Erstelle einen 12-Wochen-Plan mit Ergebnissen, Verantwortlichen, Abhängigkeiten und Gates.

Recherchiere zusätzlich in der aktuellen Primärdokumentation des vorgesehenen Cloud-Anbieters Hosting-Region, Protokollspeicherung und Datenlöschung. Notiere URL, Dokumentversion oder Abrufdatum und eine offene Vertragsfrage. Definiere einen Abbruch und einen Rückfallprozess.

## Hinweise

- Ein erfolgreicher PoC ersetzt weder Datenschutzprüfung noch Fachabnahme.
- Plane Daten-, Eval-, Security-, Change- und Betriebsarbeit parallel ein.
- Ein Gate enthält messbare Nachweise und eine entscheidende Rolle.

## Lösung

Ein vollständiger Musterplan ist:

| Woche | Ergebnis | Federführung | Abhängigkeit |
|-------|----------|--------------|---------------|
| 1 | Zweck, Scope, Owner und K.-o.-Kriterien bestätigt | Projektleitung, Fachbereich | Sponsor benannt |
| 1–2 | Dateninventar, Rechte und gültige Dokumentversionen | Data Owner | Quellenzugang |
| 2 | Datenschutz-, Security- und Mitbestimmungs-Screening | DSB, CISO, Betriebsrat | Datenfluss |
| 2–3 | Anbieterrecherche und Vertragslücken dokumentiert | Einkauf, Recht | Zielarchitektur |
| 3–4 | 60-Fälle-Gold-Set mit Rollen- und Negativfällen | Fachexpert:innen | Scope stabil |
| 3–5 | ACL-gefilterter Index und Logging umgesetzt | Engineering | freigegebene Daten |
| 5 | PoC-zu-Pilot-Gate | Sponsor, AI Product Owner | Nachweise vollständig |
| 6–8 | Pilot mit 40 geschulten Nutzer:innen | Fachbereich, Change Lead | Gate bestanden |
| 6–8 | Qualität, Nutzung, Kosten und Vorfälle messen | Eval Lead, Betrieb | Telemetrie aktiv |
| 9 | Pilot-Auswertung und Restmaßnahmen | Projektleitung | Pilotdaten |
| 10 | Last-, Security-, Restore- und Not-Aus-Test | CISO, Betrieb | produktionsnahe Umgebung |
| 11 | Runbook, Support, SLA und Modellversion abnehmen | Service Owner | Betriebsübergabe |
| 12 | Go-live-Gate und gestaffelte Aktivierung | Sponsor, Service Owner | alle K.-o.-Kriterien erfüllt |

**Gate Woche 5:** mindestens 80 % fachlich korrekte Antworten im Gold-Set, 100 % korrekte Rechtefilterung, Datenschutzentscheidung dokumentiert, keine kritische Security-Feststellung und Pilot-Support benannt. **Gate Woche 12:** mindestens 90 % Korrektheit, p95 unter 5 Sekunden, null Rechteverletzungen, Not-Aus in höchstens 15 Minuten erfolgreich, Betriebsbudget und Runbook freigegeben.

Der Rechercheeintrag enthält je Anbietermerkmal Originalquelle, Aussage, Geltungsbereich, Abrufdatum und Belegkopie. Marketingseiten genügen nicht. Eine typische offene Vertragsfrage lautet: „Gelten Löschfrist und Trainingsausschluss auch für Supportlogs, Backups und alle Unterauftragsverarbeiter?“ Recht und Datenschutz bestätigen das Ergebnis schriftlich.

**Abbruch:** Werden Rechte verletzt oder bleibt die Korrektheit nach zwei Verbesserungszyklen unter 80 %, endet der Pilot. **Rückfall:** Nutzer:innen wechseln auf die bestehende DMS-Suche und den manuellen Fachsupport; API-Zugriff und Index werden deaktiviert, Belege gesichert und Pilotdaten nach Löschkonzept behandelt.

## Reflexion

Der Weg zur Produktion besteht aus überprüfbaren Übergängen, nicht aus einer technischen Hochskalierung des PoC. Die Projektleiterin verbindet Recherche und Fachnachweise mit klaren Gates, sodass Unsicherheit zu einer steuerbaren Entscheidung wird.
