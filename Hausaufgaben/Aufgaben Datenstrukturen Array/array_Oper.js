// Erstelle ein Array mit den Zahlen 1 bis 10
let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Füge die Zahl 11 am Ende des Arrays hinzu
zahlen.push(11);

// Entferne die erste Zahl aus dem Array
zahlen.shift();

// Finde und gib die Position der Zahl 5 im Array aus
let positionFuenf = zahlen.indexOf(5);
console.log("Position der Zahl 5 im Array: " + positionFuenf);

// Überprüfe, ob die Zahl 7 im Array enthalten ist
let enthaeltSieben = zahlen.includes(7);
console.log("Ist die Zahl 7 im Array enthalten? " + enthaeltSieben);
