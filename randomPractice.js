/* var arr = [1, 2, 3];
var max = arr.reduce(function (a, b) {
  //   return Math.max(a, b);
  return Math.min(a, b);
});

console.log(max); */

function maxArray(number) {
  let large = number[0];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    if (element > large) {
      large = element;
    }
  }
  return large;
}
let max = [2, 43, 5, 67, , 89, 34, 32, 4, 5, 1];
let maxNumber = maxArray(max);
console.log(maxNumber);
