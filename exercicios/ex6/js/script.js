function tresNumeros(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

let maior ;

if (num1 === num2 && num2 === num3) {
    maior = "Os três números são iguais: " + num1;
} else if (num1 >= num2 && num1 >= num3) {
    maior = "primeiro número digitado: " + num1;
} else if (num2 >= num1 && num2 >= num3) {
    maior = "segundo número digitado: " + num2;
} else {
    maior = "terceiro número digitado: " + num3;
}

document.getElementById('resultado').innerText = `O maior número é o ${maior}`;}