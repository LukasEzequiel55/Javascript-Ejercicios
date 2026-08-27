const prompt = require('prompt-sync')();

let distancia = Number(prompt("Introduce la distancia: "));
let tiempo = Number(prompt("Introduce el tiempo: "));
function velocidadpromedio(){
    return distancia / tiempo 
};

console.log("La velocidad es: " + velocidadpromedio() + " m/s");