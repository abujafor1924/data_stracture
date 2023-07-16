/**
 * max number in a arrey
 * min number in a arry
 *Calculating the sum of all numbers in an array
 *Checking if a given number is prime:
 *Sorting an array of numbers in ascending order:
 *even and odd number problem in js function with array
 *Resizes any in an array
 *How to flatten multi-dimensional array
 *when multilevel array
 *Replace some word which is wrong
 *Check performance for the task
 *
 *
 *
 *
 *
 *
 * **/

// max number and min number in a array
var marks = [50, 20, 10, 70, 60, 45, 30, 800];
function findMin(arr) {
  return Math.min.apply(null, arr);
}
// console.log(findMin(marks));
function findMax(arr) {
  return Math.max.apply(null, arr);
}
// console.log(findMax(marks));

//Calculating the sum of all numbers in an array:

function CalculatingSumOfarray(array) {
  let sum = 0;
  for (let num of array) {
    sum = sum + num;
  }
  return sum;
}

// console.log(CalculatingSumOfarray([1, 2, 3, 2]));

//Checking if a given number is prime:

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(13));

//Sorting an array of numbers in ascending order:

function sortArray(number) {
  return number.sort((a, b) => a - b);
}

//    console.log(sortArray([2, 1, 4, 2, 3]));

//even and odd number problem in js function with array

function checkOddAndEven(array) {
  const oddNumber = [];
  const evenNumber = [];

  for (let number of array) {
    if (number % 2 === 0) {
      evenNumber.push(number);
    } else {
      oddNumber.push(number);
    }
  }
  return { oddNumber, evenNumber };
}
const array = [1, 2, 4, 8, 6, 4, 9, 7, 4, 9];
const result = checkOddAndEven(array);

// console.log(result.evenNumber);
// console.log(result.oddNumber);

// Resizes any in an array

const myarr = [
  "Mohammad",
  "Jubair",
  "Developer",
  "Coder",
  "Programmer",
  "Coder",
];

myarr.length = 3;
// console.log(myarr);

// How to flatten multi-dimensional array
const myArr = ["Me", ["Jubair", "Programmer"], ["Developer", "Khan"]];
const flatArray = myArr.flat();
// console.log(flatArray);

//when multilevel array

const myArr2 = [
  "Me",
  ["Jubair", ["Coder"], "Programmer"],
  ["Developer", "Khan", ["Mohammad Jubair"]],
];
const myArr3 = myArr2.flat(Infinity);
// console.log(myArr3);

//Replace some word which is wrong
const kotha =
  "Next JS is a React library & this library is the most popular for SSR library now ";
const replece = kotha.replace(/library/g, "framework");
// console.log(replece);

//Check performance for the task
const starttime = performance.now();
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
const endtime = performance.now();
// console.log(`Now this value is : ${endtime - starttime}`);

//array swappings
const myArre = [1, 2, 3, 4, 5, 6, 7, 8, 20, 60];

//using destructing in array swappings

[myArre[0], myArre[9]] = [myArre[9], myArre[0]];

console.log(myArre);
