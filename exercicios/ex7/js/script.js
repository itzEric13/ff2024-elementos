let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let num3 = parseFloat(prompt("Digite o terceiro número:"));
   
        let maior;
        let menor;
 
        // Verifica se todos os números são iguais
        if (num1 === num2 && num2 === num3) {
            maior = "Todos os números são iguais.";
            menor = "Todos os números são iguais.";
        } else {}
 
            // Determina o maior número
            if (num1 >= num2 && num1 >= num3) {
                maior = num1;
            } else if (num2 >= num1 && num2 >= num3) {
                maior = num2;
            } else {
                maior = num3;
            }
 
            // Determina o menor número
            if (num1 <= num2 && num1 <= num3) {
                menor = num1;
            } else if (num2 <= num1 && num2 <= num3) {
                menor = num2;
            } else {
                menor = num3;
            }
       
 
        document.getElementById('resultado').innerText = `O maior é: ${maior} e o menor é: ${menor}`;