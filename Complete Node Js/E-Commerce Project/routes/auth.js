const express = require("express");
const { check, body } = require("express-validator/check");
const authController = require("../controllers/auth");
const router = express.Router();
const User = require("../models/user");

// Login ========
router.get("/login", authController.getLogin);
router.post(
  "/login",
  [
    body("email").isEmail().normalizeEmail().withMessage("Email is invalid"),
    body(
      "password",
      "Invalid Password!, password shall be longer than 5 charactor and it shall be alpha numeric"
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
  ],
  authController.postLogin
);

// Logout =======
router.post("/logout", authController.postLogout);

// Sign Up ======
router.get("/signup", authController.getSignup);
router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Email is invalid")
      .normalizeEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("Email aleady exist");
          }
        });
      }),
    body(
      "password",
      "password is invalid: minimum of 5 charactoe and only Alphanumeric"
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Password does not matched");
        }
        return true;
      }),
  ],
  authController.postSignup
);

// Reset Password
router.get("/reset", authController.getReset);
router.post("/reset", authController.postReset);
router.get("/reset/:token", authController.newPassword);
router.post("/new-password", authController.postNewPassword);

module.exports = router;
