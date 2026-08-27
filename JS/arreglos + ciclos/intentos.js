const prompt = require('prompt-sync')();

let contraseña = prompt('Ingresa tu contraseña: ');
let intentos = 0;
do {
    if (contraseña === "admin123") {
        console.log("Contraseña correcta. Acceso concedido.");
        break;
    } else {
        intentos++;
        console.log(`Contraseña incorrecta. Intento ${intentos}.`);
        if (intentos >= 3) {
            console.log("Has excedido el número máximo de intentos. Cuenta bloqueada.");
            break;
        }
        contraseña = prompt('Ingresa tu contraseña: ');
    }
} while (true);