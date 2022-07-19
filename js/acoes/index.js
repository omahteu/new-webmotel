import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { camareiras } from "../tags/camareira.js"
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
import { iniciar, parar, reiniciar } from "../contadores/index.js"

var rota = 'rota'

export function reacao(status){
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    if(status == "Disponibilizar Quarto"){
        var condicao = $("#tipo").text()
        var h = $(`#hora${quarto}`).text()
        var m = $(`#minuto${quarto}`).text()
        var s = $(`#segundo${quarto}`).text()
        var tempo = `${h}:${m}:${s}`
        if(condicao == "faxina"){
            envia_dados_faxina($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), tempo)
        } else if(condicao == "manutencao"){
            var razao = localStorage.getItem("motivo")
            envia_dados_manutencao($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), razao, tempo)
        }
        setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
        setTimeout( () => {
            alert(`DESEJA DISPONIBILIZAR O QUARTO ${quarto}?`)
            parar()
            reiniciar(quarto)
        }, 500)
    } else if(status == "Iniciar Faxina"){
        alert(`DESEJA INICIAR FAXINA NO QUARTO ${quarto}?`)
        parar()
        reiniciar(quarto)
        iniciar(quarto)
        setTimeout( () => {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
    } else if(status == "Iniciar Limpeza"){
        alert(`DESEJA INICIAR LIMPEZA NO QUARTO ${quarto}?`)
        reiniciar(quarto)
        iniciar(quarto)
        setTimeout( () => {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {atualiza_status(quarto, "limpeza"), 1500})
        setTimeout( () => {fimModal()}, 1001)
    } else if(status == "Trocar Suíte"){
        inicioModalTroca("modau-troca")
        fimModal()
        setTimeout( () => {
            var antigo = $("#quarto_painel").text()
            $("#quarto_antigo").val(antigo)
            var h = $(`#hora${quarto}`).text()
            var m = $(`#minuto${quarto}`).text()
            var s = $(`#segundo${quarto}`).text()
            var permanencia = h + ":" + m + ":" + s
            localStorage.setItem("tt", permanencia)
        }, 150)
        ver_quartos_disponiveis()
        setTimeout( () => {
            busca_permanencia(quarto)
        }, 200)
    } else if(status == "Encerrar"){
        if(confirm(`DESEJA ENCERRAR x QUARTO ${quarto}?`)){
            parar()
            setTimeout( () => {busca_permanencia(quarto)}, 500)
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
                var h = $(`#hora${quarto}`).text()
                var m = $(`#minuto${quarto}`).text()
                var s = $(`#segundo${quarto}`).text()
                var permanencia = `${h}:${m}:${s}`
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
        parar()
        reiniciar(quarto)
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
