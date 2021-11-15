"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Functions() {};
const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}฿</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// console.log(containerMovements.innerHTML);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);
// console.log(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}฿`;
};

// Summary Calc & Display // You should optimized use of method chain as much as possible
const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}฿`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur);
  labelSumOut.textContent = `${Math.abs(out)}฿`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}฿`;
};

const updateUI = function (acc) {
  // Display Movement
  displayMovement(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};
// Event Handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent From form submitted
  // console.log(`LOGIN`);

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("Login");
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // clear input feild
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    console.log("Tranfer Valid");
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    updateUI(currentAccount);
  } else {
    console.error("Invalid for some reason!");
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    console.log(`Loan accepted`);
    // Add to movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  // Check Credencial
  const confrimUser = inputCloseUsername.value;
  const confrimPin = inputClosePin.value;
  if (
    confrimUser === currentAccount.username &&
    Number(confrimPin) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // Remove form accounts array
    accounts.splice(index, 1);
    // LogOut (Hide UI)
    containerApp.style.opacity = 0;
    // Clear
  }
  inputClosePin.value = inputCloseUsername.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// console.log(createUsername(`Steven Thomas Williams`)); // stw
// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map((name) => name[0])
//   .join("");

// console.log(username);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ["a", "b", "c", "d", "e"];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

console.log("===============");
// Splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSED
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

const letters = arr.concat(arr2);
console.log(letters);
// AsSame as
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join("-"));
*/
/////////////////////////////////////////////////
/*
// For Each Loop

// Old Way
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdraw ${Math.abs(movement)}`);
  }
}

// For each way
console.log("====== For Each ======");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} : You withdraw ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// 3: function(3000)
// and so on and so forth...
*/
/////////////////////////////////////////////
/*
// For each (Map and set)
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${key} : ${value}`);
});
*/
//////////////////////////////////////////////////////////////////
/*
// Coding Challenge #1

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];

const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

let count = 0;
const checkDog = function (julia, kate) {
  const newJulia = julia.slice(1, -2);
  const dog = newJulia.concat(kate);
  console.log(dog);
  dog.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
  count++;
  console.log(`============= run through data ${count}`);
};

checkDog(juliaData1, kateData1);
checkDog(juliaData2, kateData2);
*/
//////////////////////////////////////////////////////////////////
/*
// Map Method
const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUsd = movements.map((mov) => mov * eurToUsd);
// result : (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

console.log(movements);
console.log(movementsUsd);

console.log(`===================== for(of) method`);

const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * eurToUsd);
}
console.log(movementsUsdFor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
      mov
    )}`
);

// if (mov > 0) {
//   return `Movement ${i + 1} : You deposited ${mov}`;
// } else {
//   return `Movement ${i + 1} : You withdraw ${Math.abs(mov)}`;
// }
console.log(movementsDescriptions);
*/
//////////////////////////////////
/*
// Filter Method

const deposit = movements.filter((mov) => mov > 0);
console.log(movements);
console.log(deposit);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);

console.log(depositFor);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
*/
//////////////////////////////////////////////////////////////////
/*
// Reduce
console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   // acc (accumalator) = snowball
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// const balance = movements.reduce((acc, cur) => acc + cur);

console.log(balance);

// <!-- Manual -->
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// Maximum Value
// const max = movements.reduce(function (acc, cur) {
//   if (acc > cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// }),movements[0];
const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
console.log(max);
*/
//////////////////////////////////////////////////////////////////
/*
// Coding Challenge #2

const calcAverageHumanAge = function (dogAges) {
  // Calculate Human Ages from Dog Ages (Mission 1)
  const humanAges = dogAges.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  // Filter out age less than 18 (Mission 2) || Find adult
  const filteredHumanAges = humanAges.filter((age) => age > 18);
  console.log(filteredHumanAges);
  // Calculate average (Mission 3)

  // Traditional
  // const average =
  //   filteredHumanAges.reduce((acc, cur) => acc + cur, 0) /
  //   filteredHumanAges.length;

  // Complexed
  const average = filteredHumanAges.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // const average = sum / filteredHumanAges.length;
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2);
*/
//////////////////////////////////////////////////////////////////
/*
// Magic by method chain
const eurToUsd = 1.1;

// PipeLine
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  // .map((mov) => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr); // This is how to inspect!
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/
//////////////////////////////////////////////////////////////////
/*
// Coding Challenge #3
const calcAverageHumanAge = function (ages) {
  const average = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2);
*/
//////////////////////////////////////////////////////////////////
/*
// Find Method
const fristWihdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(fristWihdrawal);

console.log(accounts);
// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
*/
//////////////////////////////////////////////////////////////////
/*
//Some and Every Method
console.log(movements);

// Equality
console.log(movements.includes(-130));

// SOME : Condition
console.log(movements.some((mov) => mov === -130));
const anyDeposit1 = movements.some((mov) => mov > 0);
console.log(anyDeposit1);

// EVERY
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Seperate Call back
const deposit = (mov) => mov > 0;
const withdraw = (mov) => mov < 0;
console.log("==============");
console.log("==============");
*/
//////////////////////////////////////////////////////////////////
/*
// Flat and Flat Map Method

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // 1 is defult for depth

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // This is how you assign depth

const accountsMovements = accounts.map((acc) => acc.movements);
console.log(accountsMovements);
// vvv flatten
const allMovements = accountsMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(`Overall Balance : ${overallBalance}`);

// Use Chaining
const overallBalanceChain = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceChain);

const overallBalanceMap = accounts
  .flatMap((acc) => acc.movements) // Flat Map can only go 1 level deep!
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceMap);
*/
///////////////////////////////////////////////////
/*
// Sort

// Stirngs
const owner = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owner.sort());
console.log(owner);

// Numbers
console.log(movements);

// retrun < 0 A, B
// return >0 B, A

// Assending
movements.sort((a, b) => a - b);
console.log(movements);
// Decending
movements.sort((a, b) => b - a);
console.log(movements);
*/
///////////////////////////////////////////////////
/*
// More ways to create strings

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
// This will create arrays with 7 empty slot
// literaly "EMPTY"
console.log(x);
console.log(x.map(() => 5));

// x.fill(1); // Get array full of 1 (7 of 1)
x.fill(1, 3, 5);
console.log(x);

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// vvv
// [ 1, 2, 23, 23, 23, 23, 7, 8, 9, 10 ]
// with
arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// _(underscore) = throwaway variable
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// ARRAY WITH 100 DICE ROLL
const hundred = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(hundred);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => el.textContent.replace("฿", "")
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(".movements__value")];
  console.log(movementsUI2);
});
*/
///////////////////////////////////////////////////
/*
// Method Practice

// Ex :1
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur);

console.log(bankDepositSum);

// Ex :2
const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposit1000);

// Prefix ++ OPerator
let a = 10;
console.log(++a);
console.log(a);

// Ex :3
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// Ex :4
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const tilteCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(tilteCase);
};
console.log(convertTitleCase("this is a long title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
*/
///////////////////////////////////////////////////

