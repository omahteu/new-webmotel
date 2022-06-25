const url = "https://demomotelapi.herokuapp.com/auditoria/"

$(document).ready( () => {
    reseta_tabela_auditoria()
})

async function reseta_tabela_auditoria(){
    const query = await fetch(url)
    const dados = await query.json()
    var inicio = Number(dados[0].id)
    var fim = $(dados).get(-1).id
    for(var i = inicio; i <= fim + 1; i++){
        $.ajax({
			url: url + i,
			method: 'DELETE',
			dataType: 'json',
		})
    }
}
