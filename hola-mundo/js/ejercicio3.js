'use strict'

/*
    hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/
let numero1 = parseInt(prompt('Introduce el primer numero', 0));
let numero2 = parseInt(prompt('Introduce el segundo numero', 0));

document.write('<h2>De ' + numero1 + ' a ' + numero2 + ' están estos numeros: </h2>');

for (let i = numero1; i <= numero2; i++) {
    document.write(i + '<br>');
}