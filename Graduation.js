function graduation(input) {
  let index = 0;

  let name = input[index];
  index++;
  let counter = 0;
  let i = 1;
  let sumGrade = 0;
  let isExcluded = false;
  while (i <= 12) {
    let grade = Number(input[index]);
    index++;
    if (grade < 4.0) {
      counter++;
      if (counter > 1) {
        isExcluded = true;
        console.log(`${name} has been excluded at ${i} grade`);
        break;
      }
      continue;
    }
    i++;
    sumGrade += grade;
  }
  if (!isExcluded)
    console.log(
      `${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`
    );
}
graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
