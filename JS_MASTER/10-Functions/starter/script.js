"use strict";

/*
// Video 1
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 16000 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 16000;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("TH123", 10, 6000);
createBooking("TH123", 2);
createBooking("TH123", 5);

createBooking("BA123", undefined, 1332);
*/
/////////////////////////////////////////////////////////////////
/*
// Vid2 Object manipulation
const flight = "TH333";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 12892368238,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "TH3334";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 12892368238) {
    alert("Check In");
  } else {
    alert("Worng Passport");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
/////////////////////////////////////////////////////////////////
/*
// Frist Class Function
// Call Back Function
// Higher Order Fuiinction

// Frist Class Function
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFristWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//   vvv Higher Order Function (Call other function)
const transfromer = function (str, fn) {
  console.log(`Original Stirng ${str}`);
  console.log(`Transfromed String ${fn(str)}`);

  console.log(`Tranfromed by ${fn.name}`);
};
//                                        vvv Callback Function
transfromer("JavaScript is the best!!!", upperFristWord);
transfromer("JavaScript is the best!!!", oneWord);

// JS uses call back all the time
const high5 = function () {
  console.log(`👋`);
};
document.body.addEventListener("click", high5);

["Jonas", "Matha", "Adam"].forEach(high5);

// Abstractions
// Higher Level
*/
////////////////////////////////////////////////////////////////

// Function return Function
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");
// Closer @ the end of section

greet("Hello!")("Jonas");

// Extreemly useful
// const greet2 = (hello) => {
//   return function (name) {
//     console.log(`${hello} ${name}`);
//   };
// };

const greet2 = (hello) => (name) => console.log(`${hello} ${name}`);

greet2("GreatDay")("Prawiches");
*/
////////////////////////////////////////////////
/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat in ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(234, "Prawich thawansakdivudhiii");
console.log(lufthansa);

const eurowings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, "Sarah Willam");

// Call Method

book.call(eurowings, 23, "Sarah Willams");
console.log(eurowings);

book.call(lufthansa, 239, "Thunyaluk Aun-ma");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 334, "Jirat Chutrakul");

// Apply Method
const flightData = [543, "Gorge Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
// As same as
book.call(swiss, ...flightData);

// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(123, "Jirat Chutrakul");

const bookEW233 = book.bind(eurowings, 233);
bookEW233("Saikaaa Wastaken");
bookEW233("Sen Sensation");

// Event Linstner
lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};
lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.07);

console.log(addVAT(100));
console.log(addVAT(23));

const addTAXRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTAXRate(0.07);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
////////////////////////////////////////////////////////
// Coding Challenge #1
/*
const poll = {
  question: "What is your favorite Programming Language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    // console.log(typeof answer);
    if (
      answer < 0 ||
      answer > this.answers.length ||
      typeof answer !== "number"
    ) {
      console.log("Number isn't make sense");
    } else {
      console.log(`Answer inputted : ${answer}`);
      this.answers[answer]++;
    }
    this.displayResult();
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll result is ${this.answers}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind("poll"));

poll.registerNewAnswer();
*/
/*
const poll = {
  question: "What is your favorite Programming Language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option Number)`
      )
    );
    console.log(answer);
    // Register Answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Result are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.registerNewAnswer();
const displayResultPoll = poll.displayResult.bind(poll);

poll.displayResult.call({ answers: [5, 2, 3] }, "string");
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
*/
////////////////////////////////////////////////////////////////////////
/*
// Run once Function

const runOnce = function () {
  console.log(`This function will run agian`);
};
runOnce();

// IIFE
(function () {
  console.log(`This function will never run agian`);
  const isPrivate = 23;
  console.log(isPrivate);
})();

(() => console.log(`This will aslo never run agian`))();

{
  const privateData1 = 34;
  var privateData2 = 334;
}

console.log(privateData2);
// console.log(privateData1);
*/
////////////////////////////////////////////////////////////////////////
/*
// Closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/
////////////////////////////////////////////////////////////////////////
/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 333;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Reassigning f function with h
h();
f();
console.dir(f);

// Example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We're now baording all ${n} passengers`);
    console.log(`There 3 group each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`We'll start baording in ${wait} second(s)`);
};
const perGroup = 1000;
boardPassenger(180, 3);
boardPassenger(180, 10);
*/
////////////////////////////////////////////////////////////////////////
// Coding Challage #2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// IIFE is long gone but event listener is not and it's can remember it's brith place variable (function have memories!)

////////////////////////////////////////////////////////////////////////
