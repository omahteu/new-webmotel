import { data_atual } from "../setup/gera_data.js"

const url_camareira = "https://demomotelapi.herokuapp.com/camareiras/"
const url_dados = "https://demomotelapi.herokuapp.com/dados/"
const url_limpeza = "https://demomotelapi.herokuapp.com/limpeza/"

$("#salvarFormPostCamareira").click( () => {
    let camareira = $("#nomeCamareira").val()
    var dados = {
        nome: camareira,
        registro: gera_id()
    }
    $.post(url_camareira, dados, () => {
        alert("Camareira Registrado!")
        document.getElementById('formCadastros').reset()
    })
})

$("#camareira_limpeza").click( () => {
    var quarto = $("#quarto_painel").text()
    var hora = $("#hour1").text()
    var minutos = $("#minute1").text()
    var segundos = $("#second1").text()
    var permanencia = hora + ":" + minutos + ":" + segundos
    var nome = $('#selecionar_camareira').find(":selected").val()
    var quarto = $("#numquarto").text()
    var codigo = localStorage.getItem(`codigo${quarto}`)
    let dataAtual = data_atual()
    var dados = {
        codigo: codigo,
        quarto: quarto,
        camareira: nome,
        dia: dataAtual
    }
    var dados2 = {
        codigo: codigo,
        quarto: quarto,
        tempo: permanencia
    }
    $.post(url_dados, dados,  () => {})
    $.post(url_limpeza, dados2, () => {})
})

function gera_id(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}
