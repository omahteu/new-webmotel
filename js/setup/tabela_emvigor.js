import { link } from "./index.js"

$(document).ready( () => {
    $.get(link[18], (e) =>{
        $("#tabela_emvigor").text(e[0].tabela)
    })
})