// Coding Challenge #4 (Final) Finally done with Julia & Kate!!!

/*
Bullet Point
1.)  Loop over the array that contain DOG OBJECT
  1.1) add recommned food portion 
      Formular : reccommended portion = weight ** 0.75 * 28 
2.) Find Sarah dog and log is it's eat too much or too little
3.) Create an Array contain all names of dog owners contain dog eat too much call ("ownersEatTooMuch")
    and with opposit ("OwnersEatTooLittle")
4.) Print a string like this: "Matilda and Alice and Bob's dogs eat too much!"
5.) Log to the console is there any dog eating excatly amount of food reccommended (True || False)
6.) Log to the console is there any dog eating OK amount of food | formular : current > (recommended * 0.90) && current < (recommended * 1.10)
7.) Create an array for OK amount of food and store them into an array
8.) Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Question 1
dogs.map((dog) => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// Question 2
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's Dog is eating ${
    dogSarah.curFood < dogSarah.recFood ? `too little` : `too much`
  }`
);

// Question 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.recFood < dog.curFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.recFood > dog.curFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

console.log(dogs.some((dog) => dog.curFood === dog.recFood));
// Current > (recommended * 0.90) && current < (recommended * 1.10)
console.log(
  dogs.some(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

const ownerOkFood = dogs.filter(
  (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);

console.log(ownerOkFood);

const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
