const prompt = require('prompt-sync')();

function volumen(){
    let radio = Number(prompt("Introduce el radio de la esfera: "));
    let volumen = (4/3) * Math.PI * Math.pow(radio, 3);
    return volumen;
};

console.log("El volumen de la esfera es: " + volumen() + " m^3");