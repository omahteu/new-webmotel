$("#registrar").click(function(){
    

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
    
    $.post("https://defmoteapi.herokuapp.com/painel/", dados, () => {
        alert('OBS')
        exibirObs()
        
    })

    document.getElementById('painel').reset()
}

function exibirObs(){

    $.get("https://defmoteapi.herokuapp.com/painel/", (retorno) => {

        var nQuarto =  $("#numquarto").text()
        
        var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

        dados.forEach(elemento => {
            $("#numquarto").text(elemento.quarto)
            $("#pes").val(elemento.pessoas)
            $("#muralObs").val(elemento.texto)
        });
    })
}
