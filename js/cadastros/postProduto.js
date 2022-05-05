$("#salvarFormPostProduto").click(function(){
    
    let codigo = $("#codigoProduto").val()
    let descricao = $("#descricaoProduto").val()
    let valor = $("#valorUnitarioProduto").val()
    let quantidade = $("#quantidadeProduto").val()
    let categoria = $("#categoriaProduto").val()

    var horaEntrada = new Date();

    var dia = horaEntrada.getDate()
    var mes = horaEntrada.getMonth()
    var ano = horaEntrada.getFullYear()

    //let dataAtual = String(dia) + '/' + String(mes) + '/' + String(ano)
    let dataAtual = `${String(dia)}/${String(mes)}}/${String(ano)}`

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
