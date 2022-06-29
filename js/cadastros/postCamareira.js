import { data_atual } from "../setup/gera_data.js"
import { link } from "../setup/index.js"

$("#salvarFormPostCamareira").click(function() {
    let camareira = $("#nomeCamareira").val()
    var dados = {
        nome: camareira,
        registro: gera_id()
    }
    $.post(link[3], dados, () => {
        alert("Camareira Registrado!")
        document.getElementById('formCadastros').reset()
    })
})

$("#camareira_limpeza").click(function() {
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
    $.post(link[6], dados,  () => {})
    $.post(link[12], dados2, () => {})
})

$("#limparFormPostCamareira").click(function(){
    document.getElementById('formCadastros').reset()
})

function gera_id(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}
