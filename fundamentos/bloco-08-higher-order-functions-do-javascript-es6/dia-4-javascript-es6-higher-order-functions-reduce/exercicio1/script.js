const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    const concatArray = arrays.reduce((acc, ccur) => acc.concat(ccur));

    return concatArray;
  }

  console.log(flatten());