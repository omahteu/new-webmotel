export function registro_movimento(data, codigo, tipo, quantidade){ 
    var dados = {
        data: data,
        codigo: codigo,
        tipo: tipo,
        quantidade: quantidade
    }
    $.post("https://demomotelapi.herokuapp.com/movimentos/", dados, () => {
        console.log("Registrado!")
    })
}
