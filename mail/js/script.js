// Lista email
const email = ["stanislarochelle@gmail.com", "emanuela.fanelli@gmail.com", "torpedine@libero.it", "lasignoraanna@tiscali.it", "valerio-lundini@gmail.com"];
console.log(email);

// Chiedi all’utente la sua email,
const userEmail = prompt("Dimmi la tua email");

// controlla che sia nella lista di chi può accedere,
let emailFound = false;
for (let i = 0; i < email.length; i++) {
    const thisEmail = email[i];
    if (thisEmail === userEmail) {
        emailFound = true;
    }
}

console.log(emailFound);

// stampa un messaggio appropriato sull’esito del controllo.
if (emailFound === true) {
    console.log("Email presente nella lista, può accedere");
} else {
    console.log("Impossibile effetuare accesso, email non presente nella lista");
}
