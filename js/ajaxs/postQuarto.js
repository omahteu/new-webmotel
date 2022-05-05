$("#salvarFormPostQuarto").click(function(){

    var codigoQuarto = $("#codigoQuarto").val()
    var numeroQuarto = $("#numeroQuarto").val()
    var horasLocacao = $("#horasLocacao").val()
    var valorLocacao = $("#valorLocacao").val()
    var tempoEspecial = $("#tempoEspecial").val()
    var valorEspecial = $("#valorEspecial").val()
    var horasDiarias = $("#horasDiarias").val()
    var valorDiaria = $("#valorDiaria").val()
    var tempoAdicional = $("#tempoAdicional").val()
    var gridCheck = $("#gridCheck").val()
    var valorHoraAdicional = $("#valorHoraAdicional").val()
    var tolerancia = $("#tolerancia").val()
    var suite = $("#suite").val()
    var tabela = $("#tabela").val()
    var valor1hora = $("#valor1hora").val()
    var valor2hora = $("#valor2hora").val()
    var valor3hora = $("#valor3hora").val()
    var valor4hora = $("#valor4hora").val()
    var valor5hora = $("#valor5hora").val()
    var valor6hora = $("#valor6hora").val()

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
        percentual: gridCheck,
        vh1: valor1hora,
        vh2: valor2hora,
        vh3: valor3hora,
        vh4: valor4hora,
        vh5: valor5hora,
        vh6: valor6hora
    }

    $.post("https://defmoteapi.herokuapp.com/quartos/", dados, function(msg){
        alert("Quarto Registrado!")

        document.getElementById('formPostQuarto').reset()
    })

})
