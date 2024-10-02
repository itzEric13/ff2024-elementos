function maiorNumero(){

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
   
        let maior;
        let menor;
 
        
        if (num1 === num2 && num2 === num3) {
            maior = "Todos os números são iguais.";
            menor = "Todos os números são iguais.";
        } else {}
 
        
            if (num1 >= num2 && num1 >= num3) {
                maior = num1;
            } else if (num2 >= num1 && num2 >= num3) {
                maior = num2;
            } else {
                maior = num3;
            }
 
           
            if (num1 <= num2 && num1 <= num3) {
                menor = num1;
            } else if (num2 <= num1 && num2 <= num3) {
                menor = num2;
            } else {
                menor = num3;
            }
       
 
        document.getElementById('resultado').innerText = `O maior é: ${maior} e o menor é: ${menor}`;
}