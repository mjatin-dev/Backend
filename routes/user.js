"use strict";
const express = require("express");
var router = express.Router();
const { user } = require("../controllers");
const { validate } = require("../validation");
const { verify } = require("../auth");

router.post("/check_email", validate.check_email, user.checkEmail);
router.post("/standard_signup", validate.signup, user.createStandardUser);
router.post("/standard_login", validate.standard_login, user.standardLogin);
router.post("/social_signup", user.socialSignup);
router.post(
  "/update_location",
  verify,
  validate.update_location,
  user.updateLocation
);
router.post("/update_notification", verify, user.updateNotification);
router.post("/update_password", verify, user.updatePassword);
router.post("/update_user", verify, user.updateUser);
router.post("/like_user", verify, validate.like_user, user.likeUser);
router.post("/dislike_user", verify, validate.like_user, user.dislikeUser);
router.post("/block_user", verify, validate.like_user, user.blockUser);
router.post("/report_user", verify, validate.report_user, user.reportUser);
router.get("/get_questions", verify, user.getQuestions);
router.get("/user_list", verify, user.userList);
router.post("/user_answers", verify, user.userAnswers);
router.get("/user_detail", verify, validate.user_detail, user.getUserProfile);
router.get("get_notification", verify, user.getNotifications);

module.exports = router;
