import { manutencao } from "../tags/manutencao.js"
import { modos } from "../setup/box.js"
import { index } from "../tags/particao.js"
import { start } from '../contadores/contadorUm.js'
import { start2 } from '../contadores/contadorDois.js'
//import { start3 } from '../contadores/contadorTres.js'
//import { start4 } from '../contadores/contadorQuatro.js'
import { fimModal } from "../setup/camareiras.js"

$(".manutencao").click(function(){
    var quarto = $('#quarto_painel').text()
    var obs = prompt('INFORME O MOTIVO DA MANUTENÇÃO!')
    let hatexto = ''

    if(obs != null){

        hatexto = obs
        //$("#muralObs").text(obs) <--

        switch(quarto){
            case '1':
                var flags = modos.slice(0, 3)
                manutencao(quarto, flags[0], flags[1], flags[2])
                setTimeout(function() {fimModal()}, 1000)
                start()
                setTimeout(function() {index()}, 2000);
                break
    
            case '2':
                var flags = modos.slice(3, 6)
                manutencao(quarto, flags[0], flags[1], flags[2])
                setTimeout(function() {fimModal()}, 1000)
                start2()
                setTimeout(function() {index()}, 2000);
                break
            
            case '3':
                var flags = modos.slice(6, 9)
                manutencao(quarto, flags[0], flags[1], flags[2])
                start3()
                setTimeout(function() {index()}, 2000);
                break
    
            case '4':
                var flags = modos.slice(9, 12)
                manutencao(quarto, flags[0], flags[1], flags[2])
                start4()
                setTimeout(function() {index()}, 2000);
                break
        }
    } else {
        console.log('barrigad')
    }
})
