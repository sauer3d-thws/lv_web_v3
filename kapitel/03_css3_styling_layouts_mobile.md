---
marp: true
theme: thws-sts
paginate: true
header: '**Webprogrammierung** <br> THWS Modul-Nr: 6322170'
math: mathjax
footer: '[zurück zur Übersicht](../index.html)'
---

<!-- _class: titlepage -->
# Webprogrammierung: css3-Styling und Responsive Layouts

**Fachlehrer  Stefan Sauer**
**THWS Geovisualisierung**

---
<!-- _class: structural -->
# Inhaltsverzeichnis

- [Das CSS-Boxmodell](#das-css-boxmodell)
- [Fonts & Google-Fonts](#fonts-google-fonts)
- [Gestaltung mit Schrift](#gestaltung-mit-schrift)
- [Farbwerte definieren](#farbwerte-definieren)
- [Maßeinheiten in CSS festlegen](#masseinheiten-in-css-festlegen)
- [Organisation und Struktur (04)](#organisation-und-struktur-04)
- [Navigation (05)](#navigation-05)
- [CSS Experimente](#css-experimente)
- [CSS Layout](#css-layout)
- [Maik's Responsive Layout (06)](#maiks-responsive-layout-06)

---
<!-- _class: structural -->
- [Mobile First!](#mobile-first)
- [Maik`s mobile Seite mit Media Queries (07)](#maiks-mobile-seite-mit-media-queries-07)
- [Maik`s Desktop-Version (08)](#maiks-desktop-version-08)

---

## Das CSS-Boxmodell

Jedes HTML-Element wird vom Browser als rechteckige Box dargestellt.
Diese Box besteht aus vier verschachtelten Bereichen.

> Entwicklertools -> rechte Maustaste -> Inspect (inspizieren) -> Box-Model

---
<!-- _class: img-right -->
- **Content (Inhalt):** Der eigentliche Inhalt wie Text, Bilder oder andere Elemente.
- **Padding (Innenabstand):** Transparenter Bereich zwischen Inhalt und Rahmen. Erbt die Hintergrundfarbe des Elements.
- **Border (Rahmen):** Begrenzungslinie der Box, die das Padding umschließt.
- **Margin (Außenabstand):** Transparenter Abstand zum nächsten Element außerhalb der Box.

![CSS Box Model](../img/css_box_model.png)

---
<!-- _class: img-right -->
**Die Box-Dimensionen & box-sizing**

Berechnung der Gesamtbreite einer Box:

- **Entweder: content-box (Standard):**
  - `width` definiert nur die Breite des Inhalts.
  - Gesamtbreite = `width` + `2 * padding` + `2 * border`.
- **Oder: border-box (Best Practice):**
  - `width` definiert die Gesamtbreite (inkl. Padding & Border).
  - Verhindert, dass Boxen unerwartet aus dem Layout ausbrechen.

```css
* {
  box-sizing: border-box;
}
```

![Box Sizing Comparison](../img/css_box_sizing.png)

---
**Margin & Padding im Detail**

Wie steuert man Abstände im CSS?
Für beide Eigenschaften gibt es flexible Schreibweisen:

- **Eigenschaften im Uhrzeigersinn definieren:**
  - `margin: 10px;` (alle vier Seiten erhalten 10px)
  - `margin: 5px 20px;` (oben/unten: 5px, links/rechts: 20px)
  - `margin: 10px 15px 20px 25px;` (oben, rechts, unten, links)
- **Wichtige Unterschiede:**
  - **Margin (Außenabstand):**
  Kann negative Werte annehmen und kollabieren (Margins verschmelzen).
  - **Padding (Innenabstand):** Kann keine negativen Werte haben.
  Vergrößert die Hintergrundfläche und die Klickfläche von Elementen.

--- 

<!-- _class: structural -->
## Fonts & Google-Fonts

HTML ist kein Word.
Schriftarten sind nicht im Dokument eingebettet.
Das bedeutet der Browser greift auf die
lokal installierten Fonts des Clients zurück.

---

**Schriftarten im Web: Die Verfügbarkeit**

- **System-Schriftarten:**
Standardmäßig stehen nur Schriftarten zur Verfügung,
die auf dem Gerät des Betrachters lokal installiert sind.

> Welche Schriftarten kennt Ihr?
> Welche verwendet Ihr?


---

- **Problem:**
Endgeräte (PC, Mac, Smartphones, Tablets,
Smartwatches, E-Reader) haben stark
unterschiedliche Schriftarten vorinstalliert.
- **Lösung: Der Font-Stack**
  - Definition einer Prioritätenliste
  (Fallback-Liste) in CSS.
  - Der Browser liest die Liste von
  links nach rechts: Die erste verfügbare
  Schriftart wird gerendert.

![bg right:50%](../img/web_fonts_typography.png)

---
**Font-Stack:**
```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
```

> Am Ende eines Font-Stacks sollte immer eine generische Schriftart stehen


---
** Generische Schriftarten:**

- serif
- sans-serif
- monospace
- cursive
- fantasy
- system-ui

![bg right:50%](../img/generic_fonts.png)


---
**Websichere Schriftarten:**

- **Definition:**
Schriftarten, die auf fast allen Betriebssystemen
(Windows, macOS, Linux, iOS, Android)
standardmäßig vorinstalliert sind.
- **Der große Vorteil:**
Sehr hohe Wahrscheinlichkeit, dass die
Schriftart auf dem Gerät des Nutzers vorhanden ist
$\rightarrow$ keine Ladezeitverzögerung und
vollkommen DSGVO-konform.
- **Die Kehrseite:**
Die Auswahl an websicheren Schriftarten ist
sehr stark limitiert
(Gefahr von visuellem Einheitsbrei).

---

- Arial & Arial Black
- Courier New
- Georgia
- Helvetica
- Lucida Sans/Lucida Grande
- Tahoma
- Times New Roman
- Trebuchet MS
- Verdana

---

**Best Practices: Anführungszeichen & Generische Fallbacks**

- **Umgang mit Leerzeichen im Schriftnamen:**
  - **W3C-Empfehlung:** Namen mit Leerzeichen (z. B. `"Times New Roman"`, `"Tw Cen MT"`) sollten in einfache/doppelte Anführungszeichen (Quotes) gesetzt werden.
  - *Hinweis:* Moderne Browser stellen diese oft auch ohne Quotes fehlerfrei dar, dennoch bleibt es Best Practice zur Sicherung der Validität.
- **Generische Schriftfamilie am Ende:**
  - Jeder Font-Stack sollte mit einer generischen Familie (z. B. `serif`, `sans-serif`, `monospace`) enden.
  - Falls gar keine spezifische Schriftart installiert ist, wählt der Browser so die passende Standard-Kategorie des Systems.

---
**Google Fonts**

- **Was sind Google Fonts?**
  - Google Fonts ist ein kostenloser Online-Dienst
    von Google, der eine riesige Bibliothek
    an Schriftarten zum Einbinden in
    Webseiten bereitstellt.
- **Vorteile:**
  - Große Auswahl an Schriftarten
  - Einfache Einbindung
  - Kostenlos
  - DSGVO-konform (unter bestimmten
    Voraussetzungen)

![bg right:50%](../img/google-fonts.jpg)

---


> Achtung Datenschutz

- Da Google Fonts auf den Servern von Google gehostet werden, unterliegen sie deren Datenschutzrichtlinien.
- Sobald ein Nutzer eine Webseite besucht, die Google Fonts verwendet, wird eine Anfrage an die Google-Server gesendet.
- Google kann diese Anfrage protokollieren (einschließlich der IP-Adresse des Nutzers), was als Verarbeitung personenbezogener Daten gilt.
- Nach deutschem Recht (DSGVO) ist dies ohne vorherige Einwilligung des Nutzers in der Regel nicht gestattet.
- Um rechtssicher zu sein, sollten Organisationen, die Google Fonts nutzen, vorher eine informierte Einwilligung (Opt-in) von ihren Nutzern einholen oder eine selbstgehostete Alternative wählen.

**Achtung Abmahnfalle!**

---

![bg](../img/dgvo-verletzung.jpg)

---
**Alternative mit @font-face:**

Herunterladen und Einbinden der Fonts auf dem eigenen Server.

Beispiel:
```css
@font-face {
  font-family: "MeineSchriftart";
  src: url("pfad/zu/meiner-schriftart.woff2") format("woff2"),
       url("pfad/zu/meiner-schriftart.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

---
> Vorsicht! Auch Schriftarten unterliegen dem Urheberrecht.

Es ist legal z.B. .ttf Fonts auf der eigenen Domain anzubieten,
aber man darf nicht beliebige .ttf Fonts von anderen Webseiten
herunterladen und für eigene Zwecke verwenden.

---
**Woher nehmen, wenn nicht stehlen?**

**Google Fonts**
Beschreibung: Die populärste Quelle für kostenlose und Open-Source-Schriftarten. Sie bietet eine riesige Auswahl und die Schriften lassen sich einfach herunterladen, um sie DSGVO-konform selbst zu hosten.
URL: https://fonts.google.com/

**Adobe Fonts**
Beschreibung: Ein professioneller Dienst mit einer extrem hochwertigen Auswahl an kommerziellen Schriftarten. Der Zugriff ist in jedem aktiven Adobe Creative Cloud-Abonnement enthalten.
URL: https://fonts.adobe.com/

---

**Font Squirrel**
Beschreibung: Bietet ausschließlich Schriften an, die zu 100 % für die kommerzielle Nutzung lizenziert und kostenlos sind. Ein besonderes Highlight ist der integrierte Webfont-Generator, der Desktop-Schriften in Web-Formate (.woff2, .woff) umwandelt.
URL: https://www.fontsquirrel.com/

**Bunny Fonts**
Beschreibung: Eine datenschutzfreundliche Open-Source-Alternative zu Google Fonts. Sie wurde speziell so konzipiert, dass sie als direkter Ersatz (Drop-in-Replacement) dient und vollkommen DSGVO-konform ohne Nutzer-Tracking arbeitet.
URL: https://fonts.bunny.net/

---

**MyFonts**
Beschreibung: Der weltweit größte Marktplatz für kommerzielle und professionelle Schriftarten. Perfekt, wenn man für ein Projekt exklusive, kostenpflichtige Fonts namhafter Type-Designer sucht.
URL: https://www.myfonts.com/

**ffonts.net**
Beschreibung: Eine kostenlose Ressource für Designer, die eine große Auswahl an Schriftarten für ihre Projekte suchen. 
URL: https://www.ffonts.net/


---

> Beispiel
 https://www.ffonts.net/1-Punk.font

Font herunterladen und in ein Verzeichnis **fonts** neben der css und html Datei entpacken.

```
/css
/fonts
/html
/img
```

---

![bg](../img/install-a-webfont.jpg)

---

Anpassungen im css:
```
@font-face {
font-family: '1-Punk';
src:url('font/1-Punk.ttf.woff') format('woff'),
url('font/1-Punk.ttf.svg#1-Punk') format('svg'),
url('font/1-Punk.ttf.eot'), url('font/1-Punk.ttf.eot?#iefix') format('embedded-opentype'); font-weight: normal;
font-style: normal;}
und
h1{
font-size: 1.8em; font-family: '1-Punk',Georgia,"Trebuchet MS",verdana,arial,helvetica,sans-serif; }
```
---
<!-- _class: img-right-->

Aktuelle CSS-Datei

![bg right](../img/maik-03-css.jpg)

---

![bg](../img/maik-03-04.jpg)

---
<!-- _class: structural center-->
## Gestaltung mit Schrift

>Ob Bachelorarbeit, Plakat oder Webseite, Schriften werden meist nur dann wahrgenommen, wenn Sie NICHT passen.

---
<!-- _class: structural -->
**Die 10 Schriftgebote**

Regeln für professionelle Typografie und Lesbarkeit im Web.

---
<!-- _class: img-right -->
**1. Schriftgröße**

- Richtet sich nach dem grundsätzlichen Design und dem verwendeten Font.
- **Wichtig:** Nutzer können Schriftgrößen im Browser/Smartphone jederzeit individuell anpassen.
- **Best Practice:** Verwenden Sie stets relative Schriftgrößen (`%`, `em`, `rem`) statt fester Pixelwerte, um Barrierefreiheit zu sichern.

![Gebot 1](../img/gebot_1.png)

---
<!-- _class: img-right -->
**2. Zeilenbreite**

- Wird häufig unterschätzt, beeinflusst die Lesbarkeit aber massiv.
- **Optimalwert:** Maximal ca. 70 Zeichen pro Zeile (entspricht etwa einer DIN-A4-Textbreite).
- Zu breite Textblöcke erschweren dem Auge den Zeilensprung am Zeilenende.

![Gebot 2](../img/gebot_2.png)

---
<!-- _class: img-right -->
**3. Zeilenabstand**

- Der Zeilenabstand (Durchschuss) ist essenziell für die Erfassung von Textblöcken.
- **Empfehlung:** Ein Wert von `140%` bis `150%` (`line-height: 1.4` bis `1.5`) hat sich im Web etabliert.
- Zu geringer Abstand führt zum optischen Verschmelzen der Zeilen.

![Gebot 3](../img/gebot_3.png)

---
<!-- _class: img-right -->
**4. Laufweite**

- Beschreibt den horizontalen Abstand zwischen Buchstaben (`letter-spacing`).
- Sollte nur mit äußerster Vorsicht und Bedacht manupuliert werden.
- **Tipp:** Vor allem für Akzente bei Überschriften einsetzen. Im Zweifelsfall unverändert lassen.

![Gebot 4](../img/gebot_4.png)

---
<!-- _class: img-right -->
**5. Kontrast**

- Das Helligkeitsverhältnis zwischen Textfarbe und Hintergrund.
- Fließtexte erfordern maximalen Kontrast (z. B. schwarzer Text auf weißem Grund).
- Hoher Kontrast schützt das Auge vor Ermüdung und sichert Barrierefreiheit.

![Gebot 5](../img/gebot_5.png)

---
<!-- _class: img-right -->
**6. Struktur**

- Gut strukturierte Texte fördern das Verständnis und die Semantik.
- **Werkzeuge:** Überschriften-Tags (`<h1>` bis `<h3>`), Absätze (`<p>`), Listen (`<ul>`, `<ol>`) sowie gezielte Auszeichnungen (`<strong>`, `<em>`).
- Eine saubere Struktur verbessert zudem das Google-Ranking (SEO).

![Gebot 6](../img/gebot_6.png)

---
<!-- _class: img-right -->
**7. Maximal zwei Schrifttypen**

- Für ein harmonisches Gesamtbild reichen meist ein bis zwei Schrifttypen pro Dokument vollkommen aus.
- **Kombination:** Typischerweise eine Serifenschrift für Überschriften und eine Sans-Serif-Schrift für Fließtext.
- Mehr als zwei Fonts wirken unruhig und unprofessionell.

![Gebot 7](../img/gebot_7.png)

---
<!-- _class: img-right -->
**8. Versalien**

- Reine Großbuchstaben (Versalien) sind im Fließtext und in Menüs sehr schwer lesbar.
- **Ausnahme:** Kurze Wörter, z. B. in der Hauptnavigation.
- **Best Practice:** Texte normal schreiben und die Umwandlung in Großbuchstaben per CSS über `text-transform: uppercase;` steuern.

![Gebot 8](../img/gebot_8.png)

---
<!-- _class: img-right -->
**9. Standardschriften**

- Nutzen Sie bewährte Systemschriftarten als verlässlichen Fallback am Ende Ihres Font-Stacks.
- Klassiker wie *Arial*, *Verdana* oder *Georgia* sind auf fast jedem Gerät vorinstalliert.
- Dies garantiert eine saubere und schnelle Darstellung, falls Webfonts nicht geladen werden können.

![Gebot 9](../img/gebot_9.png)

---
<!-- _class: img-right -->
**10. Fortbildung**

- Typografie ist eine Kunst und ein Handwerk zugleich.
- **Tipp:** Bilden Sie sich kontinuierlich weiter – durch Fachliteratur, Workshops, Design-Magazine oder informative Lehrvideos.
- Schärfen Sie Ihr Auge durch die bewusste Analyse gelungener Web-Layouts.

![Gebot 10](../img/gebot_10.png)

---
<!-- _class: structural -->

## Farbwerte definieren


> Farben auf Computermonitoren entstehen durch die Mischung von rotem, grünem und blauem Licht. Aus diesem Grund wird das Farbsystem RGB genannt (von den englischen Bezeichnungen Red, Green und Blue).

Wie werden Farben im html & css verwendet?

---
<!-- _class: img-right -->
**1. Farbnamen (Keywords)**

- **Eigenschaften:**
  - Ignoriert Groß- und Kleinschreibung (`red` oder `Red`).
  - Sehr einfach zu merken und schnell geschrieben.
- **Einschränkung:**
  - begrenzte Palette 141 Namen


```css
h1 {
  color: tomato;
}
```


![Farbnamen](../img/color_keywords.png)

---

Liste mit allen Farbnamen:
https://wiki.selfhtml.org/wiki/Farbe/Farbangaben#Farbnamen

![bg right](../img/farbnamen.jpg)

---

<!-- _class: img-right -->
**2. RGB- und RGBA-Schreibweise**

- **RGB-Parameter:**
  - Angabe als `rgb(R, G, B)`, wobei jeder Kanal Werte von `0` (kein Licht) bis `255` (maximale Helligkeit) annehmen kann.
- **RGBA (Transparenz):**
  - Ermöglicht über den vierten Wert (`Alpha-Kanal`) eine Deckkraft-Steuerung.
  - Der Alpha-Wert reicht von `0.0` (vollständig transparent) bis `1.0` (vollständig deckend).

```css
h1 {
  color: rgba(255, 118, 117, 0.8);
}
```

![RGB und RGBA](../img/color_rgb.png)

---
<!-- _class: img-right -->
**3. Hexadezimal(Hex)-Codes** sehr häufig

- **Aufbau:**
  - Beginnt mit einem Doppelkreuz `#` plus 6 Zeichen: `#RRGGBB`.
  - Nutzt das Hexadezimalsystem (Basis 16: Ziffern `0-9` und Buchstaben `A-F`).
- **Kurzschreibweise:**
  - Kürzen auf 3 Zeichen, wenn die Paare für RGB identisch sind (`#FF0055` -> `#F05`).

```css
h1 {
  color: #ff7675;
}
```

![Hexadezimal-Schreibweise](../img/color_hex.png)

---
<!-- _class: img-right -->
**4. HSL- und HSLA-Schreibweise** (intuitiv)


- **Die Komponenten:**
  - **Hue (Farbton):** Winkel auf dem Farbkreis (`0°` bis `360°`). `0` = Rot, `120` = Grün, `240` = Blau.
  - **Saturation (Sättigung):** Anteil an Grauwerten (`0%` bis `100%`).
  - **Lightness (Helligkeit):** Helligkeit (`0%` = Schwarz, `100%` = Weiß).
- **Vorteil:** Designer können Farbpaletten extrem einfach manipulieren (z. B. durch Erhöhung der Helligkeit).

```css
h1 {
  color: hsl(197, 100%, 50%);
}
```

![HSL und HSLA](../img/color_hsl.png)

---
<!-- _class: structural -->
## Maßeinheiten in CSS festlegen

Zur Angabe von Höhen, Breiten, Innen- und Außenabständen müssen Sie in CSS einen Wert und eine Maßeinheit angeben.

---
<!-- _class: img-right -->
**Absolute Maßeinheiten**

Absolute Werte: kein Bezug zu anderen Angaben, unabhängig von der Umgebung.

- **Pixel (px):** Standard im Webdesign
  - Entspricht  Bildpunkten des Monitors
- **Physische Maßeinheiten:**
  - **pt (Punkt):** Typograf. Maß (1/72 Inch).
  - **in (Inch), cm (Zentimeter), mm (Millimeter).**
  - *Wichtig:* Physische Einheiten sind nur für **Druck-Stylesheets** (`@media print`) geeignet, da Bildschirme zu ungenau sind.

![Absolute Einheiten](../img/css_units_absolute.png)

---
<!-- _class: img-right -->
**Relative Maßeinheiten: em & rem**

Relative Einheiten skalieren dynamisch und stehen immer in Bezug zu anderen Werten, meist Schriftgrößen:

- **em (Element-relativ):**
  - Bezieht sich auf die Schriftgröße des **Elternelements**.
  - `1em` entspricht der vererbten Schriftgröße.
  - *Problem:* Kann sich kaskadierend verschachteln (Multiplikations-Effekt bei verschachtelten Listen).


![em und rem](../img/css_units_em_rem.png)

---
<!-- _class: img-right -->
**Beispiel: Der em-Multiplikations-Effekt**

Wenn verschachtelte Listen (`<ul>`) relative `em`-Schriftgrößen verwenden, multipliziert sich der Wert auf jeder Ebene des DOM-Baums:

- **Ebene 1 (Basis 16px):** `1.5em` $\rightarrow$ **24px**
- **Ebene 2 (verschachtelt):** `1.5 * 24px` $\rightarrow$ **36px**
- **Ebene 3 (tief verschachtelt):** `1.5 * 36px` $\rightarrow$ **54px**
- **Das Ergebnis:** Der Text wächst unkontrolliert an (Faktor `3.375`).

![em kaskadierend](../img/css_em_multiplication.png)

---

- **rem (Root-em):**
  - Bezieht sich immer auf die Schriftgröße
  des **html-Wurzelelements** (standardmäßig 16px).
  - Verhindert unerwünschte Skalierungs-Effekte
  in tiefen Dokumentstrukturen.



---
<!-- _class: img-right -->
**Relative Maßeinheiten: Viewport**

Viewport-Einheiten beziehen sich direkt auf die aktuellen Dimensionen des Browser-Fensters:

- **vw (Viewport Width):**
  - `1vw` entspricht 1% der Viewport-Breite.
- **vh (Viewport Height):**
  - `1vh` entspricht 1% der Viewport-Höhe
  (ideal für bildschirmfüllende Hero-Sektionen).

![Viewport-Einheiten](../img/css_units_viewport.png)

---

<!-- _class: img-right -->
**Viewport-Grenzbereiche: vmin & vmax**

- **vmin (Viewport Minimum):**
  - Nutzt den Prozentwert der jeweils kürzeren Viewport-Seite (Breite im Hochformat, Höhe im Querformat).
- **vmax (Viewport Maximum):**
  - Nutzt den Prozentwert der jeweils längeren Viewport-Seite.
- **Vorteil:**
  - Ermöglicht proportionales Skalieren bei Orientierungswechseln auf Mobilgeräten.

![vmin und vmax](../img/css_units_vmin_vmax.png)



---
<!-- _class: img-right -->
**Prozent (%) & Best Practices**

- **Prozentwert (%):**
  - **Layouts (Breiten/Höhen):** Bezieht sich auf umschließenden Container (z. B. Bild `width: 50%` in einer `600px` Box ist `300px` breit).
  - **Schriftgrößen:** Bezieht sich auf die vererbte Schriftgröße des Elternelements (75% bei 16px = 12px).

![Prozent und Best Practices](../img/css_units_best_practices.png)

---

- **Best Practices:**
  - **Schriftgrößen:** bevorzugt **rem** nutzen > Browser ermöglicht Barrierefreiheit durch Skalieren.
  - **Layout-Raster:** Verwenden Sie **Prozent (%)** oder **Flexbox/Grid**.
  - **Rahmen:** Nutzen Sie **px** für absolute Randschärfe.



---
<!-- _class: structural img-right -->
## Organisation und Struktur (04)
- Ordner und Dateien benennen
- Referenzieren in html
- Chaos im Code
- Stylesheets mit Kommentaren versehen
- Selektoren im Allgemeinen und Speziellen

![bg right](../img/Ordnung-im-Chaos.jpeg)

---
<!-- _class: img-right -->

### Ordnerstruktur für Webprojekte

Für Übersicht und fehlerfreie Verlinkung ist eine saubere Struktur im **Wurzelverzeichnis (Root)** essenziell:

- **index.html (Startseite):** Muss direkt im Stammverzeichnis liegen (darf nicht in Unterordnern platziert werden).
![bg right](../img/ordnerstruktur.jpg)
- Startseite muss (fast) immer index.html heißen

---
<!-- _class: img-right -->

**Warum fast immer?**

Server sucht automatisch im angeforderten Verzeichnis nach  `index.html`.

Der Webserver kann aber auch so konfiguriert werden, dass er nach einer anderen Datei sucht:
- httpd.conf öffnen &  "DirectoryIndex" suchen
- kann umkonfiguriert werden, dass page.php die Startseite ist

> Standard ist aber index.html

![alt text](../img/httpdconf.jpg)

---

- **Sinnvolle Unterordner zur Organisation:**
  - `css/` – Stylesheets (z. B. `style.css`)
  - `img/` – Alle Bilder und Grafikdateien
  - `font/` – Lokale Schriftarten (z. B. `1-Punk.ttf`)
  - `html/` – Weitere Unterseiten der Webpräsenz
- **Vorteil:** Erleichtert das Referenzieren relativer Pfade und vermeidet Chaos bei wachsenden Projekten.


---
### Datei- und Ordner-Benennung

Webserver (meist UNIX-basiert) unterscheiden strikt zwischen Groß- und Kleinschreibung. Befolgen Sie daher stets diese Konventionen:

| Konvention | Beschreibung | Richtig vs. Falsch |
| :--- | :--- | :--- |
| **Kleinschreibung** | Dateinamen immer komplett klein schreiben. | `index.html` $\leftrightarrow$ `Index.HTML` |
| **Keine Umlaute** | Umlaute umschreiben (`ae`, `oe`, `ue`). | `ueber-uns.html` $\leftrightarrow$ `über-uns.html` |
| **Keine Sonderzeichen** | Keine Zeichen wie `ß`, `=`, `@`, `%` oder `_`. | `fuss.html` $\leftrightarrow$ `fuß.html` |
| **Keine Leerzeichen** | Worttrennung per Bindestrich `-` oder camelCase. | `kontakt-formular.html` $\leftrightarrow$ `kontakt formular.html` |

---
<!-- _class: img-right -->

### Referenzieren in HTML: Relative Pfade

Relative Pfade beziehen sich auf die Position der aktuellen HTML-Datei.
Sie sind ideal für die interne Verlinkung einer Website.

> Relative Pfade beziehen sich
IMMER auf die eigene Position! Wobei ICH die Datei bin, in der ich mich gerade befinde.
![bg right](../img/pfade.jpg)

---

- **Gleiches Verzeichnis:**
  * Die Zieldatei liegt im selben Ordner wie das HTML-Dokument.
  * Code: `<img src="header.jpg" alt="Maiks Service">`
- **Unterverzeichnis (Abwärts navigieren):**
  * Die Zieldatei liegt in einem Unterordner (z. B. `img/`).
  * Code: `<img src="img/header.jpg" alt="Maiks Service">`

---

- **Übergeordnetes Verzeichnis (Aufwärts navigieren):**
  * Mit `../` springen Sie in der Ordnerstruktur eine Ebene höher.
  * Mehrere Ebenen überspringen Sie mit `../../`.
  * Code: `<img src="../img/header.jpg" alt="...">`
- **Absolute Pfadangabe relativ zur Basis-URI:**
  * Beginnt mit `/` (Slash) und geht vom Hauptverzeichnis (Root) des Webservers aus.
  * Code: `<img src="/img/header.jpg" alt="...">`
  * *Hinweis:** Sollte bei lokaler Entwicklung vermieden werden, da oft Pfadfehler entstehen.



---
<!-- _class: img-right -->

### Referenzieren in HTML: Absolute Pfade

Absolute Pfade existieren systemweit nur ein einziges Mal und sind eindeutig.

> Absolute Pfade haben keinen Bezug zur eigenen Position. Sie beziehen sich immer eine absolute, systemweit erreichbare Adresse!!

![bg right](../img/absolute-pfade.jpg)

---

- **Externe Quellen im WWW:**
  * Verwendung für Links auf fremde Websites oder externe Ressourcen.
  * Erfordert immer die Angabe des Protokolls (`http` oder `https`) und die vollständige Domain:
  * Code: `<a href="https://www.maiks-service.de">Maiks Website</a>`
- **Lokale absolute Pfade (Windows):**
  * Dateipfade mit Laufwerksbuchstabe, z. B. `C:\Projekte\img\header.jpg`.
  * **Achtung:** Ungeeignet für Webseiten! Diese Pfade existieren auf den Computern der Webseitenbesucher nicht.

---
<!-- _class: small-text -->

### Wiederholung: HTTP vs. HTTPS

Netzwerkprotokolle regeln die Kommunikation zwischen Browser und Webserver:

- **HTTP (Hypertext Transfer Protocol):**
  * Datenübertragung erfolgt im Klartext.
  * **Gefahr:** Passwörter, Logins und Formulardaten können leicht abgehört oder manipuliert werden.
- **HTTPS (Hypertext Transfer Protocol Secure):**
  * Verschlüsselte Verbindung mittels **TLS/SSL**.
  * Bietet Server-Authentifizierung und Schutz vor Datenmanipulation.
- **Vorteile von HTTPS:**
  * **Sicherheit & Vertrauen:** Pflicht bei Zahlungs- und Formulardaten.
  * **SEO-Vorteil:** Google wertet HTTPS als positives Ranking-Signal.
  * **Browser-Hinweise:** Browser markieren HTTP-Seiten als "nicht sicher".

---
<!-- _class: img-right -->

### Block- und Inline-Elemente

HTML unterscheidet im Textfluss grundlegend zwei Arten von Elementen
- Blockbildende Elemente
- Inline-Elemente


![Block vs Inline](../img/block_inline_elements.png)

---

- **Block-Elemente:**
  * Erzeugen automatisch eine neue Zeile und nehmen die volle verfügbare Breite ein.
  * *Beispiele:* `<p>`, `<h1>`–`<h6>`, `<ul>`, `<div>`, `<table>`.
- **Inline-Elemente:**
  * Bleiben im normalen Textfluss (keine neue Zeile) und sind nur so breit wie ihr Inhalt.
  * *Beispiele:* `<a>`, `<strong>`, `<em>`, `<span>`, `<img>`.
> Elemente immer nach ihrer semantischen Bedeutung nutzen, nicht nach ihrem Standard-Aussehen.



---
<!-- _class: img-right -->

### Semantische Seitenstruktur

HTML5 führt spezifische Strukturelemente ein, um Bereichen eine klare logische Bedeutung zu geben:

![HTML5 Semantik](../img/html5_semantic_layout.png)

---

- **`<header>` & `<footer>`:** Kopf- und Fußbereiche von Seiten oder Artikeln.
- **`<nav>`:** Navigationsbereich (Haupt- und Subnavigation).
- **`<main>`:** Umschließt den einzigartigen Hauptinhalt einer Webseite.
- **`<section>` & `<article>`:**
  * `section` definiert thematische Abschnitte (z. B. Kapitel).
  * `article` steht für in sich geschlossene, eigenständige Inhalte.
- **`<aside>`:** Randspalten für Zusatzinfos, Werbung oder Verweise.


---
<!-- _class: img-right -->

### Strukturelemente ohne Semantik

Für rein gestalterische Gruppierungen (z. B. Styling oder Layout-Wrapper) existieren neutrale Container.

> Wenn keine semantische Bedeutung gewünscht, erforderlich oder erkennbar ist > SPAN und DIV

![Div & Span](../img/div_span_no_semantics.png)

---


- **`<div>` (Division):**
  * Block-Element. Gruppiert Block-Elemente, Bilder oder Tabellen.
  * Dient meist als Layout-Grid-Container.
- **`<span>`:**
  * Inline-Element. Gruppiert Wörter, Phrasen oder Inline-elemente direkt im Fließtext.
- **Best Practice:** Wrapper-Divs vermeiden („Div-Suppe“). CSS-Regeln bevorzugt direkt den semantischen Tags zuweisen.



---
<!-- _class: img-right -->

### Kommentare in HTML und CSS

Kommentare dokumentieren den Quellcode für Entwickler und helfen bei der Fehlersuche. Sie werden vom Browser ignoriert.

> Lässt man sich Code von einer KI entwickeln, kann man sich in den Kommentaren den Code erklären lassen :)

![Kommentare](../img/code_comments.png)

---

- **HTML-Kommentare:**
  * Syntax: `<!-- Kommentartext -->`
  * *Einsatz:* Strukturierung von Abschnitten, temporäres Deaktivieren von Code zur Fehlersuche.
- **CSS-Kommentare:**
  * Syntax: `/* Kommentartext */`
  * *Einsatz:* Gliederung des Stylesheets (z. B. Header, Navigation, Footer-Styles).
- **Tipp:** Kommentare nutzen, um unübersichtlichen Code-Bereichen klare Start- und Endpunkte zu geben.

---

**Ergänzen des Quellcodes mit den semantisch
richtigen HTML5 Elementen**

- header
- nav
- article
- footer

> Auch wenn sich die Seite dadurch optisch kaum verändert hat, ist sie jetzt für Suchmaschinen deutlich besser lesbar geworden.

![bg right:50%](../img/maik-04-code.jpg)

---
<!-- _class: structural -->

## Navigation (05)
- Hauptnavigation
- Subnavigation
- Große Bilder
- Email Links

![bg right:50%](../img/netz.jpeg)

---
<!-- _class: img-right -->

### Die Macht der Vernetzung: Hyperlinks

Hyperlinks sind das Herzstück des WWW. Sie verknüpfen isolierte Seiten zu einem weltweiten Informationsnetz:

> **Entstehung des Netzes:** Erst durch Verknüpfung entsteht das Internet. Inhalte leben davon, vernetzt zu sein.

![Hyperlinks](../img/hyperlinks_net.png)

---

- **Keine Angst vor ausgehenden Links:**
  * Surfer kann man nicht festhalten – sie kommen zurück,
  wenn der Inhalt durch Qualität überzeugt!
- **Das Google-Prinzip:**
  * Suchmaschinen und Besucher finden Seiten über Links.
  * Eine Seite mit wenigen Verknüpfungen rankt niedriger als eine, die „mitten im Netz“ steht.

---

> Macht KI das Web kaputt?
Was ist Eure Meinung...


---
<!-- _class: img-right -->

### Hauptnavigation & Nutzerführung

Links sind neben Inhalt und Design das stärkste Instrument zur Benutzerführung
urch die Anordnung und Präsentation von Links wird aktiv gesteuert, wie sich Besucher durch die Seiten bewegen.

- Rückgrat der Website-Informationsarchitektur
- Dient dem Erschließen der gesamten Inhalte
- Muss die geplante Struktur der Site direkt widerspiegeln

![Hauptnavigation](../img/navigation_user_guidance.png)

---


### Hyperlinks in HTML: Syntax & Best Practices

Ein Link verbindet Dokumente im Web. In HTML wird dafür das Anchor-Tag (`<a>`) genutzt:

- **Syntax:** `<a href="Linkziel">Linktext</a>`
- **Sprechende Linktexte:**
  * Beschreibt Linkziel klar, damit Besucher und Suchmaschinen sofort wissen, was sich dahinter verbirgt.
  * *Schlecht:* „Hier klicken“, „Weiter“, „Zurück“.
  * *Gut:* „Unser Service-Angebot“, „Aktueller Wetterbericht“.


---
<!-- _class: img-right small-text -->

- **Die target="_blank" Kontroverse:**
  * Zwingt den Browser, den Link in einem neuen Tab/Fenster zu öffnen.
  * **Kritik:** Schränkt die Benutzerkontrolle ein (Browser-Voreinstellung wird übergangen).
- Lasst lieber die Entscheidung, ob der Link in einem neuen Tab oder Fenster geöffnet werden soll, beim Nutzer, indem ihr dieses Attribut weglasst.

![Link Syntax](../img/hyperlink_syntax.png)

---
### Aufbau einer URL

`<a href="http://www.wetter.com">Wetterinfo</a>`



> Eine URL kann durchaus beliebig komplex werden,
besteht jedoch immer aus denselben Bestandteilen:

![bg](../img/url.jpg)

---
### Relative Links erstellen

Die Hauptnavigation führt in der Regel zu Dokumenten des eigenen Webauftritts.
Wir ergänzen daher auf unserer Startseite folgenden Code


```html
<nav>
  <!-- Hier kommt später unsere Navigation rein -->
  <ul>
    <li><a href="index.html">Heyhoo!</a></li>
    <li><a href="html/dienstleistungen.html">What I do for YOU!</a></li>
    <li><a href="html/mobiles-Leben-im-LKW.html">LKW @home</a></li>
    <li><a href="html/reisen.html">UNTERwegs</a></li>
    <li><a href="html/tauchen.html">UNTERwasser</a></li>
    <li><a href="html/kontakt.html">...DU zu MIR</a></li>
  </ul>
</nav>
```

---
<!-- _class: img-right-->


> Ein Klick auf einen der Links produziert aktuell jedoch noch einen sogenannten **404**


- Fehlermeldung, die der Webserver ausgibt, wenn das Linkziel nicht gefunden wurde.
- Fehlermeldungen sind auf dem Webserver konfigurierbar
- Webserver erwartet unter dem Link
„LKW @home“ eine Webseite mit dem Namen „mobiles-Leben-im-LKW.html“ im Unterordner „html“.

![bg right:50%](../img/404.jpg)

---

###### aktueller Stand

![bg](../img/maik-05.jpg)

---
<!-- _class: structural -->
## CSS Experimente

Aktuell sieht die Webseite noch nicht besonders schick aus. Das werden wir jetzt gemeinsam ändern, indem wir uns die Styling-Möglichkeiten von CSS ansehen.

1. Wir verschaffen uns einen Überblick über die Stylingmöglichkeiten des jeweiligen Themas
2. Wir probieren die Stylingmöglichkeiten gemeinsam aus (Hands on)
3. Wir arbeiten uns zurück zu Maiks Website und ergänzen die Stylingmöglichkeiten nach und nach in die vorhandene Struktur ein.

---
<!-- _class: img-right-->
### Selektoren im Allgemeinen und Speziellen


**allgemeine Syntax**
- Eigenschaft: Wert;
- Eigenschaft = Eigenschaft, die angesprochen wird
- Wert = Wert, der zugewiesen wird
- Semikolon = Trennzeichen zwischen den Eigenschaften
- Letzte Deklaration kann ohne Semikolon geschriebenwerden,
gilt jedoch als guter Stil.

![bg right:50%](../img/css_syntax_de.png)

---

**Unser Testfeld:**
Der Bachelor of Harz
- Definition eines Style Bereiches
- Styles immer im Head
- Kommentarbereiche im Style mit /* xyz */

![bg right:50%](../img/css-code.jpg)

---
<!-- _class: small-text-->

**Element- oder Typ-Selektoren**
- Selektor = Name des Elements, das angesprochen werden soll
- Alle Elemente eines Typs werden angesprochen
- **Keine Präfixe**: Werden direkt als HTML-Tag-Name geschrieben (ohne `.` oder `#`, z. B. `p`, `h1`, `body`).
- **Globale Wirkung**: Betrifft *alle* Vorkommen dieses Elements auf der gesamten Webseite. Ideal für allgemeine Standards (z. B. Schriftart auf `body`).
- **Geringe Spezifität**: Besitzen eine sehr niedrige Gewichtung (Spezifität = 1) und lassen sich leicht durch Klassen oder IDs überschreiben.
- **Gruppierung**: Können per Komma kombiniert werden (z. B. `h1, h2, h3 { ... }`), um redundanten Code zu vermeiden.


```css
p {color: red;}
```

---
<!-- _class: small-text-->
**Klassenselektoren**
- Selektor ist das CSS class Attribut
- frei wählbarer Name (ohne Leerzeichen, Umlaute, etc.)
- Kann mehrmals auf der Seite verwendet werden
- Kann auch mit Element Selektoren kombiniert werden
- Selektor wird in CSS mit einem Punkt (.) versehen

```html
<h2 class="meineKlasse">Bachelor of Hartz</h2>
```
```css
.meineKlasse { color: green; }
```

---
<!-- _class: small-text-->

**Kombination von Typ- und Klassen- Selektoren**

```html
<p class="meineKlasse">
Genug Zeit totgeschlagen, wie ein lahmerGaul<br>
Dumm biste nicht, nur einfach stinke faul<br>
...
```
```css
p.meineKlasse {font-style:italic;}
```
oder auch
```html
<p class="meinezweiteKlasse">
Einfach mal zu Hause bleiben<br>
...
```


```css
.meinezweiteKlasse {background-color: yellow;}
```

---
<!-- _class: small-text-->
**Kombination von Klassen**

- Klassen lassen sich miteinander kombinieren
- beide Klassen mit Leerzeichen angeben

```html
<h2 class="meineKlasse undnocheineKlasse">Bachelor of Hartz</h2>
```

```css
.undnocheineKlasse {background-color: red;}
```

---
<!-- _class: small-text-->
**Kombinierte Style-Angaben**

- gleichzeitiges Gestalten mehrerer Klassen & Elemente
- Selektoren mit Kommata trennen

```html
<h1>Blindtext.</h1>
```

```css
.undnocheineKlasse, h1 {background-color: red;}
```

---
<!-- _class: small-text-->

**DIVs & Klassen**

- $\text{<div>}$ ist das Allzweckwerkzeug der Web-Entwicklung
- &nbsp;&nbsp; flexibler Container für beliebige Inhalte
- &nbsp;&nbsp; keine eigene semantische Bedeutung
- &nbsp;&nbsp; ideal für Gruppierungen & Layouts

```html
<div class="einedivKlasse">
  <p>
    16 Semester alles mal probiert<br>
    8 Jahre lang einfach irgendwas studiert<br>
    Sonderpädagogik und Ethnologie<br>
    Wirtschaftsethik und Lexikografie
  </p>
</div>
```

```css
div.einedivKlasse {
   background-color:lightgrey;
   padding: 20px;
}
```



---
<!-- _class: structural -->
## CSS Layout

### Konzepte, Typen & Moderne Techniken


- **Verständnis** der klassischen Layout-Typen (Fixed, Fluid, Elastic)
- **Unterscheidung** von Adaptive vs. Responsive Webdesign
- **Einsatzszenarien**: Wann setzt man was ein?
- **Moderne Werkzeuge**: Flexbox und Grid-Layout im Überblick

---

### Was ist CSS-Layout?

Das Layout bestimmt, wie Elemente auf einer Webseite angeordnet werden und wie sie auf unterschiedliche Bildschirmgrößen (Viewports) reagieren.

#### Klassische Unterteilung:
1. **Fixed** Layout
2. **Fluid** Layout
3. **Elastic** Layout

Diese Begriffe beschreiben vor allem das *Verhalten* des Layouts bei Größenänderungen des Browserfensters.

---

<!-- _class: img-right -->

### Fixed Layout (Starr)

Das Layout hat **feste Abmessungen**, meist definiert in Pixeln (`px`).

- **Verhalten:** Die Breite ändert sich nicht, egal wie groß der Bildschirm ist.
- Ist der Bildschirm kleiner, erscheint ein Scrollbalken. Ist er größer, entsteht ungenutzter Leerraum.
- **Heute:** Wird fast nicht mehr für ganze Seiten verwendet, höchstens noch für spezifische UI-Komponenten.

![Fixed Layout](../img/fixed_layout.png)

###### **Quellen:** [MDN Layout Modes](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout), [Smashing Magazine](https://www.smashingmagazine.com/2009/04/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/)

---

<!-- _class: img-right -->

### Fluid Layout (Flüssig)

Das Layout nutzt **relative Einheiten**, meist Prozentwerte (`%`) in der Breite, in der Länge können feste Pixelwerte verwendet werden -> Vertikales Scrollen.

- **Verhalten:** Die Elemente dehnen sich aus oder schrumpfen proportional zur Fensterbreite.
- Es füllt immer den verfügbaren Platz aus.
- **Heute:** Ein sehr wichtiger und grundlegender Baustein für Responsive Webdesign.

![Fluid](../img/fluid_layout.png)

###### **Quellen:** [MDN CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

---

<!-- _class: img-right -->

### Elastic Layout (Elastisch)

Das Layout basiert auf der **Schriftgröße**, definiert in Einheiten wie `em` oder `rem`.

- Bleibt proportional zum Text lesbar, auch wenn der Nutzer den Text im Browser vergrößert.
- Ausgezeichnet für Barrierefreiheit (Accessibility).
- Schwer zu gestalten


![Elastic](../img/elastic_layout.png)

---
<!-- _class: structural -->
### Adaptive vs. Responsive 


Zwei grundlegend unterschiedliche Konzepte im Webdesign.

---
<!-- _class: img-right small-text -->

**Responsive Webdesign (RWD):**
- Ein **einziges, flüssiges Layout**, mit Media Queries
- nutzt Fluid Grids und flexible Bilder.
- Webseite skaliert auf alle Bildschirmgrößen
- Einziges Layout für alle Geräte



**Adaptive Webdesign (AWD):**
- **Mehrere feste Layouts** für spezifische Breakpoints (z. B. Mobile, Tablet, Desktop).
- Server oder Client entscheidet über das Layout
- *Maßgeschneidert pro Gerät.*

![Devices](../img/responsive_devices.png)

###### **Quellen:** [CSS-Tricks: Responsive vs. Adaptive](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)

---

### Wann setzt man was ein?

#### Responsive Design (Der Standard)
- Für **Neuentwicklungen** und die allermeisten modernen Websites.
- Besser wartbar (nur eine Codebase) und zukunftssicher (passt auch für unbekannte Zwischengrößen von Displays).

#### Adaptive Design (Der Spezialist)
- Wenn Mobile-Nutzer eine **völlig andere User Experience** oder stark reduzierte Funktionen brauchen (Performance!).
- Um sehr alte, starre Seiten für Mobile nutzbar zu machen, ohne sie von Grund auf komplett neu zu schreiben.

---

<!-- _class: structural -->

### Moderne CSS Layout-Techniken
#### Flexbox und CSS Grid

---

<!-- _class: img-right -->

### Flexbox 

Flexbox (Flexible Box Layout) ist ein **eindimensionales** Layout-Modell (Zeile *oder* Spalte).

- Ideal, um Platz zwischen Elementen zu verteilen und sie auszurichten (endlich einfaches Zentrieren!).
- Reagiert dynamisch auf den verfügbaren Platz.
- Perfekt für UI-Komponenten, Navigationen und Toolbars.

![Flexbox](../img/flexbox_layout.png)

###### **Quellen:** [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox), [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

<!-- _class: img-right -->

### CSS Grid 

Grid ist ein **zweidimensionales** Layout-Modell (Zeilen *und* Spalten gleichzeitig).

- Das mächtigste Werkzeug für komplexe Seitenstrukturen in CSS.
- Ermöglicht das exakte Platzieren von Elementen auf einem Raster.
- Deutlich strikter und strukturierter als Flexbox.

![Grid](../img/grid_layout.png)

###### **Quellen:** [MDN: Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids), [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

<!-- _class: structural -->

### Zusammenfassung

1. **Fixed, Fluid, Elastic:** Historische und konzeptionelle Begriffe für Layout-Verhalten.
2. **Responsive Webdesign:** Der moderne Standard (ein flüssiger Code für alle Größen).
3. **Adaptive Webdesign:** Feste, gerätespezifische Layouts für spezielle Use Cases.
4. **Flexbox:** Eindimensional, perfekt für die Ausrichtung von Elementen in einer Reihe.
5. **Grid:** Zweidimensional, ideal für das grobe und feine Seitenlayout.

---

<!-- _class: end -->

### Fragen?

> "The web is inherently responsive. We just keep breaking it with fixed pixels."
> — *John Allsopp (A Dao of Web Design)*

---
<!-- _class: structural -->
### Code-Beispiele
- Fixed layout
- Responsive Fluid Layout
- Elastic Layout
- Flexbox Layout
- Grid Layout

---

<!-- _class: img-right -->
#### **Fixed Layout**
- Feste Breitenangaben in absoluten Pixeln (`px`)
- Layout passt sich **nicht** an den Bildschirm an
- Führt bei kleinen Bildschirmen zu horizontalen Scrollbalken

[Code-Beispiel ansehen](Samples/Layout/fixed.html)

![bg right:50%](../img/screenshot_fixed.png)

---

<!-- _class: img-right -->
#### **Responsive Fluid Layout**
- Breitenangaben in relativen Prozentwerten (`%`)
- Layout fließt und füllt den Viewport flexibel aus
- Zentrale Grundlage für modernes Responsive Design

[Code-Beispiel ansehen](Samples/Layout/fluid.html)

![bg right:50%](../img/screenshot_fluid.png)

---

<!-- _class: img-right -->
#### **Elastic Layout**
- Größen skalieren mit der gewählten Schriftgröße (`em` / `rem`)
- Layout wächst proportional, wenn der Nutzer die Schrift vergrößert (Strg. + Mausrad)
- Sehr gut für Barrierefreiheit, jedoch komplexer im Design

[Code-Beispiel ansehen](Samples/Layout/elastic.html)

![bg right:50%](../img/screenshot_elastic.png)

---

<!-- _class: img-right -->
#### **Flexbox Layout**
- Eindimensionales Verteilungssystem (Zeile *oder* Spalte)
- Boxen verteilen den verfügbaren Platz dynamisch (z.B. `flex: 1`)
- Ideal zur Ausrichtung von Elementen und UI-Komponenten

[Code-Beispiel ansehen](Samples/Layout/flexbox.html)

![bg right:50%](../img/screenshot_flexbox.png)

---

<!-- _class: img-right -->
#### **Grid Layout**
- Zweidimensionales Rastersystem (Zeilen *und* Spalten gleichzeitig)
- Elemente lassen sich exakt auf vordefinierten Spuren platzieren
- Das mächtigste CSS-Werkzeug für das strukturelle Seitenlayout

[Code-Beispiel ansehen](Samples/Layout/grid.html)

![bg right:50%](../img/screenshot_grid.png)---


---
<!-- _class: structural -->

## Maik's Responsive Layout (06)

- klassisches Zweispalten Layout
- Header & Footer
- Navigationsbar links
- Content-Bereich wird durch
umschließenden Bereich begrenzt




![bg right](../img/maiks-layout.jpg)

---
<!-- _class: twocolumns -->
#### Wrapper und body (06a)
- Wrapper fasst den gesamten Inhalt zusammen
- bildet einen Rahmen um das layout
- begrenzt maximale breite auf einen definierten Wert
- zentriert das layout auf der seite
- keine semantische Bedeutung, daher DIV

in index.html ist der wrapper das div-Element mit der id="wrapper"

```html
<body>
<!-- Sichtbarer Dokumentinhalt im body -->
<div id="wrapper">
<header>
....
</footer>
</div>
</body>
```

---
<!-- _class: twocolumns -->


- weißer Hintergrund
- schwarzer text
- Breite 80 % des Bildschirms
- Maximalbreite 1600 px, damit der Inhalt auf großen Monitoren nicht zu breit wird.
- Ränder oben 0 px und seitlich automatisch gleich breit

Wir ergänzen im css:
```css
#wrapper {
background-color: #FFFFFF;
color: #000000;
margin: 0 auto;
padding: 0px;
width: 80%; max-width: 1600px;
}
```

---
<!-- _class: fullscreen -->

![bg](../img/06a.jpg)

---
<!-- _class: twocolumns -->
#### Ein neuer Header
- Wrapper funktioniert
- Bild weigert sich im Container zu bleiben
- h1 soll in den Header
- Bild aus dem Header entfernen
- Bild wird über das css geladen

```html

<header>
<div id="h1container"><h1>
  Maik`s mobiler Service</h1></div>
</header>

```

---
<!-- _class: twocolumns -->
##### im css


- Außenabstand des headers von 0 Pixeln
- Innenabstand von 10px nach oben, damit Überschrift nicht am oberen Rand klebt
- Laden des Header-Bildes als background-Image
- keine Wiederholung des Bildes
- Bild wird an die breite des umgebenden Elements angepasst
- Hintergrundfarbe für den Fall, dass das Bild nicht geladen werden kann
- Minimale Höhe des Headers von 360 Pixeln

```css
header {
margin: 0px;
padding-top: 10px;
background:url(../img/header.jpg) no-repeat;
background-size: cover;
background-color: #eef1f0;
min-height: 360px;
}

```

---
<!-- _class: twocolumns -->
##### weitere css Anpassungen
- zur besseren Integration der h1
- Entfernen des grauen Hintergundes bei der h1
- Nur bei h2 grauer Hintergrund
- h1container wird rechts ausgerichtet

```css
h1, h2 { display: inline;
color: #FFFFFF ;
font-family: "Trebuchet MS", ...
font-size: 1.4em;
text-align: left;
margin: 0px;
padding: 2px}

h1{font-size: 1.8em;
font-family: '1-Punk',...
color: #138492;
margin-right: 30px;}

h2{ background-color: #303030;}

#h1container {text-align: right;}
```

---
<!-- _class: fullscreen -->

![bg](../img/06b.jpg)

---
<!-- _class: twocolumns -->
#### Der Body
- Content und Body sollen sich abheben
- Einfügen eines schwarzen Hintergrundes
- css Reset des Bodys

```css
body {
font-family: tahoma,arial,helvetica,verdana,sans-serif;
margin: 0px;
padding: 0;
background-color: #000000; }

```

---
<!-- _class: fullscreen -->

![bg](../img/06c.jpg)

---
<!-- _class: twocolumns -->
#### Ein Zweispalter
- Nutzung von html5-Tags
- aside für Seitenspalte mit Menü
- main-tag für die


```html
<div id="body" class="col-1">
<aside>
  <nav>
    <!-- Hier kommt später unsere Navigation rein -->
    ...
  </nav>
</aside>
```

```html
<main>
  <article>
    <h2>Mobiles Leben und Arbeiten</h2>
    ....
  </article>
</main>
```
---
<!-- _class: twocolumns -->
#### Im css

- feste Breite von 220px (erwartbare Textlänge)
- float > Element wird nach links gerückt
- Umfließen durch nachfolgende Elemente
- main-Container wird als Block in eine Rechteck gezwungen
- fester Abstand nach links wegen nav

```css
/*Navigation*/
aside {
  float: left;
  width: 220px;
  padding: 0px 0px 0px 20px;
  margin: 20px 0px 0px 0px;}
```
```css
/*Hauptinhalt*/
main {
  padding: 10px;
  margin: 20px 0px 0px 250px;
  display: block;
}
```

---
<!-- _class: fullscreen -->

![bg](../img/06d.jpg)

---
<!-- _class: twocolumns -->
#### Der Footer
- weißer Text
- auf grauem Grund
- im Punk-Style
- zentriert

```css
/* und unten der Footer */
footer { color: #ffffff;
font-family: '1-Punk',Georgia,"Trebuchet MS"
verdana,arial
helvetica,sans-serif;
background-color: #303030;
margin: 20px 0px 0px 0px;
padding: 10px 20px;
text-align: center; font-size: 0.8em;
}
```
---
<!-- _class: fullscreen -->

![bg](../img/06e.jpg)

---

<!-- _class: twocolumns -->
#### Die vertikale Navigation
- Listenabstände / Bullets reseten
- Hintergrund weiß, text schwarz bei normalen Links
- Beim Hovern helle Schrift auf dunklem Grund



```css
nav ul {
  padding: 0;
  margin-top: 7px; list-style: none;
}
nav ul a:link, nav ul a:visited, nav ul a:active {
  color: #000000;
  background-color: #FFFFFF;
  padding: 3px 3px 3px 8px;
  margin: 0;
  text-decoration: none;
  font-size: 1em;
  font-family: Georgia,"Trebuchet MS",
  verdana,arial,helvetica,sans-serif;
  display: block;
  font-weight: bold;
  line-height: 25px;
  border-bottom: 1px dotted #5F5F5F;
}
nav ul a:hover, nav ul a:focus {
  font-size: 1.2em;
  color: #FFFFFF;
  background-color: #303030;
}
```

---

<!-- _class: twocolumns -->
#### Die horizontale Navigation
- Navigationsleiste als unterer Abschluss des Headers
- Einfügen DIV mit ID "navihor"

```html

<header>
  <div id="h1container">
  <h1>Maik`s mobiler Service</h1>
  <p>mobiles Leben und Arbeiten<p> 
  </div>
  <div id="navihor">
    <a href="#">Kontakt</a>
    <a href="#">Impressum</a>
    <a href="#">Datenschutz</a>
  </div>
</header>
```

---
<!-- _class: twocolumns -->
#### CSS für horizontale Navigation
- Header wird 360 Pixel hoch
- Abstand der Navigationsleiste zum oberen Header wird 320px
- horizontale Navigation zentrieren


```css
#h1container p{
  margin: 0 30px;
  padding: 0;
  background-color: #none;
  font-size: 1.2em;
  font-family: '1-Punk',Georgia,"Trebuchet MS"
  verdana,arial,helvetica,sans-serif; 
  text-align: right;
  color: #138492;
}

#navihor {
  height: 33px;
  background-color: #303030;
  text-align: center;
  margin-top: 320px;
}

```
---
<!-- _class: twocolumns -->
- Style für die Links in der Navigation
- weißer Text auf grauem Grund
- beim Hovern grün hinterlegt
- Padding für Vergrößerung der klickbaren Fläche



```css
#navihor a:link,
#navihor a:active,
#navihor a:visited {
  color: #FFFFFF;
  background-color: #303030;
  text-decoration: none;
  font-family: tahoma, arial,
  helvetica, verdana, sans-serif;
  font-size: 1em;
  line-height: 33px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 3px;
  padding-bottom: 3px; font-weight: bold;
}

#navihor a:hover, a:focus { 
  color: #000000;
  background-color: #1499a9;
}

```

---

<!-- _class: fullscreen -->

![bg](../img/06f.jpg)

---
<!-- _class: twocolumns -->
#### Bilder im Fließtext
- max Zeichen pro Zeile cs. 75
- Bilder im Fließtext können umflossen werden
- margin für Abstand des Bildes vom Text
- Kopieren des Bildes thatsme.jpg in den Ordner "img" aus dem Material-Ordner

```html
<main>
<article>
    <img class="bildImFliesstext"
        src="img/thatsme.jpg" alt="that`s me">
    <h2>Mobiles Leben und Arbeiten</h2>
    <p> … </p>
</article>
</main>
```


```css
article {
  width: 100%;
  display: inline-block;}

.bildImFliesstext {
  float:right;
  width: 30%;
  margin-top: 0px;
  margin-right:20px;
  margin-bottom: 10px; 
  padding: 10px;}
```

---

<!-- _class: fullscreen -->

![bg](../img/06g.jpg)


---
<!-- _class: structural -->
## Mobile First!
- 44,2 % der Deutschen Internetnutzer greifen mobil zu.
- Im internationalen Vergleich sind dies relativ wenige.
- Weltweit sind es im durschnitt über 53%.
- Interessant: Mobile steigt KI
- Desktop gewinnt an Boden im Web


##### https://statistiken-aktuell.de/smartphone-internetnutzung/



![bg right:50%](../img/web-stats.jpg)

---
<!-- _class: structural -->
### Warum mobile First?
- Ladezeitoptimierung
- zuerst Inhalte für Mobilgeräte laden
- danach Desktop-Inhalte
- Lösung durch Media-Queries

---

<!-- _class: img-right -->
### CSS Media Queries

- **Was sind Media Queries?**
  - Ermöglichen, CSS-Regeln nur dann anzuwenden, wenn bestimmte Bedingungen (wie Bildschirmbreite) erfüllt sind.
  - Webseite passt sich automatisch an Smartphones, Tablets, Desktops an

```css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

![Media Queries Concept](../img/media_queries_concept.png)

---

#### Medientypen (Media Types)**

- **Allgemeine Kategorien** von Ausgabegeräten:
  - `all`: Für alle Geräte (Standard).
  - `print`: Für den Druckmodus (z. B. wenn die Seite als PDF exportiert wird).
  - `screen`: Für Bildschirme (Smartphones, Monitore).

```css
/* Wird nur beim Ausdrucken angewendet */
@media print {
  nav {
    display: none; /* Navigation beim Drucken ausblenden */
  }
}
```

---

#### Medienmerkmale (Media Features)**

- **Spezifische Eigenschaften** des Geräts oder Browsers:
  - `width` / `height`: Breite oder Höhe des Browserfensters.
  - `max-width` / `min-width`: Sehr oft genutzt, um Breakpoints (Umbruchpunkte) zu definieren.
  - `orientation`: `portrait` (Hochformat) oder `landscape` (Querformat).

```css
/* Gilt für Geräte im Querformat */
@media (orientation: landscape) {
  .sidebar {
    display: block;
  }
}
```

---

#### Logische Operatoren in Media Queries**

- Bedingungen lassen sich mit `and`, `not`, und `only` verknüpfen.
- Man kann auch Kommas `,` verwenden (entspricht einem logischen "ODER").

```css
/* Bildschirm UND mindestens 1024px breit */
@media screen and (min-width: 1024px) {
  .container {
    display: flex;
  }
}

/* Bildschirm ODER Druck */
@media screen, print {
  /* Gemeinsame Stile */
}
```


---
<!-- _class: structural -->
### Praxis-Beispiel: Media Queries im Einsatz

Wir betrachten unsere Beispielseite `Samples/Media Querie/index.html`. 
Diese ändert ihr Layout sowie die Hintergrundfarbe dynamisch je nach verfügbarem Platz im Browserfenster.

---
<!-- _class: twocolumns -->
#### Die Mobile Ansicht (Default)

- **Mobile First:** Die Basis-Regeln gelten für kleine Bildschirme.
- Die Boxen nehmen `100%` der Breite ein und stapeln sich vertikal.
- Der Hintergrund ist ein helles Grau (`#f4f4f9`).

```css
.box {  flex: 1 1 100%; /* 1 Spalte */}
```

![Mobile Viewport](Samples/Media%20Querie/media_query_mobile.png)

---
<!-- _class: twocolumns -->
#### Die Tablet Ansicht (ab 600px)

- Sobald der Bildschirm **mindestens 600px** breit ist, greift die erste Media Query.
- Das Layout wechselt auf **2 Spalten** (jede Box ca. 50%).
- Zur Verdeutlichung wechselt der Hintergrund auf Hellblau (`#e3f2fd`).

```css
@media screen and (min-width: 600px) {
  body { background-color: #e3f2fd; }
  .box { flex: 1 1 calc(50% - 20px); }}
```

![Tablet Viewport](Samples/Media%20Querie/media_query_tablet.png)

---
<!-- _class: twocolumns -->
#### Die Desktop Ansicht (ab 900px)

- Ab einer Bildschirmbreite von **900px** wird die nächste Query aktiv.
- Das Flexbox-Layout verteilt die Boxen nun in **3 Spalten** (je ca. 33%).
- Die Hintergrundfarbe wird auf Hellgrün (`#e8f5e9`) gesetzt.

```css
@media screen and (min-width: 900px) {
  body { background-color: #e8f5e9; }
  .box { flex: 1 1 calc(33.333% - 20px); }}
```

![Desktop Viewport](Samples/Media%20Querie/media_query_desktop.png)

---
<!-- _class: structural -->
## Maik`s mobile Seite mit Media Queries (07)

> Mobile First heißt deswegen Mobile First weil zuerst die mobile Ansicht gestaltet wird.

ups... 🙄

> Eine mobile Ansicht ist aber schnell gemacht...

---
<!-- _class: twocolumns -->

### Maik`s Mobile First
- Bild header-mobile.jpg in img kopieren
- wrapper zurücksetzen
- headerbild ersetzen
- Bild zentrieren
- Höhedes headers reduzieren

```css
#wrapper {
background-color: #FFFFFF;
color: #000000;
margin: 0 auto;
padding: 0px;
width: 100%; max-width: 1600px;
}
```

```css
header {
margin: 0px;
padding-top: 10px;
background:url(../img/header-mobile.jpg) no-repeat;
background-size: cover;
background-position: center;
background-color: #eef1f0;
min-height: 320px;
}
```
---
<!-- _class: twocolumns -->
- Überschrift unsichtbar machen
- wird in der Desktop-Ansicht wieder sichtbar gemacht
- h1-container wird zu h1-container-desktop

Im HTML:
```html
<div id="h1container-desktop">
    <h1>Maik`s mobiler Service</h1>
    <p>mobiles Leben und Arbeiten<p>
</div>
```
Im CSS:

```css
#h1container-desktop {
    text-align:right;
    display: none;}

#h1container-desktop p{
    margin: 0 30px; 
    padding: 0;
    background-color: #none;
    font-size: 1.2em;
    font-family: '1-Punk',Georgia,
    "Trebuchet MS",verdana,arial,helvetica,sans-serif;
    text-align: right;
    color: #138492;}
```

---
<!-- _class: twocolumns -->
- Anpassen der horizontalen Navigationsleiste
- Unterbrechen des Floatens der Hauptnavigation
- Padding links hinzufügen
```css
#navihor {
  height: auto;
  background-color: #303030;
  text-align: center;
  margin-top: 320px;}

aside {
  float: clear;
  width: 100%;
  padding: 0px; 
  margin: 0px;}

nav ul a:link, nav ul a:visited, nav ul a:active {
...
padding-left: 20px;
...;
}
```
---
<!-- _class: twocolumns -->
- Anpassen des Main-Containers
- Zurücksetzen der Abstände
- Anpassen des Bildes im Fließtext
- Verkleinerung der h1
- Verkleinerung des Footers


```css
main {
  padding: 0px 0px 0px 20px;
  margin: 20px 0px 0px 0px;
  display: block;
}
```
```css
.bildImFliesstext {
...
  width: 50%;
...}
```

```css
h1, h2 {
...
  font-size: 1.2em  ...}
```

```css
footer {
...
  font-size: 0.6em  ...}
```

---
<!-- _class: structural -->
>> Fertig ist die mobile Webseite!

![bg right:50%](../img/maik-mobile.jpg)

---
> Nun testen Sie die Seite in der Desktop-Ansicht.
Gruselig?
... Dann brauchen wir eine neue Desktop-Version

---
<!-- _class: structural -->
## Maik`s Desktop-Version (08)

An Breakpoints bricht mit Media-Queries das Design um.
Anzahl der Breakpoints ist nicht festgelegt / limitiert.
Schrittweises Anpassen des Designs, immer dann, wenn "etwas nicht passt"


Sinnvolle Breakpoints sind:
- Smartphones @media (min-width: 576px) { ... }
- Tablets @media (min-width: 768px) { ... }
- Desktops @media (min-width: 992px) { ... }
- Large desktops @media (min-width: 1200px) { ... }


---
<!-- _class: structural -->
>> Wichtig!
Breakpoints werden immer am Ende der css-Regeln definiert.
Sie überschreiben die vorherigen Definitionen


---

- erster Breakpoint, Ränder aktivieren
- zweiter Breakpoint (768 Pixel)
Floaten aktivieren, Zweispaltigkeit einrichten


```css
@media screen and (min-width: 576px) {
    #wrapper {
    width: 80%;
    } }
```
```css
@media screen and (min-width: 768px) {
aside {
float: left;
width: 30%;
margin-right: 20px; }
main {
width: 60%;
margin-left: 30%;
} }
```
![bg right](../img/media_queries_1.jpeg)

---
- Tabletversion ab ca. 1024 Pixel
- Austausch des Headerbildes, Verschieben der horizontalen Navigation

```css
@media screen and (min-width: 1024px) {
header {
background:url(../img/header.jpg) no-repeat;
min-height: 368px;
}
#navihor {
margin-top: 368px; }}
```

---
<!-- _class: fullscreen -->

![bg](../img/media_queries_2.jpg)

---
<!-- _class: twocolumns -->
- zurück zum Desktop ab 1200 px
- Den mobile-Container blenden wir aus.
- Dem Header geben wir noch etwas mehr Luft.
- Die Hauptnavigation im aside Container erhält eine feste Breite, damit die Navigation nicht zu breit wird.
- Daher können wir den main-Container jetzt wieder etwas breiter machen.
- So passt auch wieder etwas mehr Text hinein.
- Die Bilder dürfen dafür wieder etwas kleiner sein.

```css

@media screen and (min-width: 1200px) {
#h1container-desktop {
display: block;
}
#h1container-mobile {
display: none;}
#navihor {
margin-top: 320px;}
aside {
width: 220px;}
main {
width: 70%;
margin-left: 25%;}
p {
max-width: 75ch; }
.bildImFliesstext {
width: 30%;}}
```
---
<!-- _class: fullscreen -->

![bg](../img/media_queries_3.jpg)

---
<!--_class: structural -->
