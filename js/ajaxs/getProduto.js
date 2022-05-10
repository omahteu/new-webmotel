$(document).ready(function(){

    produtoCodigo()
    
    $.get("https://demomotelapi.herokuapp.com/produtos/", (resultado) => {

    resultado.forEach(function(item){
        $('#checkbox_produto').append('<option>' + item.descricao + '</option>');
    });
    
    //codProduto

    $('#checkbox_produto').change(function() {
        var option = $('#checkbox_produto').find(":selected").index()

        var db = option - 1
    
        $("#descricao").val(resultado[db].descricao)
        $("#valor_unitario").val('R$ ' + resultado[db].valorunitario)
    
        $('#quantidade').keyup(function(){
            var qtd = $(this).val()
            var total = Number(resultado[db]['valorunitario']) * Number(qtd)
            $("#valor_total").val('R$ ' + total)
        });
    });
})
})

function produtoCodigo(){

    $('#codProduto').keypress( (event) => {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){

            $.get("https://defmoteapi.herokuapp.com/produtos/", (resultado) => {

                var db = 0
    
                $("#des").val(resultado[db].descricao)
                $("#vun").val('R$ ' + resultado[db].valorunitario)
            
                $('#qtd').keyup(function(){
                    var qtd = $(this).val()
                    var total = Number(resultado[db]['valorunitario']) * Number(qtd)
                    $("#tot").val('R$ ' + total)
                });
            })

        }
    
    });
}
