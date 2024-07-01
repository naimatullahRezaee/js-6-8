// const btn = document.querySelector(".button");

// btn.addEventListener("click", function (e) {
//   console.log("Hello world");

//   e.preventDefault();
// });

// btn.addEventListener("mousedown", function () {
//   console.log("mousedown");
// });
// btn.addEventListener("mouseup", function () {
//   console.log("mousedup");
// });

// btn.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });
// btn.addEventListener("mouseout", function () {
//   console.log("mouseout");
// });

// btn.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });

// const inputBox = document.querySelector("#hide input");

// inputBox.checked = true;
// inputBox.checked = false;

// const titles = document.querySelectorAll(".title")[1];

// const ul = document.querySelector("ul");

// inputBox.addEventListener("change", () => {
//   if (inputBox.checked) {
//     titles.style.display = "none";
//     ul.style.display = "none";
//   } else {
//     titles.style.display = "initial";
//     ul.style.display = "initial";
//   }
// });

const inputBox = document.querySelector("#add-book input");

// console.log(inputBox.placeholder);

const btn = document.querySelector(".button");

// console.log(btn);

// inputBox.addEventListener("keydown", () => {
//   console.log(inputBox.value);
// });
// inputBox.addEventListener("keyup", () => {
//   console.log(inputBox.value);
// });

// inputBox.addEventListener("focus", () => {
//   console.log("you are focused");
// });
// inputBox.addEventListener("blur", () => {
//   console.log("focus out");
// });

const asar_m = document.querySelectorAll("li")[0];

const btn_1 = document.querySelectorAll(".delete")[0];

btn_1.addEventListener("click", function () {
  asar_m.remove();
});

localStorage.setItem("Name", "Ali");
localStorage.setItem("lastname", "ahmadi");
localStorage.setItem("age", 20);

// console.log(localStorage.getItem("Name"));

const arr = ["ali", "ahmadi", 20];

localStorage.setItem("array", arr);

let result = localStorage.getItem("array").split(",");
// console.log(result);

const obj = {
  name: "Marwa",
  lastname: "karimi",
  age: 18,
};

localStorage.setItem("newObj", JSON.stringify(obj));

// let resultObj = JSON.parse(localStorage.getItem("newObj"));

localStorage.removeItem("newObj");

// localStorage.clear();

// console.log(resultObj);
