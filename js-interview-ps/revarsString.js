// reverse (word reverse)
// splice(cuting and  middel setting)
// concat(for arry duplicat)
//new set()(remove Duplicat letter in a array)

//Array.from (separetion letter)

function reversWords(sentence) {
  // splite use for two word or letter for space
  const words = sentence.split(" ");
  const reverswords = words.map((word) => {
    // Join use two word or letter for connect
    return word.split("").reverse().join("");
  });
  const reversSentence = reverswords.join(" ");
  return reversSentence;
}

const sentence = " Hello! my name is Abu Jafor mia";
const reverArea = reversWords(sentence);
// console.log(reverArea);

// splice use in a array for push data middel in a array
const months = ["Jan", "March", "April", "June"];
months.splice(3, 1, "may");
// console.log(months);

// concat is duble a array
function duplicate(array) {
  return array.concat(array);
}
const duparray = duplicate([5, 6, 7, 8, 9, 10]);
// console.log(duparray);

// remove Duplicat letter in a array
const array = [2, 3, 4, 5, 4, 6];
// array.from separetion letter simple below
const duplicat = Array.from(new Set(array));
// console.log(duplicat);

// separet letter arry from
const str = "Hello";
const letterSeparetion = Array.from(str);
// console.log(letterSeparetion);
// Output: ["H", "e", "l", "l", "o"]

// FizzBuzz Challenge
for (let i = 1; i <= 100; i++) {
  // 1-100 even Number
  if (i % 2 == 0) {
    // console.log(i);
  }
  // 1-100 odd Number
  if (i % 2 == 1) {
    // console.log(i);
  }

  let f = i % 3 == 0;
  let b = i % 5 == 0;
  // unterstend enxt time
  console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
}
