class User {
    constructor(nome,email,nascimento,role,ativo = true){
    this.nome = nome
    this.email = email
    this.nascimento = nascimento
    this.role = role || "estudante"
    this.ativo = ativo
    }
        exibirInfos(){
            return `${this.nome}, ${this.email}`
        }
}
const novoUser = new User("Juliana","j@j.com","08/12/2000")
console.log(novoUser)
console.log(novoUser.exibirInfos())