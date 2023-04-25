//desafio criar um codigo que permita depositos e saques usando funções

const clientes = {
    nome: 'Andre',
    idade: 36,
    cpf: '123456789',
    email: 'alura@gmail.com',
    fones: [ '81955554444', '81999998888' ],
    dependentes:
        [
            { nome: 'Sara Silva',
        parentesco: 'Filha',
        nascimento: '20/03/2011' },
        {
            nome:"Samia Silva",
            parentesco:"filha",
            nascimento:"25/08/2014"
        }
    
        ],
        saldo:100,
        depositar:function(valor)
        {
            this.saldo += valor
        },
        sacar:function(valor)
        {
            this.saldo -= valor
        }
  }

  console.log(clientes.saldo)
  clientes.sacar(30)
  console.log(clientes.saldo)
  
  