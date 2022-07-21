export function busca_permanencia(id, variavel){
    var quarto = $("#quarto_painel").text()
    var hora = $(`#hora${id}`).text()
    var minutos = $(`#minuto${id}`).text()
    var segundos = $(`#segundo${id}`).text()
    var permanencia = `${hora}:${minutos}:${segundos}`
    localStorage.setItem(quarto, String(variavel == undefined ? permanencia : variavel))
}
