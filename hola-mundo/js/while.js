'use strict'

//bucle while

var year = 2018;

while (year <= 2051) {
    //ejecuta esto
    console.log('Estamos en el año: ' + year);

    if (year == 2030) {
        console.log('Se paró la ejecución del bucle y quedó en el año: ' + year);
        break;
    }
    year++;
    //year = year + 1;
}

//do while

var years = 30;

do {
    alert('Solo cuando sea diferente a 20');
    years--;
} while (years > 25)