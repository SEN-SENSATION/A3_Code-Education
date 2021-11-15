"use strict";

//////////////////////////////////////////////////////////////////////

// Scopes Chain
/*

function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function printAge() {
        let output = `${firstName} was born in ${birthYear}, so he is now ${age} years old`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const firstName = "steven"; // if there is a var in the block Js will not perform lookup (You can create same variable with same name in child scopes)
            var millenial = true; // var is not a block scopes it's a function scopes only!
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            output = "NEW";
            console.log(output); // you can manipulate data any where in child parent or it self bit not in parents
        }
        console.log(output);
        // console.log(str); // You can't access const || let values out side it's block
        console.log(millenial); // So you can get it outside it's block!
        // add(4, 1); function is a block scopes too! (in strict mode)
    }
    printAge();
    return age;
}

const firstName = "Jonas";
calcAge(1991);
// printAge(); we can access outside it's own parent function
*/

//////////////////////////////////////////////////////////////////////

// Hoisting & TDZ
/*

console.log(me); // var will result in undefined (Hoisted but undefined before initialization)
// console.log(job); // Not hoisted at all
// console.log(year); // Not hoisted at all

var me = "Prawich";
let job = "Student";
const year = "2008";

//function
console.log(addDecl(3, 2));
// console.log(addExp(3, 2)); // if var will be undefined || if const not hoisted!
// console.log(addArrow(3, 2)); // if var will be undefined || if const not hoisted!

function addDecl(a, b) {
    return a + b;
}

var addExp = function(a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

// Examples

console.log(undefined);
if (!productNum) deleteShoppingCart(); // product now is undefined and it's a falsy value!

var productNum = 10;

function deleteShoppingCart() {
    console.log("Deleted all product(s)!");
}

var x = 1; // Var will create a properties in windows object
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

//////////////////////////////////////////////////////////////////////

// .this
/*
console.log(this);

const calcAge = function(birthYear) {
    console.log(2021 - birthYear);
    console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(2021 - birthYear);
    console.log(this);
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function(birthYear) {
        console.log(this);
        console.log(2021 - this.year);
    },
};

jonas.calcAge();

const matilda = {
    year: 2000,
};

const mark = {
    year: 2007,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
mark.calcAge = f;
mark.calcAge();
*/

///////////////////////////////////////////////////////

// This continues

/*
// var firstName = "Matilda";

const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2021 - this.year);

        // Solution 1
        // self = this; // self or that
        // const isMillenail = function() {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenail();

        // Solution 2

        const isMillenail = () =>
            console.log(this.year >= 1981 && this.year <= 1996);
        isMillenail();
    },
    greet: () => console.log(`Hey! ${this.firstName}`), // Can't use this. in arrow function it's will return undefined form window
};

jonas.calcAge();

const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};
const addArrow = (a, b) => {
    // console.log(arguments);  // arguments are not available in arrow function
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 4, 5, 6);

addArrow(2, 4, 5);
*/

///////////////////////////////////////////////////////

// primitive vs objects
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: "jonas",
    age: 30,
};

const friend = me;
friend.age = 23; // both me and friends are changes (source of confusion)
console.log(me);
console.log(friend);
*/
///////////////////////////////////////////////////////

//

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage: ", jessica);
console.log("After Marriage: ", marriedJessica);

// marriedJessica = {};
console.log(`=== Use object.assign ===`);
// Copying Object

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"],
};
const jessicaCopied = Object.assign({}, jessica2);
jessicaCopied.lastName = "davis";
console.log("Before Marriage: ", jessica2);
console.log("After Marriage: ", jessicaCopied);

console.log("=== More family Member === ");
jessicaCopied.family.push("Mary");
jessicaCopied.family.push("Ben");

console.log("Before Marriage: ", jessica2);
console.log("After Marriage: ", jessicaCopied);