const url = "https://demomotelapi.herokuapp.com/produtos/"

$(document).ready(() => {
    auditoria_estoque()
})

async function auditoria_estoque(){
    const resposta = await fetch(url)
    const dados = await resposta.json()
    dados.forEach(e => {
        if(e.quantidade == 0){
            alert(`O estoque do produto ${e.descricao} acabou!`)
            $.ajax({
                url: url + e.id,
                method: 'DELETE',
                dataType: 'json',
            })
        }
    });
}
