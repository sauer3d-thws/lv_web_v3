---
marp: true
theme: thws-sts
paginate: true
header: '**Webprogrammierung** <br> THWS Modul-Nr: 6322170'
math: mathjax
footer: '[zurück zur Übersicht](../index.html)'
---

<!-- _class: titlepage -->

# Portfolio-Prüfungsaufgabe
## Aufgabenstellung & Mindestanforderungen: Die eigene Geovisualisierungs-Webseite
### Modul Webprogrammierung (6322170) | Fachlehrer Stefan Sauer | THWS Geovisualisierung

---
<!-- _class: structural -->

## Zielsetzung & Prüfungsformat

- **Prüfungsleistung:** Benotetes Portfolio (100 Punkte Gesamt)
- **Workload:** Entspricht 2 SWS Praxis / Übung (ca. 112,5 Std. Eigenleistung im Semester)
- **Projektziel:** Konzeption, Gestaltung und Implementierung einer **eigenen interaktiven Webpräsenz** (z. B. Geovisualisierungs-Portfolio, persönlicher Showcase oder interaktive Karte).
- **Technischer Kern:** Reine Standard-Webtechnologien (**Vanilla HTML5, CSS3, JavaScript ES6+**) kombiniert mit **Geodaten-Einbindung** (GeoJSON / Leaflet.js).
- **KI-Strategie (SDD):** KI-Tools (z. B. Claude, Antigravity, ChatGPT) dürfen als Assistent genutzt werden, erfordern aber ein lückenloses Prompt-Protokoll (`sdd-protokoll.md`) und eine finale **Code-Verteidigung**.
---


## Die 4 Abgabe-Meilensteine im Überblick

| Meilenstein | Gewichtung | Schwerpunkte & Inhalt | Abgabetermin |
| :--- | :---: | :--- | :---: |
| 🟢 **1. Konzept & Spec** | **15 Pkt.** | Wireframes, Sitemap, Design-System & `spec.md` (SDD) | **03.11.2026** |
| 🔵 **2. HTML5 & CSS3** | **25 Pkt.** | Semantisches HTML5, Responsive Flexbox/Grid, Rechtliches | **01.12.2026** |
| 🟡 **3. JavaScript & Geodaten** | **35 Pkt.** | DOM-Events, Async Fetch, GeoJSON/Leaflet, Formular & Storage | **12.01.2027** |
| 🔴 **4. Doku & Verteidigung** | **25 Pkt.** | SDD-Prompt-Protokoll (`sdd-protokoll.md`) & 5-Min-Kolloquium | **19.01.2027** |

---
<!-- _class: vielText vielText2-->

## 🟢 Meilenstein 1: Konzept, Wireframe & SDD-Spezifikation (15 Pkt.)

### Ziel: Strukturelle und visuelle Planung der eigenen Webpräsenz

- **Sitemap & Inhaltskonzept:**
  - Planung von mindestens **3 zusammenhängenden Unterseiten**
  (z. B. *Startseite*, *Projekte/Karte*, *Über mich / Kontakt*).
- **Wireframing (Mobile & Desktop):**
  - Erstellung korrespondierender Layout-Skizzen für Smartphone- und Desktop-Screenshots
  (z. B. mit Figma, Excalidraw, Penpot oder sauberen Handzeichnungen).
- **Design-System:**
  - Definition von Farbpalette (Hex/RGB/HSL), Schrifthierarchie (z. B. Google Fonts) und Bildsprache.
- **Spec-Driven Development (`spec.md`):**
  - Erstellung eines strukturierten, maschinenlesbaren Anforderungsdokuments (`spec.md`)
  zur gezielten Steuerung von KI-Prompting-Prozessen.

---
<!-- _class: vielText vielText2-->

## 🔵 Meilenstein 2: HTML5 Semantik, CSS3 Layout & Rechtliches (25 Pkt.)

### Ziel: Vollständiges, responsive Webseiten-Gerüst (ohne JavaScript!)

- **Reine HTML5-Semantik (5 Pkt.):**
  - Verbindlicher Einsatz semantischer HTML5-Tags (`<header>`, `<nav>`, `<main>`,
  `<article>`, `<section>`, `<aside>`, `<footer>`).
  - **Verbot von `<div>`-Wüsten:** Keine sinnfreie Verschachtelung strukturloser Container.
- **Handgeschriebenes CSS3 & Responsive Design (10 Pkt.):**
  - Flexbox und/oder CSS Grid für komplexe Spalten- und Galerie-Layouts.
  - **Mobile-First-Ansatz** mit mindestens 2 klar getrennten Media Queries (`@media screen`).
  - Eigene CSS-Variablen (`:root`) für Farben, Abstände und Schriftgrößen.
- **Medien, Barrierefreiheit & Rechtliches (10 Pkt.):**
  - Pflicht: Barrierefreie `alt`-Attribute für alle Bilder.
  - Impressumspflicht nach §5 DDG & DSGVO-Konformität (z. B. Google Fonts **lokal** einbinden).

---
<!-- _class: vielText vielText2-->

## 🟡 Meilenstein 3: JavaScript, Interaktion & Geodaten (35 Pkt.)

