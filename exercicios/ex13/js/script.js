// Faça um algoritmo que faz uma conversão de temperaturas onde .
// 1. Converter Celsius para Fahrenheit. formula: (celsius * 9/5) + 32
// 2. Converter Fahrenheit para Celsius. formula: (fahrenheit - 32) * 5/9

function convertendoTemp() {
    let temperatura = parseFloat(document.querySelector('#temperatura').value);
    let operacao = parseInt(document.querySelector('#operador').value);

    switch (operacao) {

        case 1:
            document.querySelector('.resultado').innerHTML = `A temperatura em graus Fahrenheit é ${(temperatura  * 9 / 5) + 32}`;
            break;

        case 2:
            document.querySelector('.resultado').innerHTML = `A temperatura em graus Celsius é:${(temperatura - 32) * 5 / 9}`;
            break;

    }
}

document
    .querySelector('button')
    .addEventListener('click', convertendoTemp);
