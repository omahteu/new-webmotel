$(document).ready(function(){
    $.get("https://demomotelapi.herokuapp.com/usuarios/", function(resultado){
        resultado.forEach(function(item){
            $('#selectUsuarios').append('<option>' + item.nome + '</option>');
        });
    })
})