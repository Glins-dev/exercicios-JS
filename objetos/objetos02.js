// desafio 01 (printar info)

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"alura@gmail.com"
}

//console.log(cliente.nome) //usar o comando ( console.log(cliente.+)

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos. ultimos 3 digitos
 do meu cpf são ${cliente.cpf.substring(6,9)}`) 
 //substring serviu para delimitar o numero de informação que seria mostrado. substring(inicio,final)
