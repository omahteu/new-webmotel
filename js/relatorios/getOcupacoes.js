const url = "https://demomotelapi.herokuapp.com/ocupacoes/"

$(document).ready( () => {
    relatorioOcupacoes()
})

async function relatorioOcupacoes(){
    const resposta = await fetch(url)
    const dados = await resposta.json()
    var tabela = document.getElementById('tabelaRelatorioOcupacoes')
    tabela.innerHTML = ''
    dados.forEach(elemento => {
        var data = elemento.data
        var codigo = elemento.codigo
        var quarto = elemento.quarto
        var entrada = elemento.entrada
        var saida = elemento.saida
        var total = elemento.total
        tabela.innerHTML += '<tr>'+
                                '<td>' + data + '</td>'+
                                '<td>' + codigo + '</td>'+
                                '<td>' + quarto + '</td>'+
                                '<td>' + entrada + '</td>'+
                                '<td>' + saida + '</td>'+
                                '<td>' + total + '</td>'+
                            '</tr>'
    });
}
