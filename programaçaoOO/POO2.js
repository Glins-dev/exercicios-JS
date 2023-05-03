const user = {
    
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: "true",

    exibirInfos: function() {
        console.log(this.nome, this.email,this.role,this.nascimento)
    }

}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log("curso criado")
    }
}

const prof = {
    nome: "guilherme",
    email: "gui@gmail.com",
    role: "prof",
    nascimento:"08/12/1990",
    gravarAula() {
        console.log("Aula gravada")
    }
}

Object.setPrototypeOf(prof,user)
prof.exibirInfos()
prof.gravarAula()