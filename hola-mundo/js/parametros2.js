'use strict'

//parametros rest y spread

//parametros de tipo rest
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log('Fruta 1: ', fruta1);
    console.log('Fruta 2: ', fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas('Naranja', 'Manzana', 'Sandia', 'Melón', 'Coco');

//parametro de tipo spread
let frutas = ['Naranja', 'Manzana'];
listadoFrutas(...frutas, 'Sandia', 'Melón', 'Coco');