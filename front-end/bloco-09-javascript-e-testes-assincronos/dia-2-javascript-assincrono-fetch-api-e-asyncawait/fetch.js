const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log( `algo deu errado :( \n${error}`)); // O catch no final vai pegar qualquer erro ocasionado pelos 'then' acima. (\n) Faz uma quebra de linna.
}

fetchJoke();