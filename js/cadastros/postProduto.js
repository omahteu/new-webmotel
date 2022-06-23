import { data_atual } from "../setup/gera_data.js"

$("#salvarFormPostProduto").click(function(){
    
    let codigo = $("#codigoProduto").val()
    let descricao = $("#descricaoProduto").val()
    let valor = $("#valorUnitarioProduto").val()
    let quantidade = $("#quantidadeProduto").val()
    let categoria = $("#categoriaProduto").val()
    let dataAtual = data_atual()
    var dados = {
            codigo: codigo,
            descricao: descricao,
            valorunitario: valor,
            quantidade: quantidade,
            categoria: categoria,
            data: dataAtual
    }
    
    $.post("https://demomotelapi.herokuapp.com/produtos/", dados, function(){
        alert("Produto Registrado!")
    
        document.getElementById('formCadastros').reset()
    })
})

$("#limparFormPostProduto").click(function(){
    document.getElementById('formCadastros').reset()
})
