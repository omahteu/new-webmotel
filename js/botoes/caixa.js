import { data_atual } from "../setup/gera_data.js"
import { hora_atual } from "../setup/gera_hora.js"

const url_caixa = "https://demomotelapi.herokuapp.com/caixa/"
const url_ocupacoes = "https://demomotelapi.herokuapp.com/ocupacoes/"
const url_auditoria = "https://demomotelapi.herokuapp.com/auditoria/"
const url_atividade = "https://demomotelapi.herokuapp.com/atividade/"

var soma = 0

$(document).ready( () => {
    var nomeUsuario = localStorage.getItem('nome')
    $("#usuario").val(nomeUsuario)
    bloqueiaAbertura()
    bloqueiaFundo()
    validarUsoFundoCaixa()
})

$("#abrirCaixa").click( () => {
    var utilizar_fundo_caixa = $("#usarFundoCaixa").val()
    if(utilizar_fundo_caixa == 'Usar Fundo de Caixa?'){
        alert('Escolha se ultilizará o fundo de caixa!')
    } else if(utilizar_fundo_caixa == "sim") {
        localStorage.setItem('caixa', 'aberto')
        var usuario = $("#usuario").val()
        let dataAtual = data_atual()
        let horaAtual = hora_atual()
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
        $.post(url_caixa, dados, () => {
            alert('Caixa Aberto!')
            $(location).attr('href', '../paginas/home.html')
        })
    } else {
        localStorage.setItem('caixa', 'aberto')
        var usuario = $("#usuario").val()
        let dataAtual = data_atual()
        let horaAtual = hora_atual()
        var fundoCaixa = "0"
        var fundoCaixa_formatado = String(fundoCaixa).replace(",", ".")
        var dados = {
            data: dataAtual,
            entrada: horaAtual,
            usuario: usuario,
            fundo: fundoCaixa_formatado,
            total: "",
            saida: ""
        }
        $.post(url_caixa, dados, () => {
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
    $("#usarFundoCaixa").change( () => {
        var escolha = $(this).val()
        if(escolha == 'sim'){
            $("#valorFundoCaixa").css('display', 'inline')              
        } else {
            $("#valorFundoCaixa").removeAttr('style')
        }
    })
}

$("#fecharCaixa").click( () => {
    enviando_relatorio()
    setTimeout( () => {busca_de_valores_de_caixa()}, 200)
})

async function busca_de_valores_de_caixa(){
    var hoje = data_atual()
    var soma = 0
    const query_dois = await fetch(url_ocupacoes)
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
    $.get(url_caixa, (el) => {
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
    
    setTimeout( () => {
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
            url: url_caixa + id_caixa + "/",
            type: "PUT",
            dataType: "json",
            data: dados,
            success:  () => {
                console.log("Atualizado.")
            }
        })
        localStorage.removeItem("nome")
    }, 200)
}

async function enviando_relatorio(){
    var hoje = data_atual()
    var nome = localStorage.getItem("nome")
    const query = await fetch(url_auditoria)
    const dados = await query.json()
    dados.forEach(element => {
        if(element.nome == nome && element.data == hoje){
            soma += Number(element.tempo)
        }
    })
    var nota = {
        tempo: soma,
        nome: nome,
        data: hoje
    }
    $.post(url_atividade, nota, () => {
        console.log("Registrado!")
    })
}
