function verificarLogin() {
    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    if (login === senha) {
        alert("A senha não deve ser igual ao login!");
        
        //document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('#login').value = "";
        document.querySelector('#senha').value = "";

    }
    else{
        alert("Logado com sucesso!");
    }

}
document.querySelector('button')
    .addEventListener('click', verificarLogin)