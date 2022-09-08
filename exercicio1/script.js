/*Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
Faça isso:
    
1. Utilizando ifs aninhados

    if(expressao){
        if(expressao){

        }
    }*/

const num = prompt("Digite um número")

if (num % 2 === 0){
    if (num === 0){
        console.log("O número é divisível por 2 e 3")
    } else {
        console.log("O número é divisível apenas por 2")
    }
}
else if(num % 3 === 0){
    console.log("O número é divisível apenas por 3")
}else{
    console.log("O número não é divisível por 2, nem por 3")
}
/*2. Utilizando um operador lógico para unir duas operações relacionais

    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
        }

if (num %2 === 0 || num %3 ===0){
    console.log("Divisível por 2 ou 3")
}else{
    console.log("Não é divisível por 2 ou 3")
} */