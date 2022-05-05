$("#salvarFormPostEmail").click(function(){

    var usuario = $("#usuario").val()
    var senha = $("#senha").val()
    var smtp = $("#smtp").val()
    var porta = $("#porta").val()
    var timeout = $("#timeout").val()
    var destino = $("#destino").val()
    var contabilidade = $("#contabilidade").val()
    var gridCheck = $("#gridCheck").val()

    var dados = {
        usuario: usuario,
        senha: senha,
        smtp: smtp,
        porta: porta,
        timeout: timeout,
        email_destino: destino,
        email_contabilidade: contabilidade,
        autenticacao: gridCheck
    }

    $.post("https://defmoteapi.herokuapp.com/emails/", dados, function(msg){
        alert("Email Registrado!")

        document.getElementById('formPostEmail').reset()
    })
})
