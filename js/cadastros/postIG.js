$("#salvarFormPostIg").click(function(){

    let bairro = $("#bairroIg").val()
    let cidade = $("#cidadeIg").val()
    let cnpj = $("#cnpjIg").val()
    let endereco = $("#enderecoIg").val()
    let fantasia = $("#nomeFantasiaIg").val()
    let numero = $("#numeroIg").val()
    let social = $("#razaoSocialIg").val()
    let telefone = $("#telefoneIg").val()
    let telefone2 = $("#telefone2Ig").val()
    let telefone3 = $("#telefone3Ig").val()

    var dados = {
        social: social,
        fantasia: fantasia,
        cnpj: cnpj,
        cidade: cidade,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        telefone: telefone,
        telefone2: telefone2,
        telefone3: telefone3
    }

    $.post("https://demomotelapi.herokuapp.com/igs/", dados, function(){
        alert("Informações Registradas!")

        document.getElementById('formCadastros').reset()
    })
})
