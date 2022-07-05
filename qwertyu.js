import { minuto_para_segundo } from "./js/conversores/minutos_segundos.js"

$(document).ready(function(){
    var minutos = 60
    var segundos = minutos ** 3

    var x1 = 2
    var x2 = x1 * 60
    var x3 = x2 * 1000
    console.log(x3)
})