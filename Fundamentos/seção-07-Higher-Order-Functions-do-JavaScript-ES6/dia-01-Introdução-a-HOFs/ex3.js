const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const points = (rightAnswers, studentAnswer)  => {
  let res = 0;
  for (const index of rightAnswers) {
    if (rightAnswers[index] === studentAnswer[index]) {
      res += 1
    }
    if (studentAnswer[index] !== rightAnswers[index] && studentAnswer[index] !== 'N.A') {
      res -= 0.5
    }
  }
  return res;
}

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS));
