---
marp: true
theme: thws-sts
paginate: true
header: '**Angewandte Informatik** <br> THWS Modul-Nr: 6018017'
math: mathjax
footer: '[zurück zur Übersicht](../index.html)'
---

<!-- _class: titlepage -->

# Lehrveranstaltungs- und Studienplan
## Wintersemester 2026/2027
### Webprogrammierung V3 | 13 Termine | Vorlesung, Übung & Quarto-Lernkontrollen
### Fachlehrer Stefan Sauer | THWS Geovisualisierung

---
<!-- _class: structural -->

## Modulübersicht & Prüfungsleistung

- **Lehrform:** 4 SWS (Seminaristischer Unterricht & praktische Übungen)
- **ECTS & Arbeitsaufwand:** 5 ECTS (Präsenzzeit 60 h | Selbststudium 90 h)
- **Prüfungsform:** Schriftliche Prüfung 90 Minuten (davon anteilig 50 % Webprogrammierung)
- **Prüfungsdurchführung:** Elektronische Klausur mit **EvaExam** ohne Hilfsmittel.
- **Didaktisches Konzept:** Wöchentlich synchronisierte Vorlesung & Übung, begleitet von interaktiven **Quarto-Quizzen** (Multiple-Choice, Active Recall, Code-Analyse) zur gezielten Klausurvorbereitung.
- Bonusleistung nach §29 APO möglich: Voraussetzung, eigene Portfolioseite als Onepager

---
<!-- _class: vielText vielText2 -->

## Lehr- & Studienplan: Teil 1 (Termine 01 – 04)

| Termin & Datum | Vorlesungsinhalte & Themenschwerpunkte | Interaktive Lernzielkontrolle (Quarto-Quiz) |
| :---: | :--- | :--- |
| **01** <br> `05.10.2026` | **Modulübersicht & Werkzeuge:** Arbeitsumgebung, VS Code, Antigravity, DevTools, Git, Digital Shepherd, Klausurformat (EvaExam). | 📝 **[Quiz 01](01_modul_und_arbeitsgrundlagen_quiz.html):** Modul- & Arbeitsgrundlagen (Werkzeuge, Versionierung, Audit) |
| **02** <br> `19.10.2026` | **HTML5 Semantik & Rechtliches:** Semantische Dokumentstruktur (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), Impressumspflicht (§5 DDG), Datenschutz & DSGVO. | 📝 **[Quiz 02](02_html5_und_webseiten_struktur_quiz.html):** HTML5 Semantik & Web-Recht (Struktur-Tags, Impressum, DSGVO) |
| **03** <br> `26.10.2026` | **Design-Systeme & SDD:** Farbräume & Typografie, Wireframing, Spec-Driven Development (`spec.md`), Prompt-Engineering für Web-UIs. | 📝 **[Quiz 04](04_ki_workflows_und_sdd_quiz.html):** KI-Workflows & SDD (Spezifikation, Prompt-to-Code) |
| **04** <br> `02.11.2026` | **CSS3 Grundlagen & Box-Modell:** Selektoren, Kaskade, Spezifität, Margin, Border, Padding, Box-Sizing (`box-sizing: border-box`). | 📝 **[Quiz 03](03_css3_styling_layouts_mobile_quiz.html):** CSS3 Selektoren & Box-Modell (Kaskade, Spezifität, Box-Sizing) |

---
<!-- _class: vielText vielText2 -->

## Lehr- & Studienplan: Teil 2 (Termine 05 – 08)

