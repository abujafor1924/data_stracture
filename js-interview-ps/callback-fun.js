// callback function
// arrayl.sort(alpabettically seriouly setup)
// string.charAt(index)(spesipuic letter identify)
// uppercase(small to uppercase)
// string.slice(startindex,ending index)(cutting letter or word)

// Function that takes a callback function as an argument
function prossesingFun(callback) {
  // console.log("Callback Functrion");
  callback();
}

function callbackFunction() {
  // console.log("Callback function ");
}

prossesingFun(callbackFunction);

// array sort use for serily alpabettically
const months = ["March", "Jan", "Feb", "Dec"];
const month = months.sort();
// console.log(month);

// first letter of word small to capital
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const mystring = "hello jan pakhi";
const cpital = capitalizeFirstLetter(mystring);
console.log(cpital);
