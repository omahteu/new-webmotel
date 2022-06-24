const url = "https://demomotelapi.herokuapp.com/tabela/"

export async function ver_tabela_emuso(){
    const resposta = await fetch(url)
    const dados = await resposta.json()
    dados.forEach(element => {
        let tabela_emuso = element.tabela
        if(tabela_emuso == "Locação"){
            var index = 1
            document.getElementById("escolha_tabela_precos").options.selectedIndex = index
            $("#botao_tabela").text('Atualizar')
        } else if(tabela_emuso == "Diaria"){
            var index = 2
            document.getElementById("escolha_tabela_precos").options.selectedIndex = index
            $("#botao_tabela").text('Atualizar')
        } else if(tabela_emuso == "Pernoite"){
            var index = 3
            document.getElementById("escolha_tabela_precos").options.selectedIndex = index
            $("#botao_tabela").text('Atualizar')
        } else if(tabela_emuso == "Valores à Hora"){
            var index = 4
            document.getElementById("escolha_tabela_precos").options.selectedIndex = index
            $("#botao_tabela").text('Atualizar')
        } else {
            var index = 0
            document.getElementById("escolha_tabela_precos").options.selectedIndex = index
            $("#botao_tabela").text('Cadastrar')
        }
    })
}
