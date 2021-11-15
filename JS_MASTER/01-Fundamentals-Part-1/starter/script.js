/*
let js = "amazing";
if (js === 'amazing') alert('Js is Funnest things in my life!')

40 + 8 + 23 - 10
console.log(40 + 8 + 23 - 10);

console.log("Hello, World!");
console.log("23");

let firstName = "Punika";
let lastName = "Thawansakdivudhi";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let year3 = 3;

//You can use dollar sign in var but other symbol are unusable accept "_". a-z, A-Z, 0-9 and you can't start var name with number
let $function = 13;

//You shoudn't use uppercase in Js var
let person = "Jonas";


//This one is better! (More discriptive)
let myFristJob = "Programmer";
let myCurrebtJob = "Teacher";

//This one have not enough information
let Job1 = "Programmer";
let Job2 = "Teacher";

console.log(myFristJob);

//Challenge
let country = "Thailand"
let population = "69M"
let language = "Thai"

console.log(country);
console.log(population);
console.log(language);

*/

//Video 2

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Hello!");

//change value in varible by this !! No let !!
javascriptIsFun = "Yes!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

//You can assign varible without value
let year; // undefine
console.log(year);
console.log(typeof year);

year = 2021;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const brithyear = 1991;
// brithyear = 1992;


//  you can't crate Undefined varible in const
//  const job;

// var (lagacy) shoud avoid
var job = 'programmer';
job = "teacher";

// you shoud not create a var with out decaring however it's posible
lastName = "Thawansakdivudhi";
console.log(lastName);

*/

// Operators

/*
const now = 2037
const ageprawich = now - 1994;
const ageofsarah = now - 2018;
console.log(ageprawich, ageofsarah);

console.log(ageprawich * 2, ageprawich / 10, 2**3)

const fristName = "Prawich";
const lastName = "Thawansakdivudhi";
console.log(fristName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
//    ^ Operator
x += 10;
x *= 4 // x * 4
x ++;
x --;
x --;
console.log(x);

//Comparison Operators
console.log(ageprawich > ageofsarah); // >, <, >=, <=
console.log(ageofsarah >= 18);

const isFullAge = ageofsarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037
const ageprawich = now - 1994;
const ageofsarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // 10 x,y == 10
console.log(x, y)

// Bracket is the highest level persedance
const averageAge = (ageprawich + ageofsarah) / 2;
console.log(ageprawich, ageofsarah, averageAge);
*/

/*

// Coding Challage #1

// Test data 1
let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

let BMImark = markWeight / markHeight ** 2;
let BMIjohn = johnWeight / johnHeight ** 2;

console.log(BMIjohn, BMImark);
let markHigherBMI = BMImark > BMIjohn;
console.log(markHigherBMI);

// Test Data 2
markHeight = 1.88;
markWeight = 95;

johnHeight = 1.76;
johnWeight = 85;

BMImark = markWeight / markHeight ** 2;
BMIjohn = johnWeight / johnHeight ** 2;

console.log(BMIjohn, BMImark);
markHigherBMI = BMImark > BMIjohn;
console.log(markHigherBMI);

*/
/*

//Strings 

const fristName = "Prawich";
const job = "Student";
const brithyear = 2008;
const now = 2021;

// Normal Complex String - need to space and more
const Prawich = "I'm " +  fristName + ", a " + (now - brithyear) + " years old " + job + "!";
console.log(Prawich);

// New way to make a complex strings (Template String) //Useful!//
const Prawichnew = `I'm ${fristName}, a ${now - brithyear} years old ${job}!`;
console.log(Prawichnew);

// Also can use backtick for regular string
console.log(`Just a regular String`);

// You can use \n\ of back tick to make mutiple lines strings
console.log('Sting with \n\
mutiple \n\
lines');

console.log(`String
mutiple
lines!`)

*/

//if else Statement

/*
const age = 15;

// if-else Control Structure
if(age >= 18){
    console.log("Anupa can start a driver lisence 🚘");
} else {
    const yearLeft = 18 - age;
    console.log(`Anupa is too yong wait another ${yearLeft} years! ;(`)
}

const brithyear = 2012;
let century;
if(brithyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
//Coding Challenge #2

// Test data 1
// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// Test Data 2
const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;


const BMImark = markWeight / markHeight ** 2;
const BMIjohn = johnWeight / johnHeight ** 2;

if(BMIjohn < BMImark) {
    console.log(`Mark's BMI (${BMImark}) is higher than John's BMI (${BMIjohn}) !`);
} else {
    console.log(`John's BMI (${BMIjohn}) is higher than mark's BMI (${BMImark}) !`);
}
*/

// Type convertion (Automatic) is automaticly done by Js

/*
const inputyear = "1991";
console.log(Number(inputyear), inputyear);
console.log (Number(inputyear) + 18);

// This will output NaN (Not a Number) - NaN(Not a Number) is mean Invalid Number somehow
// console.log(Number("Jonas"));

console.log(String(23), 23);

// Type Coercion

console.log("I'm " + 13 + " year old");
console.log("23" - "10" - 3);
console.log("23" * '2');
console.log("12" > "23");

let n = "1" + 1;
n = n-1;
console.log(n);
*/

