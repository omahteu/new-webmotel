$(document).ready(function(){
    produtoCodigo()
    $.get("https://demomotelapi.herokuapp.com/produtos/", (resultado) => {

        resultado.forEach(function(item){
            var estoque = item.quantidade
            if(estoque.length != 0){
                $('#checkbox_produto').append('<option>' + item.descricao + '</option>');
            }
            
        });
        $('#checkbox_produto').change(function() {
            var option = $('#checkbox_produto').find(":selected").index()
            var db = option - 1
            $("#descricao").val(resultado[db].descricao)
            $("#valor_unitario").val('R$ ' + resultado[db].valorunitario)
            $('#quantidade').keyup(function(){
                var qtd = $(this).val()
                var total = parseFloat(resultado[db]['valorunitario']) * parseInt(qtd)
                $("#valor_total").val('R$ ' + total)
            });
        });
})
})

function produtoCodigo(){
    $('#codigo_produto').keypress( (event) => {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $.get("https://demomotelapi.herokuapp.com/produtos/", (resultado) => {
                var db = 0
                $("#descricao").val(resultado[db].descricao)
                $("#valor_unitario").val('R$ ' + resultado[db].valorunitario)
                $('#quantidade').keyup(function(){
                    var qtd = $(this).val()
                    var total = Number(resultado[db]['valorunitario']) * Number(qtd)
                    $("#valor_total").val('R$ ' + total)
                });
            })
        }
    });
}
