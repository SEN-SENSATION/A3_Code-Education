"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numResults = [];
const txtResults = [];
function sum(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
console.log(sum(1, 5));
console.log(sum(1, 5));
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = sum(+num1, +num2);
    numResults.push(result);
    const stringResult = sum(num1, num2);
    txtResults.push(stringResult);
    console.log(result);
    console.log(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, txtResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("IT WORK");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
