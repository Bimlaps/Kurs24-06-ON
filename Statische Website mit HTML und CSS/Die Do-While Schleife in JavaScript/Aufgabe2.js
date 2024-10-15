function ziffernsumme(zahl) {
    let summe = 0;

    do {
        summe += zahl % 10;
        zahl = Math.floor(zahl / 10);
    } while (zahl > 0);

    return summe;
}

console.log("Ziffernsumme von 892: " + ziffernsumme(892));