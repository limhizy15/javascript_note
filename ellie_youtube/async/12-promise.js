"use strict";

// Promise is a JavaScript object for asynchronous operation
// 동기적인 것을 수행할 때, callback 대신 사용할 수 있는 것이다
// State! : 성공? 실패?
//  - pending => fulfilled or rejected
// Producer, Consumer 이 둘의 다른 점? 관점?
//  - Producer : Promise Object

// 1. Producer
// resolve, reject
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing something heavy -> nextwork, read files ..etc
  console.log("doing something!");
  setTimeout(() => {
    //성공시 값을 반환
    resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally로 값을 받아올 수 있다
// then => 잘 받아졌으면? 실행됨 => resolve callback에서 받아온 값이 value에 저장됨
promise //
  .then((value) => {
    console.log(value);
  })
  //return된 promise의 error를 catch하는 것임
  .catch((error) => {
    console.log(error);
  })
  //어찌됐든 수행되는 것임
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber //
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  // 받아온 인자 = 매개변수이고 함수를 하나만 호출하면 생략가능
  .then(getEgg)
  .catch((error) => {
    return "🌭";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
