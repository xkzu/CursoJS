'use strict'

/**
    tabla de multiplicar de un numero introducido por pantalla
 */

let numero = parseInt(prompt('De que numerop quieres la tabla', 1));

document.write('<h1>Tabla del ' + numero + '</h1>');
for (var i = 1; i <= 10; i++) {
    document.write(i + ' x ' + numero + ' = ' + (i * numero) + '<br>');
}

//todas las tablas
for (var z = 1; z <= 10; z++) {
    document.write('<h1>Tabla del ' + z + '</h1>');
    for (var i = 1; i <= 10; i++) {
        document.write(i + ' x ' + z + ' = ' + (i * z) + '<br>');
    }
}