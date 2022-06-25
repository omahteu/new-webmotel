const url = "https://defmoteapi.herokuapp.com/painel/"

$("#registrar").click( () => {
    registroObs()
})

function registroObs(){
    var quarto =  $("#numquarto").text()
    var pessoas = $("#pes").val()
    var observacao = $("#obs").val()
    dados = {
        quarto: quarto,
        pessoas: pessoas,
        texto: observacao
    }
    $.post(url, dados, () => {
        alert('OBS')
        exibirObs()
    })
    document.getElementById('painel').reset()
}

function exibirObs(){
    $.get(url, (retorno) => {
        var nQuarto =  $("#numquarto").text()
        var dados = retorno.filter(quartos => quartos.quarto == nQuarto)
        dados.forEach(elemento => {
            $("#numquarto").text(elemento.quarto)
            $("#pes").val(elemento.pessoas)
            $("#muralObs").val(elemento.texto)
        });
    })
}
