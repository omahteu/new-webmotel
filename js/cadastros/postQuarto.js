$("#salvarFormPostQuarto").click(function(){
    var codigoQuarto = $("#codigoQuarto").val()
    var numeroQuarto = $("#numeroQuarto").val()
    var percentual = $("#adicionarPercentualQuarto").val()
    var suite = $("#tipoSuiteQuarto").val()
    var tabela = $("#tabelaQuarto").val()
    var dados = {
        codigo: codigoQuarto,
        numero: numeroQuarto,
        tipo_quarto: suite,
        tipo_tabela: tabela,
        percentual: percentual,
    }
    $.post("https://demomotelapi.herokuapp.com/quartos/", dados, function(){
        alert("Quarto Registrado!")
        document.getElementById('formCadastros').reset()
    })
})
