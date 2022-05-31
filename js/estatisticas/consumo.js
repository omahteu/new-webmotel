$(document).ready(function(){
    busca_valor_consumo()
})

async function busca_valor_consumo(){





    /*
    const resposta = await fetch("https://demomotelapi.herokuapp.com/comanda/")
    const data = await resposta.json()
    var quarto = $("#quarto_painel").text()
    var dados = data.filter(quartos => quartos.quarto == quarto)
    console.log(quarto)
    console.log(dados)
    var soma = 0;
    for(var i = 0; i < dados.length; i++) {
        console.log($("#consumo_painel").text(soma += dados[i].valor_total))
        $("#consumo_painel").text(soma += dados[i].valor_total)
    }*/
}
/*
$("#registrar_produto").click(function(){
    var condicao = $("#valor_total").val().slice(2).trim()
    setTimeout(function(){
        if(condicao != ""){
            var quarto = $("#quarto_painel").text()
            $.get("https://demomotelapi.herokuapp.com/comanda/", (e) => {
                var dados = e.filter(quartos => quartos.quarto == quarto)
                //console.log(dados)
                var sum = 0;


                for(var a = 0; a < dados.length; a++){
                    sum += parseFloat(dados[a].valor_total.slice(2).trim())
                }

                //console.log(sum)
                $("#consumo_painel").text(sum)



                for(var i = 0; i < dados.length; i++) {
                    var valor = dados[i].valor_total.slice(2).trim()
                    console.log(parseFloat(soma) + parseFloat(valor))
                    //$("#consumo_painel").text(soma += dados[i].valor_total)
                }
            })
        }
    }, 800)
})*/