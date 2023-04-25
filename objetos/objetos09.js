//desafio puxando relatorio

const clientes = {
//chave:   //"info",
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
        }
  }
    let relatorio = "";

    for (let info in clientes){
        if(typeof clientes [info]=== "object" || typeof clientes [info] === "function")
        {
            continue
        }else{
        relatorio += `
        ${info} ===> ${clientes[info]}`
    }
    }

    console.log(relatorio)
