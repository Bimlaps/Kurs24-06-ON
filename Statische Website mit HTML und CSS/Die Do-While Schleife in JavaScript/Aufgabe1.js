function summeGeradeZahlen() {
    let summe = 0;
    let zahl = 1;

    do {
        if (zahl % 2 === 0) {
            summe += zahl;
        }
        zahl++;
    } while (zahl <= 100);

    return summe;
}

console.log("Summe der geraden Zahlen: " + summeGeradeZahlen());