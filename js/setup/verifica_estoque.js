$(document).ready(() => {
    auditoria_estoque()
})

async function auditoria_estoque(){
    const resposta = await fetch("https://demomotelapi.herokuapp.com/produtos/")
    const dados = await resposta.json()
    dados.forEach(e => {
        if(e.quantidade == 0){
            alert(`O estoque do produto ${e.descricao} acabou!`)
            $.ajax({
                url: "https://demomotelapi.herokuapp.com/produtos/" + e.id,
                method: 'DELETE',
                dataType: 'json',
            })
        }
    });
}