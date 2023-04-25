//desafios compondo objetos

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"alura@gmail.com",
    fones:["81955554444","81999998888"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"Filha",
    nascimento:"20/03/2011"
}

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)