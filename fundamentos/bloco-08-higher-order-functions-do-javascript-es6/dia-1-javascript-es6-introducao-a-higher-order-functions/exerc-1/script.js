const callbackName = (name) => {
    return { nomeCompleto: name, email: `${name.toLowerCase().replace(' ', '_')}@trybe.com`, }

};

// console.log(callbackName('Janio Souza'));

const newEmployees = (callbackName) => {
    const employees = {
      id1: callbackName('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callbackName('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callbackName('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(callbackName));

