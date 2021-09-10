"use strict";

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍕", "🍔"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);

// 3. Looping over an array
// print all fruits
console.clear();

// forEach
// 3가지 인자를 받을 수 있다.
fruits.forEach((item, index, array) => console.log(item, index, array));

// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
for (let fruit of fruits) {
  console.log(fruit);
}

console.clear();
// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🍣", "🥫");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to beginning
fruits.unshift("🍿");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// * note! shift, unshift are slower than pop, push!!
// splice: remove an item by index position
fruits.push("🍺", "🥝", "🧊");
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);

fruits.splice(1, 1, "🍈", "🍉");
console.log(fruits);

// combine two arrays
const fruits2 = ["2", "3"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// includes: find if it is
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🧊"));
console.log(fruits.includes("🧊"));

// lastIndexOf
fruits.push("🧊");
console.log(fruits.indexOf("🧊"));
console.log(fruits.lastIndexOf("🧊"));
