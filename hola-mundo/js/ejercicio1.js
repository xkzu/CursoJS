'use strict'

//programa que pida 2 numeros y que nos diga cual es mayor, el menor y si son iguales
let numero1 = parseInt(prompt('Introduce el primer número', 0));
let numero2 = parseInt(prompt('Introduce el segundo número', 0));

// console.log(numero1, numero2);

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el segundo número', 0));
}

if (numero1 > numero2) {
    alert('El número 1 es mayor');
} else if (numero1 == numero2) {
    alert('Los números son iguales');
} else {
    alert('El número 2 es mayor');
}