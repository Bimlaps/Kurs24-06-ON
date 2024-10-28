const fs = require('fs').promises;
const readline = require('readline');

// Erstelle ein Interface für die Benutzereingaben
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funktion, um Benutzereingaben asynchron abzufragen
async function getInput(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (input) => resolve(input));
    });
}

async function main() {
    try {
        // Eingaben vom Benutzer abfragen
        const fileName = await getInput('Gib den Namen der Datei ein: ');
        const message = await getInput('Gib die Nachricht ein, die gespeichert werden soll: ');

        // Prüfen, ob die Datei existiert und ggf. erstellen
        try {
            await fs.access(fileName);
            console.log(`Die Datei "${fileName}" existiert bereits. Die Nachricht wird angehängt.`);
        } catch {
            console.log(`Die Datei "${fileName}" existiert nicht. Sie wird jetzt erstellt.`);
        }

        // Nachricht in die Datei schreiben oder anhängen
        await fs.appendFile(fileName, message + '\n');
        console.log('Nachricht erfolgreich hinzugefügt.');

    } catch (err) {
        console.error('Fehler beim Schreiben in die Datei:', err);
    } finally {
        rl.close(); // Schließen der Eingabeschnittstelle
    }
}

main();
