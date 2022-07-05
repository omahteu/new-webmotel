import { link } from "../setup/index.js"

$("#peProdutos").click(function(){
    $.get(link[16], function(e){
        e.forEach(element => {
            var janela = window.open()
            janela.document.write(
                "<html>"+
                    "<head>"+
                        "<title>Relatório de Produtos | PDF</title>"+
                    "</head>"+
                    "<body>"+
                        "<table border='1'>"+
                            "<thead>"+
                                "<tr>"+
                                    "<th>Código</th>"+
                                    "<th>Descrição</th>"+
                                    "<th>Valor Unitário</th>"+
                                    "<th>Estoque</th>"+
                                    "<th>Categoria</th>"+
                                    "<th>Compra</th>"+
                                "</tr>"+
                            "</thead>"+
                            "<tbody"+
                                '<tr>'+
                                    '<td>' + element.codigo + '</td>'+
                                    '<td>' + element.descricao + '</td>'+
                                    '<td>' + element.valorunitario + '</td>'+
                                    '<td>' + element.quantidade + '</td>'+
                                    '<td>' + element.categoria + '</td>'+
                                    '<td>' + element.data + '</td>'+       
                                '</tr>'+
                            "</tbody"+
                        "</table>"+
                    "</body>"+
                "</html>"
            )
            janela.document.close()
            janela.print()
        });
    })
})
