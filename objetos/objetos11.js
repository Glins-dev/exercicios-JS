const clientes = [
{
    nome: "andre",
    cpf: "123456789",
    dependentes: [{
        nome:"sara",
        parentesco:"filha",
        nascimento:"20/03/2013"
    },
    {
        nome:"samia",
        parentesco:"filha",
        nascimento:"15/07/2014"   
    }],
    },
    {
        nome:"juliana",
        cpf:"333444999",
        dependentes:[{
            nome:"sophia",
            parentesco:"filha",
            nascimento:"30/08/2020"
        }], 
    }
]

    const listaDependentes = [...clientes[0].
    dependentes,...clientes[1].dependentes]

    console.table(listaDependentes)

