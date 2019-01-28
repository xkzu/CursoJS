'use strict'

//la funcion anonima es una funcion que no tiene nombre
// let pelicula = function(nombre) {
//     return 'La pelicula es: ' + nombre;
// }

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    let sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//funciones anonimas utilizadas como callbacks
sumame(5, 7, function(dato) {
        console.log('La suma es: ' + dato);
    },
    function(dato) {
        console.log('La suma por dos es: ' + (dato * 2));
    });


//funcion de flecha
sumame(5, 7, dato => {
        console.log('La suma es: ' + dato);
    },
    dato => {
        console.log('La suma por dos es: ' + (dato * 2));
    });