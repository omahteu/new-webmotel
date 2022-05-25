$(document).ready(function(){
    busca_valor_consumo()
})

async function busca_valor_consumo(){
    const resposta = await fetch("https://demomotelapi.herokuapp.com/comanda/")
    const data = await resposta.json()
    var quarto = $("#quarto_painel").text()
    var dados = data.filter(quartos => quartos.quarto == quarto)
    
    var soma = 0;
    for(var i = 0; i < dados.length; i++) {
        $("#consumo_painel").text(soma += dados[i].valor_total)
    }
}