function exibirCumprimento(){
    let turno = document.querySelector('#turno').value;

    switch (turno){
    case "M" :
       document.querySelector('section>h2').innerHTML = "Bom dia!" ;
       break;
    case "V": 
    document.querySelector('section>h2').innerHTML = "Boa tarde!" ;
    break;
    case "N" :
        document.querySelector('section>h2').innerHTML = "Boa noite!" ;
        break;
    default:
            document.querySelector('section>h2').innerHTML = "Opção invalida" ;
            break ;
    }
}

document
    .querySelector('button')
    .addEventListener('click', exibirCumprimento);