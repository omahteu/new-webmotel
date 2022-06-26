import { link } from "../setup/index.js"

$(document).ready( () => {
    busca_e_exibe_quartos()
    $(document).on('click', '[class="card"]', () => {
        var ind = $(this)
        var ind2 = $(ind[0].children[0])
        var ind3 = $(ind2[0].children[1])
        var ind4 = ind3.text()
        $("#quarto_painel").text(ind4)
        var fm = document.forms['botoes']
        var el = fm.elements
        el[0].setAttribute("name", ind4)
        el[1].setAttribute("name", ind4)
        el[2].setAttribute("name", ind4)
    })
})

async function busca_e_exibe_quartos(){
    const resposta = await fetch(link[17])
    const dados = await resposta.json()
    for(var i = 0; i < dados.length; i++){
        var indice = parseInt(i) + 1
        var tipo_quarto = dados[i].tipo_quarto
        $(".cardBox").append(`<li class="card">`+
                                '<div>'+
                                    '<h3 id="contador">'+
                                        `<span id="hour${indice}">00</span>:<span id="minute${indice}">00</span>:<span id="second${indice}">00</span>`+
                                    '</h3>'+
                                    `<div class="cardName" name="asd">${indice}</div>`+
                                    `<h4 id="tipo_suite${indice}">${tipo_quarto}</h4>`+
                                '</div>'+
                                `<a id="botao_hub">`+
                                    '<div class="iconBx">'+
                                        '<i class="fa fa-gear"></i>'+
                                    '</div>'+
                                '</a>'+
                            '</li>')
    }
}
