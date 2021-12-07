import { RequestHandler } from "express";
import { validationResult } from "express-validator";

export const getPosts: RequestHandler = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "fdksa'fds5345",
        title: "A POST",
        content: "Wow this is my first post!",
        imageUrl: "images/kazuha.png",
        creator: {
          name: "Prawich",
        },
        createdAt: new Date(),
      },
    ],
  });
};

export const createPost: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "validation failed, entered data is incorrect!",
      errors: errors,
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  // Create a post in the database!

  res.status(201).json({
    message: "Successfully Created The Post",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Prawich" },
      imageUrl: "images/kazuha.png",
      createdAt: new Date(),
    },
  });
};
