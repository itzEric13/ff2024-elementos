function mostrarDia() {
    let numero = parseInt(document.getElementById('numero').value);
    let dia;

    if (numero === 1) {
        dia = "Dia: Domingo";
    } else if (numero === 2) {
        dia = "Dia: Segunda-feira";
    } else if (numero === 3) {
        dia = "Dia: Terça-feira";
    } else if (numero === 4) {
        dia = "Dia: Quarta-feira";
    } else if (numero === 5) {
        dia = "Dia: Quinta-feira";
    } else if (numero === 6) {
        dia = "Dia: Sexta-feira";
    } else if (numero === 7) {
        dia = "Dia: Sábado";
    } else {
        dia = "Número inválido. Por favor, digite um número de 1 a 7.";
    }

    document.getElementById('resultado').innerText = dia;
}