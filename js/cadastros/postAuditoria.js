$(document).ready(() => {
    var permanencia = JSON.parse(localStorage.getItem("permanencia"))
    var dados = {
        tempo: permanencia.permanencia,
        nome: permanencia.usuario,
        data: permanencia.hoje
    }
    $.post("https://demomotelapi.herokuapp.com/auditoria/", dados, () => {
        console.log("Salvo")
    })
})