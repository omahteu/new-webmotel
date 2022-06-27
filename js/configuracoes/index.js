import { ver_tabela_emuso } from "./tabela_precos.js"
import { ver_tabela_tempos } from "./tempo.js"
import { seleciona_tempo } from "./tempo.js"

$(document).ready(function() {
    ver_tabela_emuso()
    ver_tabela_tempos()
    seleciona_tempo()
})
