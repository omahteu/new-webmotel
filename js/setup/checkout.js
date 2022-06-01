$(document).ready(function(){
	informacaoes()
})

function informacaoes(){
	var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))
	$.get("https://demomotelapi.herokuapp.com/comanda/", function(retorno){
		var sum = 0
		var valor_quarto
		var adicionalQuarto = JSON.parse(localStorage.getItem('dadosQuarto'))
		//console.log(adicionalQuarto)
		//let tempo = adicionalQuarto[0].tempo
	    var prateleira = document.getElementById('itensComprados');
		prateleira.innerHTML = '';
		try {
			var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)
			var existe = dados.length
			if(existe == 0){
				InfosPrimario()
			} else {
				dados.forEach(elemento => {
					var id = elemento.id
					var descricao =  elemento.descricao
					var quantidade =  elemento.quantidade
					var valor_total = elemento.valor_total
					var valor_unitario = elemento.valor_unitario
					valor_quarto = elemento.valor_quarto
					prateleira.innerHTML += '<tr>'+
												'<td>'+ descricao + '</td>' +
												'<td>'+ quantidade + '</td>' +
												'<td>'+ valor_unitario + '</td>' +
												'<td id="total">'+ valor_total + '</td>' +
												'<td><button type="button" onclick="removeProduto('+ id +')" class="btn btn-danger">Remover</button></td>'+
											'</tr>';
				});
			}
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}

		var precoProdutos = $("[id=total]").text()
		var somaPrecoProdutos = precoProdutos.split('R$')

		var totalPrecoProdutos = somaPrecoProdutos.filter(function (i) {
			return i;
		});

		for(var a = 0; a < totalPrecoProdutos.length; a++){
			sum += parseFloat(totalPrecoProdutos[a])
		}
		var preco_quarto = adicionalQuarto[0].valor
		var permanencia = localStorage.getItem(numero_quarto)
		$("#valorItens").text(sum)
		$("#valorQuarto").text(preco_quarto)
		$("#tempoPermanencia").text(permanencia)
		var ttgeral = Number(preco_quarto) + Number(sum)
		$("#totalGeral").text(ttgeral)
		$("#valor_subtotal").text(ttgeral)
	
		$(document).one('change', '#modo_desconto', function(){
			var tipo_desconto = $('#modo_desconto').find(":selected").index()
			if(tipo_desconto == "1"){
				$(document).one("click", "#aplicar_desconto", function(){
					var codigoDeconto = $("#valor_desconto").val()
					$("#totalGeral").text(ttgeral = ttgeral - parseInt(codigoDeconto))
					$("#valor_desconto").val('')
					var descont = document.getElementById('valor_desconto')
					descont.disabled = true
					$("#valor_desconto").attr("placeholder", codigoDeconto)
					$("#valorDesconto").text(codigoDeconto)
					$("#aplicar_desconto").attr("disabled", true)
				})
			} else if(tipo_desconto == "2"){
				$(document).one("click", "#aplicar_desconto", function(){
					var codigoDeconto = $("#valor_desconto").val()
					let valor_decimal = parseInt(codigoDeconto) / 100
					let valor_para_descontar = ttgeral * valor_decimal
					$("#totalGeral").text(ttgeral = ttgeral - valor_para_descontar)
					$("#valor_desconto").val('')
					var descont = document.getElementById('valor_desconto')
					descont.disabled = true
					$("#valor_desconto").attr("placeholder", codigoDeconto+"%")
					$("#valorDesconto").text(codigoDeconto+"%")
					$("#aplicar_desconto").attr("disabled", true)
				})
			}
		})
	
	})
}

function removeItens(operacao){
	motivo = prompt('Motivo da retirada do produto:')
	if (motivo == null){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else if (motivo.length == 0){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else {
		// Requisição DELETE
		$.ajax({
			url: "https://defmoteapi.herokuapp.com/comanda/" + operacao,
			method: 'DELETE',
			dataType: 'json',
			success: function(data){
				alert('Produto Excluído!')
				informacaoes();
			}
		})
	}
}

function getValores(){

	let numeroQuarto = $("#numquarto").text()
	let valorQuarto = $("#valor-quarto").text()
	let hora = $("#hour").text()
	let minuto = $("#minute").text()
	let tempo = `${hora}.${minuto}`

	// PEGAR AS INFOS DO QUARTO E PASSAR PARA OCUPAÇÕES
	// FAZER A SOMA AUTOMATICA DO TEMPO, COM OS QUARTOS ENCERRADOS
	// ENVIAR PARA A API
	// RECEBER E EXIBIR NOS RELATÓRIOS
	// EXIBIR NO FECHAMENTO
}	

async function InfosPrimario(){

	const resposta = await fetch('https://defmoteapi.herokuapp.com/infos/')
	const data = await resposta.json()

	var prateleira = document.getElementById('itensComprados');
	prateleira.innerHTML = '';

	var valor_quarto
	var sum = 0

	data.forEach(elemento => {
		valor_quarto = elemento.valor
	});

	$("#valorQuarto").text(valor_quarto)
	$("#valorItens").text(sum)
	
	var ttgeral = Number(valor_quarto) + Number(sum)

	$("#totalGeral").text(ttgeral)
}
