import { RequestHandler } from "express";
import { ErrorInterface } from "../models/types";
import jwt from "jsonwebtoken";

const isAuth: RequestHandler = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error: ErrorInterface = new Error("Token not found!");
    error.statusCode = 400;
    throw error;
  }
  const token = req.get("Authorization")!.split(" ")[1];
  let decodedToken: any;
  try {
    decodedToken = jwt.verify(token, "secret");
  } catch (err: any) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error: ErrorInterface = new Error("Not Authenticated");
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};

export default isAuth;
