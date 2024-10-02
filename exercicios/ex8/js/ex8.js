function calcularResultado() {


    let nome = document.querySelector('#nome').value;

    let valorHora =
        parseFloat(document.querySelector('#valorHora').value);

    let quantHora =
        parseFloat(document.querySelector('#quantHora').value);

    let resultado = valorHora * quantHora;



    document.querySelector("#resultado").innerHTML =
        `O valor do salário do(a) ${nome} é ${resultado.toFixed(2)}`;


}

document.querySelector('.btn').addEventListener('click', calcularResultado);