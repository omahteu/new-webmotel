var soma = 0
var nomes = []
var datas = []

$(document).ready( () => {
    busca_datas()
    busca_usuarios()
})

$("#mostrarRelatorio").click( () => {
    var option = $('#selectUsuarios').find(":selected").text();
    filtro(option)
})

async function busca_datas(){
    const query = await fetch("https://demomotelapi.herokuapp.com/auditoria/")
    const dados = await query.json()
    dados.forEach(el => {
        let data = el.data
        datas.push(data)
    })
}

async function busca_usuarios(procurado){
    const query = await fetch("https://demomotelapi.herokuapp.com/auditoria/")
    const dados = await query.json()
    dados.forEach(el => {
        let nome = el.nome
        nomes.push(nome)
    })
}

async function filtro(nome){
    var datx = datas.filter((este, i) => datas.indexOf(este) === i)
    var datx2 = nomes.filter((este, i) => nomes.indexOf(este) === i)

    var dados = datx2.filter(quartos => quartos.nome == nome)
    console.log(dados)
    console.log(datx2)

    const query = await fetch("https://demomotelapi.herokuapp.com/auditoria/")
    const resposta = await query.json()
    resposta.forEach(element => {
        if(element.nome == datx2[0]){
            //console.log(element)
        }
    });


    //var ultimo = nomes;
    //console.log(nomes)
    /*
    for(const dia in datas){
        console.log(datas[dia])
        var user = nomes
        
    }
    */
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

function poew(){
    var datx = datas.filter((este, i) => datas.indexOf(este) === i)

    
    
    for(const index in datx){
        var dia = datx[index]
        $.get("https://demomotelapi.herokuapp.com/auditoria/", e => {
            var dados = e.filter(quartos => quartos.data == dia)
            dados.forEach(el => {
                console.log(el)
            });
        })



        /*
        var dados = e.filter(quartos => quartos.data == dia)
        console.log(dados[0].data)
        prateleira.innerHTML += '<tr>'+
                                '<td>'+ dados[0].data + '</td>' +
                                '<td>'+ dados[0].nome + '</td>' +
                                '<td>'+ 'tempo' + '</td>' +        
                            '</tr>'
                            */

    }
}
