$("#adicionar_produto").click(function(){
    registroProduto()
})

function registroProduto(){
	// Parâmetros
	var descricao = $("#descricao_produto").val()
    var quantidade = $("#quantidade_produto").val()
	var valorTotal = $("#total_produto").val()
    var quarto =  sessionStorage.getItem("quarto")
    var valorUnitario = $("#valor_unitario_produto").val()
	//var valor = $("#valor-quarto").text()
	var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
	var hora_atual = `${hora}:${minutos}`
    // Objetos
	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
		datahora: hora_atual,
		valor_quarto: "0"
	}
	// Requisição POST
	$.post("https://demomotelapi.herokuapp.com/comanda/", produto, function(){
		alert('Produto Adicionado!')
		mostraProduto();
    })
	// Limpa os Campos
	document.getElementById('produtos_checkout').reset();
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

function mostraProduto(){

	// Requisição GET
	$.get("https://demomotelapi.herokuapp.com/comanda/", function(retorno){
		// Parâmetro e Instância de Tabela
		var nQuarto =  sessionStorage.getItem("quarto")
		var prateleira = document.getElementById('itensComprados');
		prateleira.innerHTML = '';
		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)
		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach(function(resultado){
			var id = resultado.id
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valorTotal = resultado.valor_total

			prateleira.innerHTML += '<tr>'+
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										'<td>'+ valorUnitario + '</td>' +
										'<td>'+ valorTotal + '</td>' +
										'<td><button type="button" onclick="removeProduto('+ id +')" class="btn btn-danger">Remover</button></td>'+
									'</tr>';
		})
	})
}
