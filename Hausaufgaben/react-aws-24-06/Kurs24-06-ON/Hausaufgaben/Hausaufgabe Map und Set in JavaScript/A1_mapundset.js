// 1. Erstellen Sie eine Map namens benutzerVerwaltung
let benutzerVerwaltung = new Map();

// 2. Fügen Sie Benutzer zur Map hinzu
benutzerVerwaltung.set('benutzer1', { email: 'benutzer1@example.com', rolle: 'Admin' });
benutzerVerwaltung.set('benutzer2', { email: 'benutzer2@example.com', rolle: 'User' });
benutzerVerwaltung.set('benutzer3', { email: 'benutzer3@example.com', rolle: 'Gast' });

// 3. Funktion zur Ausgabe aller Benutzer und deren Details
function zeigeBenutzer(benutzerMap) {
    benutzerMap.forEach((details, benutzername) => {
        console.log(`Benutzername: ${benutzername}, E-Mail: ${details.email}, Rolle: ${details.rolle}`);
    });
}

// Aufruf der Funktion
zeigeBenutzer(benutzerVerwaltung);
