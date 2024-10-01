let nome = (prompt("Digite o seu nome:"));
        let salarioHora = parseFloat(prompt("Qual é o seu salário por hora ? "));
        let horaTrabalhada = parseFloat(prompt("Quantas horas você trabalha por mês ?"));
 
        let salario = salarioHora*horaTrabalhada;
   
       
 
    document.write("<br> <b>Nome: "+nome);
    document.write("<br><b>Salário por hora: "+salarioHora);
    document.write("<br><b>Horas trabalhadas no mês: "+horaTrabalhada);    
    document.write("<br><b>Salário mensal:" +salario);
    