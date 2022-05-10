$("#registrar_produto").click(function(){
	registroProduto()
})

function registroProduto(){
	
	// Parâmetros
	var descricao = $("#descricao").val()
    var quantidade = $("#quantidade").val()
	var valorTotal = $("#valor_total").val()
    var quarto =  $("#numquarto").text()
    var valorUnitario = $("#valor_unitario").val()
	var valor = $("#valor-quarto").text()

	var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    var datahora = String(hora) + ':' + String(minutos)
	
    
    // Objetos
	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
		datahora: datahora,
		valor_quarto: valor
	}

	// Requisição POST
	$.post("https://demomotelapi.herokuapp.com/comanda/", produto, function(){

		// Exibe os Produtos
		mostraProduto();
    })

	// Limpa os Campos
	document.getElementById('listaProdutosComprados').reset();
}

function removeProduto(operacao){

	motivo = prompt('Motivo da retirada do produto:')

	if (motivo == null){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else if (motivo.length == 0){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else {
		// Requisição DELETE
		$.ajax({
			url: "https://demomotelapi.herokuapp.com/comanda/" + operacao,
			method: 'DELETE',
			dataType: 'json',
			success: function(data){
				alert('Produto Excluído!')
				mostraProduto();
			}
		})
	}
}

// GUARDAR O MOTIVO NUMA VARIÁVEL E ADICIONAR A API

function mostraProduto(){

	// Requisição GET
	$.get("https://demomotelapi.herokuapp.com/comanda/", function(retorno){

		// Parâmetro e Instância de Tabela
		var nQuarto =  $("#numquarto").text()
		var prateleira = document.getElementById('listaProdutosComprados');
		prateleira.innerHTML = '';

		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach(function(resultado){

			var id = resultado.id
			var quarto = resultado.quarto
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valorTotal = resultado.valor_total

			prateleira.innerHTML += '<tr>'+
										'<td>'+ quarto + '</td>' +
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										'<td>'+ valorUnitario + '</td>' +
										'<td>'+ valorTotal + '</td>' +
										'<td><button onclick="removeProduto('+ id +')" class="btn btn-danger">Remover</button></td>'+
									'</tr>';
		})
	})
}
