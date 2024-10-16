// Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert, die mit den Zahlen 1 bis 9 gefüllt ist
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Funktion, die die Diagonalsumme der Matrix berechnet (von oben links nach unten rechts)
function berechneDiagonalsumme(matrix) {
    let diagonalsumme = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalsumme += matrix[i][i];
    }
    return diagonalsumme;
}

console.log("Diagonalsumme: " + berechneDiagonalsumme(matrix));

// Verwandle die Matrix in eine 3x3-Matrix mit Nullen in den Ecken
matrix[0][0] = 0;
matrix[0][2] = 0;
matrix[2][0] = 0;
matrix[2][2] = 0;

console.log("Matrix mit Nullen in den Ecken: ");
console.table(matrix);