### Ziel: Interaktivität, asynchrone Daten und Kartenintegration

- **DOM-Manipulation & Event-Handling (10 Pkt.):**
  - Interaktives Mobil-Menü (Hamburger-Menü per `classList.toggle()`).
  - Mindestens 1 weiteres dynamisches Event (`input`-Filter, Theme-Toggle Dark/Light Mode).
- **Asynchrone Daten & Geodaten-Anbindung (10 Pkt.):**
  - Einbinden einer interaktiven **OpenStreetMap-Karte z.B. via Leaflet.js**.
  - Asynchrones Ladeneiner eigenen **GeoJSON-Datei** mittels `fetch()` & `async/await` inkl. dynamischer Popups
- **Formularverarbeitung & Validierung (10 Pkt.):**
  - Kontakt- oder Datenformular mit nativer JS-/HTML5-Validierung (`checkValidity()`, `FormData`).
- **State Management / Persistence (5 Pkt.):**
  - Speichern von Nutzer-Preferences (z. B. Dark Mode / Karten-Filter) in `localStorage
  **ODER** GeoJSON-Export per Blob API.

---
<!-- _class: vielText vielText2-->

## 🔴 Meilenstein 4: SDD-Protokoll & Code-Verteidigung (25 Pkt.)

### Ziel: Nachweis der eigenen Entwicklungs- & Debugging-Kompetenz

- **SDD- & Prompting-Protokoll (`sdd-protokoll.md`) (15 Pkt.):**
  - Chronologische Dokumentation aller genutzten KI-Prompts.
  - **Fehler- & Debugging-Logbook:** Konkrete Dokumentation von Halluzinationen oder fehlerhaftem
  KI-Code und wie diese manuell mittels DevTools (Console, Breakpoints) behoben wurden.
- **Live Code-Verteidigung (10 Pkt. – 5-Minuten-Kolloquium):**
  - Kurze Präsentation der eigenen Webseite vor dem Dozenten.
  - **Zufallsabhängige Code-Befragung:** Der Dozent wählt eine Codezeile aus
  (z. B. `event.preventDefault()`, Fetch-Promise, Leaflet-Marker-Loop, CSS-Flexbox-Eigenschaft) und der Studierende muss die Funktionsweise spontan erklären.

---
<!-- _class: vielText vielText2-->

## Anti-Plagiats- & KI-Leitplanken

### Warum KI-Prompts alleine NICHT zum Bestehen reichen:

1. **Framework-Verbot (K.O.-Regel):**
   - **KEIN** React, Vue, Svelte, Tailwind, Bootstrap erlaubt!
   - KI-Standardantworten (z. B. React/Tailwind Snippets) führen zu 0 Punkten. Es zählt das Verständnis von nativen Webstandards.
2. **Individuelle Geodaten-Logik:**
   - Eigene GeoJSON-Strukturen und benutzerdefinierte Leaflet-Popups erfordern
   spezifische Datenverarbeitung, die generischer KI-Code nicht kennt.
3. **Verteidigungspflicht:**
   - Wer KI-Code abgibt, ohne ihn zu verstehen, scheitert in der
   mündlichen Code-Verteidigung (Abgabe 4).

---
<!-- _class: vielText vielText2-->

## Notenschlüssel & Bewertungsmatrix (100 Punkte Gesamt)

| Punktebereich | Note | Prädikat | Voraussetzung |
| :---: | :---: | :--- | :--- |
| **100 – 95 Pkt.** | **1,0** | Sehr gut | Makellose Semantik, exzellentes CSS/JS, beeindruckendes GeoJSON-Feature & fehlerfreie Code-Verteidigung. |
| **94 – 90 Pkt.** | **1,3 – 1,7** | Sehr gut / Gut | Alle Mindestanforderungen erfüllt, saubere Dokumentation, kleine Abzüge im Styling oder JS-Details. |
| **89 – 75 Pkt.** | **2,0 – 2,7** | Gut / Befriedigend | Solides Projekt, Karte & Formular funktionieren, leichte Mängel in Semantik oder SDD-Protokoll. |
| **74 – 50 Pkt.** | **3,0 – 4,0** | Ausreichend | Grundfunktion vorhanden, aber Mängel bei Mobile-First, GeoJSON-Anbindung oder Rechtskonformität. |
| **< 50 Pkt.** | **5,0** | Nicht bestanden | K.O.-Kriterium verletzt (Framework genutzt, Impressum fehlt, Code-Verteidigung fehlgeschlagen). |

---
<!-- _class: structural-->

## Zusammenfassung & Empfehlungen für Studierende

- **Stetig mitarbeiten:** Das Portfolio ist ein semesterbegleitendes Projekt.
Beginnen Sie frühzeitig mit Wireframes und `spec.md`.
- **DevTools nutzen:** Lernen Sie den Browser-Debugger kennen – die 
Fehlerdokumentation bringt wertvolle Punkte.
- **Fragen stellen:** Nutzen Sie die 2 SWS Übungszeit zur Abstimmung Ihres Geodaten-Konzepts.

[Zurück zur Kursübersicht](../index.html)
