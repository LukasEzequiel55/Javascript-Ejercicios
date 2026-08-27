const prompt = require('prompt-sync')();

const velocidad = () => {
    let distancia = Number(prompt("Introduce la distancia: "));
    let tiempo = Number(prompt("Introduce el tiempo: "));
    let velocidadpromedio = distancia / tiempo;
    return velocidadpromedio;
};

console.log("La velocidad promedio del objeto es: " + velocidad() + " m/s");