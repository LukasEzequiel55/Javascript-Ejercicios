const prompt = require('prompt-sync')();

let registros = parseInt(prompt('Ingresa el número de registros: '));

for (let i = 0; i <= registros; i++) {
    console.log('Proceso ' + i + ' registrado...');
}
