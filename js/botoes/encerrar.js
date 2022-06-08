$("#encerrar").click(function(){
    setTimeout(function() {registrando()}, 300)
    setTimeout(function() {ocupacao()}, 500)
    setTimeout(function() {limpando()}, 800)
    /*setTimeout(function() {
        window.close()
    }, 1000)*/


})



function clean(id){
    $.ajax({
        url: "https://demomotelapi.herokuapp.com/comanda/" + id + "/",
        type: 'DELETE',
        success: function(){
            console.log("apagado")
        },
        async: true
    })

}

function limpando(){
    var quartx = sessionStorage.getItem("quarto")
    $.get("https://demomotelapi.herokuapp.com/comanda/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        

        dados.forEach(element => {
            var id = element.id
            clean(id)
        });

        
/*
        do {
            var id = dados[i].id
            clean(id)
            i++
        } while(i <= dados.length)

        for(var i=0; i <= dados.length; i++){
            var id = dados[i].id
            clean(id)
        }*/
    })

    $.get("https://demomotelapi.herokuapp.com/patio/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        if(dados.length == 0){
            console.log("Pátio Vázio!")
        } else {
            var id = dados[0].id
            $.ajax({
                url: "https://demomotelapi.herokuapp.com/patio/" + id + "/",
                type: 'DELETE'
            });
        }
    })
    localStorage.removeItem(quartx)
    localStorage.removeItem("dadosQuarto")
    sessionStorage.removeItem(quartx)
    sessionStorage.removeItem("quarto")
}

function registrando(){
    let quarto = sessionStorage.getItem("quarto")
    var box = []
    $.get("https://demomotelapi.herokuapp.com/comanda/", (e) =>{
        var dados_comanda = e.filter(quartos => quartos.quarto == quarto)
        dados_comanda.forEach(elemento => {
            let descricao = elemento.descricao
            let quantidade = elemento.quantidade
            box.push(descricao, quantidade)
        });
    })
    $.get("https://demomotelapi.herokuapp.com/produtos/", (e) =>{
        

        var resultado_produtos = box.filter( estadosComS  => (estadosComS.length > 2));
        //console.log(resultado_produtos)

        var resultado_quantidade = box.filter( estadosComS  => (estadosComS.length < 3));
        //console.log(resultado_quantidade)

          
        const juncao = resultado_produtos.map((resultado_produtos, indice) => ({ ...resultado_produtos, ...resultado_quantidade[indice] } ));
          
        console.log(juncao);




        //var produto = box[0]
        //var produto_quantidade = box[1]
        var dados = e.filter(quartos => quartos.descricao == produto)
        var estoque = dados[0].quantidade
        var id_estoque = dados[0].id
        var codigo_estoque = dados[0].codigo
        var descricao_estoque = dados[0].descricao
        var valorunitario_estoque = dados[0].valorunitario
        var categoria_estoque = dados[0].categoria
        var novo_estoque = parseInt(estoque) - parseInt(produto_quantidade)
        var data_estoque = dados[0].data
        
        $.ajax({
            url: "https://demomotelapi.herokuapp.com/produtos/" + id_estoque + "/",
            type: "PUT",
            dataType: "json",
            data: {
                codigo: codigo_estoque,
                descricao: descricao_estoque,
                valorunitario: valorunitario_estoque,
                quantidade: novo_estoque,
                categoria: categoria_estoque,
                data: data_estoque
            }
        })

    })
}

function gera_codigo(){
	var size = 5
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}

function ocupacao(){
    var base = new Date();
    var dia = base.getDate()
    var mes = base.getMonth()
    var ano = base.getFullYear()
    var hora = base.getHours()
    var minutos = base.getMinutes()
    let quarto = sessionStorage.getItem("quarto")
    var box = JSON.parse(localStorage.getItem("dadosQuarto"))
    let dataAtual = `${String(dia)}/${String(mes)}/${String(ano)}`
    let codigo_ocupacao = gera_codigo()
    let entrada = box[0].tempo
    let saida = `${hora}:${minutos}`
    let total = $("#totalGeral").text()
    localStorage.setItem(`codigo${quarto}`, codigo_ocupacao)
    dados = {
        data: dataAtual,
        codigo: codigo_ocupacao,
        quarto: quarto,
        entrada: entrada,
        saida: saida,
        total: total
    }
    $.post("https://demomotelapi.herokuapp.com/ocupacoes/", dados, function(){
        console.log("Relatório Criado")
    })
}
