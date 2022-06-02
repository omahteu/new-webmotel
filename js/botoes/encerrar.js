$("#encerrar").click(function(){
    setTimeout(function(){limpando()}, 300)
    setTimeout(function() {ocupacao()}, 500)
    setTimeout(function(){limpando()}, 800)

})

/*

=> LISTA DO QUE DEVE SER LIMPO

1. LOCALSTORAGE | X
2. SESSIONSTOREAGE | X
3. INFOS | X
4. COMANDA | X
5. PÁTIO | X
6. SUBTRAIDO OS PRODUTOS | X
7. GERAR O RELATÓRIO DE OCUPAÇÃO | X
8. RELATÓRIO DE LIMPEZAS |

*/

function limpando(){
    var quartx = sessionStorage.getItem("quarto")

    $.get("https://demomotelapi.herokuapp.com/infos/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        var id = dados[0].id
        console.log(id)
        $.ajax({
            url: "https://demomotelapi.herokuapp.com/infos/" + id + "/",
            type: 'DELETE'
        });
    })

    $.get("https://demomotelapi.herokuapp.com/comanda/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        var id = dados[0].id

        $.ajax({
            url: "https://demomotelapi.herokuapp.com/comanda/" + id + "/",
            type: 'DELETE'
        });
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
}

function registrando(){
    let quarto = sessionStorage.getItem("quarto")
    var box = []
    $.get("https://demomotelapi.herokuapp.com/comanda/", (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quarto)
        let descricao = dados[0].descricao
        let quantidade = dados[0].quantidade
        box.push(descricao, quantidade)
    })
    $.get("https://demomotelapi.herokuapp.com/produtos/", (e) =>{
        var produto = box[0]
        var produto_quantidade = box[1]
        var dados = e.filter(quartos => quartos.descricao == produto)
        var estoque = dados[0].quantidade
        var id_estoque = dados[0].id
        var codigo_estoque = dados[0].codigo
        var descricao_estoque = dados[0].descricao
        var valorunitario_estoque = dados[0].valorunitario
        var categoria_estoque = dados[0].categoria
        var novo_estoque = parseInt(estoque) - parseInt(produto_quantidade)
        var data_estoque = dados[0].data
        console.log(novo_estoque)
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
    let dataAtual = `${String(dia)}:${String(mes)}:${String(ano)}`
    let codigo_ocupacao = gera_codigo()
    let entrada = box[0].tempo
    let saida = `${hora}:${minutos}`
    let total = $("#totalGeral").text()
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