$(document).ready(() => {
    var permanencia = localStorage.getItem("permanencia")
    var dados = {
        tempo: permanencia
    }
    $.post("https://demomotelapi.herokuapp.com/auditoria/", dados, () => {
        console.log("Salvo")
    })
})