let num1 = parseFloat(prompt("Digite um número"));
let num2 = parseFloat(prompt("Digite um número"));
let num3 = parseFloat(prompt("Digite um número"));

let maior ;

if (num1 >= num2 && num1 >= num3) {
         maior = "primeiro número digitado: " + num1;
     } else if (num2 >= num1 && num2 >= num3) {
         maior = "segundo número digitado: " + num2;
     }
     if (num1 === num2 && num2 === num3) {
         maior = "Todos os números são iguais.";}

     else {
         maior = "terceiro número digitado: " +  num3;
     }

document.getElementById('resultado').innerText = `O maior é o ${maior}`;