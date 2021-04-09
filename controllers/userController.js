const { user } = require("../models/");
const { sigin } = require("../auth/");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const moment = require("moment");
const admin = require("../models/admin");
const { helpers, notifications } = require("../utilities/");

/**
 *
 * @param {email} req
 * @param {*} res
 */
exports.check_email = async (req, res) => {
  try {
    let { email } = req.body;
    let get_email = await user.find({ email });
    if (get_email.length > 0) {
      res.status(200).json({
        status: 200,
        message: "Email already exists!",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Email address is unqiue!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong!!",
    });
  }
};

/**
 *
 * @param {name, email, password, gender, about_me, your_status, device_type, device_token} req
 * @param {*} res
 */
exports.create_standard_user = async (req, res) => {
  try {
    let {
      name,
      email,
      password,
      gender,
      date_of_birth,
      about_me,
      your_status,
      device_type,
      device_token,
    } = req.body;

    let get_email = await user.find({ email });
    if (get_email.length > 0) {
      res.status(200).json({
        status: 200,
        message: "Email already exists!",
      });
    } else {
      let find_date = await helpers._calculate_date(`'${date_of_birth}'`);
      let new_user_instance = new user({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        gender,
        date_of_birth: moment(date_of_birth, "MM-DD-YYYY"),
        age: find_date,
        about_me,
        your_status,
        device_type,
        device_token,
        type: "standard",
      });
      let create_user = await new_user_instance.save();
      if (create_user) {
        let checkuser_exists_or_not = await user
          .find({ _id: create_user._id })
          .lean()
          .exec();
        let token = sigin(checkuser_exists_or_not[0]._id);
        checkuser_exists_or_not[0].token = token;

        res.status(200).json({
          status: 200,
          message: "User has been created!",
          data: checkuser_exists_or_not,
        });
      } else {
        res.status(201).json({
          status: 200,
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
 * @param {email, password} req
 * @param {*} res
 */
exports.standard_login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let get_detail =
      (await user.find({ email: email, type: "standard" }).lean().exec()) || [];
    console.log(get_detail);
    if (get_detail.length > 0) {
      if (
        !get_detail ||
        !bcrypt.compareSync(password, get_detail[0].password)
      ) {
        res.status(200).json({
          status: 200,
          message: "Invalid credentials!!",
        });
      } else {
        let token = sigin(get_detail[0]._id);
        get_detail[0].token = token;

        res.status(200).json({
          status: 200,
          message: "Login Successfully",
          data: get_detail,
        });
      }
    } else {
      res.status(201).json({
        status: 201,
        message: "Invalid credentials!!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message || "Interal server error!!",
    });
  }
};

/**
 *
 * @param {email, password} req
 * @param {*} res
 *
 */
exports.social_signup = async (req, res) => {
  try {
    let {
      name,
      email,
      password,
      gender,
      about_me,
      your_status,
      device_type,
      device_token,
      social_id,
    } = req.body;
    let checkuser_exists_or_not = await user
      .find({ social_id: social_id })
      .lean()
      .exec();

    if (checkuser_exists_or_not.length > 0) {
      let token = sigin(checkuser_exists_or_not[0]._id);
      checkuser_exists_or_not[0].token = token;

      res.status(200).json({
        status: 400,
        message: "User already exists",
        data: checkuser_exists_or_not,
      });
    } else {
      let new_user_instance = new user({
        name,
        email,
        gender,
        about_me,
        your_status,
        device_type,
        device_token,
        social_id,
        type: "social",
      });
      let create_user = await new_user_instance.save();

      if (create_user) {
        let checkuser_exists_or_not = await user
          .find({ _id: create_user._id })
          .lean()
          .exec();
        let token = sigin(checkuser_exists_or_not[0]._id);
        checkuser_exists_or_not[0].token = token;

        res.status(200).json({
          status: 200,
          message: "User has been created!",
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
      message: error.message || "Interal server error!!",
    });
  }
};

/**
 *
 * @param {latitude, longitude} req
 * @param {*} res
 */
exports.update_location = async (req, res) => {
  let { id } = req.user;
  let { latitude, longitude } = req.body;

  let location = {
    type: "Point",
    coordinates: [latitude, longitude],
  };

  let update_location = await user
    .updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: { location: location } }
    )
    .exec();
  console.log(update_location);
  if (update_location.n === 1) {
    let get_user = (await user.find({ _id: id }).lean().exec()) || [];
    res
      .status(200)
      .json({ status: 200, message: "Update successfully", data: get_user });
  } else {
    res
      .status(201)
      .json({ status: 201, message: "Something went wrong", data: [] });
  }
};

/**
 *
 * @param {new_password} req
 * @param {*} res
 */
exports.update_password = async (req, res) => {
  let { id } = req.user;
  let { new_password: password } = req.body;

  let update_password = await user
    .updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: { password: bcrypt.hashSync(password, 10) } }
    )
    .exec();

  if (update_password.n === 1) {
    let get_user = (await user.find({ _id: id }).lean().exec()) || [];
    res
      .status(200)
      .json({ status: 200, message: "Update successfully", data: get_user });
  } else {
    res
      .status(201)
      .json({ status: 201, message: "Something went wrong", data: [] });
  }
};

/**
 *
 * @param {new_password} req
 * @param {*} res
 */
exports.update_notification = async (req, res) => {
  let { id } = req.user;
  let { notification_on } = req.body;

  let update_notification = await user
    .updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: { notification_on: notification_on } }
    )
    .exec();
  console.log(update_notification);
  if (update_notification.n === 1) {
    let get_user = (await user.find({ _id: id }).lean().exec()) || [];
    res
      .status(200)
      .json({ status: 200, message: "Update successfully", data: get_user });
  } else {
    res
      .status(201)
      .json({ status: 201, message: "Something went wrong", data: [] });
  }
};

/**
 *
 * @param {age,radius,interest,steps,image,status} req
 * @param {*} res
 */

exports.update_user = async (req, res) => {
  try {
    let { id } = req.user;
    let {
      age_range,
      insterted_in,
      radius_range,
      step,
      name,
      your_status,
      images,
      about_me,
    } = req.body;
    let update_payload = {};
    if (step == 1) {
      update_payload = {
        age_range: age_range
          ? { min: age_range.min, max: age_range.max }
          : { min: 0, max: 0 },
        insterted_in: insterted_in || "None",
        radius_range: radius_range
          ? { min: radius_range.min, max: radius_range.max }
          : { min: 0, max: 0 },
      };
    } else {
      for (const key in req.body) {
        console.log(key);
        update_payload[key] = req.body[key];
      }
    }

    console.log(update_payload);

    let update_user = await user
      .updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: update_payload })
      .exec();

    if (update_user.n === 1) {
      let get_user = (await user.find({ _id: id }).lean().exec()) || [];
      res
        .status(200)
        .json({ status: 200, message: "Update successfully", data: get_user });
    } else {
      res
        .status(201)
        .json({ status: 201, message: "Something went wrong", data: [] });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Interal server error!!",
    });
  }
};

