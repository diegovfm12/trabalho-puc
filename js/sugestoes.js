var form = document.getElementById("form")
function sendMail() {
    var params = {  
        name : document.getElementById("nome").value,
        surname : document.getElementById("sobrenome").value,
        tiporegistro : document.getElementById("tiporegistro").value,
        setoresempresa : document.getElementById("setoresempresa").value,
        assunto : document.getElementById("assunto").value,
        message : document.getElementById("mensagem").value
    }
    emailjs.send("service_9zev3dp", "template_wzv6tzr", params).then(function (res) {
        console.log(res.status)
        if(res.status === 200) {
         alert("Enviado com sucesso!")
         form.reset()
        }
    })
}