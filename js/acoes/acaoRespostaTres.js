import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { pause3, reset3, start3 } from '../contadores/contadorTres.js'

var rota = 'rota'

export function resposta3(status){

    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")

    switch (status) {
        case 'Disponibilizar Quarto':
            pause3()
            reset3()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 2000)
            break

        case 'Iniciar Faxina':
            pause3()
            reset3()
            start3()
            setTimeout(function() {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 2000)
            break

        case 'Iniciar Limpeza':
            reset3()
            start3()
            setTimeout(function() {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 2000)
            break
        
        case 'Trocar Suíte':
            break

        case 'Encerrar':
            if(confirm(`Deseja Encerrar o Quarto ${quarto}?`)){
                pause3()
                setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
                sessionStorage.setItem('quarto', quarto)
                window.open('../paginas/checkout.html', '_blank')
                setTimeout(function() {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 2000)
            }
            break

        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    
        default:
            break;
    }
}
