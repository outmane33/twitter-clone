const expressAsyncHandler = require("express-async-handler");
const Notification = require("../models/notificationModel");

exports.getNotifications = expressAsyncHandler(async (req, res) => {
  const notifications = await Notification.find({ to: req.user._id }).populate({
    path: "from",
    select: "username profileImg",
  });
  await Notification.updateMany({ to: req.user._id }, { read: true });

  res.status(200).json(notifications);
});

exports.deleteNotifications = expressAsyncHandler(async (req, res) => {
  await Notification.deleteMany({ to: req.user._id });
  res.status(200).json({ message: "Notifications deleted successfully" });
});
