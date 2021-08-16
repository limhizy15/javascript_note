// async & await
// clear style of using promise
// syntatic sugar?

// 1. async
// 얘를 붙였는데 promise처럼 동작하네..?
async function fetchUser() {
  // do network request in 10 sec...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  console.log("Delay...");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1500); // 끝날 때까지 기다리고 다음 줄로 넘어간다
  return "🍎";
}

async function getUnhee() {
  delay(1000);
  return "Unhee";
}

console.log("결과" + getUnhee());

async function getBanana() {
  await delay(2500);
  return "🍌";
}

// 동기적처럼? 보일 수가 있징
async function pickFruits() {
  // 병렬처리 각각의 프로미스를 받았기 때문에!
  const applePromise = getApple();
  const bananaPromise = getBanana();

  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

// Promise chaining 🌱
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  //모든 아이들이 끝날 때까지?
  return Promise.all([getApple(), getBanana()]).then(console.log);
}

pickAllFruits().then(console.log());

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]).then(console.log);
}

pickOnlyOne();
