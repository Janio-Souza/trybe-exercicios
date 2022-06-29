const marina = 20;
const silvia = 18;
const iza = 25;

let pessoaMenorIdade;
let idade;

if (marina < silvia && marina < iza) {
    
    pessoaMenorIdade = "Marina"
    idade = marina;
    console.log(pessoaMenorIdade + " é a pessoa mais jovem e possui " + idade + " de idade");
    
} else if (silvia < marina && silvia < iza) {

    pessoaMenorIdade = "Silvia"
    idade = silvia;
    console.log(pessoaMenorIdade + " é a pessoa mais jovem e possui " + idade + " de idade");

} else {

    pessoaMenorIdade = "Iza"
    idade = iza;
    console.log(pessoaMenorIdade + " é a pessoa mais jovem e possui " + idade + " de idade");
}