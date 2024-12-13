const express = require("express");
const {
  followUnfollowUser,
  getSuggestedUsers,
  updateUser,
  getUserProfile,
} = require("../services/userService");
const { protect } = require("../services/authService");
const router = express.Router();

router.get("/profile/:username", protect, getUserProfile);

router.post("/follow/:id", protect, followUnfollowUser);

router.get("/suggested", protect, getSuggestedUsers);

router.post("/update", protect, updateUser);

module.exports = router;
