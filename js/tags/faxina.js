export function faxina(q, t, x, y, z) {

    // CSS
    $(".cardBox .card:nth-child(1)").css({
        "background": "#FFE4C4",
        "opacity": 0.5})


    $("[name=1]").css('display', 'none')

    // Botões Inferiores
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Disponibilizar Quarto')

    if(t != 'btn faxina'){
        $(".acoes2").css('display', 'none')
        $(".acoes2").val('Alterar P/ Locação')

        $(".acoes3").css('display', 'none')
        $(".acoes3").val('Cancelar Reserva')
    } 

    // Hora Atual
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    // Definições
    $("#numquarto").text(q)
    $("#tipo").text('faxina')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}`)
    //$("#imagemQuarto" + q).css('border', '2px solid rgb(255, 228, 196)')
    //$("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(255, 228, 196), 0 0 1em #000')
}
