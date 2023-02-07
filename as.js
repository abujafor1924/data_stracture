/*
 * his fungtion is for multification addition subtraction division and total sum output in this fungtion
 *problem Number One
 */
function mindGame(num) {
  const multification = num * 3;
  const addition = multification + 10;
  const division = addition / 2;
  const subtraction = division - 5;
  if (typeof num === "string") {
    return "please retune a number";
  }
  return subtraction;
}
console.log(mindGame("i"));

/*
 *Odd&even Number identify with a string
 *this fungtion key number identify
 *problem Number tow
 */
function evenOdd(str) {
  const number = str.length;

  if (number % 2 === 0) {
    console.log("Even");
  } else if (number % 2 === 1) {
    console.log("Odd");
  } else if (typeof str !== "string") {
    console.log("please retune a string");
  }
  return number;
}
evenOdd("Phero");

/*
 *the number is geter than & Less than
 *this fungtion difference large and small
 *problem Number three
 */
function isLGSeven(num) {
  let subtraction = num - 7;
  let multification = subtraction * 2;
  if (subtraction < 7) {
    console.log(subtraction);
  } else if (subtraction >= 7) {
    console.log(multification);
  } else if (typeof num === "string") {
    console.log("please retune a number");
  }
  return subtraction;
}
isLGSeven(-15);

/*
 *this is for under number searchching
 *agg not under number
 *problem Number Four
 */

function findingBadData(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 0) {
      total++;
    } else if (typeof data[i] === "string") {
      return "please retune a Number Array";
    }
  }
  return total;
}
console.log(findingBadData([2, -5, -7, "i"]));

/*
 *Multipication identify in this funcgtion
 *this fungtion key number identify
 *problem Number Five
 */
function gemsToDiamond(num1, num2, num3) {
  const friendOne = num1 * 21;
  const friendTow = num2 * 32;
  const friendThree = num3 * 43;
  const total = friendOne + friendTow + friendThree;
  const upTo = 1000 * 2;
  if (total < upTo) {
    console.log(total);
  } else if (total > upTo) {
    const subTotal = total - upTo;
    console.log(subTotal);
  } else if (typeof num1 || num2 || num3 === "string") {
    console.log("please retune a Number");
  }
  return total;
}
gemsToDiamond(100, 5, 1);
