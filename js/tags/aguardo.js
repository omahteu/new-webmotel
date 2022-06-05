export function aguardando(q, t, x, y, z) {
    // CSS
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FFFFFF"
    })
    
    $("[name=1]").css('display', 'none')

    // Botões Inferiores
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Iniciar Limpeza')

    if(t != 'btn aguardando'){}

    // Hora Atual
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    // Definições
    $("#numquarto").text(q)
    $("#quarto_painel").text(q)
    $("#tipo").text('aguardando')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}h`)
}
