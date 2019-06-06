'use strict'

/*
1. pida 6 numeros por pantalla y los meta en un array
2. mostrar el array entero (todos sus elementos) em el cuerpo de la pagina y en la consola
3. ordenarlo y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (se valorará el uso de funciones)
*/

function mostrarArray(elementos, textoCustom) {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
}

// let numeros = new Array(6);

//pedir 6 numeros
let numeros = [];

for (let i = 0; i <= 5; i++) {
    // numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//mostrar array en consola
console.log(numeros);

//ordenar y mostrar
numeros.sort(function(a, b) {
    return a - b;
});

console.log(numeros);
mostrarArray(numeros, "Contenido del array ordenado");

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

//contar elementos
document.write("<h1>El array tiene: " + numeros.length + " elementos");

//busqueda
let busqueda = parseInt(prompt("Busca un numero", 0));
let posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: " + posicion + "</h1><hr/>");
} else {
    document.write("<h1>NO ENCONTRADO</h1><hr/>");
}