const url = "https://demomotelapi.herokuapp.com/auditoria/"

$(document).ready(() => {
    var permanencia = JSON.parse(localStorage.getItem("permanencia"))
    var dados = {
        tempo: permanencia.permanencia,
        nome: permanencia.usuario,
        data: permanencia.hoje
    }
    $.post(url, dados, () => {
        console.log("Salvo")
    })
})
