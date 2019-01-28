'use strict'

//transformacion de textos
let numero = 444;
let texto1 = 'Bienvenido al curso de JS';
let texto2 = 'Es muy buen curso';

let dato = numero.toString();
dato = texto1.toLowerCase();
dato = texto2.toUpperCase();

console.log(dato);

//calcular longitud del texto
let nombre = 'no lo se rick';
nombre = ['hi', 'hola'];

console.log(nombre.length);

//concatenar - unir textos
// let textoTotal = texto1 + ' ' + texto2;
let textoTotal = texto1.concat(' ' + texto2);

console.log(textoTotal);

let busqueda = texto1.indexOf('curso');

console.log(busqueda);