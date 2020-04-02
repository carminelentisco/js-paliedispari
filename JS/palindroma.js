/********************************************************************
 * 
 * Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 * 
 *******************************************************************/

// Collegamento bottone
var buttonInviaParola = document.getElementById('button-invia-parola');

// Al click del bottone invia

buttonInviaParola.addEventListener('click', 
    function () {
        var parolaUtente = document.getElementById('parola-utente').value;
        var risultato = document.getElementById('risultato');
        
        if ( palindroma(parolaUtente) == true ) {
            risultato.innerHTML = 'La parola ' + parolaUtente + ' è palindroma.'
        } else {
            risultato.innerHTML = 'La parola ' + parolaUtente + ' NON è palindroma. '
        }
    }
);

// Funzione Palindroma
function palindroma (parola) {
     
    var reverse = "";

    for ( var i = parola.length -1; i >= 0; i-- ) {
        reverse += parola[i];
    }

    if ( reverse == parola ) {
        return true;
    }

    return false;
}
 