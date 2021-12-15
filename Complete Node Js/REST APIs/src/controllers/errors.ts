import { ErrorRequestHandler } from "express";
import { ErrorInterface } from "../models/types";

export const errorMiddleware: ErrorRequestHandler = (
  err: ErrorInterface,
  req,
  res,
  next
) => {
  console.log(err);
  const status = err.statusCode || 500;
  const message = err.message;
  const data = err.data || "No data given";
  res.status(status).json({
    message: message,
    data: data,
  });
};
