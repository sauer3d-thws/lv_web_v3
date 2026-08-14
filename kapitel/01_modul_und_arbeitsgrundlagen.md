---
marp: true
theme: thws-sts
paginate: true
header: '**Webprogrammierung** <br> THWS Modul-Nr: 6322170'
math: mathjax
footer: '[zurück zur Übersicht](../index.html)'
---

<!-- _class: titlepage -->
# Webprogrammierung: Modul- und Arbeitsgrundlagen


**Fachlehrer  Stefan Sauer**
**THWS Geovisualisierung**

---
<!-- _class: structural -->
# Inhaltsverzeichnis

- [Arbeitsgrundlagen](#arbeitsgrundlagen)
- [Unser Beispielprojekt](#unser-beispielprojekt)
- [Was ist gutes Webdesign?](#was-ist-gutes-webdesign)
- [Bevor wir beginnen!!!](#bevor-wir-beginnen)

---

## Arbeitsgrundlagen
- Lernmittel
- Software (Notepad++ / VS Code / Antigravity / Cursor / XAMPP / Chrome Git)

---
<!--_class: structural  -->
### Lernmittel
- HERDT-Verlag
- Online-Dokumentationen

---

**HERDT-Verlag (Hochschulmedien):**
In der universitären Lehre gilt das Programm HERDT-Campus ALL YOU CAN READ als Standardwerk. 
- HTML5, CSS3 und JavaScript- Webseiten entwickeln
- JavaScript Grundlagen

---
<!--_class: structural  -->
**Essenzielle Webseiten zur Weiterbildung**
- das MDN
- W3Schools
- SelfHTML
- CSS-Tricks
- Can I Use
- W3C Web Accessibility Initiative (WAI)

---

**Das MDN**
- präziseste, aktuellste und verlässlichste Dokumentation für HTML, CSS und JavaScript.
- Wenn im Zuge von modernen Workflows Code durch KI generiert wird, ist der „Algorithmische Skeptizismus“ Pflicht
- Jede Syntax und jedes Web-API sollte gegen das MDN geprüft werden (Halluzinations-Check).

https://developer.mozilla.org/en-US/

---
**W3Schools**
- hervorragende Plattform für Anfänger, um die Grundlagen von HTML, CSS und JavaScript interaktiv zu lernen.
- Der integrierte Code-Editor („Try it Yourself“) ermöglicht sofortiges Ausprobieren und Experimentieren mit Code-Beispielen.
https://www.w3schools.com/

---
**SelfHTML**
- umfassende deutsche Online-Dokumentation für HTML, CSS, JavaScript und weitere Web-Technologien.
- Sie bietet detaillierte Beschreibungen, zahlreiche Code-Beispiele und praktische Anleitungen für Webentwickler aller Erfahrungsstufen.

https://wiki.selfhtml.org/

---
**CSS-Tricks**
- populäre Ressource für Webentwickler, die sich auf CSS, aber auch auf HTML, JavaScript und modernes Webdesign konzentriert.
- Die Seite bietet Artikel, Tutorials und Videos zu aktuellen Web-Technologien und Best Practices.
https://css-tricks.com/

---
**Can I Use**
- essentielle Online-Ressource, die detaillierte Informationen über die Unterstützung von HTML-, CSS- und JavaScript-Funktionen in verschiedenen Webbrowsern bietet.
- Sie hilft Entwicklern zu überprüfen, welche Technologien in Zielbrowsern verfügbar sind und welche Polyfills oder Fallbacks benötigt werden.
https://caniuse.com/

---
**W3C Web Accessibility Initiative (WAI)**
- bietet Richtlinien und Ressourcen für die Schaffung von barrierefreien Webinhalten
- stellt sicher, dass Webseiten für alle Menschen zugänglich sind, einschließlich Menschen mit Behinderungen.
https://www.w3.org/WAI/


---
**Digital Shepherd**

Egal welche Quelle genutzt wird: Der moderne Ansatz lautet "Digital Shepherd" (Digitaler Hirte). Man sollte Code (egal ob aus Tutorials, Foren oder von einer KI generiert) niemals blind kopieren. Die eigentliche Kompetenz liegt aktuell darin, den Code zu verstehen, seine Barrierefreiheit (z.B. korrekte Alt-Texte für Bilder), semantische Sauberkeit und Performance zu validieren, um langfristig wartbare Webprojekte aufzubauen.

---
![bg full:bg](../img/digital_shepherd.png)

---
**Digital Shepherd & "Vibe Coding"**
- **Was ist Vibe-Coding?** Das Programmieren mittels natürlicher Sprache und KI-Assistenten (man beschreibt die Absicht, die KI schreibt den Code).
- **Die Verführung:** Es fühlt sich einfach an ("es läuft ja"). Doch KI generiert oft Code, der oberflächlich funktioniert, aber unter der Haube erhebliche Defizite aufweist.
- **Die Rolle des Hirten (Shepherd):**
  - Prompting ersetzt kein Grundlagenwissen!
  - Wer die Grundlagen (HTML-Semantik, CSS-Kaskadierung, JS-Sicherheit) nicht versteht, kann den generierten Code weder korrigieren noch pflegen.
  - Der "Digital Shepherd" leitet die KI gezielt an, statt sich blind von ihr leiten zu lassen.

---

**Die Auditing-Checkliste des Digital Shepherd**
Wenn eine KI Code generiert, müssen Sie diesen stets kritisch auf folgende Kriterien prüfen:
- **Semantik & Struktur:** Nutzt der Code echte HTML5-Elemente (`<main>`, `<article>`, `<header>`) oder handelt es sich um eine unübersichtliche Verschachtelung reiner `<div>`-Elementen?
- **Barrierefreiheit (Accessibility):** Fehlen Alt-Attribute bei Bildern, korrekte Label-Zuordnungen bei Formularen oder barrierefreie Kontraste?
- **Performance & Overhead:** Wurde unnötig komplexer Code vorgeschlagen, wo einfaches Vanilla-CSS/JS ausreicht?
- **Sicherheit:** Werden Eingaben ungeprüft verarbeitet oder veraltete/unsichere Methoden genutzt?

---

**Zukunftsperspektive: Vom Coder zum Architekten**
Wie verändert sich die Rolle von Webentwicklern durch generative KI?
- **Der Wandel:** Die reine Schreibarbeit (Syntax tippen) nimmt ab. Die Rolle verschiebt sich hin zum **Systemarchitekten** und **Qualitätsprüfer**.
- **Menschliche Stärken:** KI versteht selten den größeren geschäftlichen Kontext, Datenschutz-Anforderungen oder das emotionale Design-Gefühl für Benutzer.
- **Fazit:**
  - Reine "Code-Kopierer" werden durch KI ersetzt.
  - **Systemversteher** und **Digital Shepherds**, die komplexe Systeme konzipieren, verifizieren und absichern können, sind gefragter denn je!

---
<!--_class: structural  -->
### Software

- Notepad++
- VS Code
- Antigravity
- Cursor
- XAMPP
- Chrome
- Git
- uvm.



---
#### Notepad++
- Windows only
- Kostenlos & Open Source: quelloffen für Text Code
- ressourcenschonend, schnell
- Syntax-Hervorhebung & -Ausblendung (Code Folding):

https://notepad-plus-plus.org/downloads/
![bg right:50%](../img/notepad.jpeg)

---


- Unterstützt viele Programmier-, Skript- und Auszeichnungssprachen (z. B. HTML, CSS, JavaScript, Python, C++).
- Tab-Dokumente: Ermöglicht gleichzeitiges Öffnen und Bearbeiten mehrerer Dateien in Tabs.
- Erweiterbarkeit durch Plugins
- Leistungsstarke Suchen-und-Ersetzen-Funktion
- Makro-Aufzeichnung

---
#### VS Code

https://code.visualstudio.com/

- Kostenlos & plattformübergreifend (Windows, macOS, Linux)
- Riesiger Marketplace für Erweiterungen (Extensions)
- Hervorragende Autovervollständigung (IntelliSense)
- Integrierte Git-Unterstützung und Versionskontrolle
- Eingebautes Terminal und Debugging-Tools
- Industriestandard für moderne Webentwicklung

![bg right:50%](../img/vscode.jpg)

---
#### Antigravity

https://antigravity.ai/

- Leistungsstarker, agentischer KI-Coding-Assistent von Google DeepMind
- Arbeitet im direkten Projektkontext und versteht die gesamte Codebasis
- Kann selbstständig Code schreiben, debuggen, testen und Dateien modifizieren
- Unterstützt bei der strukturierten Planung komplexer Webprojekte
- Begleitet Entwickler als digitaler Partner bei Code-Qualität, Semantik und Barrierefreiheit

![bg right:50%](../img/antigravity.jpg)

---
#### Cursor

https://cursor.com/

- KI-gestützter Code-Editor, der als Fork von VS Code entwickelt wurde
- Vollständig kompatibel mit allen VS Code-Erweiterungen und -Themes
- Bietet native KI-Features wie Inline-Codegenerierung, Chat und automatische Fehlerbehebung
- Ermöglicht das Referenzieren und Durchsuchen der gesamten Codebasis (@Files, @Folders, @Codebase)
- KI-gestütztes Autocomplete (Tab-Vervollständigung), das oft ganze Zeilen oder Blöcke vorausahnt
![bg right:50%](../img/cursor.jpg)

---
#### XAMPP

https://www.apachefriends.org/

- Kostenlose & einfach zu installierende lokale Serverumgebung
- Komplettpaket aus Apache (Webserver), MariaDB (Datenbank), Skriptsprachen PHP und Perl
- Ermöglicht lokales Entwickeln und Testen von dynamischen Webanwendungen ohne Live-Webserver
- Einfache Verwaltung aller Dienste über das XAMPP Control Panel

![bg right:50%](../img/xampp.jpg)

---
#### Chrome

https://www.google.com/chrome/

- Schneller, sicherer und weltweit am meisten genutzter Webbrowser von Google
- Leistungsstarke Entwicklertools (Chrome DevTools) zur Fehlerbehebung / Code-Analyse
(HTML, CSS, JS)
- Führend in der Unterstützung moderner
Webstandards und APIs
- Integrierte Tools für mobiles Testen (Responsive Mode) und Performance-Audits (Lighthouse)

![bg right:50%](../img/chrome.jpg)

---
#### Weitere Browser

- Firefox: Ausgezeichnetes Privacy- und
Entwickler-Fokus
- Edge: Starker Fokus auf Enterprise und
zunehmend verbesserte DevTools
- Safari: Essentiell für das Testen
auf Apple-Geräten

![bg right:50%](../img/browser.jpg)

---

#### Git

https://git-scm.com/
https://github.com/

- Weltweit am häufigsten genutztes, verteiltes Versionskontrollsystem
- Protokolliert alle Änderungen im Quellcode
lückenlos macht sie rückgängig machbar
- Paralleles Arbeiten im Team über unabhängige Entwicklungszweige (Branches)
- Basis für Cloud-Plattformen zur
Zusammenarbeit wie GitHub und GitLab
![bg right:50%](../img/git.jpg)

---
#### Weitere Software

- FTP-Client: FileZilla (kostenlos), Cyberduck (macOS/Windows)
- Bildbearbeitung: GIMP (kostenlos), Affinity Photo, Adobe Photoshop
- Design-Tools: Figma, Sketch, Adobe XD
- Lokale Datenbank-GUI: DBeaver, MySQL Workbench

---
<!--_class: structural  -->
## Unser Beispielprojekt
- Das Projekt
- Das Konzept
- Website Struktur
![bg right:50%](../img/dasProjekt.jpg)
---

### Das Projekt
2020 beschließt der KFZ Mechaniker
Meister Maik seine Passion zur
Haupterwerbsquelle & sich selbstständi
 zu machen.
Durch sein mobiles Leben im LKW hat er sich auf
den Ausbau von Fahrzeugen zu autarken
Wohnräumen spezialisiert.
Seine jahrelange Erfahrung in der Werkstattleitung
eines Camping- & Caravantechnik Anbieters
nutzt er, um Caravans, Wohnmobile & individuelle
Fahrzeugausbauten zu reparieren, pflegen
& umzurüsten.

![bg right:50%](../img/das-ist-Maik.jpeg)

---

**Seine Dienstleistungen beinhalten**
- KFZ und LKW Reparaturen
- Caravan- und Wohnmobil Reparaturen
- Vorbereitung zur TÜV Prüfung und Prüfung von Gasanlagen
- Ein- Aus- und Umbau der KFZ Elektrik bis zur autarken Solaranlagenplanung
- Kompletter Fahrzeugausbau eines Transportfahrzeuges zum
„Wohn“-Mobil

---

Da Maik ein mobiles Leben führt,
ist er selten am gleichen Platz zu finden.
Um ihn und seine Dienstleistungen dennoch
auffinden zu können, benötigt er eine gut
auffindbare Webseite mit seinen
digitalen Kontaktdaten.

![bg right:50%](../img/wueste.jpg)

---
### Das Konzept

Bevor überhaupt eine einzige Zeile Code geschrieben wird, muss zuerst definiert werden, welche Ziele mit dem Webauftritt verfolgt werden.
> **Zieldefinition:**
Webseiten-Ziele vor der Entwicklung festlegen.
Am besten in einem Workshop oder Gespräch mit dem Auftraggeber.

---
- **Fokus der Inhalte:**
  - Präsentation von Maiks Dienstleistungen
  - Vermittlung des mobilen Lebensstils (Reisen, Alltag, Tauchlehrer)
  - Kontaktdaten gut auffindbar (schneller Kundenkontakt)
- **Visueller & redaktioneller Ansatz:**
  - Viele Bilder als roter Faden durch alle Bereiche
  - Reiseberichte für Mehrwert und bessere Auffindbarkeit
- **Technische Reduzierung:**
  - Keine komplexe Technik (Webshops, Logins) für einfache Selbstpflege
  - Simple HTML-Webseite > guter Hacker- & Spam-Schutz



---
<!--_class: structural  -->

## Was ist gutes Webdesign?
- Gutes Webdesign ist zielgruppenorientiert
- Gutes Webdesign ist benutzerfreundlich
- Gutes Webdesign ist technisch einwandfrei
- Gutes Webdesign ist "responsive"
- Gutes Webdesign ist SEO-optimiert

---
### Zielguppenorientierung

- **Zentrale Kernfrage der Planung:**
Wer sind die Besucher der Webseite?
- **Zielgruppe bestimmt das Design:**
Es gibt kein universell "gutes" Design
(ob minimalistisch oder Vintage)
 es muss zur Zielgruppe passen.

![bg right:50%](../img/zielgruppenorientierung.jpeg)

---

- **Einfluss demografischer Faktoren:**
  - **Ältere Zielgruppen:** Benötigen barrierefreies Design (z. B. größere Schriften), legen mehr Wert auf Inhalt und Seriosität als auf reines Styling.
  - **Jüngere Zielgruppen:** Erwarten ein modernes "Look and Feel" und ein hochwertiges, visuelles Design.
- **Bedürfnisse & Erwartungen:** Die optische und inhaltliche Ausrichtung muss dem Thema entsprechen (z. B. NGO-Informationsseite vs. Lifestyle-Webshop).

---
>Was ist schon schön?


https://seiten-werk.com/die-schoensten-und-besten-52-webseiten-in-deutschland-und-der-welt/

https://www.mankord.com/article/die-10-besten-websites-und-webdesign-trends-2022/

https://mkb-marketing.de/ratgeber/schoene-webseiten-design-beispiele/

---
### Benutzerfreundlichkeit

**Form follows function:**
>Jedes Design-Element muss optisch ansprechend und funktional sein.
Kein Element ohne Funktion!

---
- **Layout-Struktur nach dem F-Schema:**
  - Nutzer scannen Webseiten in F-Form
  (oben links $\rightarrow$ rechts, tiefer links $\rightarrow$ rechts, links nach unten).
  - **Typische Anordnung:** Logo oben links, Navigationsmenü im Kopfbereich, zentraler „Hero-Shot“ (Kernaussage) in der Mitte.
![alt text](../img/f-schema.jpg)


---

- **Typografie und Farbkontrast:**
  - Typografie und Farben passend zur Corporate Identity.
  - Hohe Kontraste (z. B. schwarz auf weiß) und lesbare Schriftgrößen für unterschiedliche Sehstärken und Monitore.
- **Wirkung von Weißraum (Whitespace):**
  - „Weniger ist mehr“: Weißraum strukturiert die Inhalte und lässt sie atmen.
  - Minimalistische Layouts wirken professionell und modern.

---
### Technische Korrektheit

- **Trennung von Inhalt & Design:**
  - Erleichtert Suchmaschinen die optimale Indexierung (SEO).
  - Ermöglicht Barrierefreiheit
    (z. B. einfache Navigation für Screenreader).

---

- **Ladezeiten & Performance:**
  - Kritische 3-Sekunden-Regel: Durchschnittsnutzer springen nach ca. 3 Sekunden Wartezeit ab.
  - Technische Fehlerfreiheit ist das Fundament einer positiven User Experience.

---

### Responsive Webdesign


> 64 Prozent des globalen Traffics stammt von Smartphones!
Smartphones sind für 64 Prozent des gesamten Internetverkehrs verantwortlich. In Asien ist der Smartphone-Anteil am Traffic besonders hoch.
![bg right:45%](../img/responsive.jpeg)

---
- **Definition:** Flexibles Layout, bei dem sich Navigation, Inhalte und Struktur automatisch der Bildschirmauflösung des Endgeräts anpassen (Desktop, Tablet, Smartphone).
- **Notwendigkeit:** Smartphones sind ständiger Begleiter; über die Hälfte aller Nutzer surft mobil (Tendenz steigend).
- **Ziel:** Gewährleistung einer gleichwertigen Benutzerfreundlichkeit auf allen Gerätetypen.

---

### SEO - Search Engine Optimization

**Mobile-First-Indexing:**
- Google bewertet mobil-optimierte, responsive
Webseiten bevorzugt (höheres Ranking).

**Ladezeiten (Page Speed):**
- Schnelle, optimierte Seiten verringern
Absprünge.
- Performance ist ein direkter Rankingfaktor 
Core Web Vitals).
![bg right:50%](../img/seo.jpg)

---

**Nutzererfahrung (UX) & User Signals:**
  - Intuitive Navigation erhöht die Verweildauer (Dwell Time) der Besucher.
  - Ansprechendes Design senkt die Absprungrate (Bounce Rate) – ein wichtiges Qualitätssignal für Google.
- **Semantische Struktur & Barrierefreiheit:**
  - Sinnvolle Überschriftenhierarchien (H1-H6) und beschreibende Alt-Texte helfen Screenreadern *und* Suchmaschinen-Crawlern.
- **Saubere Codestruktur:** Die klare Trennung von Inhalt (HTML) und Gestaltung (CSS) erleichtert Crawlern das effiziente Auslesen und Indexieren der Seite.

---
**20 Tips zur SEO-Optimierung:**

**Inhalt & On-Page-Faktoren**
1. Keyword-Recherche: Zielgerichtete Suchbegriffe identifizieren und passend einsetzen.
2. Einzigartiger Content: Hochwertige Inhalte mit echtem Mehrwert schaffen (Plagiate vermeiden).
3. Aussagekräftige Title-Tags: Wichtige Keywords an den Anfang setzen (max. 60 Zeichen).
4. Meta-Descriptions: Klickstarke, animierende Kurzzusammenfassungen schreiben.
5. Klare Überschriften (H1–H6): Strukturierte Text-Hierarchie mit Fokus-Keywords nutzen.

---

6. Bild-Alt-Attribute: Bildinhalte verständlich für Crawler und Screenreader beschreiben.
7. Bildkomprimierung: Dateigrößen vor dem Upload minimieren, um Ladezeiten zu sparen.
8. Sprechende URLs: Lesbare, kurze und logische URL-Strukturen verwenden.
9. Interne Verlinkung: Seitenlogik durch sinnvolle Querverweise stärken.
10. Suchintention erfüllen: Inhalte exakt an dem ausrichten, was der Nutzer sucht.

---
**Technik & Off-Page-Faktoren**

11. Responsive Webdesign: Volle Mobilfreundlichkeit auf allen Endgeräten sichern.
12. Ladezeitoptimierung: Server-Antwortzeiten senken und Skripte minimieren (Page Speed).
13. SSL-Verschlüsselung (HTTPS): Sicherheitszertifikat hinterlegen (Standard und Rankingfaktor).
14. XML-Sitemap: Den Crawling-Prozess für Google-Bots erleichtern.
15. Robots.txt pflegen: Crawling-Berechtigungen gezielt steuern.

---

16. Strukturierte Daten: Schema.org-Markup verwenden, um Rich Snippets in der Suche zu erzeugen.
17. Broken Links beheben: Defekte Verlinkungen (404-Fehler) aufspüren und umleiten.
18. Canonical Tags: Duplicate Content (doppelte Inhalte) technisch ausschließen.
19. Hochwertige Backlinks: Links von vertrauenswürdigen, themenrelevanten Webseiten erhalten.
20. Google Business Profile: Lokale Auffindbarkeit (Local SEO) einrichten und pflegen.

---
<!--_class: structural  -->

## Bevor wir beginnen!!!
- Urheberrecht
- Impressumspflicht
- Datenschutzerklärung
- Cookies


---

### Urheberrecht
>https://www.gesetze-im-internet.de/urhg/index.html

![bg right](../img/urheberrecht-gesetz.jpg)

---

copy & paste?
Das Urheberrecht bezeichnet zunächst
das subjektive und absolute Recht
auf den Schutz geistigen Eigentums
in ideeller und materieller Hinsicht.

>>Recherchieren Sie VOR DER VERÖFFENTLICHUNG, ob und wer Rechte an dem Material (Bilder und Texte) Ihrer Webseite hat.

![bg right:50%](../img/urheberrecht.jpg)

---
### Impressumspflicht

**Definition:**
Vorgeschriebene Anbieterkennzeichnung und Herkunftsangabe einer Webseite zur direkten Kontaktaufnahme.

**Gesetzliche Grundlagen:**
Geregelt in **§ 5 DDG** (Digitale-Dienste-Gesetz) und **§ 18 MStV** (Medienstaatsvertrag).

---


**Wer ist verpflichtet?**
- **Gewerbliche Nutzung (§ 5 DDG):** Alle geschäftsmäßigen Onlinedienste und Webseiten mit kommerziellem Hintergrund.
- **Redaktionelle Inhalte (§ 18 MStV):** Alle Webseiten mit journalistisch-redaktionellen Texten/Beiträgen.
- **Privat-Ausnahme:** Nur rein private/familiäre Seiten (Vorsicht: Werbeschaltung hebt die Befreiung auf).

---

> **Empfehlung:** Zur Vermeidung von Abmahnungen auch bei privaten, aber öffentlichen Seiten ein Impressum einrichten.
![bg right](../img/abmahnung.jpg)
---
**Pflichtangaben im Impressum**

- **Name & Rechtsform:** Name des Betreibers/ Gesellschaft.
- **Anschrift:** Ladungsfähige physische Adresse (keine Postfachadresse).
- **Schneller Kontakt:** E-Mail & Telefonnummer (Fax 🙂 )
- **Register:** Registergericht & Registernummer (falls eingetragen).
- **Steuern:** Umsatzsteuer-Identifikationsnummer (USt-IdNr.) oder Wirtschafts-ID.
- **Spezialangaben:** Berufsspezifische Kammerdaten, Berufsbezeichnung sowie zuständige Aufsichtsbehörde.

---
### Datenschutzerklärung

> „Ich betreibe eine kleine Seite, auf der ich für meine Familie und Freunde Inhalte zu Verfügung stelle. Benötige ich für diese private Seite eine Datenschutzerklärung?“

---

**Antwort:**
Grundsätzlich gilt: Wer eine Webseite betreibt, muss mindestens die Informationen gem. **§ 5 Abs. 1 DDG** zur Verfügung stellen und über die Verarbeitung von personenbezogenen Daten informieren. Selbst wenn keine Analyse-Tools oder Kontaktformulare eingebaut sind, erfolgt beim Aufruf der Seite eine Datenverarbeitung, da der Webserver die **IP-Adresse** des Nutzers protokolliert (Server-Logfiles). Daher ist für so gut wie jede Webseite eine Datenschutzerklärung erforderlich, um den Informationspflichten der **DSGVO** nachzukommen.

---


**Gesetzliche Grundlage:** DSGVO (EU-Datenschutz-Grundverordnung) und BDSG (Bundesdatenschutzgesetz).

- **Wann benötigt?** Praktisch immer! Sobald personenbezogene Daten verarbeitet werden.
- **Schon gewusst?** Bereits die Übermittlung und Speicherung der **IP-Adresse** in den Server-Logfiles beim Webseitenaufruf gilt als Datenverarbeitung.
- **Fazit:** Jede öffentliche Webseite braucht eine Datenschutzerklärung (Informationspflicht nach Art. 13 DSGVO).

---

**Typische Auslöser auf Webseiten**

Sobald mindestens eines der folgenden Elemente genutzt wird:
- **Kontaktformulare** (E-Mail, Name)
- **Webanalyse & Tracking** (Google Analytics, Matomo etc.)
- **Social-Media-Anbindungen** (Share-Buttons, Widgets)
- **Externe Einbindungen** (Google Fonts, YouTube-Videos, Maps)
- **Newsletter-Registrierung**
- **Cookies** (zu Marketing- oder Analysezwecken)

---
> Muss ich dann zum Anwalt???

**Im Zweifel ja!**

Aber:
Eine Datenschutzerklärung wird häufig über einen Online-Generator erzeugt:

https://datenschutz-generator.de/
https://www.e-recht24.de/muster-datenschutzerklaerung.html


---

### Cookies

**Definition:**
Textdateien, die Informationen enthalten
und im Browser gespeichert werden können.
Sie dienen der Identifikation,
dem Merken von Zuständen oder
der Analyse des Nutzerverhaltens.
![bg right](../img/cookies.jpg)

---

**Aufbau einer Cookie**
- Cookie vom Webserver an Browser
- oder im Browser von Skript (JavaScript) erzeugt
- Webserver kann bei späteren, erneuten Besuchen Cookie-Information direkt auslesen
- oder über ein Skript der Website die Cookie-Information an den Server übertragen

---
**Aufgabe von Cookies:**
- Identifizierung des Surfers (Session ID)
- Abspeichern eines Logins
- Abspeichern eines Warenkorbs
- Webtracking von Nutzern mit speziell präparierten Seiten.

---
**Brauche ich einen Cookie Warner?**

**Gesetzliche Grundlage:** **§ 25 TDDDG** (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz).

- **Nein, wenn** ausschließlich **technisch notwendige Cookies** verwendet werden (z. B. für Warenkörbe, Loginsessions, Sprachauswahl oder den Cookie-Banner selbst).
- **Ja, wenn** technisch **nicht notwendige Cookies** oder Skripte geladen werden (z. B. Tracking- & Marketing-Tools, Google Analytics, YouTube-Embeds, Google Maps).

---
**Anforderungen an ein rechtskonformes Consent-Banner**

- **Aktive Einwilligung (Opt-In):** Cookies dürfen erst nach aktiver Zustimmung des Nutzers gesetzt werden.
- **Gleichwertigkeit:** Der Button „Ablehnen“ muss auf derselben Ebene und visuell gleichwertig zum „Akzeptieren“-Button sein.
- **Keine Voreinstellungen:** Häkchen bei nicht notwendigen Diensten dürfen nicht vorab ausgefüllt sein.
- **Transparenz:** Vollständige Aufklärung über Anbieter, Zweck und Lebensdauer der gesetzten Cookies.


---

> Tipp: In Chrome können Sie unter „Einstellungen > Datenschutz und Sicherheit > Cookies und andere Websitedaten > Alle Cookies und Websitedaten“ anzeigen lassen, ob Ihr Server / Seite Cookies setzt.

