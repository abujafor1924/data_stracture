// Uniqe name Identify

let newArray = ["sakib", "nurul", "hazem", "sakib", "sakib", "rahul"];

function uName(arr) {
  let uniqeName = [];
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    if (!uniqeName.includes(name)) {
      uniqeName.push(name);
    }
  }
  return uniqeName;
}

console.log(uName(newArray));

//time complexity= 0(n2)
