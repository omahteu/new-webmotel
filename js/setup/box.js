export var modos = ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10', 'x11', 'x12']
export var quartoum = ['a1', 'a2', 'a3']
export var quartodois = ['a4', 'a5', 'a6']
export var nomeCamareiras = []

export function dataAtual(){
    const data = new Date()
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = String(data.getFullYear())
    const hoje = `${dia}/${mes}/${ano}`
    return hoje
}

export function rg(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}

export function horaSaida(){
    const data = new Date()
    const hora = String(data.getHours())
    const minutos = String(data.getMinutes())
    const agora = `${hora}:${minutos}`
    return agora
}

export function liviaExclui(url, identificador){
    $.ajax({
		url: url + identificador,
		method: 'DELETE',
		dataType: 'json',
		success: function(data){
			console.log('excluídos!')
		}
	})
}

export function listaCamareiras(camareira){

    $.get("https://defmoteapi.herokuapp.com/camareiras/", function(resultado){

        var dados = resultado.filter(nomes => nomes.nome == camareira)

        dados.forEach(element => {
            sessionStorage.setItem('camareira'+element.nome, element.nome)
        });

    })

}

export function espera(){
    console.log('esperando')
}

export function ret(){
    var nome_camareira = $("#camareira").text()

    return nome_camareira
}

$("#limparFormPostQuarto").click(function(){
    document.getElementById('formPostQuarto').reset()
})

$("#limparFormPostProduto").click(function(){
    document.getElementById('formPostProduto').reset()
})

$("#limparFormPostIg").click(function(){
    document.getElementById('formPostIG').reset()
})

$("#limparFormPostEmail").click(function(){
    document.getElementById('formPostEmail').reset()
})

$("#limparFormPostCamareira").click(function(){
    document.getElementById('formPostCamareira').reset()
})
