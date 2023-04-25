const notas = [10,9,8,7,6]

const novaNota = notas.map(notas => notas == 10 ? notas : ++notas)

console.log(novaNota);



