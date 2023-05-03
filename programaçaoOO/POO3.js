function User(nome,email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome} ${this.email}`
    }
}

//const novoUser = new User("Juliana","j@j.com")
//console.log(novoUser.exibirInfos())

//function Adimin(role) {
//    User.call(this,"juliana","j@j.com")
//    this.role = role || "estudante"
// }

//Adimin.prototype = Object.create(User.prototype)
//const novoUser = new Adimin("admin")

//console.log(novoUser.exibirInfos())
//console.log(novoUser.role)

const user = {
    init: function(nome,email){
        this.nome = nome
        this.email = email
    },


    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init("juliana","j@j.com")
console.log(novoUser.exibirInfos())
//console.log(novoUser.exibirInfos("Juliana"))
//console.log(user.isPrototypeOf(novoUser))