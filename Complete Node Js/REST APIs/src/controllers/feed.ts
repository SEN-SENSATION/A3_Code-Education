import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import Post from "../models/post";
import User from "../models/user";
import { ErrorInterface, UserInterface } from "../models/types";
import fs from "fs";

export const getPosts: RequestHandler = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems: number;
  Post.find()
    .countDocuments()
    .then((count) => {
      totalItems = +count;
      return Post.find()
        .skip((+currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((posts) => {
      res.status(200).json({
        message: "Feted post successfully!",
        posts: posts,
        totalItems: totalItems,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

export const createPost: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error: ErrorInterface = new Error(
      "Validation failed, The entered data is incorrect."
    );
    error.statusCode = 422;
    throw error;
  }
  if (!req.file) {
    const error: ErrorInterface = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  }
  const imageUrl = req.file.path;
  const title = req.body.title;
  const content = req.body.content;
  let creator: UserInterface;

  const userId = req.userId;
  // Create a post in the database!
  const post = new Post({
    title: title,
    content: content,
    imageUrl: imageUrl,
    creator: req.userId,
  });
  post
    .save()
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
      creator = user!;
      //@ts-ignore
      user!.posts.push(post);
      user?.save();
      res.status(201).json({
        message: "Created a post successfully!",
        post: post,
        creator: { _id: creator._id, name: creator.name },
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

export const getPost: RequestHandler = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error: ErrorInterface = new Error("Could not find post.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: "Post fetched.",
        post: post,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

export const updatePost: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error: ErrorInterface = new Error(
      "Validation failed, The entered data is incorrect."
    );
    error.statusCode = 422;
    throw error;
  }
  const postId = req.params.postId;
  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = req.file.path;
  }
  if (!imageUrl) {
    const error: ErrorInterface = new Error("No file picked");
    error.statusCode = 422;
    throw error;
  }
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error: ErrorInterface = new Error("Could not find post.");
        error.statusCode = 404;
        throw error;
      }
      if (post.creator.toString() !== req.userId.toString()) {
        const errors: ErrorInterface = new Error("Not Authorize");
        errors.statusCode = 403;
        throw errors;
      }
      if (imageUrl !== post.imageUrl) {
        clearImage(post.imageUrl);
      }
      post.title = title;
      post.imageUrl = imageUrl;
      post.content = content;
      return post.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Updated the post", post: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

export const deletePost: RequestHandler = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      // If post exist or not?
      if (!post) {
        const error: ErrorInterface = new Error("Could not find post.");
        error.statusCode = 404;
        throw error;
      }
      clearImage(post.imageUrl);
      return Post.findByIdAndRemove(postId);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Successfully deleted a post!" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = (filePath: string) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }
  });
};
