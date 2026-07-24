# Übung 01: Einen belastbaren Projektstatus-Prompt formulieren

[← zurück zur Übungsübersicht](index.md)

**Phase:** 1
**Dauer:** 20 Minuten
**Voraussetzung:** [Prompt Engineering](../grundlagen/03-prompt-engineering.md)
**Format:** Einzelarbeit

## Aufgabe

Du erhältst diese Notizen zum Projekt „Wissensassistent“:

- Pilotstart war am 3. Mai, geplant war der 29. April.
- 38 von 50 Testfragen sind fachlich korrekt beantwortet.
- Die Schnittstelle zum Dokumentenmanagement fehlt noch.
- Das Budget ist zu 62 % verbraucht, der Zeitplan zu 55 %.
- Datenschutz prüft den Auftragsverarbeitungsvertrag bis Freitag.

Formuliere einen Prompt, der daraus einen Statusbericht für den Lenkungskreis erzeugt. Der Prompt muss Rolle, Ziel, Kontext, Aufgabe, Einschränkungen, Ausgabeformat und den Umgang mit fehlenden Informationen enthalten.

## Hinweise

- Trenne Fakten von Bewertungen.
- Gib Länge und Struktur der Antwort vor.
- Das Modell soll nichts ergänzen, was nicht in den Notizen steht.

## Lösung

Ein vollständiger Prompt kann so aussehen:

```text
Du bist Projektcontroller:in für ein AI-Projekt. Erstelle für den
Lenkungskreis einen sachlichen Statusbericht zum Projekt
„Wissensassistent“ ausschließlich aus den folgenden Notizen.

Notizen:
- Pilotstart: 3. Mai; geplant: 29. April
- 38 von 50 Testfragen fachlich korrekt
- Schnittstelle zum Dokumentenmanagement fehlt
- Budgetverbrauch: 62 %; Zeitplanverbrauch: 55 %
- Datenschutz prüft den AVV bis Freitag

Liefere genau vier Abschnitte:
1. Gesamtstatus in höchstens zwei Sätzen
2. Kennzahlen als Tabelle mit Wert und Einordnung
3. Risiken und offene Punkte als Liste
4. Nächste Entscheidungen des Lenkungskreises

Kennzeichne jede Einordnung als Bewertung. Erfinde keine Ursache,
Frist, verantwortliche Person oder Zielgröße. Wenn eine notwendige
Information fehlt, schreibe „nicht angegeben“. Stelle höchstens zwei
Rückfragen nach dem Bericht.
```

Der Prompt enthält alle geforderten Bausteine:

- **Rolle:** Projektcontroller:in
- **Ziel und Zielgruppe:** sachlicher Bericht für den Lenkungskreis
- **Kontext:** Projektname und alle verfügbaren Notizen
- **Aufgabe:** Statusbericht erstellen
- **Einschränkungen:** nur gelieferte Fakten, keine erfundenen Details
- **Ausgabeformat:** vier definierte Abschnitte mit Tabelle und Listen
- **Unsicherheit:** „nicht angegeben“ und höchstens zwei Rückfragen

Ein prüfbarer Output darf beispielsweise die Quote 38/50 als 76 % berechnen. Er darf aber nicht behaupten, 76 % erfüllten das Qualitätsziel, weil kein Zielwert genannt wurde. Ebenso ist „vier Tage später als geplant“ zulässig, eine angebliche Ursache für die Verzögerung jedoch nicht.

## Reflexion

Ein guter Business-Prompt legt nicht nur die gewünschte Antwort fest, sondern auch Grenzen und den Umgang mit Wissenslücken. Für die Projektleiterin wird dadurch sichtbar, welche Aussagen belastbar sind und wo vor einer Entscheidung Informationen fehlen.
