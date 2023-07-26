//  Reverse String
function reverseSentence(sentence) {
  let reversedString = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    reversedString += sentence[i];
  }
  return reversedString;
}

const sentence = "hello world";
const output = reverseSentence(sentence);
console.log(output);
