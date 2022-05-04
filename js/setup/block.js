$(".locado").click(function(){

    const quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")

    setTimeout(function() {bloqueio(quarto, flags[0], flags[1], flags[2])}, 602000)
})

function bloqueio(quarto, x, y, z){
    
    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Encerrar')

    $("#" + y).css('visibility', 'hidden')
    $("#" + y).val('Encerrar')

}
