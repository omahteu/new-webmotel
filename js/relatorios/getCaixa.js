const url = "https://demomotelapi.herokuapp.com/caixa/"

$(document).ready( () => {
    buscaCaixa()
})

async function buscaCaixa(){
    const resposta = await fetch(url)
    const data = await resposta.json()
    var historicoCaixa = document.getElementById('tabrlaRelatorioQuartos')
    historicoCaixa.innerHTML = ''
    data.forEach(elemento => {
        historicoCaixa.innerHTML += '<tr>'+
                                        '<td>' + elemento.data + '</td>'+
                                        '<td>' + elemento.entrada + '</td>'+
                                        '<td>' + elemento.usuario + '</td>'+
                                        '<td>' + elemento.fundo + '</td>'+
                                        '<td>' + elemento.total + '</td>'+
                                        '<td>' + elemento.saida + '</td>'+
                                    '</tr>'
    });
}
