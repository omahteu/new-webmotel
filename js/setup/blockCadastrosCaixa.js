$(document).ready(function(){

    bloqueioCadastros()

})

// verificar o historico da pagina para voltar para o mesmo lugar

function bloqueioCadastros(){
    let info = localStorage.getItem("usuarioLogado")

    if(info === 'caixa'){
        
        $("[name='cadQuartos']").css('display', 'none')
        $("[name='cadIgs']").css('display', 'none')
        $("[name='cadEmail']").css('display', 'none')
        $("[name='cadCamareiras']").css('display', 'none')
        $("[name='cadPernoite']").css('display', 'none')
        $("[name='cadCartoes']").css('display', 'none')
    }
}
