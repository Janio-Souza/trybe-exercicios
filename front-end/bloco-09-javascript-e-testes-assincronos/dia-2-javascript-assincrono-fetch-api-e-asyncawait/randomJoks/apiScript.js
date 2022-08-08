
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => 
    document.getElementById('jokeContainer').innerHTML = data.joke // Forma mais direta, enviando para o DOM com o innerHTML pegando direto do objeto data o conteudo da chave joke.
    // {
    //   const { joke } = data;
    //   console.log(joke);
    //   document.getElementById('jokeContainer').innerHTML = joke; // Esta foi minha primeira resposta com o uso do desconstruct.
    // }
    );
  
};

window.onload = () => fetchJoke();
