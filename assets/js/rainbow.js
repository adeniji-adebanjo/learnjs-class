const btn = document.getElementById("button");

const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "rebeccapurple",
  "violet",
];

function change() {
  document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}

btn.addEventListener("click", change);
alert("Welcome to Quiz Ninja!");

var car = "Benz";

let car = "Volvo";

const car = "Benz";

let x = 3,
  y = 4,
  z = 5;

z = 8;
