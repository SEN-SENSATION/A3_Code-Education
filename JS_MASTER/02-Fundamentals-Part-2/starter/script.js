"use strict"; // Strict Mode

/*
let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log(`I can drive`);

// Strict Mode (Reserved txt)
// const interface = "audio";
// const private = "apple., Inc";
*/
//////////////////////////////////////////////////////////
/*
Functions

function logName() {
    // this is function buddy!
    console.log(`My name is Prawich!`)
};

// Calling The function / Running the function / invocking the function
logName();
logName();
logName();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} Oranges!`;
    return juice;
}

const appleJuice = fruitProcessor(5, 1);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
//////////////////////////////////////////////////////////
/*

// Functions Expression

// Function Decaration
function calcAge1(brithYear) {
    const age = 2021 - brithYear
    return age;
}

const age = calcAge1(2008);
console.log(age);

// Function Expression
const calcAge2 = function (brithYear) {
    const age = 2021 - brithYear
    return age;
} 
const age2 = calcAge2(2008);

console.log(age, age2);

// function === values so we can store it in a var

*/
//////////////////////////////////////////////////////////
/*
// arrow Function

const agecalc2 = function (brithYear) {
    return 2021 - brithYear;
};

const calcAge3 = brithYear => 2021 - brithYear;
const age3 = calcAge3(2008);
console.log(age3);

const yearUntillRetire = (brithYear, fristName) => {
    const age = 2021 - brithYear;
    const retirement = 60 - age;
    // return retirement;
    return `${fristName} is retires in ${retirement} years`;
}

console.log(yearUntillRetire(2008, "Prawich"));
console.log(yearUntillRetire(2007, "Shimon"));

// There're fundamentals diffrence in arrow functions

*/
//////////////////////////////////////////////////////////
/*
// function in function
function cutFruits(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruits(apples);
    const orangesPeices = cutFruits(oranges);
    const juice = `This Juice is made with ${applePieces} apple(s) and ${orangesPeices} Orange(s).`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/
//////////////////////////////////////////////////////////
/*

// return && review
const calcAge = function(brithYear) {
    return 2021 - brithYear;
}

const yearUntillRetire = function (brithYear, fristName) {
    const age = calcAge(brithYear);
    const retirement = 60 - age;

    if (retirement > 0){
        console.log(`${fristName} retire in ${retirement} years ⏱`);
        return retirement;
    } else {
        console.log(`${fristName} is retired ! 🎉`);
        return -1;
    }
    // return retirement;
    // return `${fristName} is retires in ${retirement} years`;
};

console.log(yearUntillRetire(2008, "Prawich"));
console.log(yearUntillRetire(1960, "Ms. Patrana"));

*/
//////////////////////////////////////////////////////////
/*

// Coding Challenges #1

const calcAverage = (data1, data2, data3) => (data1 + data2 + data3) / 3 ;


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas ) {
        console.log(`Congrates to Dolphins for winning (${avgDolphins} Vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins ) {
        console.log(`Congrates to Koalas for winning (${avgKoalas} Vs. ${avgDolphins})`);
    } else {
        console.log(`no one is the winner`);
    }
    return;
}


// Test Data #1
let dolphinTestData = calcAverage(44, 23, 71);
let KoalasTestData = calcAverage(65, 54, 49);

console.log(dolphinTestData, KoalasTestData);


checkWinner(dolphinTestData, KoalasTestData);

// Test Data #2
dolphinTestData = calcAverage(85, 54, 41);
KoalasTestData = calcAverage(23, 34, 27);

console.log(dolphinTestData, KoalasTestData);

checkWinner(dolphinTestData, KoalasTestData)

*/

