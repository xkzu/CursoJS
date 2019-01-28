'use strict'

//array, arregelo, matriz
let nombre = 'Killua';
let nombres = ['Killua', 'Gon', 'Leorio', 'Kurapika'];
let lenguajes = new Array('PHP', 'JAVA', 'JS', 'GO');

// console.log(nombres);
// console.log(lenguajes);
// console.log(nombres[2]);

// let elemento = prompt('que elemento del array quieres?');

// if (elemento >= nombres.length) {
//     alert('Introduce el numero correcto menor que ' + nombres.length);
// } else {
//     alert(nombres[elemento]);
// }

document.write('<h1>Lenguajes de programación del 2018</h1>');
document.write('<ul>');

// for (let i = 0; i < lenguajes.length; i++) {
//     document.write('<li>' + lenguajes[i] + '</li>');
// }

lenguajes.forEach((elemento, index, data) => {
    document.write('<li>' + elemento + '</li>');
});

document.write('</ul>');