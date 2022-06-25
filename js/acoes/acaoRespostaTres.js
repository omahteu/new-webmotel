import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { pause3, reset3, start3 } from '../contadores/contadorTres.js'
import { fimModal } from "../setup/camareiras.js"
import { busca_permanencia } from "../setup/permanencia.js"
import { atualiza_status } from "../setup/atualiza.js"
import { ultima_limpeza } from "../botoes/limpar.js"

var rota = 'rota'

export function resposta3(status){

    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")

    if(status == "Disponibilizar Quarto"){
        alert(`DESEJA DISPONIBILIZAR O QUARTO ${quarto}?`)
        pause3()
        reset3()
        setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
    } else if(status == "Iniciar Faxina"){
        alert(`DESEJA INICIAR FAXINA NO QUARTO ${quarto}?`)
        pause3()
        reset3()
        start3()
        setTimeout( () => {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
    } else if(status == "Iniciar Limpeza"){
        alert(`DESEJA INICIAR LIMPEZA NO QUARTO ${quarto}?`)
        reset3()
        start3()
        setTimeout( () => {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {atualiza_status(quarto, "limpeza"), 1500})
        setTimeout( () => {fimModal()}, 1001)
    } else if(status == "Trocar Suíte"){
        console.log("Troca Suíte")
    } else if(status == "Encerrar"){
        if(confirm(`DESEJA ENCERRAR x QUARTO ${quarto}?`)){
            pause3()
            busca_permanencia()
            setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            sessionStorage.setItem('quarto', quarto)
            window.open('../paginas/checkout.html', '_blank')
            setTimeout( () => {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 1500)
            setTimeout( () => {atualiza_status(quarto, "aguardando"), 1500})
            setTimeout( () => {fimModal()}, 1001)
        }
    } else if(status == "Encerrar Limpeza"){
        if(confirm('DESEJA DISPONIBILIZAR O QUARTO ' + quarto + ' ?') == true){
            camareiras()
        } else {
            console.log('cancelado')
        }
    } else if(status == "OK"){
        alert('Camareira Selecionada')
        pause3()
        reset3()
        setTimeout( () => {fimModal()}, 500)
        setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 600)
        setTimeout( () => {ultima_limpeza(quarto)}, 800)
    } else if(status == "Apagar Luz"){
        console.log("Apagar Luz")
    } else if(status == "Ligar Luz"){
        console.log("Ligar Luz")
    }
}
