import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./admin.js";

//const novoUser = new User ("Mariana","m@m.com","20/06/2009")
//console.log(novoUser.exibirInfos())

//novoUser.#email = "x@x.com" - # serve para tornar atributos privados (encapsulamento)

const novoAdmin = new Admin("kalline","k@k.com","08/12/2000")
console.log(novoAdmin.nome)
novoAdmin.nome = "Andre"
console.log(novoAdmin.nome)