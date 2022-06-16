$(document).ready(function(){
    historicoUrls()
})

function historicoUrls(){
    let info = localStorage.getItem("usuarioLogado")
    if(info === 'caixa'){
        $("#home").attr('href', './home.html')
        $("#urlCadastrosCaixa").attr('href', './homecaixa.html')
        $("#urlQuartosCaixa").attr('href', './homecaixa.html')
        $("#urlCaixaCaixa").attr('href', './homecaixa.html')
        $("#abrirCaixa").css('display', 'none')
        $("#usarFundoCaixa").css('display', 'none')
        let status = sessionStorage.getItem('caixa')
        if(status == 'fechado'){
            $("#fecharCaixa").css('display', 'none')
        }
    }
    if(info === 'admin'){
        $("#home").attr('href', './home.html')
        $("#urlCadastrosCaixa").attr('href', './home.html')
        $("#urlQuartosCaixa").attr('href', './home.html')
        $("#urlConfiguracoesAdmin").attr('href', './home.html')
    }
}
