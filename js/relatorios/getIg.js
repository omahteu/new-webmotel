$(document).ready(function(){

    $.get("https://defmoteapi.herokuapp.com/igs/", function(resultado){

        var endereco = `${resultado[0].endereco} ${resultado[0].numero} - ${resultado[0].bairro}, ${resultado[0].cidade}`

        var cnpjBruto = String(resultado[0].cnpj)
        var cnpj1 = cnpjBruto.slice(0, 2)
        var cnpj2 = cnpjBruto.slice(2, 5)
        var cnpj3 = cnpjBruto.slice(5, 8)
        var cnpj4 = cnpjBruto.slice(8, 12)
        var cnpj5 = cnpjBruto.slice(12, 14)

        var telefoneBruto1 = resultado[0].telefone
        var telefoneBruto2 = resultado[0].telefone2
        var telefoneBruto3 = resultado[0].telefone3

        $("#email").text(resultado[0].fantasia)
        $("#cnpj").text(`${cnpj1}.${cnpj2}.${cnpj3}/${cnpj4}-${cnpj5}`)
        $("#endereco").text(endereco)
        $("#telefone").text(`(${telefoneBruto1.slice(0, 2)}) ${telefoneBruto1.slice(2)}`)
        $("#telefone2").text(`(${telefoneBruto2.slice(0, 2)}) ${telefoneBruto2.slice(2)}`)
        $("#telefone3").text(`(${telefoneBruto3.slice(0, 2)}) ${telefoneBruto3.slice(2)}`)
    })
})
