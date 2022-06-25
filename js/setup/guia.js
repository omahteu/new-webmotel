const url = "https://demomotelapi.herokuapp.com/infos/"

window.onbeforeunload = () => {
    asd()
    return 'Tem a certeza que quer fechar a janela?';
 };

async function asd (){
    const resposta = await fetch(url)
    const dados = await resposta.json()
    var ver = []
    dados.forEach(e => {
        var restaurar = e.quarto
        ver.push(restaurar)
    });
    for(var i = 0; i <= ver.length; i++){
        var hora = $("#hour"+ver[i]).text()
        var minutos = $("#minute"+ver[i]).text()
        var segundos = $("#second"+ver[i]).text()
        var permanencia = hora + ":" + minutos + ":" + segundos
        localStorage.setItem(ver[i], permanencia)
    }
 }
 