//////////////////////////////////////////////////////////
/*

// Array

// old styles
const friend1 = "Poonya";
const friend2 = "Jirat";
const friend3 = "Pawat?";

// 2 ways to create array!
const friends = ["Shimon", "It's me Pan", "Techin"];
const friendsJ = ["noone", "Books", "Pencil"];
console.log(friends);

const year = new Array(1991, 1984, 2021);
console.log(year);


console.log(friends[2]);
console.log(friends[0]);

console.log(friends.length);
console.log(friends.length - 1);

// We change things in array even when there're created with const
friends[0] = "Coding";
console.log(friends);

const fristName = "Jonas";
const jonas = [fristName , "Godson", "English Teacher", friendsJ];
console.log(jonas);
console.log(jonas.length);

*/
/*
// Array Excercise 
const calcAge = brithYear => 2021 - brithYear;

const years = [1980, 1990, 2000, 2010, 2020];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);

console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(years[0]), calcAge(years[0]), calcAge(years[0])];
console.log(ages);
*/
/*
// Array More

const friends = ["Shimon", "It's me Pan", "Techin"];
// This will give you length after push
const newLength = friends.push("Jiraties");

console.log(friends, newLength);

// add to front

friends.unshift("Pawat?");
console.log(friends);

// remove elementes

friends.pop(); // will get rid of last thing in array!
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove frist value

console.log(friends.indexOf("Shimon"));
console.log(friends);

friends.push(23);
console.log(friends.includes("Shimon"));
console.log(friends.includes("Jiraties"));
console.log(friends.includes("23")); // this is not work (.includes is strict operators)

if (friends.includes("Shimon")) {
    console.log(`You have a friend called Shimon!`);
}
*/
/*
// Coding Challenges #2

const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100);
    return tip;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2]+ tips[2]];

console.log(total);
*/
/*
// Objects

const Jonas = {
    fristName : "Jonas",
    lastName : "Godson",
    job : "English Teacher",
    age : 2000000,
    friends : ["Noone", "Books", "Pencil"]
};
console.log(Jonas);

console.log(Jonas.familyName);
console.log(Jonas["familyName"]);

const nameKey = "Name";
console.log(Jonas["frist" + nameKey]);
console.log(Jonas["last" + nameKey]);

const intrested = prompt("What do you want to know about Jonas? (fristName, lastName, job, age, friends)");

console.log(Jonas[intrested]);

if (Jonas[intrested]) {
    console.log(Jonas[intrested]);
} else {
    console.log("invalid data Request");
}

// Add

Jonas.location = "Thailand";
Jonas["school"] = "Assumption College";

console.log(Jonas)


console.log(`${Jonas.fristName} have ${Jonas["friends"].length} friends and his best friends is ${Jonas.friends[0]}`);
*/

///////////////////////////////////////////////////////
/*

// We can hold any types of Var, expression etc.. into an object
const Jonas = {
    fristName: "Jonas",
    lastName: "Godson",
    brithYear: 1091,
    job: "English Teacher",
    friends: ["NoOne", "Books", "Pencil"],
    haveDriverLicence: true,

    calcAge: function() {
        this.age = 2021 - this.brithYear;
        return this.age;
    },

    getSummary: function() {
            return `Ms/Mrs. ${this.fristName} ${this.lastName} is a ${this.calcAge()} year(s) old that ${this.haveDriverLicence ? "have" : "don't have"} a driver licence.`;

        }
        // calcAge : function() {
        //     return 2021 - this.brithYear
        // }

    // calcAge : function(brithYear) {
    //     return 2021 - brithYear;
    // }
};

console.log(Jonas.calcAge());
console.log(Jonas.age);
console.log(Jonas.age);
console.log(Jonas.age);
// console.log(Jonas["calcAge"](1991))

// Summary Challenge
console.log(`Ms/Mrs. ${Jonas.fristName} ${Jonas.lastName} is a ${Jonas.age} year(s) old that ${Jonas.haveDriverLicence ? "have" : "don't have"} a driver licence.`);

console.log(Jonas.getSummary());

*/
///////////////////////////////////////////////////
/*
// Coding Challenge #3

const mark = {
    fristName: "Mark",
    lastName: "Miller",
    height: 1.69,
    weight: 78,
    calcBMI: function() {
        this.bmi = this.weight / (this.height * this.height);
    }
}

const john = {
    fristName: "John",
    lastName: "Smith",
    height: 1.95,
    weight: 92,
    calcBMI: function() {
        this.bmi = this.weight / (this.height * this.height);
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi >= john.bmi) {
    console.log(`${mark.fristName} ${mark.lastName} (${mark.bmi}) have a higher BMI than ${john.fristName} ${john.lastName} (${john.bmi})`);
} else {
    console.log(`${john.fristName} ${john.lastName} (${john.bmi}) have a higher BMI than ${mark.fristName} ${mark.lastName} (${mark.bmi})`);
};
*/
//////////////////////////////////////////////////////////
// Loop 

