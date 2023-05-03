import User from "./User.js";

export default class Docente extends User {

    constructor(nome, email, nascimento, role = "Docente", ativo = true) 
        {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarAluno (estudante,curso){
        return `Estudante ${estudante} foi apravado no curso de ${curso}`
    }
}

// const novoDocente = new Docente("Kalinne","K@K.com","21/12/1985")
  //  console.log(novoDocente)
  //  console.log(novoDocente.exibirInfos())
  //  console.log(novoDocente.aprovarAluno("Julia","Python"))