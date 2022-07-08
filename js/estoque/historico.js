import { link } from "../setup/index.js"

$(document).ready(function(){
    historico_movimentacoes()
})

async function historico_movimentacoes(){
    const query = await fetch(link[22])
    const dados = await query.json()
    dados.forEach(e => {
        console.log(e)
    });
}