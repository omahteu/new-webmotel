const url = "https://demomotelapi.herokuapp.com/infos/"

export function ultima_limpeza(quartx){
    localStorage.removeItem("dadosQuarto")
    localStorage.removeItem(`codigo${quartx}`)
    localStorage.removeItem("quarto")
    $.get(url, (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        var id = dados[0].id
        $.ajax({
            url: url + id + "/",
            type: 'DELETE'
        });
    })
}