/*
// Use normal Console.log = repeat
console.log(`Lifting weight repetition 1 🏋️‍♀️`);
console.log(`Lifting weight repetition 2 🏋️‍♀️`);
console.log(`Lifting weight repetition 3 🏋️‍♀️`);
console.log(`Lifting weight repetition 4 🏋️‍♀️`);
console.log(`Lifting weight repetition 5 🏋️‍♀️`);
console.log(`Lifting weight repetition 6 🏋️‍♀️`);
console.log(`Lifting weight repetition 7 🏋️‍♀️`);
console.log(`Lifting weight repetition 8 🏋️‍♀️`);
console.log(`Lifting weight repetition 9 🏋️‍♀️`);
console.log(`Lifting weight repetition 10 🏋️‍♀️`);

console.log(`
    Use The for Loop instead!

`)
    // You can use this 3 lines of code instead
    // v value    v condition v +1 every time
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
}
*/
////////////////////////////////////////////////////////
// Loop array #1
/*

// Value that we want to display / Log
const jonasArray = [
    "Jonas",
    "Godson",
    2021 - 1000,
    "S.English Teacher", ["Nathan", "Peter", "Eon"],
    "have a driver licence"
];
const jonasTypeof = [];

// Log out the value in loop!
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    // // Using [.push]
    jonasTypeof.push(typeof jonasArray[i]);
    //
    // // Using [index]
    // jonasTypeof[i] = typeof jonasArray[i];
    //
};

console.log(jonasTypeof);

const eras = [1990, 2000, 2010, 2020];
const ages = [];

for (let i = 0; i < eras.length; i++) {
    ages.push(2021 - eras[i]);
};

console.log(ages);

// Continues (cancel current operation)
console.log("only String");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
};
// Break (Terminate completely)
console.log(`=== If saw number break! ===`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") break;
    console.log(jonasArray[i], typeof jonasArray[i]);
};
*/
////////////////////////////////////////////////////////
// Loop Array #2
/*
const jonasArray = [
    "Jonas",
    "Godson",
    2021 - 1000,
    "S.English Teacher", ["Nathan", "Peter", "Eon"],
    "have a driver licence"
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i], i);
}

for (let exe = 1; exe <= 3; exe++) {
    console.log(`============ Starting Exercise ${exe}`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`🏋️‍♀️ Exercise ${exe}: Lifting rep ${rep}`);
    }
}
*/
////////////////////////////////////////////////////////
// While Loop
/*
let i = 1;
while (i <= 10) {
    console.log(`🏋️‍♀️ Lifting rep ${i}`);
    i += 1
}


let dice = Math.trunc(Math.random() * 6);
let count = 1;
console.log(dice);

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    count++;

};
console.log("Used", count);
*/
////////////////////////////////////////////////////////
/*
// Coding Challenge #4


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
let tip;

function calcTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
    return tip;
};

function calcAverage(arr) {
    let summary = 0;
    for (let i = 0; i < arr.length; i++) {
        summary += arr[i];
        console.log(`Sum Now : ${summary}`);
    }
    return summary / arr.length;
};

for (let i = 0; i < bills.length; i++) {
    tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(totals);
console.log(tips);

const average = calcAverage(totals);
console.log(`Your average totals is: ${average}`);
*/