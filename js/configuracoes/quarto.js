import { link } from "../setup/index.js"

export async function busca_quarto() {
    const query = await fetch(link[17])
    const dados = await query.json()
    dados.forEach(e => {
        console.log(e)
    });
}