import prompt from 'prompt-sync';
import { Person } from "./Person";

let Personagem: Person;
Personagem = new Person('Stark', 40);
Personagem.attack = 10;
Personagem.life = 100
Personagem._defense = 10;

let teclado = prompt();
let option: number = 0;

while (option !== 9) {
  console.log('+============================+');
  console.log('|1. Treinar ataque           |');
  console.log('|2. Treinar defesa           |');
  console.log('|3. Imprimir atributos       |');
  console.log('|9. Sair                     |');
  console.log('+============================+');
  
  option = +teclado('Escolha uma opção');

  switch (option) {
    case 1:
      Personagem.treinarAtack();
      break;
    case 2:
      Personagem.treinarDefesa();
      break
    case 3:
      Personagem.status();
    default:
      break;
  }
  
}