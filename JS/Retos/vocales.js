const prompt = require('prompt-sync')();

let vocales = prompt("Introduce una palabra: ").toLowerCase();
let contador = 0;

for (let i = 0; i < vocales.length; i++) {
    if (vocales[i] === 'a' || vocales[i] === 'e' || vocales[i] === 'i' || vocales[i] === 'o' || vocales[i] === 'u') {
        contador++;
    }
}

console.log("El número de vocales en la palabra es: " + contador);