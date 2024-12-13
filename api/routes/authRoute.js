const express = require("express");
const {
  signUp,
  signIn,
  signOut,
  protect,
  getMe,
} = require("../services/authService");
const router = express.Router();

router.get("/me", protect, getMe);
router.post("/signup", signUp);
router.post("/login", signIn);
router.post("/logout", signOut);

module.exports = router;
