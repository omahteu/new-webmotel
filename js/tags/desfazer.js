export function desfazer(q, x, y, z) {
    $('#quarto' + q). removeAttr('style')

    $("[id=botaoq" + q + "]"). removeAttr('style')

    $("[name=form_main" + q + "]"). removeAttr('style')

    $("#" + x). removeAttr('style')
    $("#" + x).val('')

    $("#" + y). removeAttr('style')
    $("#" + y).val('')

    $("#" + z). removeAttr('style')
    $("#" + z).val('')

    $("#tempo").text("00:00:00")
    $("#numquarto").text('0')
    $("#tipo").text('0')
    $("#entrada").text('')
    $("#valor-quarto").text('0')
    $("#intervalo").text("0")
    $("#imagemQuarto" + q).css('border', '2px solid #4cae4c')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em #4cae4c, 0 0 1em #4cae4c')

    var prateleiraResultado = document.getElementById('lprodutos')
	prateleiraResultado.innerHTML = '';
    
    var garagemResultado = document.getElementById('garagem')
	garagemResultado.innerHTML = '';
}
