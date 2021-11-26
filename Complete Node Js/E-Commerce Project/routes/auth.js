const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

// Login =======
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// Logout ======
router.post("/logout", authController.postLogout);

// Sign Up =====
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
