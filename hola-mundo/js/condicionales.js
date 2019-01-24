'use strict'

//condicional if
//si A es igual a B entonces haz algo

// var edad1 = 30;
// var edad2 = 12;

//si pasa esto
// if (edad1 > edad2) {
//     //ejecuta esto
//     console.log('Edad 1 es mayor que edad 2');
// } else {
//     console.log('La edad 1 es inferior');
// }

var edad = 44;
var nombre = 'Kyrie Irving';

if (edad >= 18) {
    //es mayor de edad
    console.log(nombre + ' tiene ' + edad + ' años, es mayor de edad');
    if (edad <= 33) {
        console.log('Todavía eres millenial');
    } else if (edad >= 70) {
        console.log('Eres un anciano');
    } else {
        console.log('Ya no eres millenial');
    }
} else {
    //es menor de edad
    console.log(nombre + ' tiene ' + edad + ' años, es menor de edad');
}

//operadores lógicos

//negación
var year = 2019;
if (year != 2016) {
    console.log('El año no es 2016, realmente es: ' + year);
}

//and
if (year >= 2000 && year <= 2020 && year != 2019) {
    console.log('Estamos en la era actual');
} else {
    console.log('Estamos en la era post moderna');
}

//or
if (year == 2009 || (year == 2019 && year == 2029)) {
    console.log('El año acaba en 9');
} else {
    console.log('Año no registrado');
}