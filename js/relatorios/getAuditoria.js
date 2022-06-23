var soma = 0
var nomes = []
var datas = []

$(document).ready( () => {
    busca_datas()
    busca_usuarios()
})

$("#mostrarRelatorio").click( () => {
    var option = $('#selectUsuarios').find(":selected").text()
    var data_rel = $("#data_relatorio").val()
    elo = new Date(data_rel)
    dataFormatada = elo.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    filtro(option, dataFormatada)
})

async function busca_datas(){
    const query = await fetch("https://demomotelapi.herokuapp.com/auditoria/")
    const dados = await query.json()
    dados.forEach(el => {
        let data = el.data
        datas.push(data)
    })
}

async function busca_usuarios(){
    const query = await fetch("https://demomotelapi.herokuapp.com/auditoria/")
    const dados = await query.json()
    dados.forEach(el => {
        let nome = el.nome
        nomes.push(nome)
    })
}

async function filtro(nome, data){
    //var datx = datas.filter((este, i) => datas.indexOf(este) === i)
    //var datx2 = nomes.filter((este, i) => nomes.indexOf(este) === i)
    const query = await fetch("https://demomotelapi.herokuapp.com/auditoria/")
    const resposta = await query.json()
    resposta.forEach(element => {
        if(element.nome == nome && element.data == data){
            soma += parseInt(element.tempo)
        }
    })

    if(soma > 1){
        alert(`${nome} em ${data} permaneceu ativo por ${soma} minutos!`)
    } else {
        alert("Dados Indisponíveis!")
    }
}

function exibe_auditoria(nome){
    var prateleira = document.getElementById("tabelaRelatorioAuditoria")
    prateleira.innerHTML = ''
    $.get("https://demomotelapi.herokuapp.com/auditoria/", e => {
        var dados = e.filter(quartos => quartos.nome == nome)
        dados.forEach(el => {
            let data = el.data
            datas.push(data)
            let nome = el.nome
            let tempo = soma
            /*
            prateleira.innerHTML += '<tr>'+
                                        '<td>'+ data + '</td>' +
                                        '<td>'+ nome + '</td>' +
                                        '<td>'+ tempo + '</td>' +        
                                    '</tr>'*/

        });
    var datx = datas.filter((este, i) => datas.indexOf(este) === i);
    //console.log(datx)
    for(const index in datx){
        //console.log(datx[index])
        var dia = datx[index]
        var dados = e.filter(quartos => quartos.data == dia)
        //console.log(dados[0].data)
        prateleira.innerHTML += '<tr>'+
                                '<td>'+ dados[0].data + '</td>' +
                                '<td>'+ dados[0].nome + '</td>' +
                                '<td>'+ 'tempo' + '</td>' +        
                            '</tr>'

    }


    })

    //console.log(nomes)

    /*
    for(var i = 0; i < nomes.length; i++){
        console.log(nomes[i])
    }

    for(const index in nomes){
        console.log(nomes[index])

    }
    */






    /*
    $.get("https://demomotelapi.herokuapp.com/auditoria/", e => {
        e.forEach(el => {
            let data = el.data
            let nome = el.nome
            let tempo = el.tempo

            prateleira.innerHTML += '<tr>'+
                                        '<td>'+ data + '</td>' +
                                        '<td>'+ nome + '</td>' +
                                        '<td>'+ tempo + '</td>' +        
                                    '</tr>';

        });
    })
    */
}
