export function manutencao(q, x, y, z) {

    // CSS
    $(".cardBox .card:nth-child(1)").css({
        "background": "rgb(169, 169, 169)",
        "opacity": 0.5})
    /*
    $("[name=form_main" + q + "]").css({
        'margin-bottom': '-60px',
        'padding-top': '50px'
    })*/
    
    $("[name=1]").css('visibility', 'hidden')

    // Botões Inferiores
    
    $("[name=acoes]").css('visibility', 'visible')
    $("[name=acoes]").val('Iniciar Faxina')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Disponibilizar Quarto')

    $("#" + z).css('visibility', 'visible')
    $("#" + z).val('Ligar Luz')

    // Hora Atual
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    // Definições
    $("#numquarto").text(q)
    $("#tipo").text('manutencao')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}h`)
    //$("#imagemQuarto" + q).css('border', '2px solid rgb(169, 169, 169)')
    //$("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(169, 169, 169), 0 0 1em #000')
}
