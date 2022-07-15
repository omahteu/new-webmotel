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
import { data_atual } from "../geradores/data.js"
import { hora_atual } from "../geradores/hora.js"
import { envia_dados_limpeza } from "../caixa/limpeza.js"
import { envia_dados_faxina } from "../caixa/faxina.js"
import { envia_dados_manutencao } from "../caixa/manutencao.js"
import { inicioModalTroca } from "../setup/troca.js"
import { ver_quartos_disponiveis } from "../relatorios/quartosDisponiveis.js"

var rota = 'rota'

export function resposta1(status){
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    if(status == "Disponibilizar Quarto"){
        var condicao = $("#tipo").text()
        if(condicao == "faxina"){
            var h = $("#hour1").text()
            var m = $("#minute1").text()
            var s = $("#second1").text()
            var tempo = `${h}:${m}:${s}`
            envia_dados_faxina($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), tempo)
        } else if(condicao == "manutencao"){
            var razao = localStorage.getItem("motivo")
            var h = $("#hour1").text()
            var m = $("#minute1").text()
            var s = $("#second1").text()
            var tempo = `${h}:${m}:${s}`
            envia_dados_manutencao($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), razao, tempo)
        }
        setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
        setTimeout( () => {
            alert(`DESEJA DISPONIBILIZAR O QUARTO ${quarto}?`)
            pause()
            reset()
        }, 500)
    } else if(status == "Iniciar Faxina"){
        alert(`DESEJA INICIAR FAXINA NO QUARTO ${quarto}?`)
        pause()
        reset()
        start()
        setTimeout( () => {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
    } else if(status == "Iniciar Limpeza"){
        alert(`DESEJA INICIAR LIMPEZA NO QUARTO ${quarto}?`)
        reset()
        start()
        setTimeout( () => {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {atualiza_status(quarto, "limpeza"), 1500})
        setTimeout( () => {fimModal()}, 1001)
    } else if(status == "Trocar Suíte"){
        inicioModalTroca("modau-troca")
        fimModal()
        setTimeout( () => {
            var antigo = $("#quarto_painel").text()
            $("#quarto_antigo").val(antigo)
        }, 150)
        setTimeout( () => {
            ver_quartos_disponiveis()
        })
    } else if(status == "Encerrar"){
        if(confirm(`DESEJA ENCERRAR x QUARTO ${quarto}?`)){
            pause()
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
            setTimeout( () => {
                var h = $("#hour1").text()
                var m = $("#minute1").text()
                var s = $("#second1").text()
                var permanencia = h + ":" + m + ":" + s
                var dados = {
                    caixa: $("#usuario_sistema").text(),
                    data: data_atual(),
                    hora: hora_atual(),
                    quarto: $("#suite").text(),
                    tempo: permanencia,
                    camareira: ""
                }
                localStorage.setItem("limpeza", JSON.stringify(dados))
            }, 500)
        } else {
            console.log('cancelado')
        }
    } else if(status == "OK"){
        alert('Camareira Selecionada')
        pause()
        reset()
        setTimeout( () => {fimModal()}, 500)
        setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 600)
        setTimeout( () => {ultima_limpeza(quarto)}, 800)
        setTimeout( () => {
            var recebido = JSON.parse(localStorage.getItem("limpeza"))
            var cam = $("#selecionar_camareira").val()
            envia_dados_limpeza(recebido.caixa, recebido.data, recebido.hora, recebido.quarto, recebido.tempo, cam)
        }, 200)
    } else if(status == "Apagar Luz"){
        console.log("Apagar Luz")
    } else if(status == "Ligar Luz"){
        console.log("Ligar Luz")
    }
}
