// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
// Video 1
// VS CODE config
console.log("Hello");

const x = 13;
if (x === 13) console.log(23);
console.log("Hello");
console.log();
*/

///////////////////////////////////////////////////////////////////
// Video 2
// Install Life Server
/*

const calcAge = (bYear) => 2021 - bYear;
console.log(calcAge(2008));

// Node JS (More Professional)
// Change detected /Users/prawichtha/OneDrive/Code/Js MasterClass/Java Script MasterClass/03-Developer-Skills/starter/script.js
*/
///////////////////////////////////////////////////////////////////
// Video 3 - 4 : Learning developers skills (How to be dev)
/*
function reverse(input) {
    let output = "";
    for (let i = input.length - 1; i >= 0; i--) {
        output = output + input[i];
    }
    return output;
}
console.log(reverse("Hello"));
*/
////////////////////////////////////////////////////////////////
// Video 5 : Using Google, StackOverFlow, MDN
/*
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// TODO
// 1.) Understand the problems
//     - what is amplitude? : The diff between highest and lowest temp.
//     - How do we calc? : Find max temp, Find lowest temp.
//     - There might be an error :
//         - what an error look like?
//         - how will we handle?

// 2.) Breaking up the problems
//     - How will we ignore the error? 
//     - How will we find
//         - Highest temp
//         - Lowest temp
//     - How will we calc?
//         - (High - low)


function calcTempAmplitude(temps) {
    // Find Highest
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`Highest Temp is : ${max}`);
    console.log(`Lowest Temp is :  ${min}`);
    return max - min;
}

const amp = calcTempAmplitude(temperature);
console.log(`Amplitude is :    ${amp}`);

// // FIXME Problem (2) : Function is no should get 2 array;

// 1.) Understand 
//     - what should we do with 2 arrays
// 2.) Breaking the problem
//     - We should merge 2 arrays


function calcTempAmplitudeNew(t1, t2) {
    const temps = t1.concat(t2);
    // Find Highest
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`Highest Temp is : ${max}`);
    console.log(`Lowest Temp is :  ${min}`);
    return max - min;
}

const ampNew = calcTempAmplitudeNew(temperature, [99, -2, 8, 54, -10]);
console.log(`Amplitude is :    ${ampNew}`);
*/
////////////////////////////////////////////////////////////////
// Video 6 : Debugging

// Bug can cause serious problems or even a small problems
////////////////////////////////////////////////////////////////
// Video 7 : Debug with console & Break points
/*
function measureKelvin() {
    const measurement = {
        type: "Temp",
        unit: "celsius",
        // value: Number(prompt("Degree Celsius")),
        value: 23,
    };
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());

// Using a de-bugger
function calcTempAmplitudeBug(t1, t2) {
    const temps = t1.concat(t2);
    // Find Highest
    let max = 0;
    let min = 0;
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`Highest Temp is : ${max}`);
    console.log(`Lowest Temp is :  ${min}`);
    return max - min;
}

const ampBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(`Amplitude is :    ${ampBug}`);
*/
////////////////////////////////////////////////////////////////
// Coding Challenge #1
/*
const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let value = "";
    for (let i = 0; i < arr.length; i++) {
        value += `... ${arr[i]}°c in ${i + 1} days `;
    }
    value += " ...";
    return value;
}

const t1 = printForecast(testData1);
const t2 = printForecast(testData2);

console.log(t1);
console.log(t2);
*/