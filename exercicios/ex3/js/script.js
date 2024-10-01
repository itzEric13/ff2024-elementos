function avaliarAluno() {
    // Leitura das notas
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);

    // Cálculo da média
    let media = (nota1 + nota2) / 2;

    // Avaliação da média
    let resultado;
    if (media >= 7) {
        resultado = "Aprovado";
    } else if (media < 5) {
        resultado = "Reprovado";
    } else {
        resultado = "Recuperação";
    }

    // Exibir o resultado no HTML
    document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)} - Situação: ${resultado}`;
}