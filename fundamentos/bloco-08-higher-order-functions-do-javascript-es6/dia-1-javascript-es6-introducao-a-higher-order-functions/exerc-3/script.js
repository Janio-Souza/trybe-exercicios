const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculateGrade = (feedb, answe) => {

    if (feedb === answe) {
        return 1;
    };

    if (answe === 'N.A') {
        return 0;
    };

    return -0.5;

};


const calculateGradeNote = (feedback, answers, func) => {
    let finalScore = 0;

    for (let index = 0; index < answers.length; index += 1) {
        const contador = func(answers[index], feedback[index]);

        finalScore = finalScore + contador
    }

    return finalScore;
};

console.log(calculateGradeNote(STUDENT_ANSWERS, RIGHT_ANSWERS, calculateGrade));