$(document).ready(function(){

    $.get("https://defmoteapi.herokuapp.com/quartos/", function(resultado){

        resultado.forEach(elemento => {
            
            var num = elemento.numero
            var suite = elemento.tipo_quarto
            var di = i + 1
   
            document.getElementById('imagemQuarto').id = 'imagemQuarto' + num 

            document.getElementById('quarto').id = "quarto" + num

            $("#tipo" + di).text(suite)
        });
    })
})
