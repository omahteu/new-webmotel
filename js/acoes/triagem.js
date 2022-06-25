import { resposta1 } from './acaorespostaum.js'
import { resposta2 } from './acaoRespostaDois.js'
import { resposta3 } from './acaoRespostaTres.js'
import { resposta4 } from './acaoRespostaQuatro.js'

$("[name=botao]").click( () => {
    var status = $(this).val()
    let numeroQuarto = $("#numquarto").text()
	let valorQuarto = $("#valor-quarto").text()
	let tempo = $("#entrada").text()
    var quarto = {
        numero: numeroQuarto,
        valor: valorQuarto,
        tempo: tempo
    }
    var quartos = []
    quartos.push(quarto)
    if(numeroQuarto == "1"){
        resposta1(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
    } else if(numeroQuarto == "2"){
        resposta2(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
    } else if(numeroQuarto == "3"){
        resposta3(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
    } else if(numeroQuarto == "4"){
        resposta4(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
    }
})
