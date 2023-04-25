//desafio adicionar campos

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"alura@gmail.com"
}

cliente.fone = "992624433"

//serviu para adicionar mais um campo a constante cliente

console.log(cliente)

delete cliente.fone

//delete serviu para deletar um campo da chave cliente

console.log(cliente)