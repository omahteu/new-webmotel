import { minuto_para_segundo } from "./js/conversores/minutos_segundos.js"

$(document).ready(function(){
    var minutos = 30
    var segundos = minutos * 60
    console.log(minuto_para_segundo(30))
})