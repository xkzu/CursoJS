'use strict'

//variables globales
let mensaje = 'Hola mundo, soy una variable global';
let numero = 12;

function holaMundo(texto) {
    //variables locales
    let hola_mundo = 'Texto dentro de funcion';
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

holaMundo(mensaje);