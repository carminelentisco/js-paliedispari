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

/********************************* INIZIO FORMA BASE **********************************/

/** // Scelte dell' utente
 * var selectPariDispari = prompt('Inserisci Pari o Dispari : ');
 * var selectNumber = parseInt( prompt('Inserisci un numero da 1 a 5 : '));
 * console.log('Selezione Pari / Dispari : ' + selectPariDispari);
 * console.log('Selezione numero utente : ' + selectNumber);
 * 
 * // Numero Random AI
 * var randomNuberComputer = randomAiNumber();
 * console.log('Numero Random AI : ' + randomNuberComputer);
 * 
 *  // Somma Dei numeri 
 * var somma = selectNumber + randomNuberComputer;
 * console.log('Somma dei numeri : ' + somma);
 * 
 * // Pari o Dispari 
 * var checkPariDispari = pariDispari(somma);
 * console.log('Il Numero sommato è : ' + checkPariDispari);
 * 
 * //Risultato finale
 * 
 * if (selectPariDispari == checkPariDispari) {
 *     console.log('Hai Vinto');
 * } else {
 *     console.log('Hai Perso');
 *     
 * }
 * 
 * ////////// FUNZIONI \\\\\\\\\\
 * 
 * // Generatore di numeri random
 * function randomAiNumber () {
 *     var random = Math.floor( Math.random() * 5) + 1;
 *     return random;
 * }
 * 
 * // Check Pari-Dispari 
 * function pariDispari(numero) {
 *     if (numero % 2 == 0) {
 *         return 'pari';
 *     }
 *     return 'dispari';
 * } */

/********************************* FINE FORMA BASE ************************************/

/***************************** INIZIO FORMA MIGLIORATA ********************************/

// Prendo il click bottone
var buttonPariDispari = document.getElementById('invia-pari-dispari');

buttonPariDispari.addEventListener('click', 
    function() {
        
        // Prendo gli input
        var selectPariDispari = document.getElementById('pari-dispari').value;
        var selectNumber = parseInt(document.getElementById('numero').value);
        var randomNumberComputer = randomAiNumber();
        var somma = selectNumber + parseInt(randomNumberComputer);
        var checkPariDispari = pariDispari(somma);
        
        // Conversione parola in minuscolo + correzione degli spazi
        selectPariDispari = selectPariDispari.trim().toLowerCase();

        // Controllo range numeri inseriti 
        
        if ( (selectPariDispari !== 'pari' || selectPariDispari == 'dispari' ) && ( ( selectNumber < 1 || selectNumber > 5 ) || isNaN(selectNumber) ) ) {
            
            selectPariDispari = selectPariDispari.value = "";
            selectNumber = selectNumber.value = "";
            alert('Erroe. Correggi i dati inseriti. ')

        } else {
            
            // Scrittura in HTML
            document.getElementById('inputText').innerHTML = selectPariDispari;
            document.getElementById('inputNumero').innerHTML = selectNumber;
            document.getElementById('outputRandom').innerHTML = randomNumberComputer;
            document.getElementById('outputSomma').innerHTML = somma;
            document.getElementById('outputSommaPariDispari').innerHTML = checkPariDispari;
            
            // Dichiarazione del risultato + Scrittura in HTML
            var risultato = document.getElementById('risultato-pari-dispari');

            if (selectPariDispari == checkPariDispari) {
                risultato.innerHTML = "Hai Vinto";
            } else {
                risultato.innerHTML = "Hai Perso";
            }

        } 

        
        

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
    }
);

/******************************* FINE FORMA MIGLIORATA ********************************/

