// Erstelle ein Array mit den Namen von fünf verschiedenen Städten
let staedte = ["Berlin", "München", "Darmstadt", "Frankfurt", "Stuttgart"];

// Iteriere über das Array und gib jede Stadt in Großbuchstaben aus
staedte.forEach(stadt => {
    console.log(stadt.toUpperCase());
});

// Erstelle ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert
let buchstabenAnzahl = staedte.map(stadt => stadt.length);
console.log("Anzahl der Buchstaben in den Stadtnamen: " + buchstabenAnzahl);
