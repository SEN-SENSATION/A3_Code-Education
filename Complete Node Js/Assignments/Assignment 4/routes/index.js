const express = require("express");

const router = express.Router();
const users = [];

router.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Our Users",
    users: users,
  });
});
router.get("/", (req, res, next) => {
  res.render("regis", {
    pageTitle: "Registeration",
  });
});
router.post("/", (req, res, next) => {
  users.push(req.body);
  console.log(users);
  res.redirect("/");
});

exports.routes = router;
exports.users = users;
