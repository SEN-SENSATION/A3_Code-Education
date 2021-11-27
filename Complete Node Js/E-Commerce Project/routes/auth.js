const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

// Login ========
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// Logout =======
router.post("/logout", authController.postLogout);

// Sign Up ======
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// Reset Password
router.get("/reset", authController.getReset);
router.post("/reset", authController.postReset);
router.get("/reset/:token", authController.newPassword);
router.post("/new-password", authController.postNewPassword);

module.exports = router;
