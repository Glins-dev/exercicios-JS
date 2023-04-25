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
            }
      }


      function oferecerSeguro(obj) {
        const propClientes = Object.keys(obj);
        
        if (propClientes.includes("dependentes"))
        {
            console.log(`oferta de seguro de vida para ${obj.nome}`);
        }
      }

      oferecerSeguro(clientes)

      //object.keys serve para buscar o chaves do projeto
      //object.values
      //object.entries