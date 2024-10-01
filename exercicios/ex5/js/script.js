let num1 = parseFloat(prompt("Digite um número"));
       let num2 = parseFloat(prompt("Digite um número"));
   
       let maior ;
       
       if (num1>num2) {
        maior =  num1 ;
       }
       else if  (num2>num1){
        maior =  num2 ;
       }
 
       else {
        maior = "Os número são iguais."
       }
 
       document.getElementById('resultado').innerText = `O maior número é: ${maior}`;