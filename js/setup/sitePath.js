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

        let status = localStorage.getItem('caixa')
        if(status == 'fechado'){
            $("#abrirCaixa").removeAttr()
            $("#usarFundoCaixa").removeAttr()
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
