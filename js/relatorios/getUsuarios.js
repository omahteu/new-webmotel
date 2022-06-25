const url = "https://demomotelapi.herokuapp.com/usuarios/"

$(document).ready( () => {
    $.get(url, (resultado) => {
        resultado.forEach( (item) => {
            $('#selectUsuarios').append('<option>' + item.nome + '</option>');
        });
    })
})
