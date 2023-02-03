let names = ["abul", "babul", "kabul", "rabul", "abul", "abul"];

function repeateNote(names) {
  let uniqeName = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (uniqeName.includes(name) === false) {
      uniqeName.push(name);
    }
  }
  return uniqeName;
}
let uniqe = repeateNote(names);
console.log(uniqe);
