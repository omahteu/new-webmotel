import { hora_atual } from "../setup/gera_hora.js"

const url = "https://demomotelapi.herokuapp.com/comanda/"

$("#adicionar_produto").click( () => {
    registroProduto()
})

function registroProduto(){
	// Parâmetros
	var descricao = $("#descricao_produto").val()
    var quantidade = $("#quantidade_produto").val()
	var valorTotal = $("#total_produto").val()
    var quarto =  sessionStorage.getItem("quarto")
    var valorUnitario = $("#valor_unitario_produto").val()
	var hora = hora_atual()
    // Objetos
	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
		datahora: hora,
		valor_quarto: "0"
	}
	// Requisição POST
	$.post(url, produto,  () => {
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
			url: url + operacao,
			method: 'DELETE',
			dataType: 'json',
			success:  () => {
				alert('Produto Excluído!')
				mostraProduto();
			}
		})
	}
}

function mostraProduto(){

	// Requisição GET
	$.get(url, (retorno) => {
		// Parâmetro e Instância de Tabela
		var nQuarto =  sessionStorage.getItem("quarto")
		var prateleira = document.getElementById('itensComprados');
		prateleira.innerHTML = '';
		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)
		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach( (resultado) => {
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
