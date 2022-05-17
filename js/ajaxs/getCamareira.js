$(document).ready(function(){
    $.get("https://demomotelapi.herokuapp.com/camareiras/", function(resultado){

        resultado.forEach(function(item){
            $('#comboCamareiras').append('<option>' + item.nome + '</option>');
            $('#selecionaCamareira').append('<option>' + item.nome + '</option>');
        });
    })
})
