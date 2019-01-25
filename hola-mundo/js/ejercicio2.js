'use strict'

/*
    utilizando un bucle, mostrar la suma  y la media de los numeros intriducidos
    hasta conseguir un numero negativo y ahí mostrar el resulttado
*/

let suma = 0;
let contador = 0;

do {
    var numero = parseInt(prompt('Introduce un numero hasta que metas uno negativo', 0));

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
        //suma += numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);

} while (numero >= 0)

alert('La suma de los numeros es: ' + suma);
alert('La media de los numeros es: ' + (suma / contador));