export function atualiza_status(quarto, status){
    $.get("https://demomotelapi.herokuapp.com/infos/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quarto)
        let id = dados[0].id
        let datahora = dados[0].datahora
        let valor = dados[0].valor
        let quartx = dados[0].quarto
        $.ajax({
            url: "https://demomotelapi.herokuapp.com/infos/" + id + "/",
            type: "PUT",
            dataType: "json",
            data: {
                datahora: datahora,
                valor: valor,
                quarto: quartx,
                tipo: status
            }
        })
    })
}