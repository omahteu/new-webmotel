$(".locado").click(function() {
<<<<<<< HEAD
    const quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    setTimeout( () => {bloqueio(quarto, flags[0], flags[1], flags[2])}, 200)
=======
    $.get("https://demomotelapi.herokuapp.com/tempos/", function(e){
        let tempo_troca = e[0].troca
        console.log(tempo_troca)
        console.log(typeof(tempo_troca))
        const quarto = $("#numquarto").text()
        var flags = $("#intervalo").text().split(",")
        setTimeout( () => {bloqueio(quarto, flags[0], flags[1], flags[2])}, 9000)
    })
>>>>>>> 27d2a44b0508498360e9ac7caa9255b2c2a8d6b7
})

function bloqueio(quarto, x, y, z){
    $(".acoes1").css('visibility', 'hidden')
    $(".acoes1").val('Encerrar')
    $(".acoes2").css('visibility', 'visible')
    $(".acoes2").val('Encerrar')
}
