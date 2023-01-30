/* let temperature = [-2, -5, 6, 9, 44, "error", 67, 2, 5, 9];

function getNumber(arr) {
  let higher = arr[0];
  let lower = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (higher < arr[i]) {
      higher = arr[i];
    }
    if (lower > arr[i]) {
      lower = arr[i];
    }
    //     if (typeof arr[i] !== "number") continue;
  }
  console.log(lower, higher);
  //   return higher - lower;
}
getNumber(-5, 8, 9);
// console.log(); */

// number array
const numberArr = [23, 122, 1, 23, 4, 56];

// get highest number
const highest = Math.max(...numberArr);

// get lowest number
const lowest = Math.min(...numberArr);

console.log("Highest Number: " + highest); // Highest Number: 122

console.log("Lowest Number: " + lowest); // Lowest Number: 1
