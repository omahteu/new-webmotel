$(document).ready(function(){
    busca_tabela_preco()
    seleciona_tempo()
})

$("#SalvarConfigEscohaTempos").click(function(){
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
            url: "https://demomotelapi.herokuapp.com/tempos/1/",
            type: 'PUT',
            dataType: 'json',
            data: tempo,
            success: function(data){
                alert("Atalizado!")
                location.reload()
            }
        })
    } else {
        console.log('Cancelado!')
    }
})

async function busca_tabela_preco(){
    const resposta = await fetch("https://demomotelapi.herokuapp.com/tempos/")
    const dados = await resposta.json()
    dados.forEach(e => {
        $("#tempo_faxina").attr("placeholder", e.faxina)
        $("#tempo_limpeza").attr("placeholder", e.limpeza)
        $("#tempo_troca_quarto").attr("placeholder", e.troca)
        $("#tempo_manutencao").attr("placeholder", e.manutencao)
        $("#tempo_desistencia").attr("placeholder", e.desistencia)
    });
}

function seleciona_tempo(){
    $("#escolhe_tempo").change(function(){
        var option = $(this).find(":selected").text()
        switch (option) {
            case "Troca de Quarto":
                $("#tempo_troca_quarto").css("display", "inline-block")
                $("#tempo_desistencia").css("display", "none")
                $("#tempo_limpeza").css("display", "none")
                $("#tempo_faxina").css("display", "none")
                $("#tempo_manutencao").css("display", "none")
                break;
            case "Desistência":
                $("#tempo_troca_quarto").css("display", "none")
                $("#tempo_desistencia").css("display", "inline-block")
                $("#tempo_limpeza").css("display", "none")
                $("#tempo_faxina").css("display", "none")
                $("#tempo_manutencao").css("display", "none")
                break
            case "Limpeza":
                $("#tempo_troca_quarto").css("display", "none")
                $("#tempo_desistencia").css("display", "none")
                $("#tempo_limpeza").css("display", "inline-block")
                $("#tempo_faxina").css("display", "none")
                $("#tempo_manutencao").css("display", "none")
                break
            case "Faxina":
                $("#tempo_troca_quarto").css("display", "none")
                $("#tempo_desistencia").css("display", "none")
                $("#tempo_limpeza").css("display", "none")
                $("#tempo_faxina").css("display", "inline-block")
                $("#tempo_manutencao").css("display", "none")
                break
            case "Manutenção":
                $("#tempo_troca_quarto").css("display", "none")
                $("#tempo_desistencia").css("display", "none")
                $("#tempo_limpeza").css("display", "none")
                $("#tempo_faxina").css("display", "none")
                $("#tempo_manutencao").css("display", "inline-block")
                break
            default:
                break;
        }
    })
}
