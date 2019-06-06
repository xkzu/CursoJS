'use strict'

//DOM - Document Object Model

function cambiaColor(color) {
    caja.style.color = color;
}

//conseguir elementos con id concreto

// let caja = document.getElementById("miCaja");
let caja = document.querySelector("#miCaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

//conseguir elementos por su etiqueta 
let todosLosDivs = document.getElementsByTagName("div");
// let contenidoTexto = todosLosDivs[2];
// contenidoTexto.innerHTML = "Otro texto para el segundo elemento";
// contenidoTexto.style.background = "red";
// todosLosDivs.forEach((valor, indice) => {

let seccion = document.querySelector("#miSeccion");
let hr = document.createElement("hr");

let valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == "string") {
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
        // document.querySelector("#miSeccion").appendChild(parrafo);
    }

}
seccion.append(hr);

// });

// console.log(contenidoTexto);
console.log(todosLosDivs);

//conseguir elementos por su clase
console.log(caja);