/********************************************************************
 * 
 * Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 * 
 *******************************************************************/

// Chiedere all’utente di inserire una parola

var parolaUtente = prompt('Inserisci una parola : ');

// Richiamo della funzione

var risultato = palindroma(parolaUtente);
console.log('La parola ' + parolaUtente + ', da te inserita, ' + risultato);

// Funzione palindroma

function palindroma (parola) {
     
   var reverse = "";


   for (var i = parola.length -1; i >= 0; i--) {
       reverse += parola[i];
    }

    if ( reverse == parola ) {
        return 'è palindroma';
    }

    return 'non è palindroma';
}