function add(num1, num2) {
  return num1 + num2;
}

// ref를 가져옴
const doSomething = add;
console.log(doSomething(2, 3));

function surprise(operator) {
  const result = operator(4, 5);
  console.log(result);
}

// 함수의 ref를 전달
surprise(add);
