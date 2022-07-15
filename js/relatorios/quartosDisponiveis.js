import { link } from "../setup/index.js"

export async function ver_quartos_disponiveis(){
    const resposta = await fetch(link[11]) // infos
    const dados = await resposta.json()
    const disponiveis = dados.filter(item => item.tipo === 'livre')
    disponiveis.forEach(e => {
        $('#quartos_disponiveis').append('<option>' + e.quarto + '</option>')
    });
}
