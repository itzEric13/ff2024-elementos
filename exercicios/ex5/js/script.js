function maiorNumero() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let maior;

    if (num1 > num2) {
        maior = num1;
    } else if (num2 > num1) {
        maior = num2;
    } else {
        maior = "Os números são iguais.";
    }

    document.getElementById('resultado').innerText = `O maior número é: ${maior}`;
}
