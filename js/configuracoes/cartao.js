import { link } from "../setup/index.js"

async function busca_cartao(){
    const query = await fetch()
    const dados = await query.json()
    dados.forEach(e => {
        
    });
}

$("#tipo_cartao").change(function(){
    var selecionado = $(this).val()
    $("#bandeira_cartao").change(function(){
        var bandeira_selecionada = $(this).val()
        if(selecionado == "credito" && bandeira_selecionada == "master"){
            // crédito master
        } else if(selecionado == "credito" && bandeira_selecionada == "visa"){
            // crédito visa
        } else if(selecionado == "credito" && bandeira_selecionada == "elo"){
            // crédito elo
        } else if(selecionado == "debito" && bandeira_selecionada == "master"){
            // débito master
        } else if(selecionado == "debito" && bandeira_selecionada == "visa"){
            // débito visa
        } else if(selecionado == "debito" && bandeira_selecionada == "elo"){
            // débito elo
        }
    })
})