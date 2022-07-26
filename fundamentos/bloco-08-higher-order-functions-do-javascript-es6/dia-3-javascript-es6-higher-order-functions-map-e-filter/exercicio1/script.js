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

  //1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  const formatBookNames = books.map((objetos) => `${objetos.name} - ${objetos.genre} - ${objetos.author.name}`);

  console.log(formatBookNames);

  //2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.



  const newArrey = books.map((authors)=> {
    const newObj = { 
        
        Author: authors.author.name,
        age: authors.releaseYear - authors.author.birthYear,

    }

    return newObj;
  });

  const ordenNames = (elem) => elem.sort((obj1, obj2)=> {
    return obj1.age - obj2.age;
  });

  console.log(ordenNames(newArrey));

  //3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

  const booksFictionFantasy = books.filter((objects) => {
    return objects.genre === 'Ficção Científica' || objects.genre === 'Fantasia';
  });

  console.log(booksFictionFantasy);

  //4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

  const booksWithOver60Years = books.filter((objects) => 2022 - objects.releaseYear >= 60 ? objects : 0 );
  const sortByYear = (array) => array.sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear);

  console.log(sortByYear(booksWithOver60Years));

  // 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

  const fantasyOrScienceFictionAuthors = booksFictionFantasy.map((objects) => objects.author.name ).sort();

  console.log(fantasyOrScienceFictionAuthors);

  // 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

  const oldBooks = booksWithOver60Years.map((books)=> books.name);

  console.log(oldBooks);

//   function authorWith3DotsOnName() {
//     return books.filter((book) => (
//       book.author.name[1] === '.'
//       && book.author.name[4] === '.'
//       && book.author.name[7] === '.'
//     ))[0].name;
//   }

//Ou

// const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName() {
//   return books.find((book) => (
//     book.author.name.split(' ')
//       .filter((word) => word.endsWith('.')).length === 3
//   )).name;
// }