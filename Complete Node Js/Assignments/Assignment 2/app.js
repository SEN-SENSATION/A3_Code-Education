const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("Welcome to middle ware No.1");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Welcome to the last middle ware No.2");
//   res.send("<h1>Hello Welcome to middle ware 2</h1>");
// });

app.use("/users", (req, res, next) => {
  console.log("user have reached users page");
  res.send(
    "<ul><li>Agent1</li><li>Agent2</li><li>Agent3</li><li>Agent4</li></ul>"
  );
});

app.use("/", (req, res, next) => {
  console.log("user have reached overview page");

  res.send("<h1>Hello Welcome from express Js</h1>");
});

app.listen(3000);
