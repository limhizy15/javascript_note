// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculated a value

// one function === one thing
// function is object in JS

// 1. function expression
// declaration hoisting! 함수 선언은 hoisting됨
function printHello() {
  // named function
  console.log("hello");
}
const print = function () {
  // anonymous function
  console.log("anonymous");
};

printHello();

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeNmae(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeNmae(ellie);
console.log(ellie);

// 3. Default parameters (ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

showMessage("hi 😚");

// 4. Rest parameters (ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // 간단한 출력방법
  for (const arg of args) {
    console.log(arg);
  }
}

printAll("heeji", "unhee", "ellie");

// 5. Local Scope
let globalMessage = "global"; // global variable
function printMan() {
  // 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
  let message = "hey"; // local variable
  console.log(message);
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
  }
}
printMan();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 5));

const sumAgain = sum;
console.log(sumAgain(10, 15));

// 7. Early return, early exit
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love") {
    printYes();
  } else {
    printNo();
  }
}

// named function
// better debugging in debugger's stack traces
const printYes = function () {
  console.log("yes");
};
const printNo = function () {
  console.log("no");
};

randomQuiz("love", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log("simplePrinting!");
const simpleAdd = (a, b) => console.log(a + b);

simplePrint();
simpleAdd(17, 18);

const simpleMultiply = (a, b) => {
  // do something more
  // return something!
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("🎈");
})();

// TODO Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("wrong parameters");
  }
}

console.log(calculate("asd", 100, 200));
