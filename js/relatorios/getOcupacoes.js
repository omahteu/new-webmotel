export function dadosOcupacoes() {
    $.get("https://defmoteapi.herokuapp.com/ocupacoes/", function(resultado){

        var tabela = document.getElementById('tabelaOcupacoes')
        tabela.innerHTML = ''

        
        for(var i = 0; i < resultado.length; i++){
            
            var data = resultado[i].data
            var codigo = resultado[i].codigo
            var quarto = resultado[i].quarto
            var entrada = resultado[i].entrada
            var saida = resultado[i].saida
            var total = resultado[i].total
            var tipo = resultado[i].tipo

            tabela.innerHTML += '<tr>'+
                                    '<td>' + data + '</td>'+
                                    '<td>' + codigo + '</td>'+
                                    '<td>' + quarto + '</td>'+
                                    '<td>' + entrada + '</td>'+
                                    '<td>' + saida + '</td>'+
                                    '<td>' + total + '</td>'+
                                    '<td>' + tipo + '</td>'+
                                '</tr>'
        }
    })
}
