import { hora_atual } from "../setup/gera_hora.js"
import { horas_para_minutos } from "../setup/gera_minutos.js"
import { data_atual } from "../setup/gera_data.js"

var horas = []

$(document).ready(function() {
    auditando()
})

window.onbeforeunload = () => {
    saindo()
    calc()
}

function auditando(){
    var agora = hora_atual()
    horas.push(agora) 
}

function saindo(){
    var sair = hora_atual()
    horas.push(sair)
}

function calc(){
    var minutos_inicial = String(horas[0])
    var minutos_final = String(horas[1])
    var hora_inicial_formatada = minutos_inicial.split(":")
    var hora_final_formatada = minutos_final.split(":")
    var inicial_minutos = horas_para_minutos(hora_inicial_formatada)
    var final_minutos = horas_para_minutos(hora_final_formatada)
    var permanencia = parseInt(final_minutos) - parseInt(inicial_minutos)
    var usuario = localStorage.getItem("nome")
    var hoje = data_atual()
    var dados = {
        permanencia: permanencia,
        usuario: usuario,
        hoje: hoje
    }
    localStorage.setItem('permanencia', JSON.stringify(dados))
}
