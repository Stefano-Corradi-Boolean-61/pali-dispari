/*
PAROLA PALINDROMA
1. evento scatenato dal click del bottone
2. leggere la parola inserita nela campo input
3. girarla e verificare se è palindroma
4. stampare l'output
*/

document.getElementById('verifica').addEventListener('click', function(){
  
  const parola = document.getElementById('parola').value;
  initVerifica(parola);

});


/**
 * Funzione di inizializzazione
 * @param {string} str 
 */
function initVerifica(str){
  
  const parolaGirata = giraParola(str)
 
  let outputMsg;
  if(str.toLowerCase() === parolaGirata.toLowerCase()){
    outputMsg = `La parola "${str}" è palindroma`;
  }else{
    outputMsg = `La parola "${str}" non è palindroma`;
  }
  document.getElementById('output-palindroma').innerHTML = outputMsg;
}


/**
 * Reverse stringa passata
 * @param {string} str 
 * @returns 
 */
function giraParola(str){
  let reverseString = '';

  // trick per girare le stringhe
  //reverseString = str.split('').reverse().join('') 

  for(let i = str.length - 1; i >= 0; i--){
    // è possibile leggere gli elementi interni a una stringa come se fosse un array
    reverseString += str[i];
   // console.log(reverseString);
  }

  return reverseString;
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



/*
PARI DISPARI
1. Scegliere pari o dispari dalla select
2. giocare un numero da 1 a 5
3. fare estrarre al pc un numero random da 1 a 5
4. verificare il vincitoro

*/

document.getElementById('gioca').addEventListener('click', initPariDispari);


function initPariDispari(){
  const userChoice = document.getElementById('choice').value;
  const userNumber = parseInt(document.getElementById('numero').value);
  const pcNumber = getRandomNumber(1, 5);
  const sum = userNumber + pcNumber;
  console.log(userChoice);
  console.log(userNumber);
  console.log(pcNumber);
  console.log(sum);
  console.log(pariDispari(sum));
  let outputMsg;
  if(userChoice === pariDispari(sum)){
    outputMsg = `
      <h3>Hai vinto</h3>
      <p>Hai giocato <strong>${userNumber}</strong> e scelto <strong>${userChoice}</strong> </p>
      <p>Il PC ha giocato: <strong>${pcNumber}</strong></p>
    `;
  }else{
    outputMsg = `
      <h3>Hai perso</h3>
      <p>Hai giocato <strong>${userNumber}</strong> e scelto <strong>${userChoice}</strong> </p>
      <p>Il PC ha giocato: <strong>${pcNumber}</strong></p>
   `;
  }
  document.getElementById('output-paridispari').innerHTML = outputMsg;
}

/**
 * Generatore di numeri random
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Filtro pari/dispari
 * @param {number} n 
 * @returns 
 */
function pariDispari (n){
  if(n % 2) {
    return 'dispari';
  }
  return 'pari';
}
