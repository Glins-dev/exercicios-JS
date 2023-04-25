const clientes = {
    nome: 'Andre',
    idade: 36,
    cpf: '123456789',
    email: 'alura@gmail.com',
    fones: [ '81955554444', '81999998888' ],
    dependentes:
        [{ nome: 'Sara Silva',
        parentesco: 'Filha',
        nascimento: '20/03/2011' }]
  }

  clientes.dependentes.push({
    nome:"Samia Silva",
    parentesco:"filha",
    nascimento:"25/08/2014"
})

console.log(clientes)

const filhaMaisNova = clientes.dependentes.filter(dependente => dependente.nascimento==="25/08/2014")

console.log(filhaMaisNova)