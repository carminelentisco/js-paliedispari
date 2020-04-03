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
        

        document.getElementById('inputText').innerHTML = selectPariDispari;
        document.getElementById('inputNumero').innerHTML = selectNumber;
        document.getElementById('outputRandom').innerHTML = randomNumberComputer;
        document.getElementById('outputSomma').innerHTML = somma;
        document.getElementById('outputSommaPariDispari').innerHTML = checkPariDispari;
        
        var risultato = document.getElementById('risultato-pari-dispari');

        if (selectPariDispari == checkPariDispari) {
            risultato.innerHTML = "Hai Vinto";
        } else {
            risultato.innerHTML = "Hai Perso";
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



