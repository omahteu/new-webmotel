export function desfazer(q, x, y, z) {
    $('.cardBox .card:nth-child(1)'). removeAttr('style')

    $("[name=1]").css('visibility', 'visible')

    //$("[name=form_main" + q + "]"). removeAttr('style')

    $(".acoes1"). removeAttr('style')
    $(".acoes1").val('')

    $(".acoes2"). removeAttr('style')
    $(".acoes2").val('')

    $(".acoes3"). removeAttr('style')
    $(".acoes3").val('')

    //$("#tempo").text("00:00:00")
    $("#numquarto").text('Quarto: 0')
    $("#tipo").text('livre')
    $("#entrada").text('Entrada: 0:0h')
    $("#valor-quarto").text('Valor: R$ 0')
    $("#intervalo").text("0")
    //$("#imagemQuarto" + q).css('border', '2px solid #4cae4c')
    //$("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em #4cae4c, 0 0 1em #4cae4c')

    var prateleiraResultado = document.getElementById('listaProdutosComprados')
	prateleiraResultado.innerHTML = '';
    
    var garagemResultado = document.getElementById('listaveiculosguardados')
	garagemResultado.innerHTML = '';
}
