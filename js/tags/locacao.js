export function locado(q, t,  x, y, z) {

    // CSS
    $("#quarto" + q).css({
        "background-color": "#FF0000",
        "opacity": 0.5})
    
    $("[name=form_main" + q + "]").css({
        'margin-bottom': '-60px',
        'padding-top': '50px'
    })

    $("#tipo" + q).css('font-size', '25px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#contagem" + q). removeAttr('style')

    // Botões Inferiores
    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Trocar Suíte')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    if(t != 'btn locado'){
        $("#" + z).css('visibility', 'hidden')
        $("#" + z).val('Cancelar Reserva')
    } 

    // Preço
    var tipoQuarto = $('#tipo' + q).text()

    switch (tipoQuarto){
        case 'AR':
            if(t === 'btn locado'){
                $.get("https://defmoteapi.herokuapp.com/quartos/", function(retorno){
                    var dados = retorno.filter(quartos => quartos.tipo_quarto == 'AR')
                    dados.forEach(function(resultado){
                        $("#valor-quarto").text(resultado.valor_locacao)
                    })
                })
            }
            break

        case 'VENTILADOR':
            if(t === 'btn locado'){
                $.get("https://defmoteapi.herokuapp.com/quartos/", function(retorno){
                    var dados = retorno.filter(quartos => quartos.tipo_quarto == 'VENTILADOR')
                    dados.forEach(function(resultado){
                        $("#valor-quarto").text(resultado.valor_locacao)
                    })
                })
            }
            break
    }

    // Hora Atual
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    // Definições
    $("#numquarto").text(q)
    $("#tipo").text('locado')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}h`)
    $("#imagemQuarto" + q).css('border', '2px solid rgb(255, 0, 0)')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(255, 0, 0), 0 0 1em #000')
}
