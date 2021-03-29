"use strict";
const express = require("express");
const { verify } = require("../auth");
var router = express.Router();
const { admin } = require("../controllers");

router.post("/login", admin.login);
router.post("/signup", admin.signup);
router.post("/add-questions", verify, admin.addquestion);
router.get("/get-list", admin.getUsers);
router.get("/get-questions", verify, admin.getQuestion);

module.exports = router;
