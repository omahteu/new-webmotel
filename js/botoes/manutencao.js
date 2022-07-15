import { manutencao } from "../tags/manutencao.js"
import { modos } from "../setup/box.js"
import { index } from "../tags/particao.js"
import { start } from '../contadores/contadorUm.js'
import { start2 } from '../contadores/contadorDois.js'
import { start3 } from '../contadores/contadorTres.js'
import { start4 } from '../contadores/contadorQuatro.js'
import { fimModal } from "../setup/camareiras.js"

$(".manutencao").click(function() {
    var quarto = $('#quarto_painel').text()
    var obs = prompt('INFORME O MOTIVO DA MANUTENÇÃO!')
    localStorage.setItem("motivo", obs)
    if(obs != null){
        if(quarto == "1"){
            var flags = modos.slice(0, 3)
            manutencao(quarto, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1000)
            start()
            setTimeout( () => {index()}, 2000);
        } else if(quarto == "2"){
            var flags = modos.slice(3, 6)
            manutencao(quarto, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1000)
            start2()
            setTimeout( () => {index()}, 2000);
        } else if(quarto == "3"){
            var flags = modos.slice(6, 9)
            manutencao(quarto, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            start3()
            setTimeout( () => {index()}, 2000);
        } else if(quarto == "4"){
            var flags = modos.slice(9, 12)
            manutencao(quarto, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            start4()
            setTimeout( () =>  {index()}, 2000);
        }
    } else {
        console.log('barrigad')
    }
})
