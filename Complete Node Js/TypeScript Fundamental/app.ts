const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResults: Array<number> = [];
const txtResults: string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

interface ResultInterface {
  val: number;
  timestamp: Date;
}

function sum(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

function printResult(resultObj: Result) {
  console.log(resultObj.val);
}

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = sum(+num1, +num2);
  numResults.push(result as number);
  const stringResult = sum(num1, num2);
  txtResults.push(stringResult as string);
  console.log(result);
  console.log(stringResult);
  printResult({ val: result as number, timestamp: new Date() });
  console.log(numResults, txtResults);
});

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("IT WORK");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result.split("T"));
});
