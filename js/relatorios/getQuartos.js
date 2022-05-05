$(document).ready(function(){
    relatorioQuartos()
})

async function relatorioQuartos(){

    const resposta = await fetch("https://demomotelapi.herokuapp.com/quartos/")
    const dados = await resposta.json()

    var tabela = document.getElementById('tabrlaRelatorioQuartos')
    tabela.innerHTML = ''

    dados.forEach(elemento => {
        
        var codigo = elemento.codigo
        var numero = elemento.numero
        var horas_locacao = elemento.horas_locacao
        var valor_locacao = elemento.valor_locacao
        var tempo_especial = elemento.tempo_especial
        var valor_especial = elemento.valor_especial
        var horas_diaria = elemento.horas_diaria
        var valor_diaria = elemento.valor_diaria
        var tempo_adicional = elemento.tempo_adicional
        var valor_adicional = elemento.valor_adicional
        var tolerancia = elemento.tolerancia
        var tipo_quarto = elemento.tipo_quarto
        var tipo_tabela = elemento.tipo_tabela
        var percentual = elemento.percentual
        var vh1 = elemento.vh1
        var vh2 = elemento.vh2
        var vh3 = elemento.vh3
        var vh4 = elemento.vh4
        var vh5 = elemento.vh5
        var vh6 = elemento.vh6

        tabela.innerHTML += '<tr>'+
                                '<td>' + codigo + '</td>'+
                                '<td>' + numero + '</td>'+
                                '<td>' + horas_locacao + '</td>'+
                                '<td>' + valor_locacao + '</td>'+
                                '<td>' + tempo_especial + '</td>'+
                                '<td>' + valor_especial + '</td>'+
                                '<td>' + horas_diaria + '</td>'+
                                '<td>' + valor_diaria + '</td>'+
                                '<td>' +  tempo_adicional + '</td>'+
                                '<td>' + valor_adicional + '</td>'+
                                '<td>' + tolerancia + '</td>'+
                                '<td>' + tipo_quarto + '</td>'+
                                '<td>' + tipo_tabela + '</td>'+
                                '<td>' + percentual + '</td>'+
                                '<td>' + vh1 + '</td>'+
                                '<td>' + vh2 + '</td>'+
                                '<td>' + vh3 + '</td>'+
                                '<td>' + vh4 + '</td>'+
                                '<td>' + vh5 + '</td>'+
                                '<td>' + vh6 + '</td>'+
                            '</tr>'
    });
}
