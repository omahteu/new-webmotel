import { data_atual } from "../setup/gera_data.js"
import { hora_atual } from "../setup/gera_hora.js"

const url_ocupacoes = "https://demomotelapi.herokuapp.com/ocupacoes/"
const url_comanda = "https://demomotelapi.herokuapp.com/comanda/"
const url_patio = "https://demomotelapi.herokuapp.com/patio/"
const url_desistencia = "https://demomotelapi.herokuapp.com/desistencia/"

$("#desistencia").click( () => {
    setTimeout( () => {desistir()}, 300)
    setTimeout( () => {registrando_desistencia()}, 500)
    setTimeout( () => {limpando_desistencia()}, 800)
    setTimeout( () => {
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
        let quarto = sessionStorage.getItem("quarto")
        var box = JSON.parse(localStorage.getItem("dadosQuarto"))
        let dataAtual = data_atual()
        let codigo_ocupacao = gera_codigo()
        let entrada = box[0].tempo
        let saida = hora_atual()
        localStorage.setItem(`codigo${quarto}`, codigo_ocupacao)
        dados = {
            data: dataAtual,
            codigo: codigo_ocupacao,
            quarto: quarto,
            entrada: entrada,
            saida: saida,
            total: "0"
        }
        $.post(url_ocupacoes, dados, () => {
            console.log("Relatório Criado")
        })
    }
}

function limpando_desistencia(){
    var quartx = sessionStorage.getItem("quarto")
    $.get(url_comanda, (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        var id = dados[0].id
        $.ajax({
            url: url_comanda + id + "/",
            type: 'DELETE'
        });
    })
    $.get(url_patio, (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        if(dados.length == 0){
            console.log("Pátio Vázio!")
        } else {
            var id = dados[0].id
            $.ajax({
                url: url_patio + id + "/",
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
    $.post(url_desistencia, dados, () => {
        console.log("Registrado...")
    })
}
