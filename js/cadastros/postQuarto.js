$("#salvarFormPostQuarto").click(function(){
    var codigoQuarto = $("#codigoQuarto").val()
    var numeroQuarto = $("#numeroQuarto").val()
    var horasLocacao = $("#quantidadeHorasLocacaoQuarto").val()
    var valorLocacao = $("#valorLocacaoQuarto").val()
    var tempoEspecial = $("#tempoEspecialQuarto").val()
    var valorEspecial = $("#valorEspecialQuarto").val()
    var horasDiarias = $("#quantidadeHorasDiariasQuarto").val()
    var valorDiaria = $("#valorDiariaQuarto").val()
    var tempoAdicional = $("#tempoAdicionalQuarto").val()
    var percentual = $("#adicionarPercentualQuarto").val()
    var valorHoraAdicional = $("#valorHoraAdicionalQuarto").val()
    var tolerancia = $("#toleranciaQuarto").val()
    var suite = $("#tipoSuiteQuarto").val()
    var tabela = $("#tabelaQuarto").val()
    var valor1hora = $("#v1hQuarto").val()
    var valor2hora = $("#v2hQuarto").val()
    var valor3hora = $("#v3hQuarto").val()
    var valor4hora = $("#v4hQuarto").val()
    var valor5hora = $("#v5hQuarto").val()
    var valor6hora = $("#v6hQuarto").val()
    var dados = {
        codigo: codigoQuarto,
        numero: numeroQuarto,
        horas_locacao: horasLocacao,
        valor_locacao: valorLocacao,
        tempo_especial: tempoEspecial,
        valor_especial: valorEspecial,
        horas_diaria: horasDiarias,
        valor_diaria: valorDiaria,
        tempo_adicional: tempoAdicional,
        valor_adicional: valorHoraAdicional,
        tolerancia: tolerancia,
        tipo_quarto: suite,
        tipo_tabela: tabela,
        percentual: percentual,
        vh1: valor1hora,
        vh2: valor2hora,
        vh3: valor3hora,
        vh4: valor4hora,
        vh5: valor5hora,
        vh6: valor6hora
    }
    $.post("https://demomotelapi.herokuapp.com/quartos/", dados, function(){
        alert("Quarto Registrado!")
        document.getElementById('formCadastros').reset()
    })
})
