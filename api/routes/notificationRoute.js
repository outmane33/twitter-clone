const express = require("express");
const { protect } = require("../services/authService");
const {
  getNotifications,
  deleteNotifications,
} = require("../services/notificationService");

const router = express.Router();

router.get("/", protect, getNotifications);
router.delete("/", protect, deleteNotifications);

module.exports = router;
