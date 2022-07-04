import { minuto_para_segundo } from "../conversores/minutos_segundos.js"

$(".locado").click(function() {
    $.get("https://demomotelapi.herokuapp.com/tempos/", function(e){
        let tempo_troca = parseInt(e[0].troca)
        var segundos_troca = minuto_para_segundo(tempo_troca)


        const quarto = $("#numquarto").text()
        var flags = $("#intervalo").text().split(",")
        setTimeout( () => {bloqueio(quarto, flags[0], flags[1], flags[2])}, segundos_troca)
    })
})

function bloqueio(quarto, x, y, z){
    $(".acoes1").css('visibility', 'hidden')
    $(".acoes1").val('Encerrar')
    $(".acoes2").css('visibility', 'visible')
    $(".acoes2").val('Encerrar')
}
