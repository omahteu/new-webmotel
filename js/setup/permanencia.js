export function busca_permanencia(){
    var quarto = $("#quarto_painel").text()
    var hora = $("#hour1").text()
    var minutos = $("#minute1").text()
    var segundos = $("#second1").text()
    //var permanencia = `${hora}:${minutos}:${segundos}`
    var permanencia = hora + ":" + minutos + ":" + segundos
    localStorage.setItem(quarto, String(permanencia))
}

// PEGAR O VALOR E SALVAR EM SESSIONSTORAGE PARA SER MANIPULADO