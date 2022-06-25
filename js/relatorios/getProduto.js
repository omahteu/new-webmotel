const url = "https://defmoteapi.herokuapp.com/produtos/"

$(document).ready( () => {
    produtoCodigo()
    $.get(url, (resultado) => {
    resultado.forEach( (item) => {
        $('#cod').append('<option>' + item.descricao + '</option>');
    });
    codProduto
    $('#cod').change( () => {
        var option = $('#cod').find(":selected").index()
        var db = option - 1
        $("#des").val(resultado[db].descricao)
        $("#vun").val('R$ ' + resultado[db].valorunitario)
        $('#qtd').keyup( () => {
            var qtd = $(this).val()
            var total = parseFloat(resultado[db]['valorunitario']) * Number(qtd)
            $("#tot").val('R$ ' + total)
        });
    });
})
})

function produtoCodigo(){
    $('#codProduto').keypress( (event) => {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $.get(url, (resultado) => {
                var db = 0
                $("#des").val(resultado[db].descricao)
                $("#vun").val('R$ ' + resultado[db].valorunitario)
                $('#qtd').keyup( () => {
                    var qtd = $(this).val()
                    var total = parseFloat(resultado[db]['valorunitario']) * Number(qtd)
                    $("#tot").val('R$ ' + total)
                });
            })
        }
    });
}
