$("#encerrar").click(function(){
    //console.log("Encerrando...")

    //localStorage.removeItem(quarto)
    //localStorage.removeItem("dadosQuarto"+quarto)
    //sessionStorage.removeItem(quarto)
    //const base = "https://demomotelapi.herokuapp.com/"
    const lista = ["infos/", "comanda/", "patio/"]
    for(var i = 0; i < lista.length; i++){
        console.log(lista[i])
        $.ajax({
            url: base + lista[i] + id + "/",
            type: 'DELETE'
         });
    }
})

/*

=> LISTA DO QUE DEVE SER LIMPO

1. LOCALSTORAGE
2. SESSIONSTOREAGE
3. INFOS
4. COMANDA
5. PÁTIO
6. SUBTRAIDO OS PRODUTOS
7. GERAR O RELATÓRIO DE OCUPAÇÃO

*/