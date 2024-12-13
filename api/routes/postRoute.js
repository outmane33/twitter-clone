const express = require("express");
const {
  createPost,
  deletePost,
  commentOnPost,
  likeUnlikePost,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} = require("../services/postService");
const { protect } = require("../services/authService");
const router = express.Router();

router.get("/all", protect, getAllPosts);
router.get("/following", protect, getFollowingPosts);
router.get("/likes/:id", protect, getLikedPosts);
router.get("/user/:username", protect, getUserPosts);
router.post("/create", protect, createPost);
router.post("/like/:id", protect, likeUnlikePost);
router.post("/comment/:id", protect, commentOnPost);
router.delete("/:id", protect, deletePost);

module.exports = router;
