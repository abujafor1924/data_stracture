// Function that takes a callback function as an argument
function prossesingFun(callback) {
  console.log("Callback Functrion");
  callback();
}

function callbackFunction() {
  console.log("Callback function ");
}

prossesingFun(callbackFunction);
