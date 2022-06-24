const url = "https://demomotelapi.herokuapp.com/usuarios/"

$(document).ready(function(){
    $.get(url, (resultado) => {
        resultado.forEach(function(item){
            $('#selectUsuarios').append('<option>' + item.nome + '</option>');
        });
    })
})
