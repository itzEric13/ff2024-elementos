// crie dois inputs de tipo numero que ao clicar no botão somar, informe no alert os valores somados 

function somar () {
    let numero1 = document.querySelector('.num1').value;
    let numero2 = document.querySelector('.num2').value;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    let soma = numero1 + numero2;

    pResutado = document.querySelector("#resultado");
    pResutado.innerHTML = `${numero1} + ${numero2} = ${soma}`;

}
let botao = document.querySelector("button");
botao.addEventListener("click", somar);