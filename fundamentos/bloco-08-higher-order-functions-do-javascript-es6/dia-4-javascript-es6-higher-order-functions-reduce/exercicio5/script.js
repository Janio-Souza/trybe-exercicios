// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    return names.reduce((acumul, corrent) => acumul + corrent.split('').reduce((acc, corr) => {
        if (corr === 'a' || corr === 'A') {
           return acc + 1;
        }
        return acc;
    },0),0);
};

  console.log(containsA());
