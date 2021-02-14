'use strict';
const express = require('express')
var router = express.Router()
const { user } = require('../controllers');
const { validate } = require("../validation");
const { verify } = require("../auth");

router.post("/check_email", validate.check_email, user.check_email);
router.post("/standard_signup", validate.signup, user.create_standard_user);
router.post("/standard_login", validate.standard_login, user.standard_login);
router.post("/social_signup", user.social_signup);
router.post("/update_location", verify, validate.update_location, user.update_location);
router.post("/update_password", verify, user.update_password);
router.post("/update_user", verify, user.update_user);
router.post("/like_user", verify, validate.like_user, user.like_user);
router.post("/dislike_user", verify, validate.like_user, user.dislike_user);
router.post("/block_user", verify, validate.like_user, user.block_user);
router.post("/report_user", verify, validate.report_user, user.report_user);

module.exports = router;