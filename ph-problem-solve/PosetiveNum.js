// Posetive number
const posetiveNum = (num) => {
  let sum = 0;
  for (let i = 0; i <= num.length; i++) {
    if (num[i] > 0) {
      sum += num[i];
    }
  }
  return sum;
};
const inputArray = [2, -5, 10, -3, 7];
const outputArry = posetiveNum(inputArray);
console.log(outputArry);
