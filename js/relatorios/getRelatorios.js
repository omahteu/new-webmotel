import {dadosQuartos } from './getQuartos.js'
import { dadosProdutos } from './getProdutos.js'
import { dadosOcupacoes } from './getOcupacoes.js'

$(document).ready(function(){
    
    dadosQuartos()
    dadosProdutos()
    dadosOcupacoes()
})
