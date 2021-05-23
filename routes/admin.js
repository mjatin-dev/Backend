"use strict";
const express = require("express");
const { verify } = require("../auth");
let router = express.Router();
const { admin } = require("../controllers");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

let upload = multer({ storage: storage });
let cpUpload = upload.single("images");

router.post("/login", admin.login);
router.post("/signup", admin.signup);
router.post("/add-questions", verify, admin.addquestion);
router.get("/get-list", admin.getUsers);
router.get("/get-questions", verify, admin.getQuestion);
router.post("/add-type", admin.addType);
router.post("/add-gift", cpUpload, admin.addGift);
router.post("/update-gift", cpUpload, admin.updateGift);
router.get("/gift-list", admin.giftList);
router.get("/gift-detail/:id", admin.getGift);

module.exports = router;
