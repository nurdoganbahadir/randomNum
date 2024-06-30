const MyBtn = document.getElementById("MyBtn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;

MyBtn.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  num1.textContent = randomNum1;
  num2.textContent = randomNum2;
};
