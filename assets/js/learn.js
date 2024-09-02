// alert("Hello buddy! Welcome to my JavaScript Class");
// let alert = new Alert();

let person = {
  id: 2,
  firstname: "John",
  lastname: "Smith",
  age: 21,
  location: "Washington",
  cars: ["Volvo", "Benz", "Camry", "Lexus", 23, 22],
};

console.log(person.cars[2]);

// console.log(
//   "My name is " +
//     person.firstname +
//     " " +
//     person.lastname +
//     ". I am " +
//     person.age +
//     " years old. My nationality is " +
//     person.location
// );

// let cars = ["Volvo", "Benz", "Camry", "Lexus", 23, 22];

// console.log(cars[5]);

// let skill = "Frontend";
// let student = prompt("What skill are you learning?");

// let session = 2024;

// if (student === skill && session === 2024) {
//   console.log("Welcome to class");
// } else {
//   console.log(
//     "You currently don't have an admission, Kindly wait for next batch"
//   );
// }

let name = prompt("Enter your name");
let gender = prompt("What's your gender");
let yourAge = prompt("Enter your age");
let myAge = 45;

let identity = (document.getElementById("person").innerHTML = name);

if (gender === "male" && yourAge == myAge) {
  alert("Male: I am older than you!");
} else if (gender === "female" || yourAge == myAge) {
  alert("Female: I am older than you!");
} else if (gender === "male" && yourAge >= myAge) {
  console.log("We're age mates");
} else {
  console.log("You're older");
}
