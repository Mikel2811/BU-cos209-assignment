const score = 75;
const result = score >= 50 ? 'Pass' : 'Fail';

const grade = score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 50 ? 'C' : 'F';

console.log({ result, grade });