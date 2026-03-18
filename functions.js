//function declaration
function greet() {
  console.log("Hello");
}

greet(); //function call

//parameter vs argument
const add = (a, b) => {
  //parameter ie variable (function ke andar)
  return a + b; //return value wapas deta hai function ke baad code stop ho jata hai console sirf print karega
};

console.log(add(2, 2)); //ye argument ie actual value (call ke time)

//Callback Function (fnctn ke dusra functn pass krna)
function hello(name, callback) {
  console.log("Hello" + name);
  callback();
}

function bye() {
  console.log("Bye");
}

hello("Mehatab", bye);

//Simple Shortcut (samajhne ke liye)
function test(cb) {
  cb();
}

test(function () {
  console.log("Callback chal gaya");
});

//Real Use (Array me use hota hai)
let nums = [1, 2, 3];

nums.forEach(function (num) {
  console.log(num);
});

//Arrow Function Callback
nums.forEach((num) => {
  console.log(num * 2);
});

//ex
function calculate(a, b, operation) {
  return operation(a, b);
}

function addition(x, y) {
  return x + y;
}

console.log(calculate(2, 3, addition));

//HIGHER ORDER Function  (jo functn dusre functn ko arg me leta h ya return krta)
function greeting() {
  console.log("Higher order function");
}

function execute(fn) {
  fn();
}

execute(greeting);  //here execute = higher order functn & greeting is callback

//Closure (inner fnctn apne parent fnctn ke varible ko yaad rhkta/data store rhkta)
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("closure", count);
  }
  return inner;
}
let fn = outer();
fn();
fn();
fn();

//real life example (counter)
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
let c = counter();
console.log("counter", c());
console.log("counter", c());

//Data hide karne ke liye (like private variable)
function bank() {
  let balance = 1000;

  return function () {
    return balance;
  };
}

let check = bank();

console.log(check());
