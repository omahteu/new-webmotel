import { link } from "../relatorios/index.js"

$("#salvarFormPostEmail").click( () => {

    let usuario = $("#usuarioEmail").val()
    let senha = $("#senhaEmail").val()
    let smtp = $("#smtpEmail").val()
    let porta = $("#portaEmail").val()
    let timeout = $("#timeoutEmail").val()
    let destino = $("#emailDestinoEmail").val()
    let contabilidade = $("#emailContabilidadeEmail").val()
    let gridCheck = $("#autenticacaoEmail").val()

    let dados = {
        usuario: usuario,
        senha: senha,
        smtp: smtp,
        porta: porta,
        timeout: timeout,
        email_destino: destino,
        email_contabilidade: contabilidade,
        autenticacao: gridCheck
    }

    $.post(link[9], dados,  () => {
        alert("Email Registrado!")

        document.getElementById('formCadastros').reset()
    })
})
