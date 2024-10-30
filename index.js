import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import catFacts from 'cat-facts';

// Funktion zur Anzeige eines Katzenfakts
function showCatFact() {
    const fact = catFacts.random();
    const factBox = boxen(chalk.green(fact), {
        padding: 1,
        margin: 1,
        borderStyle: 'double'
    });
    console.log(factBox);
}

// Funktion zur Abfrage des Benutzernamens
async function askForUsername() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Wie lautet dein Name?',
            default: 'Katzenliebhaber',
        },
    ]);
    return answers.username;
}

// Benutzerinteraktion zur Abfrage weiterer Katzenfakten
async function askForNewCatFact() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'getFact',
            message: 'Möchtest du einen weiteren Katzenfakt sehen?',
            default: true,
        },
    ]);

    if (answers.getFact) {
        showCatFact();
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
    } else {
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
        process.exit(0);
    }
}

// Hauptfunktion
async function main() {
    const username = await askForUsername();
    console.log(chalk.blue(`Willkommen, ${username}! Hier ist ein Katzenfakt für dich:`));
    showCatFact();
    await askForNewCatFact();
}

// Hauptfunktion aufrufen
main();
