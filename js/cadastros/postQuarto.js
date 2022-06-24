const url = "https://demomotelapi.herokuapp.com/quartos/"

$(document).ready( () => {
    busca_ultimo_quarto()
})

var nu

async function busca_ultimo_quarto(){
    const query = await fetch(url)
    const dados = await query.json()
    dados.forEach(e => {
        nu = Number(e.numero)
    });
}

$("#salvarFormPostQuarto").click( () => {
    var codigoQuarto = $("#codigoQuarto").val()
    var numeroQuarto = nu + 1
    var percentual = $("#adicionarPercentualQuarto").val()
    var suite = $("#tipoSuiteQuarto").val()
    var tabela = $("#tabelaQuarto").val()
    var dados = {
        codigo: codigoQuarto,
        numero: String(numeroQuarto),
        tipo_quarto: suite,
        tipo_tabela: tabela,
        percentual: percentual,
    }
    $.post(url, dados, () => {
        alert("Quarto Registrado!")
        document.getElementById('formCadastros').reset()
    })
})
