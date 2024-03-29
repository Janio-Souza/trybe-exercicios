const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  //2 - Crie uma string com os nomes de todas as pessoas autoras.


  const pessoasAutoras = books.map((element) => element.author.name)
    .reduce((acumulador, corrente)=> `${acumulador}, ${corrente}`);
   
  console.log(pessoasAutoras);

  // Outra solução mais completa.

  // function reduceNames() {
  //   const names = books.reduce((acc, book, index, array) => {
  //     if (index === array.length - 1) return `${acc} ${book.author.name}.`;
  //     return `${acc} ${book.author.name},`;
  //   }, '');
  //   return names.trim();
  // };

  // console.log(reduceNames());

  const idadesQuandoLancouLivro = books.map((element) => element.releaseYear - element.author.birthYear);
  // [ 43, 62, 31, 45, 39, 38 ]
  function mediaIdades(array) {
   let media = array.reduce((acumul, corrent) => acumul + corrent, 0);
   return media / array.length;

  };

  console.log(mediaIdades(idadesQuandoLancouLivro));


  // 4- Encontre o livro com o maior nome.
  
  const bookLengthName = books
    .reduce((acumul, corrent) => corrent.name.length > acumul.name.length ? corrent.nome : acumul );

  console.log(bookLengthName);