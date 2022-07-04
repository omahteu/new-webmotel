$(".locado").click(function() {
    $.get("https://demomotelapi.herokuapp.com/tempos/", function(e){
        let tempo_troca = e[0].troca
        console.log(tempo_troca)
        console.log(typeof(tempo_troca))
        const quarto = $("#numquarto").text()
        var flags = $("#intervalo").text().split(",")
        setTimeout( () => {bloqueio(quarto, flags[0], flags[1], flags[2])}, 9000)
    })
})

function bloqueio(quarto, x, y, z){
    $(".acoes1").css('visibility', 'visible')
    $(".acoes1").val('Encerrar')
    $(".acoes2").css('visibility', 'hidden')
    $(".acoes2").val('Encerrar')
}
