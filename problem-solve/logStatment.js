/* function logaridagem(n) {
  while (n > 1) {
    console.log(n);
    n /= 2;
  }
  console.log("Done");
}
logaridagem(8); */

function anotherlog(n) {
  if (n <= 1) {
    console.log("Done");
    return;
  }
  console.log(n);
  anotherlog(n / 2);
}
anotherlog(16);
