'use strict'

// pruebas con let y var

//prueba con var
var numero = 40;
console.log(numero); //valor 40

if (true) {
    var numero = 50;
    console.log(numero); //valor 50
}
console.log(numero); //valor 50

//prueba con let
var texto = "curso js";
console.log(texto); //valor js

if (true) {
    let texto = "curso angular js";
    console.log(texto); //valor angular
}

console.log(texto); //valoir js