/**
 *
 * @param {member_id} req
 * @param {*} res
 */
exports.like_user = async (req, res) => {
  try {
    let { id } = req.user;
    let { member_id } = req.body;

    let update_notification = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        {
          $push: {
            liked_members: {
              liked_user_id: mongoose.Types.ObjectId(member_id),
            },
          },
        }
      )
      .exec();

    if (update_notification.n === 1) {
      let get_user = (await user.find({ _id: id }).lean().exec()) || [];
      res.status(200).json({ status: 200, message: "Update successfully" });
    } else {
      res
        .status(201)
        .json({ status: 201, message: "Something went wrong", data: [] });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message || "Interal server error!!",
    });
  }
};

/**
 *
 * @param {member_id} req
 * @param {*} res
 */
exports.dislike_user = async (req, res) => {
  try {
    let { id } = req.user;
    let { member_id } = req.body;

    let update_notification = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        {
          $push: {
            disliked_members: {
              disliked_user_id: mongoose.Types.ObjectId(member_id),
            },
          },
        }
      )
      .exec();

    if (update_notification.n === 1) {
      let get_user = (await user.find({ _id: id }).lean().exec()) || [];
      res.status(200).json({ status: 200, message: "Update successfully" });
    } else {
      res.status(201).json({ status: 201, message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Interal server error!!",
    });
  }
};

/**
 *
 * @param {member_id} req
 * @param {*} res
 */
