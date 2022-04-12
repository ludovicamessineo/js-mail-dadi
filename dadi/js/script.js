// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero dell'utente:", userNumber);

const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero del computer:", computerNumber);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let result;
if (userNumber > computerNumber) {
    result = "Hai vinto";
} else {
    result = "Hai perso";
}

console.log(result);
