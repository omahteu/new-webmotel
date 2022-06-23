import { data_atual } from "../setup/gera_data.js"

$(document).ready(function(){
    var nomeUsuario = localStorage.getItem('nome')
    $("#usuario").val(nomeUsuario)
    bloqueiaAbertura()
    bloqueiaFundo()
    validarUsoFundoCaixa()
})

$("#abrirCaixa").click(function(){
    var utilizar_fundo_caixa = $("#usarFundoCaixa").val()
    if(utilizar_fundo_caixa == 'Usar Fundo de Caixa?'){
        alert('Escolha se ultilizará o fundo de caixa!')
    } else {
        localStorage.setItem('caixa', 'aberto')
        var base = new Date()
        var usuario = $("#usuario").val()
        let dataAtual = data_atual()
        var hora = base.getHours()
        var minutos = base.getMinutes()
        let horaAtual = `${String(hora)}:${String(minutos)}`
        var fundoCaixa = $("#valorFundoCaixa").val()
        var fundoCaixa_formatado = String(fundoCaixa).replace(",", ".")
        var dados = {
            data: dataAtual,
            entrada: horaAtual,
            usuario: usuario,
            fundo: fundoCaixa_formatado,
            total: "",
            saida: ""
        }
        $.post("https://demomotelapi.herokuapp.com/caixa/", dados, function(){
            alert('Caixa Aberto!')
            $(location).attr('href', '../paginas/home.html')
        })
    }
})

function bloqueiaAbertura(){
    var status = localStorage.getItem('caixa')
    if(status === 'fechado'){
        $("#abrirCaixa").prop('disabled', false)
    }
}

function bloqueiaFundo(){
    var status = localStorage.getItem('caixa')
    if(status === 'fechado'){
        $("#usarFundoCaixa").prop('disabled', false)
    }
}

function validarUsoFundoCaixa(){
    $("#usarFundoCaixa").change( function(){
        var escolha = $(this).val()
        if(escolha == 'sim'){
            $("#valorFundoCaixa").css('display', 'inline')              
        } else {
            $("#valorFundoCaixa").removeAttr('style')
        }
    })
}

$("#fecharCaixa").click(function(){
    limpando_registros()
    setTimeout(function(){busca_de_valores_de_caixa()}, 100)
})

async function busca_de_valores_de_caixa(){
    var hoje = data_atual()
    var soma = 0
    const query_dois = await fetch("https://demomotelapi.herokuapp.com/ocupacoes/")
    const resposta_query_dois = await query_dois.json()
    resposta_query_dois.forEach(e => {
        var totalPrecoProdutos = []
        if(e.data == hoje){
            totalPrecoProdutos.push(e.total)
            for(var a = 0; a < totalPrecoProdutos.length; a++){
                soma += parseFloat(totalPrecoProdutos[a])
            }
        }
    });
    $.get("https://demomotelapi.herokuapp.com/caixa/", function(el){
        var id = el[el.length -1].id
        var data = el[el.length -1].data
        var entrada = el[el.length -1].entrada
        var usuario = el[el.length -1].usuario
        localStorage.setItem("id", id)
        localStorage.setItem("data", data)
        localStorage.setItem("entrada", entrada)
        localStorage.setItem("usuario", usuario)
        var soma_fundo = el[el.length - 1].fundo
        if(soma_fundo == ""){
            localStorage.setItem("fundo", "0")
        } else {
            localStorage.setItem("fundo", soma_fundo)
        }   
    })
    
    setTimeout(function(){
        var valor_fundo = localStorage.getItem("fundo")
        var id_caixa = localStorage.getItem("id")
        var total = parseFloat(soma) + parseFloat(valor_fundo)
        var rdata = localStorage.getItem("data")
        var rentrada = localStorage.getItem("entrada")
        var rusuario = localStorage.getItem("usuario")
        let saida = data_atual()
        var dados = {
            data: rdata,
            entrada: rentrada,
            usuario: rusuario,
            fundo: valor_fundo,
            total: total,
            saida: saida
        }
        $.ajax({
            url: "https://demomotelapi.herokuapp.com/caixa/" + id_caixa + "/",
            type: "PUT",
            dataType: "json",
            data: dados,
            success: function(){
                console.log("Atualizado.")
            }
        })
        localStorage.removeItem("nome")
    }, 200)
}

function limpando_registros(){
    localStorage.removeItem("id")
    localStorage.removeItem("data")
    localStorage.removeItem("entrada")
    localStorage.removeItem("usuario")
    localStorage.removeItem("fundo")
    localStorage.removeItem("caixa")
    localStorage.removeItem("nome")
    localStorage.removeItem("permanencia")
}

function enviando_relatorio(){
    var hoje = data_atual()
    var nome = localStorage.getItem("nome")

    $.get("https://demomotelapi.herokuapp.com/auditoria/", e =>{
        console.log(e)
    })

    resposta.forEach(element => {
        if(element.nome == nome && element.data == data){
            soma += parseInt(element.tempo)
        }
    })
    if(soma > 1){
        var prateleira = document.getElementById("tabelaRelatorioAuditoria")
        prateleira.innerHTML = ''
        prateleira.innerHTML += '<tr>'+
                                    '<td>'+ data + '</td>' +
                                    '<td>'+ nome + '</td>' +
                                    '<td>'+ soma + ' minutos' + '</td>' +        
                                '</tr>'
    } else {
        alert("Dados Indisponíveis!")
    }
}