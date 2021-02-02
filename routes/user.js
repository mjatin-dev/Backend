'use strict';
const express = require('express')
var router = express.Router()
const { user } = require('../controllers');
const { validate } = require("../validation")

router.post("/check_email", validate.check_email, user.check_email);
router.post("/standard_signup", validate.signup, user.create_standard_user);

module.exports = router;