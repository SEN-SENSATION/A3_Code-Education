import { Router } from "express";

import { Todo } from "../models/todo";

let todoList: Todo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todo: todoList });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    txt: req.body.txt,
  };

  todoList.push(newTodo);
  res.status(201).json({
    message: "added",
    newTodo: newTodo,
  });
});

router.put("/todo/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  const todoIndex = todoList.findIndex((todoItem) => todoItem.id === tid);
  if (todoIndex >= 0) {
    todoList[todoIndex] = { id: todoList[todoIndex].id, txt: req.body.text };
    return res.status(200).json({
      message: "Updated",
      todo: todoList,
    });
  }
  res.status(400).json({ message: "Could not find todo with that ID" });
});

router.delete("todo/:todoId", (req, res, next) => {
  todoList = todoList.filter((item) => item.id !== req.params.todoId);
  res.status(200).json({
    message: "Deleted",
    todoList: todoList,
  });
});

export default router;
