import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { pause2, reset2, start2 } from '../contadores/contadorDois.js'
import { fimModal } from "../setup/camareiras.js"
import { atualiza_status } from "../setup/atualiza.js"

var rota = 'rota'

export function resposta2(status){

    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")

    switch (status) {
        case 'Disponibilizar Quarto':
            alert(`DESEJA DISPONIBILIZAR O QUARTO ${quarto}?`)
            pause2()
            reset2()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            setTimeout(function() {fimModal()}, 1001)
            break

        case 'Iniciar Faxina':
            alert(`DESEJA INICIAR FAXINA NO QUARTO ${quarto}?`)
            pause2()
            reset2()
            start2()
            setTimeout(function() {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            setTimeout(function() {fimModal()}, 1001)
            break

        case 'Iniciar Limpeza':
            alert(`DESEJA INICIAR LIMPEZA NO QUARTO ${quarto}?`)
            reset2()
            start2()
            setTimeout(function() {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            setTimeout(function() {atualiza_status(quarto, "limpeza"), 1500})
            setTimeout(function() {fimModal()}, 1001)
            break
        
        case 'Trocar Suíte':
            break

        case 'Encerrar':
            if(confirm(`DESEJA ENCERRAR O QUARTO ${quarto}?`)){
                pause2()
                busca_permanencia()
                setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
                sessionStorage.setItem('quarto', quarto)
                window.open('../paginas/checkout.html', '_blank')
                setTimeout(function() {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 2000)
                setTimeout(function() {atualiza_status(quarto, "aguardando"), 1500})
                setTimeout(function() {fimModal()}, 1001)
            }
            break

        case "Encerrar Limpeza":
            if(confirm('DESEJA DISPONIBILIZAR O QUARTO ' + quarto + ' ?') == true){
                camareiras()
            } else {
                console.log('cancelado')
            }
            break
        
        case "Selecionar":
            alert('Camareira Selecionada')
            pause2()
            reset2()
            setTimeout(function() {fimModal()}, 500)
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 600)
            break

        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    
        default:
            break;
    }
}
