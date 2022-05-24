import { desfazer } from "../tags/desfazer.js";

var tempoDeEspera = 5 * 10 * 100;
var timeout = setTimeout(inativo, tempoDeEspera);

function actividade(e) {
  clearInterval(timeout);
  timeout = setTimeout(inativo, tempoDeEspera);
  // só para o exemplo
  console.log('Houve actividade de ' + (e.type == 'keyup' ? 'teclado' : 'ponteiro'));
}

function inativo() {
	$("#numquarto").text('0')
  $("#quarto_painel").text('0')
	$("#intervalo").text('0')
  $("#valor-quarto").text('0')
  $("#preco_quarto").text('0')
  $("#tipo").text('0')
  $("#entrada").text('')
	var prateleiraResultado = document.getElementById('listaProdutosComprados')
	prateleiraResultado.innerHTML = '';
  var patioResultado = document.getElementById('listaveiculosguardados')
  patioResultado.innerHTML = ''
  var fm = document.forms['botoes']
  var el = fm.elements
  el[0].setAttribute("name", '')
  el[1].setAttribute("name", '')
  el[2].setAttribute("name", '')
/*
  $.get("https://demomotelapi.herokuapp.com/infos/", (resultado) => {

    var suite = $("#quarto_painel").text()

    const locado = resultado.filter(item => item.quarto === suite)

    locado.includes(suite);

    console.log(locado.includes(suite))

    //resultado.forEach(function(item){
    //    $('#cod').append('<option>' + item.descricao + '</option>');
  })
  //$("[id=botaoq1]").css('display', 'inline-block')
  //$(".acoes1"). removeAttr('style')
  //$(".acoes2"). removeAttr('style')
  //d$(".acoes3"). removeAttr('style')*/
}

['keyup', 'touchmove' in window ? 'touchmove' : 'mousemove', "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll"].forEach(function(ev) {
  window.addEventListener(ev, actividade);
});
