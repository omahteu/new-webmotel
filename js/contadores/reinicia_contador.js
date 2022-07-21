import { iniciara } from "./um_plus.js"
import { link } from "../setup/index.js"

var box = []

$(document).on("click", '[class="card"]', function() {
    console.log(this)
    definindo_tempo()
})

function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
}

function horas_para_minutos(f0) {
    return ((Number(f0[0]) * 60) + Number(f0[1]))
}

const minutos_para_hora = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const seg = minutos * 60
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    const textoSegundos = (`00${seg}`).slice(-2)
    return `${textoHoras}:${textoMinutos}:${textoSegundos}`;
}

const base = new Date()
const h = zeroFill(base.getHours())
const mi = zeroFill(base.getMinutes())
const s = zeroFill(base.getSeconds())
const hmi = `${h}:${mi}:${s}`

async function definindo_tempo(){
    const search = await fetch(link[11])
    const retorno = await search.json()
    retorno.forEach(e => {
        var quarto = e.quarto
        box.push(quarto)
        //console.log(box)

        var dados = localStorage.getItem(quarto)
        


        var tempo_formatado = String(dados).split(":")
        
        iniciara(quarto, tempo_formatado[0], tempo_formatado[1], tempo_formatado[2])
        //console.log(tempo_formatado)
        /*
        var hora_salva = e.datahora
        //console.log(hora_salva)
        var hora_salva_formatada = String(hora_salva).split(":")
        //console.log(hora_salva_formatada)
        var hora_atual_formatada = String(hmi).split(":")
        //console.log(hora_atual_formatada)
        var hora_salva_formatada_minutos = horas_para_minutos(hora_salva_formatada)
        //console.log(hora_salva_formatada_minutos)
        var hora_atual_formatada_minutos = horas_para_minutos(hora_atual_formatada)
        //console.log(hora_atual_formatada_minutos)
        var diferenca = hora_atual_formatada_minutos - hora_salva_formatada_minutos
        console.log(`>>> ${diferenca}`)
        var diferenca_formatada_horas = minutos_para_hora(diferenca)
        //console.log(`>>> ${diferenca_formatada_horas}`)
        var diferenca_formatada_horas_texto = String(diferenca_formatada_horas).split(":")
        //console.log(diferenca_formatada_horas_texto)
        */

        

        /*

        if(quarto == "1"){
            //console.log(quarto, diferenca_formatada_horas_texto[0], diferenca_formatada_horas_texto[1], s)
            iniciara(quarto, tempo_formatado[0], tempo_formatado[1], tempo_formatado[2])
        } else if(quarto == "2"){
            iniciara(quarto, tempo_formatado[0], tempo_formatado[1], tempo_formatado[2])
        }

        */
    })
}
