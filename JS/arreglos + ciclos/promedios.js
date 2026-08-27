let calificaciones = [4.3, 5.0, 4.1, 4.4, 3.1, 4.0];

let suma = 0;
calificaciones.forEach((elemento) => {
    suma += elemento;
});
let promedio = suma / calificaciones.length;
console.log(`El promedio de las calificaciones es: ${promedio.toFixed(1)}`);