'use strict'

/*
    mostrar todos los numeros impares que hay entre los numero introducidos por el usuario
*/

let numero1 = parseInt(prompt('Introduce el primer numero', 0));
let numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while (numero1 < numero2) {
    numero1++;

    if (numero1 % 2 != 0) {
        console.log('El ' + numero1 + ' Es impar');
    }
}