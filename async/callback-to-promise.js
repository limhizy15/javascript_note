const userlogin = (id, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        resolve(id);
      } else {
        reject(new Error("Not found!"));
      }
    }, 2000);
  });
};

const userrole = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "ellie") {
        resolve({ name: "ellie", role: "admin" });
      } else {
        reject(new Error("No Access!"));
      }
    }, 2000);
  });
};

const id = prompt("enter your id");
const password = prompt("enter your password");

userlogin(id, password) //
  .then(userrole)
  .then((info) => {
    alert(`Hello ${info.name}, you have a ${info.role}`);
  })
  .catch(console.log);
