import express, { ErrorRequestHandler, NextFunction } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import multer from "multer";

import feedRoutes from "./routes/feed";
import authRoutes from "./routes/auth";
import * as errorsController from "./controllers/errors";

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const mime: string = file.mimetype;
  if (mime.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use("/images", express.static("./images"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.use(bodyParser.urlencoded()) // for x-www-form-urlencoded
app.use(bodyParser.json());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);

app.use(errorsController.errorMiddleware);

mongoose
  .connect(
    "mongodb+srv://nodejs:32uY6aazaCUVXOfb@cluster0.ld184.mongodb.net/messageNode?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected to the database");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
