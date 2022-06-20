import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { camareiras } from "../tags/camareira.js"
import { pause, reset, start } from '../contadores/contadorUm.js'
import { fimModal } from "../setup/camareiras.js"
import { busca_permanencia } from "../setup/permanencia.js"
import { atualiza_status } from "../setup/atualiza.js"
import { ultima_limpeza } from "../botoes/limpar.js"
import { pause_plus } from "../contadores/um_plus.js"
import { reset_plus } from "../contadores/um_plus.js"

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
            reset_plus()
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
                pause_plus()
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

        case 'OK':
            alert('Camareira Selecionada')
            pause()
            reset()
            setTimeout(function() {fimModal()}, 500)
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 600)
            setTimeout(function() {ultima_limpeza(quarto)}, 800)
            break

        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    
        default:
            break;
    }
}
