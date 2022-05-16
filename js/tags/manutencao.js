export function manutencao(q, x, y, z) {

    // CSS
    $(".cardBox .card:nth-child(1)").css({
        "background": "rgb(169, 169, 169)",
        "opacity": 0.5})
    
    $("[name=1]").css('display', 'none')

    // Botões Inferiores
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Iniciar Faxina')

    $(".acoes2").css('display', 'inline-block')
    $(".acoes2").val('Disponibilizar Quarto')

    $(".acoes3").css('display', 'inline-block')
    $(".acoes3").val('Ligar Luz')

    // Hora Atual
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    // Definições
    $("#numquarto").text(q)
    $("#quarto_painel").text(q)
    $("#tipo").text('manutencao')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}`)
}
