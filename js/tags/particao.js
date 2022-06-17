export function index(){
    // Data e Hora
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    var segundos = horaEntrada.getSeconds()
    var datahora = `${String(hora)}:${String(minutos)}:${String(segundos)}`
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
