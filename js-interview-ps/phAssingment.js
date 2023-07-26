function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

// Example usage:
const inputString = "Hello, World!";
const counts = countVowelsAndConsonants(inputString);
console.log("Number of vowels:", counts.vowels);
console.log("Number of consonants:", counts.consonants);

// palindrome
function isPalindrome(str) {
  // Convert the input string to lowercase and remove non-alphanumeric characters
  const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare the cleaned string with its reverse
  const reversedString = cleanedString.split("").reverse().join("");

  // Check if the cleaned string and its reverse are equal
  return cleanedString === reversedString;
}

const inputStrings = "A man, a plan, a canal: Panama";
console.log(isPalindrome(inputStrings)); // Output: true

// call back function
function doAsyncOperation(callback) {
  setTimeout(function () {
    console.log("Async operation is done!");
    callback();
  }, 2000);
}

function callbackFunction() {
  console.log("Callback function executed!");
}

doAsyncOperation(callbackFunction);

console.log(
  "Program continues running while waiting for the async operation..."
);
