$(document).ready(function(){

    $.get("https://defmoteapi.herokuapp.com/quartos/", function(resultado){

        for(var i = 0; i < resultado.length; i++){

            var num = resultado[i].numero
            var suite = resultado[i].tipo_quarto
            var di = i + 1
   
            document.getElementById('imagemQuarto').id = 'imagemQuarto' + num 

            document.getElementById('quarto').id = "quarto" + num

            $("#tipo" + di).text(suite)

        }
    })
})
