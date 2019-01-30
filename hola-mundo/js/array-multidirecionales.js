'use strict'

let categoria = ['Acción', 'Terror', 'Comedia'];
let peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

let cine = [categoria, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

// let elemento = '';

// do {
//     elemento = prompt('Introduce la pelicula');
//     peliculas.push(elemento);
// } while (elemento != 'ACABAR')

// peliculas.pop();

let indice = peliculas.indexOf('Gran torino');

if (indice > -1) {
    peliculas.splice(indice, 1);
}

//con join() transformamos un array en texto
let peliculas_string = peliculas.join();

//con split() transformamos un texto en array
let cadena = 'texto1, texto2, texto3';
let cadena_array = cadena.split(', ');

console.log(peliculas);
console.log(peliculas_string);
console.log(cadena_array);

//orden alfabetico
console.log(peliculas.sort());

//orden inverso
console.log(peliculas.reverse());