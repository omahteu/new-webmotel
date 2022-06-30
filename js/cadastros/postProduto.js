import { data_atual } from "../geradores/data.js"
import { link } from "../setup/index.js"

$("#salvarFormPostProduto").click(function() {
    let codigo = $("#codigoProduto").val()
    let descricao = $("#descricaoProduto").val()
    let valor = $("#valorUnitarioProduto").val()
    var valor_formatadao = String(valor).replace(",", ".")
    let quantidade = $("#quantidadeProduto").val()
    let categoria = $("#categoriaProduto").val()
    let dataAtual = data_atual()
    var dados = {
            codigo: codigo,
            descricao: descricao,
            valorunitario: valor_formatadao,
            quantidade: quantidade,
            categoria: categoria,
            data: dataAtual
    }
    $.post(link[16], dados, () => {
        alert("Produto Registrado!")
        document.getElementById('formCadastros').reset()
    })
})

$("#limparFormPostProduto").click(function() {
    document.getElementById('formCadastros').reset()
})
