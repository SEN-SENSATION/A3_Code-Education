const path = require("path");
const express = require("express");

const app = express();

const mainRoute = require("./routes/index");

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoute);

app.listen(3000);
