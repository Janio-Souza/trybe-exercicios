let canditato = "Aprovado";

switch (canditato) {
    case "Aprovado":

        console.log("Parabens!");
        break;

    case "Lista de Espera":

        console.log("Aguarde por mais informações");
        break;

    case "Reprovado":

        console.log("Tente novamente");
        break;

    default:
    console.log("Não identificado");
   
}

// Exercicios do dia

//Exercicio 1.

const a = 5;
const b = 6;

//Adição (a + b)

let soma = a + b;
console.log(soma);

//Subtração (a - b)

let subtracao = a - b;
console.log(subtracao);

//Multiplicação (a * b)

let multiplicao = a * b;
console.log(multiplicao);

//Divisão (a / b)

let divisao = a / b;
console.log(divisao);

//Módulo (a % b)

let modulo = a % b;
console.log(modulo);

//Exercicio 2.

const c = 15;
const d = 9;

if (c > d) {
    console.log("Maior numero: "+ c);
    
} else {
    console.log("Maior numero: "+ d);
}