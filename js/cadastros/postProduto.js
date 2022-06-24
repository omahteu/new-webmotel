import { data_atual } from "../setup/gera_data.js"

const url = "https://demomotelapi.herokuapp.com/produtos/"

$("#salvarFormPostProduto").click( () => {
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
    $.post(url, dados, () => {
        alert("Produto Registrado!")
        document.getElementById('formCadastros').reset()
    })
})

$("#limparFormPostProduto").click( () => {
    document.getElementById('formCadastros').reset()
})
