// Clase Padre Persona
class Persona {
    id;
    nombre;
    email;
    carrito;

    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.email = email;
        this.carrito = [];
    }

    mostrarDatos() {
        console.log(`id persona: ${this.id}, nombre completo: ${this.nombre}, correo de contacto: ${this.email}`);
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
    }

    agregarProductos(productos) {
        for (let producto of productos) {
            this.carrito.push(producto);
        }
    }
    //Polimorfismo y abstracción
    calcularTotal() {
        let total = 0;
        for (let producto of this.carrito) {
            total += producto.precio;
        }
        return total;
    }
}

//Clase Persona
//La clase Usuario hereda de persona

class Usuario extends Persona{
    //Propiedad tipo
    tipo;

    constructor(id, nombre, email){
        super(id, nombre, email) //super es PERSONA
        this.tipo ="Usuario normal";
    } //Costructor Usuario
    calcularTotal(){
        console.log("Calculando el precio total para Usuario normal")
    }
} //clase usuario

class UsuarioPro extends Persona{
    //propiedad
    tipo;

    constructor(id, nombre, email){
        super(id, nombre, email);
        this.tipo = "Pro.";
    } // contructor UsuarioPro
    calcularTotal(){
        console.log("Usuario PRO: descuento 5%, etc. Calculando...")
    }
    
}// class UsuarioPro

class Main {
    static main(){
        const julia = new Persona(124, "Julia Amado", "julia@gmail.com");
        const fer = new UsuarioPro(125, "Fernando Aguilar", "fernando@gmail.com");
        julia.agregarProducto("Sabritas");
        fer.agregarProducto("Café");
        console.log(julia);
        console.log(fer);
        julia.calculateTotal();
        fer.calcularTotal();
    }//main
}//class Main

Main.main();