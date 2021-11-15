const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const userData = require("./routes/index");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(userData.routes);

app.listen(3000);
