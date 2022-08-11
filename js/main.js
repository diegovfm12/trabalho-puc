

let formulario = document.querySelector("form");
var Login = document.getElementById("login");
var senha = document.getElementById("senha");

formulario.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(login.value + senha.value)
    if (Login.value == "" && senha.value == "") {
        window.location.href = "repohome.html";
        localStorage.setItem("acesso", true);
    } else {
        alert("Usuário ou senha inválidos!")
    }
})



