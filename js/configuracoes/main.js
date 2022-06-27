import { link } from "../setup/index.js"

$("#SalvarConfigEscolhaTabelaPreco").click(function() {
    var tabela_preco_selecionada = $('#escolha_tabela_precos').find(":selected").text()
    var confirmacao = confirm(`Confirme para usar a tabeça ${tabela_preco_selecionada}`)
    if(confirmacao == true){
        $.ajax({
            url: link[18],
            type: 'PUT',
            dataType: 'json',
            data: {
                tabela: tabela_preco_selecionada
            },
            success: () => {
                alert("Nova tabela selecionada!")
                location.reload()
            }
        })
    } else {
        console.log('Cancelado!')
    }
})

$("#SalvarConfigEscohaTempos").click(function() {
    var option = $("#escolhe_tempo").find(":selected").text()
    if(option == "Troca de Quarto"){
        let tempo_troca_quarto = $("#tempo_troca_quarto").val()
        var tempo = {
            troca: tempo_troca_quarto,
            desistencia: $("#tempo_desistencia").attr('placeholder'),
            limpeza: $("#tempo_limpeza").attr('placeholder'),
            faxina: $("#tempo_faxina").attr('placeholder'),
            manutencao: $("#tempo_manutencao").attr('placeholder')
        }
    } else if(option == "Desistência"){
        let tempo_desistencia = $("#tempo_desistencia").val()
        var tempo = {
            troca: $("#tempo_troca_quarto").attr('placeholder'),
            desistencia: tempo_desistencia,
            limpeza: $("#tempo_limpeza").attr('placeholder'),
            faxina: $("#tempo_faxina").attr('placeholder'),
            manutencao: $("#tempo_manutencao").attr('placeholder')
        }
    } else if(option == "Limpeza"){
        let tempo_limpeza = $("#tempo_limpeza").val()
        var tempo = {
            troca: $("#tempo_troca_quarto").attr('placeholder'),
            desistencia: $("#tempo_desistencia").attr('placeholder'),
            limpeza: tempo_limpeza,
            faxina: $("#tempo_faxina").attr('placeholder'),
            manutencao: $("#tempo_manutencao").attr('placeholder')
        }
    } else if(option == "Faxina"){
        let tempo_faxina = $("#tempo_faxina").val()
        var tempo = {
            troca: $("#tempo_troca_quarto").attr('placeholder'),
            desistencia: $("#tempo_desistencia").attr('placeholder'),
            limpeza: $("#tempo_limpeza").attr('placeholder'),
            faxina: tempo_faxina,
            manutencao: $("#tempo_manutencao").attr('placeholder')
        }
    } else if(option == "Manutenção"){
        let tempo_manutencao = $("#tempo_manutencao").val()
        var tempo = {
            troca: $("#tempo_troca_quarto").attr('placeholder'),
            desistencia: $("#tempo_desistencia").attr('placeholder'),
            limpeza: $("#tempo_limpeza").attr('placeholder'),
            faxina: $("#tempo_faxina").attr('placeholder'),
            manutencao: tempo_manutencao
        }
    } else {
        console.log("Passa")
    }
    var confirmacao = confirm(`Confirme para atualizar a tabela de tempo!`)
    if(confirmacao == true){
        $.ajax({
            url: link[19],
            type: 'PUT',
            dataType: 'json',
            data: tempo,
            success: () => {
                alert("Atalizado!")
                location.reload()
            }
        })
    } else {
        console.log('Cancelado!')
    }
})

$("#SalvarConfigValores").click(function() {
    var horasLocacao = $("#quantidadeHorasLocacaoQuarto").val()
    var valorLocacao = $("#valorLocacaoQuarto").val()
    var tempoEspecial = $("#tempoEspecialQuarto").val()
    var valorEspecial = $("#valorEspecialQuarto").val()
    var horasDiarias = $("#quantidadeHorasDiariasQuarto").val()
    var valorDiaria = $("#valorDiariaQuarto").val()
    var tempoAdicional = $("#tempoAdicionalQuarto").val()
    var valorHoraAdicional = $("#valorHoraAdicionalQuarto").val()
    var tolerancia = $("#toleranciaQuarto").val()
    var valor1hora = $("#v1hQuarto").val()
    var valor2hora = $("#v2hQuarto").val()
    var valor3hora = $("#v3hQuarto").val()
    var valor4hora = $("#v4hQuarto").val()
    var valor5hora = $("#v5hQuarto").val()
    var valor6hora = $("#v6hQuarto").val()
    var dados = {
        horas_locacao: horasLocacao,
        valor_locacao: valorLocacao,
        tempo_especial: tempoEspecial,
        valor_especial: valorEspecial,
        horas_diaria: horasDiarias,
        valor_diaria: valorDiaria,
        tempo_adicional: tempoAdicional,
        valor_adicional: valorHoraAdicional,
        tolerancia: tolerancia,
        vh1: valor1hora,
        vh2: valor2hora,
        vh3: valor3hora,
        vh4: valor4hora,
        vh5: valor5hora,
        vh6: valor6hora
    }
    $.post(link[21], dados, () => {
        alert("Quarto Registrado!")
        document.getElementById('formCadastros').reset()
    })
})
