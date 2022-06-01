$(document).ready(function(){
    $.get("https://demomotelapi.herokuapp.com/tabela/", (e) =>{
        $("#tabela_emvigor").text(e[0].tabela)
    })
})