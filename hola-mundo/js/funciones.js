'use strict'

//una funcion es una agrupacion reutilizables de un conjunto de instrucciones

//defino la funcion
function porConsola(numero1, numero2) {
    console.log('Suma: ' + (numero1 + numero2));
    console.log('Resta: ' + (numero1 - numero2));
    console.log('Divicion: ' + (numero1 / numero2));
    console.log('Multiplicacion: ' + (numero1 * numero2));
}

function porPantalla(numero1, numero2) {
    document.write('Suma: ' + (numero1 + numero2) + '<br>');
    document.write('Resta: ' + (numero1 - numero2) + '<br>');
    document.write('Divicion: ' + (numero1 / numero2) + '<br>');
    document.write('Multiplicacion: ' + (numero1 * numero2) + '<br>');
}

function calculadora(numero1, numero2, mostrar = false) {
    //defino las instrucciones

    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2)
    }

    // console.log('Suma: ' + (numero1 + numero2));
    // console.log('Resta: ' + (numero1 - numero2));
    // console.log('Divicion: ' + (numero1 / numero2));
    // console.log('Multiplicacion: ' + (numero1 * numero2));


    // return 'Hola soy la calculadora';
}

// console.log(calculadora(), calculadora(), calculadora());

//invocando a la funcion
calculadora(1, 2);
calculadora(2, 3, true);