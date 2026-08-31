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

    calculateTotal() {
        let total = 0;
        for (let producto of this.carrito) {
            total += producto.precio;
        }
        return total;
    }
}

// Clase hija 1: User
class User extends Persona {
    constructor(id, nombre, email) {
        super(id, nombre, email);
    }
}

// Clase hija 2: UserPro
class UserPro extends Persona {
    descuento;

    constructor(id, nombre, email, descuento = 0.05) {
        super(id, nombre, email);
        this.descuento = descuento;
    }

    aplicarDescuento() {
        const totalSinDescuento = super.calculateTotal();
        const descuentoAplicado = totalSinDescuento * this.descuento;
        const totalConDescuento = totalSinDescuento - descuentoAplicado;
        console.log(`Total sin descuento: $${totalSinDescuento.toFixed(2)}`);
        console.log(`Descuento aplicado: $${descuentoAplicado.toFixed(2)}`);
        console.log(`Total con descuento: $${totalConDescuento.toFixed(2)}`);
    }

    calculateTotal() {
        const totalSinDescuento = super.calculateTotal();
        const descuentoAplicado = totalSinDescuento * this.descuento;
        return totalSinDescuento - descuentoAplicado;
    }
}

// Array de productos
const productos = [
    {
        nombre: "Monitor 24 pulgadas",
        precio: 150.00,
        stock: 12,
        categoria: "Tecnología"
    },
    {
        nombre: "Teclado mecánico",
        precio: 75.50,
        stock: 5,
        categoria: "Accesorios"
    },
    {
        nombre: "Silla ergonómica",
        precio: 220.00,
        stock: 0,
        categoria: "Oficina"
    }
];

// Clase Main para probar la lógica completa
class Main {
    static probarLogica() {

        const fabio = new User(123, "Fabio Pérez", "fabio@hotmail.com");
        const julia = new UserPro(1234, "Julia Amado", "julia@hotmail.com", 0.05);

        // Agregar productos a Julia
        julia.agregarProducto(productos[0]); // Monitor
        julia.agregarProducto(productos[1]); // Teclado
        console.log("Carrito de Julia:", julia.carrito);
        julia.mostrarDatos();
        julia.aplicarDescuento();

        // Agregar productos a Fabio
        fabio.agregarProductos([productos[0], productos[1], productos[2]]);
        console.log("Carrito de Fabio:", fabio.carrito);
        fabio.mostrarDatos();
        console.log(`Total del carrito: $${fabio.calculateTotal().toFixed(2)}\n`);

        console.log(`Julia - Total: $${julia.calculateTotal().toFixed(2)} - Envío gratis: ${julia.calculateTotal() >= 199.99 ? "Sí" : "No"}`);
        console.log(`Fabio - Total: $${fabio.calculateTotal().toFixed(2)} - Envío gratis: ${fabio.calculateTotal() >= 299.99 ? "Sí" : "No"}`);
    }
}

// Ejecutar las pruebas con la clase MAIN
Main.probarLogica();
