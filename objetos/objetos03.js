// desafio acessar lista

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"alura@gmail.com"
}

const chaves = ["nome","idade","cpf","email"]

// console.log(cliente[chaves[0]]) metodo para pegar uma posição especifica do array
//acesso a lista pelo uso de arrays para listar as variaveis,e printar elas usando sua posição

chaves.forEach(info => console.log(cliente[info]))

//exibe todas as informações exitentes nas chaves