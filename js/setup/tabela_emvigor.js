const url = "https://demomotelapi.herokuapp.com/tabela/"

$(document).ready( () => {
    $.get(url, (e) =>{
        $("#tabela_emvigor").text(e[0].tabela)
    })
})
