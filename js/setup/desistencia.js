import { data_atual } from "../setup/gera_data.js"

$("#desistencia").click(function(){
    setTimeout(function(){desistir()}, 300)
    setTimeout(function() {registrando_desistencia()}, 500)
    setTimeout(function(){limpando_desistencia()}, 800)
    setTimeout(function() {
        window.close()
    }, 1000)
})

var texto = []

function desistir(){
    var motivo = prompt("Informe o motivo da desistência!")
    if(motivo == ""){
        alert("campo vazio")
    } else {
        texto.push(motivo)
        var base = new Date();
        var hora = base.getHours()
        var minutos = base.getMinutes()
        let quarto = sessionStorage.getItem("quarto")
        var box = JSON.parse(localStorage.getItem("dadosQuarto"))
        let dataAtual = data_atual()
        let codigo_ocupacao = gera_codigo()
        let entrada = box[0].tempo
        let saida = `${hora}:${minutos}`
        localStorage.setItem(`codigo${quarto}`, codigo_ocupacao)
        dados = {
            data: dataAtual,
            codigo: codigo_ocupacao,
            quarto: quarto,
            entrada: entrada,
            saida: saida,
            total: "0"
        }
        $.post("https://demomotelapi.herokuapp.com/ocupacoes/", dados, function(){
            console.log("Relatório Criado")
        })
    }
}

function limpando_desistencia(){
    var quartx = sessionStorage.getItem("quarto")
    $.get("https://demomotelapi.herokuapp.com/comanda/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        var id = dados[0].id

        $.ajax({
            url: "https://demomotelapi.herokuapp.com/comanda/" + id + "/",
            type: 'DELETE'
        });
    })
    $.get("https://demomotelapi.herokuapp.com/patio/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        if(dados.length == 0){
            console.log("Pátio Vázio!")
        } else {
            var id = dados[0].id
            $.ajax({
                url: "https://demomotelapi.herokuapp.com/patio/" + id + "/",
                type: 'DELETE'
            });
        }
    })
    localStorage.removeItem(quartx)
    localStorage.removeItem("dadosQuarto")
    sessionStorage.removeItem(quartx)
    sessionStorage.removeItem("quarto")
}

function registrando_desistencia(){
    var quarto = sessionStorage.getItem("quarto")
    var codigo = sessionStorage.getItem(`codigo${quarto}`)
    var caixa = localStorage.getItem("caixa")
    var motiv = texto[texto.length - 1]
    
    dados = {
        codigo: codigo,
        quarto: quarto,
        caixa: caixa,
        motivo: motiv
    }

    $.post("https://demomotelapi.herokuapp.com/desistencia/", dados, function(){
        console.log("Registrado...")
    })
}