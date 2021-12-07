import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import feedRoutes from "./routes/feed";

const app = express();

// app.use(bodyParser.urlencoded()) // for x-www-form-urlencoded
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://nodejs:32uY6aazaCUVXOfb@cluster0.ld184.mongodb.net/post?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected to the database");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
