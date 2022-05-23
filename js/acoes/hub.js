import { inicioModal } from '../setup/camareiras.js'

$('[class="card"]').click(function(){
    var ind = $(this)
    var ind2 = $(ind[0].children[0])
    var ind3 = $(ind2[0].children[1])
    console.log(ind3.text())
})