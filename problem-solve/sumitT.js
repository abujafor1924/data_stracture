// problem-1 (rendom Number)
/* function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndInteger(1, 6)); */

// problem-2(alpabeticaly sireule)
/* const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort()); */

//problem-3 (Roll serioul )
/* const points = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(
  points.sort(function (a, b) {
    //small-big
    //     return a - b;
    // big-small
    //     return b - a;
  }) 
);*/

//problem-4(leepYear)
/* function isleepyear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leep year`);
  } else {
    console.log(`${year} is not a leep year`);
  }
}
isleepyear(2028); */

//problem-5(vowels)

/* const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowel(sentence) {
  let count = 0;
  const letter = Array.from(sentence);
  letter.forEach((value) => {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}
console.log(countVowel("I Love Bangladesh")); */

//problem-6(duplicate number identify or uniqe number)
/* const number = [6, 4, 3, 1, 9, 5, 6, 3, 1, 9, 3, 2, 5, 6, 4, 9, 8, 7];
const duplicate = number.filter((value, index, array) => {
  return array.indexOf(value) === index;
});
console.log(duplicate); */

/* const number = ["abul", "kabul", "rabul", "abul", "kabul"];
const duplicate = number.filter((value, index, array) => {
  return array.indexOf(value) === index;
});
console.log(duplicate); */

//problem-6( specipic name sercehing)

/* const sentence =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ";

const matches = sentence.match(/dolor/gi);
const occurence = matches ? matches.length : 0;

console.log(occurence);
let position = sentence.search(/dolor/i);
const occurenc = position ? position.length : "not found";
console.log(occurenc); */

//problem-7(indivisual letter identify)
function linearSearch(arr, val) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "not found";
}
console.log(linearSearch(["a", "b", "c", "d", "c"], "c"));
