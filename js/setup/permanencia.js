export function busca_permanencia(id, nome, variavel){
    var quarto = $("#quarto_painel").text()
    var hora = $(`hour${id}`).text()
    var minutos = $(`minute${id}`).text()
    var segundos = $(`second${id}`).text()
    var permanencia = hora + ":" + minutos + ":" + segundos
    localStorage.setItem(nome != undefined ? nome : quarto , String(variavel == undefined ? permanencia : variavel))
}
