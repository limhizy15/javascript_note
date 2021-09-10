"use strict";

// JavaScript is synchronous
// Execute the code block by order after hoisting
// hoisting: var, function declaration

console.log("1");
// TimeHandler, Timeout시간을 전달
setTimeout(function () {
  console.log("2");
}, 1000);
console.log("3");

// Synchronous callback
const printImmediately = (print) => {
  print();
};

printImmediately(() => console.log("hello"));

// Asynchronous callback
const printWithDelaty = (print, timeout) => {
  setTimeout(print, timeout);
};

printWithDelaty(() => console.log("async"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("Not Found!"));
      }
    }, 2000);
  }
  getRole(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("No Access!"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRole(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
