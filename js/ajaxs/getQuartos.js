export function dadosQuartos() {
    $.get("https://defmoteapi.herokuapp.com/quartos/", function(resultado){

        var tabela = document.getElementById('tabelaQuartos')
        tabela.innerHTML = ''
        
        for(var i = 0; i < resultado.length; i++){
            
            var codigo = resultado[i].codigo
            var numero = resultado[i].numero
            var horas_locacao = resultado[i].horas_locacao
            var valor_locacao = resultado[i].valor_locacao
            var tempo_especial = resultado[i].tempo_especial
            var valor_especial = resultado[i].valor_especial
            var horas_diaria = resultado[i].horas_diaria
            var valor_diaria = resultado[i].valor_diaria
            var tempo_adicional = resultado[i].tempo_adicional
            var valor_adicional = resultado[i].valor_adicional
            var tolerancia = resultado[i].tolerancia
            var tipo_quarto = resultado[i].tipo_quarto
            var tipo_tabela = resultado[i].tipo_tabela
            var percentual = resultado[i].percentual
            var vh1 = resultado[i].vh1
            var vh2 = resultado[i].vh2
            var vh3 = resultado[i].vh3
            var vh4 = resultado[i].vh4
            var vh5 = resultado[i].vh5
            var vh6 = resultado[i].vh6

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
        }
    })
}