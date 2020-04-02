/**************************************************************************************\
 * 
 * Pari e Dispari
 * L’utente sceglie pari o dispari e un numero da 1 a 5. 
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 *
\**************************************************************************************/

// Scelte dell' utente
var selectPariDispari = prompt('Inserisci Pari o Dispari : ');
var selectNumber = parseInt( prompt('Inserisci un numero da 1 a 5 : '));
console.log('Selezione Pari / Dispari : ' + selectPariDispari);
console.log('Selezione numero utente : ' + selectNumber);

// Numero Random AI
var randomNuberComputer = randomAiNumber();
console.log('Numero Random AI : ' + randomNuberComputer);

// Somma Dei numeri 
var somma = selectNumber + randomNuberComputer;
console.log('Somma dei numeri : ' + somma);

// Pari o Dispari 
var checkPariDispari = pariDispari(somma);
console.log('Il Numero sommato è : ' + checkPariDispari);

//Risultato finale

if (selectPariDispari == checkPariDispari) {
    console.log('Hai Vinto');
} else {
    console.log('Hai Perso');
    
}

////////// FUNZIONI \\\\\\\\\\

// Generatore di numeri random
function randomAiNumber () {
    var random = Math.floor( Math.random() * 5) + 1;
    return random;
}

// Check Pari-Dispari 
function pariDispari(numero) {
    if (numero % 2 == 0) {
        return 'pari';
    }
    return 'dispari';
}