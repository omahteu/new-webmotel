$(document).ready( () => {
    bloqueioRelatorios()
})

// verificar o historico da pagina para voltar para o mesmo lugar

function bloqueioRelatorios(){
    let info = localStorage.getItem("usuarioLogado")
    if(info === 'caixa'){
        $("#relQuartos").css('display', 'none')
        $("#relIg").css('display', 'none')
        $("#relEmail").css('display', 'none')
        $("#relOcupacoes").css('display', 'none')
        $("#relCartoes").css('display', 'none')
    }
}