exports.block_user = async (req, res) => {
  try {
    let { id } = req.user;
    let { member_id } = req.body;

    let update_notification = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        { $set: { blocked_users: mongoose.Types.ObjectId(member_id) } }
      )
      .exec();

    if (update_notification.n === 1) {
      let get_user = (await user.find({ _id: id }).lean().exec()) || [];
      res.status(200).json({ status: 200, message: "Update successfully" });
    } else {
      res.status(201).json({ status: 201, message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Interal server error!!",
    });
  }
};

/**
 *
 * @param {reported_by,reported_to,reason} req
 * @param {*} res
 */
exports.report_user = async (req, res) => {
  try {
    let { id } = req.user;
    let { reported_by_user_id, reason } = req.body;
    let payload = {
      reported_by_user_id: mongoose.Types.ObjectId(reported_by_user_id),
      reason,
    };
    let update_notification = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        { $set: { reported_by: payload } }
      )
      .exec();

    if (update_notification.n === 1) {
      let get_user = (await user.find({ _id: id }).lean().exec()) || [];
      res.status(200).json({ status: 200, message: "Update successfully" });
    } else {
      res.status(201).json({ status: 201, message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Interal server error!!",
    });
  }
};

exports.get_questions = async (req, res) => {
  try {
    let list_questions = (await admin.find({}).lean().exec()) || [];
    if (list_questions.length > 0) {
      res.status(200).json({
        status: 200,
        message: "Questions List",
        data: list_questions[0].question_list,
      });
    } else {
      res.status(201).json({ status: 201, message: "No list found", data: [] });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message || "Something went wrong" });
  }
};

/**
 *
 * @param { req
 * @param {*} res
 */

exports.user_list = async (req, res) => {
  try {
    let { id } = req.user;
    let user_detail = await user
      .findOne({ _id: mongoose.Types.ObjectId(id) })
      .lean()
      .exec();

    let { liked_members, disliked_members } = user_detail;
    liked_members = liked_members
      ? liked_members.map((data) => data.liked_user_id)
      : [];
    disliked_members = disliked_members
      ? disliked_members.map((data) => data.disliked_user_id)
      : [];

    let condition = {
      $and: [
        { _id: { $nin: liked_members } },
        { _id: { $ne: mongoose.Types.ObjectId(id) } },
        { _id: { $nin: disliked_members } },
      ],
    };
    let user_list = (await user.find(condition)) || [];
    if (user_list.length > 0) {
      res
        .status(200)
        .json({ status: 200, message: "Users List", data: user_list });
    } else {
      res
        .status(201)
        .json({ status: 201, message: "Users List", data: user_list });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: error.message || "Internal server error!!",
    });
  }
};

/**
 *
 * @param { }req
 * @param {*} res
 */
exports.user_answers = async (req, res) => {
  try {
    let { id } = req.user;
    let { answer_list } = req.body;

    let count_result = await helpers._count(answer_list.split(","));
    let sort_result = count_result.sort((a, b) =>
      a.count < b.count ? 1 : b.count < a.count ? -1 : 0
    );
    let top_four_result = sort_result
      .slice(0, 4)
      .map((data) => data.value)
      .join("");

    let update_love_type = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        { $set: { love_type: top_four_result } }
      )
      .exec();
    if (update_love_type.n === 1) {
      let { love_type } = (await user.findOne({ _id: id }).lean().exec()) || [];
      res
        .status(200)
        .json({ status: 200, message: "Update successfully", data: love_type });
    } else {
      res
        .status(201)
        .json({ status: 201, message: "Updation failed", data: "" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message || "Something went wrong" });
  }
};

exports.send_notification = async (req, res) => {
  console.log(await notifications.sendAndroid());
};

/**
 * @param {user_id}req
 * @param {*} res
 *
 */
exports.get_user_profile = async (req, res) => {
  try {
    let { user_id } = req.query;
    console.log(req.query);
    let user_detail =
      (await user
        .find({ _id: mongoose.Types.ObjectId(user_id) })
        .lean()
        .exec()) || [];
    user_detail.length > 0
      ? res
          .status(200)
          .json({ status: 200, message: "user detail", data: user_detail })
      : res
          .status(201)
          .json({ status: 201, message: "no detail found", data: user_detail });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message || "Something went wrong" });
  }
};
