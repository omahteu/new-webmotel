import { modos } from '../setup/box.js'

function mostraProduto(identificador){
	$.get("https://demomotelapi.herokuapp.com/comanda/", function(retorno){
		var prateleira = document.getElementById('listaProdutosComprados');
		prateleira.innerHTML = '';
		try {
			var dados = retorno.filter(quartos => quartos.quarto == identificador)
			dados.forEach(function(resultado){
				var id = resultado.id
				var quarto =  resultado.quarto
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
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}
	})
}

function mostraVeiculo(identificador){
	// Requisição GET
	$.get("https://demomotelapi.herokuapp.com/patio/", function(retorno){
		// Parâmetro e Instância de Tabela
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		try {
			// Filtro
			var dados = retorno.filter(quartos => quartos.quarto == identificador)
			// Percorrendo o Array e Formantando uma Tabela
			dados.forEach(function(resultado){
				var id = resultado.id
				var quarto =  resultado.quarto
				var veiculo = resultado.veiculo
				var modelo = resultado.modelo
				var placa = resultado.placa
				patio.innerHTML += '<tr>'+
											'<td>'+ quarto + '</td>' +
											'<td>'+ veiculo + '</td>' +
											'<td>'+ modelo + '</td>' +
											'<td>'+ placa + '</td>' +
											'<td><button type="button" onclick="removeVeiculo('+ id +')" class="btn btn-danger">Remover</button></td>'+
										'</tr>';
			})
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}
	})
}

$(document).on('click', '[class="card"]', function(){
	var ind = $(this)
	var ind2 = $(ind[0].children[0])
	var ind3 = $(ind2[0].children[1])
	var identificador = ind3.text()
	setTimeout(function() {
		var cor = $(`.cardBox .card:nth-child(${identificador})`).css("background-color")
		// Filtro para Restaurar as Tags Corretas
		switch(cor){
			case 'rgb(169, 169, 169)':
				$("#tipo").text('manutencao')
				break
			case 'rgb(255, 0, 0)':
				$("#tipo").text('locado')
				break
			case 'rgb(255, 228, 196)':
				$("#tipo").text('faxina')
				break
			case 'rgb(75, 192, 192)':
				$("#tipo").text('livre')
				break
		}
		switch (identificador) {
			case '1':
				$("#intervalo").text(modos.slice(0, 3))
				backupInfos(identificador)
				break;
			
			case '2':
				$("#intervalo").text(modos.slice(3, 6))
				backupInfos(identificador)
				break
	
			case '3':
				$("#intervalo").text(modos.slice(6, 9))
				backupInfos(identificador)
				break
			
			case '4':
				$("#intervalo").text(modos.slice(9, 12))
				backupInfos(identificador)
				break
		}
		// Variáveis usadas para Filtro
		let tipo = $("#tipo").text()
		let tipos = ['locado']
		// Filtro para Restauração de Produtos e Veículos
		if(tipos.includes(tipo)){
			mostraProduto(identificador)
			mostraVeiculo(identificador)
		}
	}, 500);
})


function backupInfos(instance){
	mostraProduto()
	$.get("https://demomotelapi.herokuapp.com/infos/", function(retorno){
		try {
			var dados = retorno.filter(quartos => quartos.quarto == instance)
			if(dados.length == 0){
				$(`[name=${instance}]`).css('display', 'inline-block')
				$(".acoes1"). removeAttr('style')
				$(".acoes2"). removeAttr('style')
				$(".acoes3"). removeAttr('style')
			} else {
				switch (dados[0].tipo) {
					case 'locado':
						$(`[name=${instance}]`).css('display', 'none')
						$(".acoes1").css('display', 'inline-block')
						$(".acoes1").val('Trocar Suíte')
						$(".acoes2").css('display', 'inline-block')
						$(".acoes2").val('Encerrar')
						$(".acoes3").css('display', 'none')
						$(".acoes3").val('Cancelar Reserva')
						break;

					case 'manutencao':
						$(`[name=${instance}]`).css('display', 'none')
						$(".acoes1").css('display', 'inline-block')
						$(".acoes1").val('Iniciar Faxina')		
						$(".acoes2").css('display', 'inline-block')
						$(".acoes2").val('Disponibilizar Quarto')		
						$(".acoes3").css('display', 'inline-block')
						$(".acoes3").val('Ligar Luz')
						break

					case 'faxina':
						$(`[name=${instance}]`).css('display', 'none')
						$(".acoes1").css('display', 'inline-block')
						$(".acoes1").val('Disponibilizar Quarto')
						$(".acoes2").css('display', 'none')
						$(".acoes2").val('')
						$(".acoes3").css('display', 'none')
						$(".acoes3").val('')
						break
					
					case 'aguardando':
						$(`[name=${instance}]`).css('display', 'none')
						$(".acoes1").css('display', 'inline-block')
						$(".acoes1").val('Iniciar Limpeza')
						$(".acoes2").css('display', 'none')
						$(".acoes2").val('')
						$(".acoes3").css('display', 'none')
						$(".acoes3").val('')
						break

					case 'limpeza':
						$(`[name=${instance}]`).css('display', 'none')
						$(".acoes1").css('display', 'inline-block')
						$(".acoes1").val('Encerrar Limpeza')
						$(".acoes2").css('display', 'none')
						$(".acoes2").val('')
						$(".acoes3").css('display', 'none')
						$(".acoes3").val('')
						break
				
					default:
						break;
				}
			}
			dados.forEach(function(resultado){
				$("#numquarto").text(resultado.quarto)
				$("#quarto_painel").text(resultado.quarto)
				$("#entrada").text(resultado.datahora)
				$("#valor-quarto").text(resultado.valor)
				$("#preco_quarto").text(resultado.valor)	
			})
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}
	})
    setTimeout(function(){
		$.get("https://demomotelapi.herokuapp.com/comanda/", (e) => {
			var dados = e.filter(quartos => quartos.quarto == instance)
			var sum = 0;
			for(var a = 0; a < dados.length; a++){
				sum += parseFloat(dados[a].valor_total.slice(2).trim())
			}
			$("#consumo_painel").text(sum)
		})
        
    }, 500)
	setTimeout(function(){
		var valor_quarto = $("#valor-quarto").text()
		var valor_consumo = $("#consumo_painel").text()
		console.log(valor_consumo)
		var resultado = parseFloat(valor_quarto) + parseFloat(valor_consumo)
		$("#parcial_painel").text(resultado)
	}, 670)
}