/*
// Falsy values values: 0, '', Undefined, null, NaN
// Truly is all others

console.log(Boolean(0)); // False
console.log(Boolean(undefined)); // False
console.log(Boolean("")); // False
console.log(Boolean("Jonaes")); // True
console.log(Boolean(NaN)); // True

const money = 8970;
if(money) {
    console.log("Don't Spend it all!");
} else {
    console.log("you shall get a job");
}

let height;
if(height) {
    console.log("Defined!")
} else {
    console.log("Undefined ;(")
}

*/
/*

// === or ==
const age = 18;

if(age === 18) console.log("Fresh adult!")

const fNumber = Number(prompt("What is you fav number?"));
console.log(fNumber);
console.log(fNumber);
console.log(typeof fNumber);

if(fNumber === 3) {
    console.log("Cool 3 is prestige");
} else if(fNumber === 4) {
    console.log("4 is cool too!")
} else if(fNumber === 9) {
    console.log("9 is ok ~~~")
} else {
    console.log("your number is nah")
}

if(fNumber !== 3) {
    console.log("Why not 3?")
}
*/

// Boolean 

// && mean and
// || mean or
// !  mean not

/*

const hasDriverLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasGoodVision);


// if (hasDriverLicence && hasGoodVision) {
//     console.log("Sarah Shoud Drive");
// } else {
//     console.log("someone else shoud drive");
// };


const isTried = false; // C
console.log(hasDriverLicence && hasGoodVision && isTried);

if (hasDriverLicence && hasGoodVision && !isTried) {
    console.log("Sarah is able to drive");
} else {
    console.log(`Someone else should drive`);
}
*/

// 1

// const dolphinsAverage = ( 96 + 108 + 89 ) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
// console.log (dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage) {
//     console.log(`Dolphins are the winners`);
// } else if (koalasAverage > dolphinsAverage) {
//     console.log(`Koalas are the winners`);
// } else if (koalasAverage === dolphinsAverage) {
//     console.log(`Draw!`)
// }

//Bonus 1

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;
// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//     console.log(`Dolphins are the winners`);
// } else if(koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//     console.log(`Koalas are the winners`);
// } else if (koalasAverage === dolphinsAverage){
//     console.log(`No one is the winners`);
// };

// Bonus 2

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;
// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
//     console.log(`Dolphins are the winners`);
// } else if(dolphinsAverage < koalasAverage && koalasAverage > 100) {
//     console.log(`Koalas are the winners`);
// } else if (koalasAverage === dolphinsAverage && koalasAverage >= 100 && dolphinsAverage >= 100) {
//     console.log(`Draw!`);
// } else {
//     console.log(`No one win the trophy`);
// };


// const day = `monday`;

// switch(day) {
//     case "monday" : // if (day === "monday") {}
//         console.log(`Plan your week!`);
//         break;
//     case "tuseday" :
//         console.log(`Prepare your report!`);
//         break;
//     case "wednesday" :
//     case "thursday" :
//         console.log(`Code for SS Devlopers`);
//         break;
//     case "friday" :
//         console.log(`hangout!`);
//         break;
//     case "saturday" :
//     case "sunday" :
//         console.log("Enjoy weekend!");
//         break;
//     default: 
//         console.log("date is invalid");
// }

// // You can still use this as a alternative
// if (day === "monday") {
//     console.log(`Plan your week!`);
// } else if (day === "tuesday") {
//     console.log(`Prepare the report`);
// } else if (day === "wednesday" || day === "thursday") {
//     console.log(`Code of SS Devs`);
// } else if (day === "friday") {
//     console.log(`Complete full week report`);
// } else if (day === "saturday" || day === "sunday") {
//     console.log(`Enjoy the weekend!`);
// } else {
//     console.log(`The date is invalid`);
// }

///////////////////////////////////////////////////////////////////

// // Expression


// // expression is anything that produce a values
// // ex. 3 + 4 || 1971 || true || false || !false

// // if-else is not an expression so it's a statement
// if (23 > 10) {
//     // This is a expression that are in a statement
//     const str = `23 is bigger`;
// }

// console.log(`I'm ${2021 - 2008} years old`);


///////////////////////////////////////////////////////////////////

// // Ternary operators
// // work for quick desition but for desition that are more than 1 condition need to use normal if else

// const age = 23;

// // Ternary operator have 3 parts unlike any other
// // v condition      v true                                      v false
// age >= 18 ? console.log(`You can have wine if you want!`) : console.log(`you can only have water!`);


// // Compare with normal if else

// // Ternary
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// // if-else
// let drink2;
// if (age >= 18 ){
//     drink2 = "wine";
// } else {
//     drink2 = "water";
// };
// console.log(drink2);

// // Ternary Operator is avalible in ``
// console.log(`you can have ${age >= 18 ? "wine" : "water"}!`);

///////////////////////////////////////////////////////////////////

//coding Challage #4

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100) ;

console.log(`The bill was ${bill}, The tip was ${tip} the total is ${bill + tip}`);

/////////////////////////////////////////////////////////////////

// End of Fundamental 1