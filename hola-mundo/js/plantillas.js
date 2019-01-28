'use strict'

//plantillas de texto

let nombre = prompt('Mete tu nombre');
let apellido = prompt('Mete tus apellidos');

// let texto = 'Mi nombre es: ' + nombre + '<br> Mis apellidos son: ' + apellido;

//esto es una plantilla
let texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellido}</h3>
`;
document.write(texto);