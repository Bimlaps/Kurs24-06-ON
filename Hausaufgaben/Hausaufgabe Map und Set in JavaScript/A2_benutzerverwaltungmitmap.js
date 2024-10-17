// 1. Erstellen Sie ein Set namens besuchteSeiten
let besuchteSeiten = new Set();

// 2. Fügen Sie Seitennamen hinzu, darunter duplizierte
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Startseite');  // Dupliziert
besuchteSeiten.add('Kontakt');
besuchteSeiten.add('Profil');      // Dupliziert

// 3. Geben Sie die Anzahl der eindeutigen Seiten aus
console.log(`Anzahl der eindeutigen Seiten: ${besuchteSeiten.size}`);  // Ausgabe: 4

// 4. Funktion zur Ausgabe aller besuchten Seiten
function zeigeSeiten(seitenSet) {
    seitenSet.forEach(seite => {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

// Aufruf der Funktion
zeigeSeiten(besuchteSeiten);
