/* 
var myString = "An,array,in,a,string,separated,by,a,comma";
var myArray = myString.split(",");
console.log(myArray);

 *
 *  myArray :
 *  ['An', 'array', 'in', 'a', 'string', 'separated', 'by', 'a', 'comma']
 *
 */
/* const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, 4)); */

/* // the substring method returns a string out of another string

const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla" */

/* const str = "substr";
// index number word show consol
let text = "Hello world!";
let result = text.substr(1, 4); // output ello
// console.log(str.substr(1, 2)); // (1, 2): ub
// console.log(str.substr(1)); // (1): ubstr

/* Percorrendo de trás para frente */
// console.log(str.substr(-3, 2)); // (-3, 2): st
// console.log(str.substr(-3)); // (-3): str */

/* //This method adds two or more strings and returns a new single string.
// methode of concadin
let str1 = new String( "This is string one" ); 
let str2 = new String( "This is string two" ); 
let str3 = str1.concat(str2.toString());
console.log("str1 + str2 : "+str3)

// output: str1 + str2 : This is string oneThis is string two 

//other examepla
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

*/

/* const elements = ['Sun', 'Earth', 'Moon'];

console.log(elements.join());
// output: "Sun,Earth,Moon"
console.log(elements.join(''));
// output: "SunEarthMoon"
console.log(elements.join('-'));
// output: "Sun-Earth-Moon" */

/* 
math in Javascript
// finding absolute value of a number 
var number = -8;
let output = Math.abs(number);
console.log(output);

var num =6;
nums = Math.abs(num);
console.log(nums);

// finding ceil(khali upre di tanbo) of a number
var mynumber = 9.59;
let myceil = Math.ceil(mynumber);
console.log(myceil);

//  finding floor (kacher nichor shonka tanbo) of a number
var yournumber = 9.59;
let yourfloor = Math.floor(yournumber);
console.log(yourfloor);

// finding round of a number
var myround = 9.59;
let round = Math.round(myround)
console.log(round);

//finding a random number 
var outputs = Math.random()*8;
outputs = Math.floor(outputs)
console.log(outputs);

// making it on a for loop

for( let i=0; i<=20; i++){
    var outputs = Math.random()*8;
outputs = Math.floor(outputs)
console.log(outputs);
}
// github - redowanrafy707 */
/* 
console.log(Math.random(1));
console.log(Math.round(0.9));
console.log(Math.ceil(.95));
// Expected output: 1

console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7 */
/*
//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

 //create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`); */

/* //swap without temp
let a = 5, b = 6;
[a, b] = [b, a];
console.log(a,b)
// Destructuring Assignment Array Matching */

/* // destructuring array & nested array & combine array into single array
let person = ["John", "Sandy", "Sam", ["Mike", "Max"], "Diego", "Paul"];
// empty comma is like skipping array index. I skipped "Sam"
const [a, b, , c, ...d] = person;

let friend = [d, "Tom", "Jerry"] 
let newFriend = [...d, "Tom", "Jerry"]

console.log(a); // output: "John"
console.log(b); // output: "Sandy"
console.log(c); // output: [ "Mike", "Max" ]
console.log(d); // output: ["Diego", "Paul"]
console.log(friend); // output: [ [ 'Diego', 'Paul' ], 'Tom', 'Jerry' ]
console.log(newFriend); // output: [ 'Diego', 'Paul', 'Tom', 'Jerry' ] */
