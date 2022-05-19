$(document).ready(function(){
    
    var usuarioLogado = localStorage.getItem('usuarioLogado');

    if (!usuarioLogado) {
        window.location = "../index.html"
    }

})

$("#fecharCaixa").click(function(){
    localStorage.removeItem('usuarioLogado')
    document.location.reload(true)
})
