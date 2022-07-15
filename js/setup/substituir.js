import { link } from "../setup/index.js"

$("#substituir").click(function(){
    $.get(link[5], function(e){
        var quarto = $("#quarto_antigo").val()
        var dados = e.filter(item => item.quarto === quarto)
        dados.forEach(el => {
            var id = el.id
            $.ajax({
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                url : link[5] + id + "/",
                type : 'PATCH',
                data : JSON.stringify({quarto: "2"}),
                success : function() {
                    console.log("Troca Com Sucesso!");
                },
                error : function(textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
        })
    })
})
