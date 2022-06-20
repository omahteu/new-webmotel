export function ultima_limpeza(quartx){
    localStorage.removeItem("dadosQuarto")
    localStorage.removeItem(`codigo${quartx}`)
    localStorage.removeItem("quarto")
    $.get("https://demomotelapi.herokuapp.com/infos/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        var id = dados[0].id
        $.ajax({
            url: "https://demomotelapi.herokuapp.com/infos/" + id + "/",
            type: 'DELETE'
        });
    })
}