"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // openingHours: openingHours,

  // Enhance Object Literal (ES6)
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Enhance method

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} -and- ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is you delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...othersIngs) {
    console.log(mainIng);
    console.log(othersIngs);
  },
};
///////////////////////////////////////////////////////////////////
/*
// Coding Str execrise

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(46);
  console.log(output);
}
*/
///////////////////////////////////////////////////////////////////
/*
// Coding Challenge #4 Final

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const textRow = text.split("\n");

  for (const [i, row] of textRow.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, " ")} ${"✅".repeat(i + 1)}`);
  }
});
*/
///////////////////////////////////////////////////////////////////
/*
// String 3
console.log("a+very+nice+string".split("+"));
console.log("Prawich Thawansakdivudhi".split(" "));

const [fristName, lastName] = "Prawich Thawansakdivudhi".split(" ");

const newName = ["Mr.", fristName, lastName.toLocaleUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

capitalizeName("Jassica ann smith davis");
capitalizeName("Jonas Schmedtmann");

// Padding a string
const message = "Go to gate 23!";
console.log(message.padStart("25", ".").padEnd(35, "."));
console.log("Jonas".padStart("25", ".").padEnd(35, "."));

const maskCredit = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCredit(8726837));
console.log(maskCredit(9876578987));
console.log(maskCredit("7890234578902345890523489024898"));

// Repeat
const message2 = "Bad weather.. All Departure Delayed";
console.log(message2.repeat(4));

const planeInLine = function (n) {
  console.log(`There's ${n} plane in line ${`🛫`.repeat(n)}`);
};
planeInLine(6);
planeInLine(9);
planeInLine(3);
*/
///////////////////////////////////////////////////////////////////
/*
// Strings 2
const airline = "Thai National Airways";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Email
const email = "hello@jonas.io";
const loginEmail = "  Hello@JoNas.io \n";

// Convert to lower Cases
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

const compareEmail = function (correct, input) {
  const normalizeCorrectEmail = correct.toLowerCase().trim();
  const normalizeEmail = input.toLowerCase().trim();
  if (normalizeEmail === normalizeCorrectEmail) {
    return true;
  } else {
    return false;
  }
};

console.log(compareEmail("hello@jonas.io", "  Hello@JoNas.io \n"));

//replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const annoucment = "All passenger come to boarding door 23, bording door 23!";

console.log(annoucment.replaceAll("door", "gate"));

console.log(annoucment.replace(/door/g, "gate")); // same result

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boing"));
console.log(plane.includes("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("New Generation!");
}

// Practice execrise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not welcomed");
  } else {
    console.log("Welcome on board");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some sNacks and a gun for protection");
*/
///////////////////////////////////////////////////////////////////
/*
// Strings 1
const airline = "Thai National Airways";
const plane = "A360";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("thai")); // -1 === not included

console.log(airline.slice(5));
console.log(airline.slice(5, 8));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(5, -2));

const checkMiddleSeat = function (seat) {
  // B & E Are middle seat
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`You got the middle seat!`);
  } else {
    console.log(`You are luckky!`);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
*/
///////////////////////////////////////////////////////////////////
/*
// Coding Challenge #3

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = new Set(gameEvents.values());
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop();
const average = time / gameEvents.size;
console.log(`An events has happend, on average every ${average} Minutes`);

for (const [min, event] of gameEvents) {
  // key < 45
  //   ? console.log(`[FRIST HALF] ${key}: ${value}`)
  //   : console.log(`[SECOND HALF] ${key}: ${value}`);
  const half = min < 45 ? `FRIST` : `SECOND`;
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
///////////////////////////////////////////////////////////////////
/*
// Maps 2

const question = new Map([
  ["Question", "What is the best programming Language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "✅ Correct!!!"],
  [false, "❌ Try Agian!!!"],
]);

// Convert Object to Maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Get Answer
console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your Answer"));
const answer = 3;
console.log(answer);

// Check Answer
answer === question.get("Correct")
  ? console.log(question.get(true))
  : console.log(question.get(false));

console.log(question.get(answer === question.get("Correct"))); // Same result

// Map to array
console.log([...question]);
console.log([...question].entries());
console.log([...question].key());
console.log([...question].value());
*/
///////////////////////////////////////////////////////////////////
/*
// Maps 1
const restaurantMap = new Map();
restaurantMap.set("Name", "Classico Italiano");
restaurantMap.set(1, "Bangkok, Thailand");
console.log(restaurantMap.set(2, "New York, United State"));

restaurantMap
  .set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("Open", 11)
  .set("Close", 23)
  .set(true, "We're Open!")
  .set(false, "We're Closed");

console.log(restaurantMap.get("Name"));
console.log(restaurantMap.get(true));
console.log(restaurantMap.get(1));

const time = 8;
console.log(
  restaurantMap.get(
    time > restaurantMap.get("Open") && time < restaurantMap.get("Close")
  )
);

console.log(restaurantMap.has("Categories"));
console.log(restaurantMap.delete(2));
console.log(restaurantMap);
console.log(restaurantMap.size);
// restaurantMap.clear();
console.log(restaurantMap.size);
const arr = [1, 2];
restaurantMap.set(arr, "Test");
restaurantMap.set(document.querySelector("h1"), "Heading");
console.log(restaurantMap);

console.log(restaurantMap.get(arr));
// can ue object as map key
*/
///////////////////////////////////////////////////////////////////
/*
// Sets
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);

console.log(new Set("Jonas"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza")); // True
console.log(orderSet.has("Bread")); // False

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet); // Can't use index ([1])

for (const order of orderSet) {
  console.log(order);
}

// Example(s)

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)]; // Array => set => array
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("PrawichThawansakdivudhi").size);
*/

