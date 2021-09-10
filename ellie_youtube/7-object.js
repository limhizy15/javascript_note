// Objects = {key: value}
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const printPerson = (person) => {
  console.log(person.name);
  console.log(person.age);
};

const heeji = { name: "heeji", age: 1 };
printPerson(heeji);

heeji.hasJob = false; // can add.. 💩
console.log(heeji.hasJob);

delete heeji.hasJob; // can delete ❓

// 2. Computed properties
console.log(heeji.name);
console.log(heeji["name"]);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(heeji, "name");
printValue(heeji, "age");

// 3. Property value shorthand : key === value이면 value 생략 가능
// 4. Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person4 = new Person("ham", 100);
console.log(person4);

// 5. in operator: property existence check (key in obj)
console.log("name" in heeji);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in heeji) {
  console.log(key); // print keys
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Cloning
// Object.assign(dest, [obj1...])
const user = { name: "heeji", age: "1" };
const user2 = user;
console.log(user2);
user2.name = "coder"; // user, user2 모두 값이 변경됨 왜냐하면 같은 reference를 참고하기 때문
console.log(user);

const user3 = Object.assign({}, user);
console.log(user3);
user3.name = "boom";
console.log(user);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" }; // 뒤에 나온 게 할당되네
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
