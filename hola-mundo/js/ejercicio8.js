'use strict'

/*
    calculadora:
    -pida 2 numeros por pantalla
    -si metemos uno mal que nos los vuelva a pedir
    -en le cuerpo de la pagina, en una alerta y por la consola el resultado de
    sumar, restar, multiplicar y dividir
 */

let numero1 = parseInt(prompt('Ingrese primer numero', 0));
let numero2 = parseInt(prompt('Ingrese segundo numero', 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Ingrese primer numero', 0));
    numero2 = parseInt(prompt('Ingrese segundo numero', 0));
}

let resultado = 'La suma es: ' + (numero1 + numero2) + '<br>' +
    'La resta es: ' + (numero1 - numero2) + '<br>' +
    'La multiplicacion es: ' + (numero1 * numero2) + '<br>' +
    'La divicion es: ' + (numero1 / numero2) + '<br>';

let resultado2 = 'La suma es: ' + (numero1 + numero2) + '\n' +
    'La resta es: ' + (numero1 - numero2) + '\n' +
    'La multiplicacion es: ' + (numero1 * numero2) + '\n' +
    'La divicion es: ' + (numero1 / numero2) + '\n';

alert(resultado2);
document.write(resultado);
console.log(resultado2);