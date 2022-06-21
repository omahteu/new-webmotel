$(document).ready( () => {
    gera_auditoria()
})

async function gera_auditoria(){
    const query = await fetch("https://demomotelapi.herokuapp.com/auditoria/")
    const resposta = await query.json()
    var soma = 0
    resposta.forEach(e => {
        soma += Number(e.tempo)
    })
    console.log(soma)
}