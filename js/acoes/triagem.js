//import { modos } from '../setup/box.js'
import { resposta1 } from './acaorespostaum.js'
//import { resposta2 } from './acaoRespostaDois.js'
//import { resposta3 } from './acaoRespostaTres.js'
//import { resposta4 } from './acaoRespostaQuatro.js'

$("[name=botao]").click(function(){
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
    switch (numeroQuarto) {
        case '1':
            // QUARTO 1
            resposta1(status)
            localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
            break;

        case '2':
            //resposta2(status)
            localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
            break

        case '3':
            //resposta3(status)
            localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
            break
        
        case '4':
            //resposta4(status)
            localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
            break
    
        default:
            break;
    }
})
