function minhaFuncao(param){
    //bloco de codigo
}

//minhaFuncao("param")

    //expressão de função

const soma = function(num1,num2){
    return num1 + num2
}

//console.log(soma(5,5))


console.log(apresentar()) //Esse trabalho que ele faz, chamamos de hoisting, que é içar ou levantar; que é, exatamente,
                         //trazer todas essas declarações para cima do nosso código, no topo dele.

function apresentar(){
    return "ola";
}