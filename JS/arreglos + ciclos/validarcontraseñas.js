let contraseña = ["12345", "abcde", "qwerty", "contraseña", "admin", "usuario", "secundaria"];

contraseña.forEach(contra => { 
    let length = contra.length;
    if (length < 8) {
        console.log(`La contraseña "${contra}" es demasiado corta. No es valida.`);
    } else {
        console.log(`La contraseña "${contra}" es valida.`);
    } 
});