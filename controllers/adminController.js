const { admin, question, user } = require("../models/");
const { sigin } = require("../auth/");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/**
 *
 * @param {email,password} req
 * @param {*} res
 */
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(req.body);
    let admin_detail = await admin.find({ email }).lean();
    if (admin_detail.length > 0) {
      console.log(admin_detail);
      if (!bcrypt.compareSync(password, admin_detail[0].password)) {
        res.status(201).json({
          status: 201,
          message: "Invalid Credentials!",
        });
      } else {
        let token = sigin(admin_detail[0]._id);
        admin_detail[0].token = token ? token : "";
        res.status(200).json({
          status: 200,
          message: "Login Successfully",
          data: admin_detail,
        });
      }
    } else {
      res.status(200).json({
        status: 201,
        message: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log("err", error);
    res.status(500).json({
      status: 500,
      message: "Something went wrong!!",
    });
  }
};

/**
 *
 * @param {name, email, password} req
 * @param {*} res
 */
exports.signup = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    let get_email = await admin.find({ email });
    if (get_email.length > 0) {
      res.status(201).json({
        status: 201,
        message: "Email already exists!",
      });
    } else {
      let new_admin = new admin({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      let create_admin = await new_admin.save();
      if (create_admin) {
        let checkuser_exists_or_not = await admin
          .find({ _id: create_admin._id })
          .lean()
          .exec();
        let token = sigin(checkuser_exists_or_not[0]._id);
        checkuser_exists_or_not[0].token = token;

        res.status(200).json({
          status: 200,
          message: "Admin has been created!",
          data: checkuser_exists_or_not,
        });
      } else {
        res.status(500).json({
          status: 500,
          message: "Something went wrong!",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message || "Interal server error!",
    });
  }
};

/**
 *
 * @param {question, option_list} req
 * @param {*} res
 */
exports.addquestion = async (req, res) => {
  try {
    let { question, option_list } = req.body;
    let { id } = req.user;
    // let id = '6033a17ce735a87de5e3598b';
    let question_list = {
      question,
      options: option_list,
    };
    console.log(id);
    let update = await admin.updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $push: { question_list } }
    );
    if (update.n === 1) {
      let get_data =
        (await admin
          .find({ _id: mongoose.Types.ObjectId(id) })
          .lean()
          .exec()) || [];
      res
        .status(200)
        .json({ status: 200, message: "Update successfully", data: get_data });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Something went wrong", data: [] });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message || "Interal server error!",
    });
  }
};

/**
 * @param {} req
 * @param {*} res
 */
exports.getUsers = async (req, res) => {
  try {
    let userList = (await user.find({})) || [];
    if (userList.length > 0) {
      res
        .status(200)
        .json({ message: "user list", status: 200, data: userList });
    } else {
      res
        .status(201)
        .json({ message: "no user found", status: 201, data: userList });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message || "Internal server error" });
  }
};

/**
 * @param {} req
 * @param {*} res
 */
exports.getQuestion = async (req, res) => {
  try {
    let { id } = req.user;
    let questionList =
      (await admin.find(
        { _id: mongoose.Types.ObjectId(id) },
        { question_list: 1 }
      )) || [];
    if (questionList.length > 0) {
      res
        .status(200)
        .json({ message: "user list", status: 200, data: questionList });
    } else {
      res
        .status(201)
        .json({ message: "no user found", status: 201, data: questionList });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message || "Internal server error" });
  }
};
