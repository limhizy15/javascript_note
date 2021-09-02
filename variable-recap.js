// 가장 작은 단위의 데이터
// number, string, boolean, null, undefined

let number = 2;
let number2 = number;
number2 = 5;

console.log(number);
console.log(number2);

// object
let obj = {
  name: "heeji",
  age: 1,
};
let obj2 = obj; // obj의 메모리 주소를 참조
obj2.age = 2354;

console.log(obj);
console.log(obj2);

// const -> reference를 변경하는 것은 불가능
// reference가 가리키고 있는 변수를 수정하는 건 가능
const new_obj = {
  name: "ellie",
  age: 5,
};

new_obj.name = "james";
