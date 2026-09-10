import {usuario} from "./usuario.js"
import { correovalido, validarnombre } from "./validaciones.js"

const usuarios = []
let nombre = prompt("inserta el nombre a registrar")
let correo = prompt("inserta el correo a registrar")
do {
    console.log("=== Menú de opciones: ===");
    console.log("1. Registrar usuario");
    console.log("2. Mostrar usuarios registrados");
    console.log("3. Salir");
    var opcion = prompt("Selecciona una opción (1-3):");}
    while (opcion !== "1" && opcion !== "2" && opcion !== "3");


class Main {
    static main() {
        let regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        correovalido(regexp, correo);
        validarnombre(nombre);

        if (regexp.test(correo) && nombre.length > 3 && nombre.test(/^[a-zA-Z]+$/)) {
        let user = new usuario(nombre, correo);

        usuarios.push(user);
        user.mostrarDatos();
        } else {
            console.log("No se puede registrar el usuario, datos inválidos");
        }
        let opcion = prompt("¿Desea registrar otro usuario? (s/n)");
        if (opcion.toLowerCase() === "s") {
            Main.main();
        } else {
            console.log("Usuarios registrados:");
            for (let user of usuarios) {
                user.mostrarDatos();
            }
        }
        if (opcion === "2") {
            console.log("Usuarios registrados:");
            for (let user of usuarios) {
                user.mostrarDatos();
            }
        }
    }
}
Main.main();