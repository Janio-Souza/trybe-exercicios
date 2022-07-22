// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// -----------------------------------------------------------
// 1 - Criar constante que representa numero apostado.

// 2 - Criad função que gera numeor aleatoro entre 1 e 5.

// 3 - Criar HOF que recebe 2 parametros, 1 numeroa apostado, 2 função que verifica se o numero apostado é igual ao sorteado.

// 4 - da o retorno Tente novamento ou Parabén você ganhou.


// const number = 0;

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
const number = Math.floor((Math.random() * 5) + 1);

return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';

};



console.log(lotteryResult(2, numberChecker));