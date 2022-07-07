import { link } from "../setup/index.js"

$("#SalvarMovimentoEstoque").click(function(){
    var escolha_movimento = $("#acao_movimentacao").val()
    var quantidade_movimento = $("#quantidadeProduto").val()
    if(escolha_movimento == "" || quantidade_movimento == ""){
        alert("Campos Inválidos")
    } else if(escolha_movimento == "entrada"){
        let id = $("#idx").text()
        var quantidade_base = $("#quantidadex").text()
        let quantidade_atualizada = parseInt(quantidade_movimento) + parseInt(quantidade_base)
        $.ajax({
            url: link[16] + id + "/",
            type: "PUT",
            dataType: "json",
            data: {
                codigo: $("#codigoProduto").text(),
                descricao: $("#descricaoProduto").text(),
                valorunitario: $("#valorUnitarioProduto").text(),
                quantidade: quantidade_atualizada,
                categoria: $("#categoriaProduto").text(),
                data: $("#datax").text()
            },
            success: () => {
                alert("Entrada Registrada!")
                location.reload()
            }
        })
        
    } else if(escolha_movimento == "saida"){
        let id = $("#idx").text()
        var quantidade_base = $("#quantidadex").text()
        let quantidade_atualizada = parseInt(quantidade_base) - parseInt(quantidade_movimento) 
        $.ajax({
            url: link[16] + id + "/",
            type: "PUT",
            dataType: "json",
            data: {
                codigo: $("#codigoProduto").text(),
                descricao: $("#descricaoProduto").text(),
                valorunitario: $("#valorUnitarioProduto").text(),
                quantidade: quantidade_atualizada,
                categoria: $("#categoriaProduto").text(),
                data: $("#datax").text()
            },
            success: () => {
                alert("Saída Registrada!")
                location.reload()
            }
        })
    }
})