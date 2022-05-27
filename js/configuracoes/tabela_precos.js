$(document).ready(function(){
    busca_tabela_preco()
})

$("#SalvarConfigEscolhaTabelaPreco").click(function(){
    var tabela_preco_selecionada = $('#escolha_tabela_precos').find(":selected").text()
    var confirmacao = confirm(`Confirme para usar a tabeça ${tabela_preco_selecionada}`)
    if(confirmacao == true){
        $.ajax({
            url: "https://demomotelapi.herokuapp.com/tabela/3/",
            type: 'PUT',
            dataType: 'json',
            data: {
                tabela: tabela_preco_selecionada
            },
            success: function(data){
                alert("Nova tabela selecionada!")
                location.reload()
            }
        })
    } else {
        console.log('Cancelado!')
    }


})

async function busca_tabela_preco(){
    const resposta = await fetch("https://demomotelapi.herokuapp.com/tabela/")
    const dados = await resposta.json()
    dados.forEach(element => {
        let tabela_emuso = element.tabela
        switch (tabela_emuso) {
            case "Locação":
                var index = 1
                document.getElementById("escolha_tabela_precos").options.selectedIndex = index
                $("#botao_tabela").text('Atualizar')
                break;
            
            case "Diaria":
                var index = 2
                document.getElementById("escolha_tabela_precos").options.selectedIndex = index
                $("#botao_tabela").text('Atualizar')
                break

            case "Pernoite":
                var index = 3
                document.getElementById("escolha_tabela_precos").options.selectedIndex = index
                $("#botao_tabela").text('Atualizar')
                break

            case "Valores à Hora":
                var index = 4
                document.getElementById("escolha_tabela_precos").options.selectedIndex = index
                $("#botao_tabela").text('Atualizar')
                break
        
            default:
                var index = 0
                document.getElementById("escolha_tabela_precos").options.selectedIndex = index
                $("#botao_tabela").text('Cadastrar')
                break;
        }
    });
}
