$(document).ready(function(){
    var nomeUsuario = sessionStorage.getItem('nome')
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
        sessionStorage.removeItem('caixa')
        var usuario = $("#usuario").val()
        var dataEntrada = new Date();
        var dia = dataEntrada.getDate()
        var mes = dataEntrada.getMonth()
        var ano = dataEntrada.getFullYear()
        let dataAtual = `${String(dia)}/${String(mes)}/${String(ano)}`
        var horaEntrada = new Date();
        var hora = horaEntrada.getHours()
        var minutos = horaEntrada.getMinutes()
        let horaAtual = `${String(hora)}:${String(minutos)}`
        var fundoCaixa = $("#valorFundoCaixa").val()
        var dados = {
            data: dataAtual,
            entrada: horaAtual,
            usuario: usuario,
            fundo: fundoCaixa,
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
    var status = sessionStorage.getItem('caixa')
    if(status === 'fechado'){
        $("#abrirCaixa").prop('disabled', false)
    }
}

function bloqueiaFundo(){
    var status = sessionStorage.getItem('caixa')
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
    console.log('fechando...')
    // FAZER O ENCERRAMENTO PRIMEIRO
})