$(document).ready( () => {
    bloqueioImpressaoRelatorios()
})

function bloqueioImpressaoRelatorios(){
    let info = localStorage.getItem("usuarioLogado")

    if(info == 'caixa'){
        $("#relatorios_rapidos").css('display', 'none')
    }
}