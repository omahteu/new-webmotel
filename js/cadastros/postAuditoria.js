import { link } from "../relatorios/index.js"

$(document).ready(() => {
    var permanencia = JSON.parse(localStorage.getItem("permanencia"))
    var dados = {
        tempo: permanencia.permanencia,
        nome: permanencia.usuario,
        data: permanencia.hoje
    }
    $.post(link[1], dados, () => {
        console.log("Salvo")
    })
})
