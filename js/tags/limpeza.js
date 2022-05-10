export function limpeza(q, t, x, y, z) {

    // CSS
    $(".cardBox .card:nth-child(1)").css({
        "background": "#FFFF00",
        "opacity": 0.5})

    $("[name=1]").css('display', 'none')

    // Botões Inferiores
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Encerrar Limpeza')

    if(t != 'btn limpeza'){}

    // Hora Atual
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    // Definições
    $("#numquarto").text(q)
    $("#tipo").text('limpeza')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}h`)
}
