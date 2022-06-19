export function data_atual(){
    var base = new Date();
    var dia = base.getDate()
    var mes = base.getMonth()
    var ano = base.getFullYear()
    return `${String(dia)}/${String(mes)}/${String(ano)}`
}
