$(document).ready(function(){
	
	informacaoes()
})

function informacaoes(){

	var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

	$.get("https://defmoteapi.herokuapp.com/comanda/", function(retorno){

		var sum = 0
		var valor_quarto

		var adicionalQuarto = JSON.parse(localStorage.getItem('dadosQuarto'))
		let tempo = adicionalQuarto[0].tempo
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
												'<td>'+
													'<div class="product-cart d-flex">'+
														'<div class="product-content media-body">'+
															'<h5 class="title">' + descricao + '</h5>'+
															'<span>Unidade Custa R$ ' + valor_unitario + '</span>'+
														'</div>'+
													'</div>'+
												'</td>'+
												'<td>'+
													'<p>' + quantidade + '</p>'+
												'</td>'+
												'<td>'+
													'<p class="price" id="total">' + valor_total + '</p>'+
												'</td>'+
												'<td><button onclick="removeItens(' + id  + ')" class="btn btn-danger">Remover</button></td>'+
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

		$("#valorItens").text(sum)
		$("#valorQuarto").text(valor_quarto)
		$("#tempoPermanencia").text(tempo)
		
		var ttgeral = Number(valor_quarto) + Number(sum)

		$("#totalGeral").text(ttgeral)
		$("#desconto").click(function(){
			
			var codigoDeconto = $("#codigoDesconto").val()
			$("#totalGeral").text(ttgeral = ttgeral - codigoDeconto)
			$("#codigoDesconto").val('')
			var descont = document.getElementById('codigoDesconto')
			descont.disabled = true
			$("#valorDesconto").text(codigoDeconto)
			
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