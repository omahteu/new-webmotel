import { reacao } from "./index.js"

$("[name=botao]").click(function(){
    var status = $(this).val()
    let numeroQuarto = $("#numquarto").text()
	let valorQuarto = $("#valor-quarto").text()
	let tempo = $("#entrada").text()
    var quarto = {
        numero: numeroQuarto,
        valor: valorQuarto,
        tempo: tempo
    }
    var quartos = []
    quartos.push(quarto)
    if(numeroQuarto == "1"){
        reacao(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
    } else if(numeroQuarto == "2"){
        reacao(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
    } else if(numeroQuarto == "3"){
        reacao(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
    } else if(numeroQuarto == "4"){
        reacao(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))
    }
})