// There's no way of getting data out of set

///////////////////////////////////////////////////////////////////
/*
// Coding Challenge #2
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const entries = Object.entries(game.scored);

for (const [goal, player] of entries) {
  console.log(`Goal ${Number(goal) + 1} has been scored by : ${player}`);
}

let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += Number(odd);
}
// sum = sum / game[odds].length;
sum /= Object.keys(game.odds).length;
console.log(sum);

// const { team1, x: draw, team2 } = game.odds;
// console.log(`Odd of victory ${game.team1} : ${team1}`);
// console.log(`Odd of Draw: ${draw}`);
// console.log(`Odd of victory ${game.team2} : ${team2}`);
for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "Draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odds}`);
}

const scorers = {};

for (const goals of game.scored) {
  scorers[goals] ? scorers[goals]++ : (scorers[goals] = 1);
}
console.log(scorers);
*/
///////////////////////////////////////////////////////////////////
/*
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We're open on ${properties.length} days :`;

for (const day of Object.keys(openingHours)) {
  openStr += ` ${day},`;
}
console.log(openStr);

const values = Object.values(openingHours);
// console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
///////////////////////////////////////////////////////////////////
/*
// Optional Chaining (?.)

if (restaurant.openingHours && restaurant.openingHours.Mon) {
  restaurant.openingHours.Mon && console.log(restaurant.openingHours.Mon.open);
}

// with optional chaining
console.log(openingHours.Mon?.open);
console.log(openingHours?.Mon?.open); // Prevent all kind of bug! amazing world

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0, 1) ?? "Method does not exist!");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist!");

// Array
const users = [{ name: "Jonas", email: "hello@mydomain.com" }];

console.log(users[0]?.name ?? "User Array Empty!!");

if (users.length > 0) console.log(users[0].name);
else console.log("User Array Empty");
*/
///////////////////////////////////////////////////////////////////
/*
// for of loop : looping Array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/
///////////////////////////////////////////////////////////////////
/*
// Coding Challenge #1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const player1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

// 5
// const { team1 } = game.odds;
// const { x: draw } = game.odds;
// const { team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 }, // Preferred way
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...input) {
  console.log(`${input.length} goals we're scored this game`);
};
printGoals(...game.scored);

// 7
team1 < team2 && console.log("team1 is more likely to win");
team1 > team2 && console.log("team2 is more likely to win");
*/
/////////////////////////////////////////////////////////////
/*
// Nullish Coalescing  (??)

restaurant.numGuests = 0;

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

const guestCorrect = restaurant.numGuests ?? 10;

console.log(guestCorrect);
*/
/////////////////////////////////////////////////////////////
/*
// Short Circuit (&& and ||)

// Can use any data types, can return any data types

console.log("=== or ===");

// Return truly value
console.log(3 || "jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello is result

restaurant.numGuests = 33;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // set
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

console.log("=== and ===");

// return falsy values
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "jonas"); // null is result

if (restaurant.orderPizza) {
    restaurant.orderPizza("mushroom", "spinach");
}


// if this vvvv is true execute this vvvv
restaurant.orderPizza && restaurant.orderPizza("wow", "Sunset");
// Not a replacement for if-else !!! it'll make code impossible to read
// not exactly impossible but I know what I mean
*/
/////////////////////////////////////////////////////////////

// Rest Pattern and Parameter
/*
// 1.) Destructure

// This is spread  vvvvvvvvv
const arr = [1, 2, ...[3, 4]];

// This is rest vvvvvv
const [a, b, ...others] = [1, 2, 3, 4, 5];
// it will pack things in to an array
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest in objects

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays, sat);

// 2.) Functions

const add = function(...numbers) {
    // pack with rest
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
    return sum;
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // spread first

restaurant.orderPizza("mushroom", "veggies", "onions", "olive oil");
restaurant.orderPizza("mushroom");
*/

/////////////////////////////////////////////////////////////
/*
// Spread Operator

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables: arrays, strings, map, sets, not objects
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // This can't be use

const ings = [
    prompt("Let's customize you pasta! [Ingredient 1]?"),
    prompt("Let's customize you pasta! [Ingredient 2]?"),
    prompt("Let's customize you pasta! [Ingredient 3]?"),
];

restaurant.orderPasta(...ings);

// Object! (Not iterables)
const NewRestaurant = { foundedIn: 1991, ...restaurant, founder: "Jonas" };
console.log(NewRestaurant);

//copy
const restaurantCopy = {...restaurant };
restaurantCopy.name = "ristorante Roma";
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/
///////////////////////////////////////////////////////////////////
/*

restaurant.orderDelivery({
    time: "22:30",
    address: "del soul valley, Nether 36912",
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: "del soul valley, Nether 36912",
    starterIndex: 2,
});

// Object

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Object
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/
///////////////////////////////////////////////////////////////////
/*
// Destructing an array

// Old style
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Use new way
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switch (not use destruct)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested array

const nested = [2, 5, [6, 10]];
const [i, , [j1, j2]] = nested;

console.log(i, j1, j2);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
