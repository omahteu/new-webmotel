import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { camareiras } from "../tags/camareira.js"
import { pause, reset, start } from '../contadores/contadorUm.js'
//import { listaCamareiras } from "../boxes/box.js"
//import { nomeCamareiras } from "../boxes/box.js"
//import { espera } from "../boxes/box.js"
import { inicioModal } from "../setup/camareiras.js"
import { fimModal } from "../setup/camareiras.js"
import { busca_permanencia } from "../setup/permanencia.js"
import { atualiza_status } from "../setup/atualiza.js"

var rota = 'rota'

export function resposta1(status){

    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")

    switch (status) {
        case 'Disponibilizar Quarto':
            alert(`DESEJA DISPONIBILIZAR O QUARTO ${quarto}?`)
            pause()
            reset()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            setTimeout(function() {fimModal()}, 1001)
            break

        case 'Iniciar Faxina':
            alert(`DESEJA INICIAR FAXINA NO QUARTO ${quarto}?`)
            pause()
            reset()
            start()
            setTimeout(function() {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            setTimeout(function() {fimModal()}, 1001)
            break

        case 'Iniciar Limpeza':
            alert(`DESEJA INICIAR LIMPEZA NO QUARTO ${quarto}?`)
            reset()
            start()
            setTimeout(function() {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            setTimeout(function() {atualiza_status(quarto, "limpeza"), 1500})
            setTimeout(function() {fimModal()}, 1001)
            break
        
        case 'Trocar Suíte':
            break

        case 'Encerrar':
            if(confirm(`DESEJA ENCERRAR O QUARTO ${quarto}?`)){
                pause()
                busca_permanencia()
                setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
                sessionStorage.setItem('quarto', quarto)
                window.open('../paginas/checkout.html', '_blank')
                setTimeout(function() {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 1500)
                setTimeout(function() {atualiza_status(quarto, "aguardando"), 1500})
                setTimeout(function() {fimModal()}, 1001)
            }
            break
        
        case 'Encerrar Limpeza':
            
            if(confirm('DESEJA DISPONIBILIZAR O QUARTO ' + quarto + ' ?') == true){

                camareiras()

            } else {
                console.log('cancelado')
            }
            break

        case 'Selecionar':

            alert('Camareira Selecionada')
            pause()
            reset()
            fimModal()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    
        default:
            break;
    }
}
