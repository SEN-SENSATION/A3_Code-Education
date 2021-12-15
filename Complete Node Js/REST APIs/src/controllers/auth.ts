import User from "../models/user";
import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { ErrorInterface, UserInterface } from "../models/types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error: ErrorInterface = new Error("Validation Failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      const user = new User({
        email: email,
        password: hashedPassword,
        name: name,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "User created!",
        userId: result._id,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

export const login: RequestHandler = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser: UserInterface;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error: ErrorInterface = new Error(
          "A user with this email could not be found"
        );
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error: ErrorInterface = new Error("Password Incorrect!");
        error.statusCode = 401;
        throw error;
      }
      // Generate JSON WEB TOKEN
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        "secret",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        userId: loadedUser._id.toString(),
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
