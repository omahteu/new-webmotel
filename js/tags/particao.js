import { hora_atual } from "../setup/gera_hora.js"

const url = "https://demomotelapi.herokuapp.com/infos/"

function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
}

export function index(){
    var datahora = hora_atual()
    var valor = $("#valor-quarto").text()
    var quarto = $("#numquarto").text()
    var tipo = $("#tipo").text()
    var dados = {
        datahora: datahora,
        valor: valor,
        quarto: quarto,
        tipo: tipo
    }
    $.get(url, (retorno) => {

        if(retorno.length == 0){
            $.post(url, dados,  () => {})
        }

        retorno.forEach( (item) => {

            if(item.quarto == quarto){
                console.log('')
            } 
            
            if(item.quarto != quarto){
                $.post(url, dados,  () => {})
            }
        })
    })
}
