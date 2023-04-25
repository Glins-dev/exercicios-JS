const nomes = ["Guilherme","Kalinne","Marcos","Mauro"]

const notas = [6,4.5,8,7]

const reprovados = nomes.filter( (aluno,indice) => notas[indice] < 7)

console.log(`Reprovados: ${reprovados}`);