const arr = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const schwellenwert = 50;

// For-Schleife
function zaehleElementeFor(arr, schwellenwert) {
    let anzahl = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > schwellenwert) {
            anzahl++;
        }
    }
    return anzahl;
}

// While-Schleife
function zaehleElementeWhile(arr, schwellenwert) {
    let anzahl = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > schwellenwert) {
            anzahl++;
        }
        i++;
    }
    return anzahl;
}

// Do-While-Schleife
function zaehleElementeDoWhile(arr, schwellenwert) {
    let anzahl = 0;
    let i = 0;
    if (arr.length > 0) {
        do {
            if (arr[i] > schwellenwert) {
                anzahl++;
            }
            i++;
        } while (i < arr.length);
    }
    return anzahl;
}

console.log("Anzahl der Elemente > 50 (For-Schleife): " + zaehleElementeFor(arr, schwellenwert));
console.log("Anzahl der Elemente > 50 (While-Schleife): " + zaehleElementeWhile(arr, schwellenwert));
console.log("Anzahl der Elemente > 50 (Do-While-Schleife): " + zaehleElementeDoWhile(arr, schwellenwert));