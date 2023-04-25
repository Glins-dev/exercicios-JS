class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}


const andre = new Cliente("Andre","andre@gmail.com","111333999",100)

const gui = new Cliente("Guilherme","guilherme@gmail.com","232456888",250)

andre.exibirSaldo()

console.log(andre,gui)