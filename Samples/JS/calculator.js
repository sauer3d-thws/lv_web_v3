// calculator.js - Ein eigenständiges ES-Modul

// Eine private Hilfsfunktion (wird NICHT exportiert und bleibt gekapselt)
function formatierErgebnis(wert) {
    return `[Ergebnis: ${wert}]`;
}

// Öffentliche Funktionen (werden explizit nach außen exportiert)
export function addieren(a, b) {
    const summe = Number(a) + Number(b);
    return formatierErgebnis(summe);
}

export function subtrahieren(a, b) {
    const differenz = Number(a) - Number(b);
    return formatierErgebnis(differenz);
}
