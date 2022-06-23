var soma = 0

$(document).ready( () => {
    busca_datas()
    busca_usuarios()
})

$("#mostrarRelatorio").click( () => {
    var option = $('#selectUsuarios').find(":selected").text()
    var data_rel = $("#data_relatorio").val()
    elo = new Date(data_rel)
    dataFormatada = elo.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    filtro(option, dataFormatada)
})

async function filtro(nome, data){
    const query = await fetch("https://demomotelapi.herokuapp.com/auditoria/")
    const resposta = await query.json()
    resposta.forEach(element => {
        if(element.nome == nome && element.data == data){
            soma += parseInt(element.tempo)
        }
    })
    if(soma > 1){
        var prateleira = document.getElementById("tabelaRelatorioAuditoria")
        prateleira.innerHTML = ''
        prateleira.innerHTML += '<tr>'+
                                    '<td>'+ data + '</td>' +
                                    '<td>'+ nome + '</td>' +
                                    '<td>'+ soma + ' minutos' + '</td>' +        
                                '</tr>'
    } else {
        alert("Dados Indisponíveis!")
    }
}
