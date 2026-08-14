// main.js - Hauptprogramm als ES-Modul

// Funktionen gezielt aus dem Hilfsmodul importieren (relativer Pfad mit .js ist Pflicht!)
import { addieren, subtrahieren } from './calculator.js';

// Event-Listener für Buttons registrieren
document.getElementById('addBtn').addEventListener('click', () => {
    const valA = document.getElementById('numA').value;
    const valB = document.getElementById('numB').value;
    const res = addieren(valA, valB);
    document.getElementById('output').innerText = res;
});

document.getElementById('subBtn').addEventListener('click', () => {
    const valA = document.getElementById('numA').value;
    const valB = document.getElementById('numB').value;
    const res = subtrahieren(valA, valB);
    document.getElementById('output').innerText = res;
});
