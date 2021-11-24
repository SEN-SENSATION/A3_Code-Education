const express = require("express");

const app = express();

app.use(express.static("."));

app.use("/", (req, res, next) => {
  res.sendFile("./index.html");
});

app.listen(80);
