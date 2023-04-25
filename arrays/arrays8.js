const alunos = ["guilherme","kalline","matheus","glauber"];

const mediaAlunos = [10,7,9,6];

let listaDeAlunosENotas = [alunos,mediaAlunos]

const exibiNomeNota = (nomeAlunos) => {
    if (listaDeAlunosENotas[0].includes(nomeAlunos)){
        indice = listaDeAlunosENotas[0].indexOf(nomeAlunos)

    return listaDeAlunosENotas[0][indice] + ",sua media é " + listaDeAlunosENotas[1][indice]

    } else {
        return "Aluno não encontrado"
    }
}

console.log(exibiNomeNota("glauber"));