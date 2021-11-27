const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Invalid Value");
};

try {
  console.log(sum(2));
} catch (error) {
  console.log("an error has occurred!");
  console.log(error);
}
