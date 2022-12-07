const readlinesync = require('readline-sync');

const weightInKg = readlinesync.questionFloat("What’ your weight? Ex.60.5 ");
const heightInCm = readlinesync.question("What’ your height? Ex. 1.82 ");

const BMI_MAX_AND_MIN = {
    'Underweight': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Normal Weight': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Overweight': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obese Class I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obese Class II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obese Class III': {
      minBMI: 40,
      maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
    },
  };

const handleBMI = (weight, height) => {
    console.log(`Weight: ${weight}, Height: ${height}`);
    const bmi = weight / Math.pow(height, 2);
    console.log(bmi);
    return bmi;
}

function handleBMIResult(bmi) {
    const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]
  
    const resultFind = statuses.find((status) => {
      const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada
  
      // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
      return bmi >= minBMI && bmi <= maxBMI;
    });
  
    return resultFind;
  }
  

const main= () => {
    const bmi = handleBMI(weightInKg, heightInCm);
    const bmiResults = handleBMIResult(bmi);

    console.log(`BMI: ${bmi.toFixed(2)}`);
    console.log(bmiResults);
}

main();

module.exports = handleBMI;