

$(document).ready(function(){

    busca_e_exibe_quartos()

/*
    $.get("https://demomotelapi.herokuapp.com/quartos/", function(resultado){

        resultado.forEach(elemento => {
            
            var num = elemento.numero
            var suite = elemento.tipo_quarto
            var di = i + 1
   
            document.getElementById('imagemQuarto').id = 'imagemQuarto' + num 

            document.getElementById('quarto').id = "quarto" + num

            $("#tipo" + di).text(suite)
        });
    })*/

    $(document).on('click', '[class="card"]', function(){
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
    const resposta = await fetch("https://demomotelapi.herokuapp.com/quartos/")
    const dados = await resposta.json()
    for(var i = 0; i < dados.length; i++){
        var indice = parseInt(i) + 1
        $(".cardBox").append(`<li class="card">`+
                                '<div>'+
                                    '<h3 id="contador">'+
                                        `<span id="hour${indice}">00</span>:<span id="minute${indice}">00</span>:<span id="second${indice}">00</span>`+
                                    '</h3>'+
                                    `<div class="cardName" name="asd">${indice}</div>`+
                                '</div>'+
                                `<a id="botao_hub">`+
                                    '<div class="iconBx">'+
                                        '<i class="fa fa-gear"></i>'+
                                    '</div>'+
                                '</a>'+
                            '</li>')
    }
}

