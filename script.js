console.log("Hi")
function add(x){
  return x+2;
}
function multiply(x){
  return x*3;
}
function subtract(x){
  return x-5;
}

var x = add(multiply(subtract(6)));
console.log(x);
