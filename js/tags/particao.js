
function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
}

export function index(){
    // Data e Hora
    var horaEntrada = new Date();
    var hora = zeroFill(horaEntrada.getHours())
    var minutos = zeroFill(horaEntrada.getMinutes())
    var datahora = `${String(hora)}:${String(minutos)}`
    var valor = $("#valor-quarto").text()
    var quarto = $("#numquarto").text()
    var tipo = $("#tipo").text()
    var dados = {
        datahora: datahora,
        valor: valor,
        quarto: quarto,
        tipo: tipo
    }
    $.get("https://demomotelapi.herokuapp.com/infos/", function(retorno){

        if(retorno.length == 0){
            $.post("https://demomotelapi.herokuapp.com/infos/", dados, function(){})
        }

        retorno.forEach(function(item){

            if(item.quarto == quarto){
                console.log('')
            } 
            
            if(item.quarto != quarto){
                $.post("https://demomotelapi.herokuapp.com/infos/", dados, function(){})
            }
        })
    })
}
