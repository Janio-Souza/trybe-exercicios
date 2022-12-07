const bmi = (peso, altura) => {
    const bmi = peso / Math.pow(altura, 2);
    console.log(bmi);
    return bmi;
}

module.exports = bmi;