| Termin & Datum | Vorlesungsinhalte & Themenschwerpunkte | Interaktive Lernzielkontrolle (Quarto-Quiz) |
| :---: | :--- | :--- |
| **05** <br> `09.11.2026` | **CSS Layout-Techniken:** Flexbox (Haupt-/Querachse, `justify-content`, `align-items`) und CSS Grid (2D-Raster, `grid-template-columns`, `gap`). | 📝 **[Quiz 03](03_css3_styling_layouts_mobile_quiz.html):** Flexbox & CSS Grid (Achsen, Grid-Areas & Layout-Muster) |
| **06** <br> `16.11.2026` | **Responsive Webdesign:** Mobile-First Prinzip, Viewport-Meta-Tag, Breakpoints, `@media` Queries (responsive Umbrüche ab 768px). | 📝 **[Quiz 03](03_css3_styling_layouts_mobile_quiz.html):** Responsive Webdesign & Media Queries (Mobile-First, Breakpoints) |
| **07** <br> `23.11.2026` | **Medien & Accessibility:** Bilder (`<img>`, `<picture>`), responsive SVG-Grafiken, Barrierefreiheit (BITV/WCAG), WAI-ARIA (`aria-label`, `aria-expanded`). | 📝 **[Quiz 02](02_html5_und_webseiten_struktur_quiz.html):** Medien & Accessibility (Bilder, SVG, WAI-ARIA, Screenreader) |
| **08** <br> `30.11.2026` | **Code-Cleanliness & Validierung:** W3C-HTML5/CSS3-Validierung, CSS-Refactoring, Clean-Code-Prinzipien, Audits mit Chrome Lighthouse. | 📝 **[Quiz 03 & 04](04_ki_workflows_und_sdd_quiz.html):** W3C-Validierung & Clean Code (Code-Audit, Fehlersuche) |

---
<!-- _class: vielText vielText2-->

## Lehr- & Studienplan: Teil 3 (Termine 09 – 11)

| Termin & Datum | Vorlesungsinhalte & Themenschwerpunkte | Interaktive Lernzielkontrolle (Quarto-Quiz) |
| :---: | :--- | :--- |
| **09** <br> `07.12.2026` | **JavaScript Grundlagen:** Variablen (`const`/`let`), Primitive Datentypen, Operatoren, Funktionen, Scopes, Chrome DevTools Debugging (`debugger;`). | 📝 **[Quiz 05](05_javascript_grundlagen_und_datenstrukturen_quiz.html):** JS-Grundlagen & Syntax (const/let, Typen, Funktionen, Debugging) |
| **10** <br> `14.12.2026` | **DOM-Manipulation & Events:** Element-Selektion (`querySelector`, `querySelectorAll`), Klassensteuerung (`classList.toggle`), Event-Handling (`addEventListener`, `click`). | 📝 **[Quiz 06](06_dom_events_fetch_apis_validierung_projekt_quiz.html):** DOM-Manipulation & Events (DOM-Zugriff, Event-Handling, Menüs) |
| **11** <br> `21.12.2026` | **Asynchrone Programmierung & Fetch API:** Promises, `async`/`await`, `fetch()` mit `response.ok`, GeoJSON-Daten laden & verarbeiten. | 📝 **[Quiz 06](06_dom_events_fetch_apis_validierung_projekt_quiz.html):** Asynchrones JS & Fetch API (Promises, async/await, GeoJSON) |
| *--* | *24.12.2026 – 06.01.2027* | *-- WEIHNACHTSPAUSE (Vorlesungsfreie Zeit / Selbststudium: Wiederholung Quiz 01–06) --* |

---
<!-- _class: vielText vielText2 -->

## Lehr- & Studienplan: Teil 4 (Termine 12 – 13)

| Termin & Datum | Vorlesungsinhalte & Themenschwerpunkte | Interaktive Lernzielkontrolle (Quarto-Quiz) |
| :---: | :--- | :--- |
| **12** <br> `11.01.2027` | **Formularverarbeitung, Web Storage & Geolocation:** HTML5-Formularvalidierung (`checkValidity()`), `FormData`, `localStorage`, `navigator.geolocation`. | 📝 **[Quiz 06](06_dom_events_fetch_apis_validierung_projekt_quiz.html):** Formulare, Storage & Web-APIs (Validierung, Web Storage, Geodaten) |
| **13** <br> `18.01.2027` | **Prüfungsvorbereitung, Zusammenfassung & Repetitorium:** Klausurformat (EvaExam), Analyse typischer Prüfungsaufgaben (50 % Anteil Webprogrammierung), Generalprobe. | 📝 **[Gesamt-Repetitorium](06_dom_events_fetch_apis_validierung_projekt_quiz.html):** Generalprobe aller Quarto-Quizze (01–06) zur Klausurvorbereitung |




