const students = [
  { name: 'Манго', score: 83 },
  { name: 'Полі', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Ківі', score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
