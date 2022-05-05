$(document).ready(function(){

    produtoCodigo()
    
    $.get("https://defmoteapi.herokuapp.com/produtos/", (resultado) => {

    resultado.forEach(function(item){
        $('#cod').append('<option>' + item.descricao + '</option>');
    });
    
    codProduto

    $('#cod').change(function() {
        var option = $('#cod').find(":selected").index()

        var db = option - 1
    
        $("#des").val(resultado[db].descricao)
        $("#vun").val('R$ ' + resultado[db].valorunitario)
    
        $('#qtd').keyup(function(){
            var qtd = $(this).val()
            var total = Number(resultado[db]['valorunitario']) * Number(qtd)
            $("#tot").val('R$ ' + total)
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
