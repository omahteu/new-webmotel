import { inicioModal } from '../setup/camareiras.js'
/*
$("#botao_hub").click(function(){

    inicioModal('modau-camareiras')

})*/

$(document).on('click', '#botao_hub', function(){
    inicioModal('modau-camareiras')
})
/*
$('[class="card"]').click(function(){
    var ind = $(this)
    var ind2 = $(ind[0].children[0])
    var ind3 = $(ind2[0].children[1])
    console.log(ind3.text())
})*/