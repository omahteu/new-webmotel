$(document).ready(function(){

    historicoUrls()

})

function historicoUrls(){
    let info = localStorage.getItem("usuarioLogado")

    if(info === 'caixa'){
        
        $("#urlRelatoriosCaixa").attr('href', './homecaixa.html')
        $("#urlCadastrosCaixa").attr('href', './homecaixa.html')
        $("#urlQuartosCaixa").attr('href', './homecaixa.html')
        $("#urlCaixaCaixa").attr('href', './homecaixa.html')
    }

    if(info === 'admin'){

        $("#urlRelatoriosCaixa").attr('href', './home.html')
        $("#urlCadastrosCaixa").attr('href', './home.html')
        $("#urlQuartosCaixa").attr('href', './home.html')
        $("#urlConfiguracoesAdmin").attr('href', './home.html')
    }
}

