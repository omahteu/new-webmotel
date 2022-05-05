$(document).ready(function(){

    bloqueioImpressaoRelatorios()

})

function bloqueioImpressaoRelatorios(){
    let info = localStorage.getItem("usuarioLogado")

    if(info == 'caixa'){

        $("#peQuartos").attr("href", "http://www.google.com.br/")
        $("#peProdutos").attr("href", "http://www.google.com.br/")
        $("#peIgs").attr("href", "http://www.google.com.br/")
        $("#peEmails").attr("href", "http://www.google.com.br/")
        $("#peCamareiras").attr("href", "http://www.google.com.br/")
        $("#pePernoite").attr("href", "http://www.google.com.br/")
        $("#peCartoes").attr("href", "http://www.google.com.br/")
        
    }
}