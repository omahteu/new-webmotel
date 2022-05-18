$(document).ready(function () {
    buscaTarifasBandeiras()
})

async function buscaTarifasBandeiras() {
    const respostaCredito = await fetch("https://demomotelapi.herokuapp.com/credito/")
    const respostaDebito = await fetch("https://demomotelapi.herokuapp.com/debito/")
    const dadosCredito = await respostaCredito.json()
    const dadosDebito = await respostaDebito.json()

    dadosDebito.forEach(elemento => {
        var string = elemento.porcentagem;
        var metade = Math.floor(string.length / 2);
        var resultado = string.substr(0,metade)+"."+string.substr(metade);
        $('#modo_pagamento').append(`<option value="${resultado}" >Débito ${elemento.bandeira} - ${resultado}%</option>`)
    });

    dadosCredito.forEach(elemento => {
        var string = elemento.porcentagem;
        var metade = Math.floor(string.length / 2);
        var resultado = string.substr(0,metade)+"."+string.substr(metade);
        $('#modo_pagamento').append(`<option value="${resultado}" >Crédito ${elemento.bandeira} - ${resultado}%</option>`)
    });

    $("#modo_pagamento").change(function(){
        escolha = $(this).val()

        if(escolha > 2.0){
            let campo_parcelas = $("#numero_parcelas")
            campo_parcelas.css('display', 'inline')
            
            $("#confirma_parcelas").click(function(){
                //console.log(campo_parcelas.val())
                //console.log(escolha)
                npc(escolha, campo_parcelas.val())
            })
        }
    })
}


function npc(tarifa, parcelas) {

    var campo1 = tarifa
    var xParcelas = parcelas
    var campo2 = $("#totalGeral").text()

    console.log(campo1)
    console.log(xParcelas)
    console.log(campo2)

    //var maior = (parseFloat(campo1) > parseFloat(campo2)? campo1 : campo2);
    //var menor = (parseFloat(campo1) < parseFloat(campo2)? campo1 : campo2);

    

    //var result = (menor/maior)*100;
    //console.log(result)

    //var option = $('#bandeiraCredito').find(":selected").index()
    //var db = option - 1

    //var codigoDeconto = $("#valor_desconto").val()
    let valor_decimal = parseInt(tarifa) / 100
    let valor_para_descontar = ttgeral * valor_decimal
    $("#totalGeral").text(ttgeral = ttgeral - valor_para_descontar)
    //$("#valor_desconto").val('')
    //var descont = document.getElementById('valor_desconto')
    //descont.disabled = true
    $("#valorDesconto").text(codigoDeconto)


    //alert(`Deseja escolher a opção ${campo1}?`)
    //("#parcelas").css('display', 'block')

    //var salario = campo2
    //var percentual = xParcelas;
    //var aumento = salario * percentual;
    //var novo_salario = salario + aumento;

    //alert(novo_salario)

}

function npd() {
    var option = $('#bandeiraDebito').find(":selected").index()
    var db = option - 1

    alert(`Deseja escolher a opção ${debito[db].bandeira}?`)
    $("#parcelas").css('display', 'block')
}
