const prompt = require('prompt-sync')();

let palindromo = prompt("Introduce una palabra: ").toLowerCase();
let contador = 0;

for (let i = 0; i < palindromo.length; i++) {
    if (palindromo[i] === palindromo[palindromo.length - 1 - i]) {
        contador++;
    }
}

if (contador === palindromo.length) {
    console.log("Es un palíndromo.");
} else {
    console.log("No es un palíndromo.");
}
