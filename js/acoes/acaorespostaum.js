import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { pause, reset, start } from '../contadores/contadorUm.js'
//import { listaCamareiras } from "../boxes/box.js"
//import { nomeCamareiras } from "../boxes/box.js"
//import { espera } from "../boxes/box.js"
import { inicioModal } from "../setup/camareiras.js"
import { fimModal } from "../setup/camareiras.js"

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
            break
        
        case 'Trocar Suíte':
            break

        case 'Encerrar':
            if(confirm(`DESEJA ENCERRAR O QUARTO ${quarto}?`)){
                pause()
                setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
                sessionStorage.setItem('quarto', quarto)
                window.open('../paginas/checkout.html', '_blank')
                setTimeout(function() {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 2000)
            }
            break
        
        case 'Encerrar Limpeza':
            

            if(confirm('DESEJA DISPONIBILIZAR O QUARTO ' + quarto + ' ?') == true){

                inicioModal('modau-camareiras')

                /*
                var camareira = prompt('Nome da Camareira:')

                if(camareira != null){

                    listaCamareiras(camareira)

                    var dad = sessionStorage.getItem(`camareira${camareira}`)

                    
                    if(dad != null){

                        alert('camareira correta')
                        pause()
                        reset()
                        setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
                        break
                    } else {
                        alert('Camareira Incorreta!')
                    }

                    

 

                } else {
                    console.log('cancelado')
                }
                */



            } else {
                console.log('cancelado')
            }
        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    
        default:
            break;
    }
}
