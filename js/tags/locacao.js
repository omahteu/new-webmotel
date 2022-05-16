export function locado(q, t,  x, y, z) {

    // CSS
    $(".cardBox .card:nth-child(1)").css({
        "background": "#FF0000",
        "opacity": 0.5})
    
    $("[name=1]").css('display', 'none')

    // Botões Inferiores
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Trocar Suíte')

    $(".acoes2").css('display', 'inline-block')
    $(".acoes2").val('Encerrar')

    if(t != 'btn locado'){} 

    // Preço
    var tipoQuarto = $('#tipo' + q).text()

    switch (tipoQuarto){
        case 'AR':
            if(t === 'btn locado'){
                $.get("https://demomotelapi.herokuapp.com/quartos/", function(retorno){
                    var dados = retorno.filter(quartos => quartos.tipo_quarto == 'AR')
                    dados.forEach(function(resultado){
                        $("#valor-quarto").text(resultado.valor_locacao)
                    })
                })
            }
            break

        case 'VENTILADOR':
            if(t === 'btn locado'){
                $.get("https://demomotelapi.herokuapp.com/quartos/", function(retorno){
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
    $("#quarto_painel").text(q)
    $("#tipo").text('locado')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}`)
    //$("#imagemQuarto" + q).css('border', '2px solid rgb(255, 0, 0)')
    //$("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(255, 0, 0), 0 0 1em #000')
}
