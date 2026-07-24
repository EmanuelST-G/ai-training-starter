# Übung 13: Eine Datenschutz-Folgenabschätzung vorbereiten

[← zurück zur Übungsübersicht](index.md)

**Phase:** 5
**Dauer:** 60 Minuten
**Voraussetzung:** [Datenschutz, Recht und EU AI Act](../verantwortung/16-datenschutz.md)
**Format:** Einzelarbeit

## Aufgabe

Die fiktive Nordstern GmbH will Bewerbungen durch einen US-SaaS-Dienst zusammenfassen und mit einem Eignungsscore sortieren. Lebensläufe, Zeugnisse und Interviewnotizen werden übertragen. Nur die besten 20 % sieht HR; Daten bleiben 24 Monate gespeichert. Bewerber:innen erhalten keinen AI-Hinweis und können das Ranking nicht anfechten.

Bereite eine DSFA vor: Beschreibe Zweck und Datenfluss, prüfe Erforderlichkeit, bewerte mindestens fünf Risiken für Betroffene und nenne Maßnahmen samt Restrisiko. Recherchiere dafür Art. 35 DSGVO und die aktuelle Muss-Liste der zuständigen Datenschutzaufsicht; dokumentiere Primärquelle und Abrufdatum. Gib eine Projektentscheidung ab.

## Hinweise

- Eine DSFA bewertet Folgen für Menschen, nicht nur IT-Risiken.
- Pseudonymisierte Bewerbungen bleiben personenbezogen.
- Datenschutzbeauftragte, Rechtsabteilung und Betriebsrat müssen die Bewertung prüfen.

## Lösung

Eine DSFA ist hier voraussichtlich erforderlich: Es gibt systematische Bewertung, erhebliche Wirkung auf berufliche Chancen, umfangreiche Beschäftigtendaten und möglicherweise besonders sensible Angaben in freien Dokumenten. Zusätzlich ist Bewerberauswahl ein besonders regulierungssensibler AI-Einsatz. Die endgültige Einordnung bestätigen Datenschutzbeauftragte und Rechtsabteilung anhand der aktuellen Aufsichtslisten.

**Zweck und Datenfluss:** Bewerber:in → Recruiting-Portal → SaaS-Anbieter und Unterauftragsverarbeiter → Extraktion und Score → sortierte Liste → HR-Entscheidung. Logs, Supportzugriffe, Backups, Trainingsnutzung, Hosting-Region und Löschung sind als eigene Verarbeitungsschritte zu erfassen.

**Erforderlichkeit und Verhältnismäßigkeit:** Ein Score mit automatischer Ausblendung ist für eine Zusammenfassung nicht erforderlich. Mildere Mittel sind eine reine Assistenz ohne Ranking, Anzeige aller Bewerbungen, kurze Speicherfrist und verbindliche menschliche Prüfung. Rechtsgrundlage, Informationspflicht, Betroffenenrechte, AVV, Drittlandtransfer und Mitbestimmung sind vor Pilotbeginn zu klären.

| Risiko für Betroffene | W/A | Maßnahme | Restrisiko |
|-----------------------|-----|----------|-------------|
| Diskriminierendes Ranking | hoch/hoch | repräsentatives Testset, Gruppenmetriken, kein automatisches Aussortieren | mittel |
| Falsche Extraktion führt zum Ausschluss | mittel/hoch | Originaldokument anzeigen, Vier-Augen-Prüfung, Korrekturweg | niedrig bis mittel |
| Unzulässiger Drittlandzugriff | mittel/hoch | AVV, Transferprüfung, EU-Hosting, Verschlüsselung, Unterauftragnehmer prüfen | abhängig vom Vertrag |
| Zweckfremdes Modelltraining | mittel/hoch | vertragliches Trainingsverbot und technische Deaktivierung | niedrig bei Nachweis |
| Zu lange Speicherung | hoch/mittel | begründetes Löschkonzept, automatische Löschung und Backup-Frist | niedrig |
| Fehlende Transparenz und Anfechtung | hoch/hoch | verständlicher AI-Hinweis, menschliche Kontaktstelle, Korrektur und Widerspruch | niedrig bis mittel |
| Übermäßige Datenerhebung | hoch/mittel | erforderliche Felder festlegen, sensible Freitexte filtern | mittel |

**Entscheidung:** Der vorgelegte Prozess ist **No-Go**. Der Pilot darf erst neu bewertet werden, wenn kein automatisches Aussortieren erfolgt, alle Bewerbungen menschlich zugänglich bleiben, Transparenz und Anfechtung bestehen, Verträge und Transfer geklärt sind und die DSFA kein unvertretbares hohes Restrisiko mehr zeigt. Bleibt trotz Maßnahmen ein hohes Risiko, ist vor Verarbeitung die zuständige Aufsichtsbehörde nach dem vorgesehenen Verfahren einzubeziehen.

Der Rechercheanhang nennt pro Quelle Titel, Behörde, Fassung, URL, Abrufdatum und die auf den Fall angewandten Kriterien. Sekundärartikel dürfen erläutern, ersetzen aber nicht Gesetzestext und aktuelle Muss-Liste.

Zur Vollständigkeitskontrolle werden außerdem Stellungnahmen von Datenschutzbeauftragten und betroffenen Fachrollen, geplante Konsultationen, genehmigende Person und nächster Reviewtermin im DSFA-Dossier abgelegt.

Die Maßnahmen erhalten je einen Umsetzungsnachweis. Ohne Testprotokoll für menschliche Sichtung, Löschung, Betroffenenanfrage und Gruppen-Fairness bleibt das Restrisiko unbewertet und das Gate geschlossen.

## Reflexion

Eine DSFA ist kein Formular am Projektende, sondern kann den Prozessentwurf grundlegend verändern. Die Projektleiterin muss Risiken aus Sicht der Bewerber:innen bewerten und bei unvertretbarem Restrisiko einen echten Stopp ermöglichen.
