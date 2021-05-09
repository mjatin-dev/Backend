const { user, typeModel } = require("../models/");
const { sigin } = require("../auth/");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const moment = require("moment");
const admin = require("../models/admin");
const {
  helpers,
  notifications,
  notificationText,
  globalConstants,
} = require("../utilities/");

const { notificationService } = require("../services");

/**
 *
 * @param {email} req
 * @param {*} res
 */
exports.checkEmail = async (req, res) => {
  try {
    let { email } = req.body;
    let getEmail = await user.find({ email });
    if (getEmail.length > 0) {
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
exports.createStandardUser = async (req, res) => {
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

    let getEmail = await user.find({ email });
    if (getEmail.length > 0) {
      res.status(200).json({
        status: 200,
        message: "Email already exists!",
      });
    } else {
      let findDate = await helpers._calculate_date(`'${date_of_birth}'`);
      let newUserInstance = new user({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        gender,
        date_of_birth: moment(new Date(date_of_birth)).format("MM-DD-YYYY"),
        age: findDate,
        about_me,
        your_status,
        device_type,
        device_token,
        type: "standard",
      });
      let createUser = await newUserInstance.save();

      if (createUser) {
        let checkuserExistsOrNot = await user
          .find({ _id: createUser._id })
          .lean()
          .exec();
        let token = sigin(checkuserExistsOrNot[0]._id);
        checkuserExistsOrNot[0].token = token;

        res.status(200).json({
          status: 200,
          message: "User has been created!",
          data: checkuserExistsOrNot,
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
exports.standardLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    let getDetail =
      (await user.find({ email: email, type: "standard" }).lean().exec()) || [];
    console.log(getDetail);
    if (getDetail.length > 0) {
      if (!getDetail || !bcrypt.compareSync(password, getDetail[0].password)) {
        res.status(400).json({
          status: 400,
          message: "Invalid credentials!!",
        });
      } else {
        let token = sigin(getDetail[0]._id);
        getDetail[0].token = token;

        res.status(200).json({
          status: 200,
          message: "Login Successfully",
          data: getDetail,
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
exports.socialSignup = async (req, res) => {
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
      images,
    } = req.body;
    let checkuserExistsOrNot = await user
      .find({ social_id: social_id })
      .lean()
      .exec();

    if (checkuserExistsOrNot.length > 0) {
      let token = sigin(checkuserExistsOrNot[0]._id);
      checkuserExistsOrNot[0].token = token;

      res.status(200).json({
        status: 400,
        message: "User already exists",
        data: checkuserExistsOrNot,
      });
    } else {
      let newUserInstance = new user({
        name,
        email,
        gender,
        about_me,
        your_status,
        device_type,
        device_token,
        social_id,
        type: "social",
        images,
      });
      let createUser = await newUserInstance.save();

      if (createUser) {
        let checkuserExistsOrNot = await user
          .find({ _id: createUser._id })
          .lean()
          .exec();
        let token = sigin(checkuserExistsOrNot[0]._id);
        checkuserExistsOrNot[0].token = token;

        res.status(200).json({
          status: 200,
          message: "User has been created!",
          data: checkuserExistsOrNot,
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
exports.updateLocation = async (req, res) => {
  let { id } = req.user;
  let { latitude, longitude } = req.body;

  let location = {
    type: "Point",
    coordinates: [latitude, longitude],
  };

  let updateLocation = await user
    .updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: { location: location } }
    )
    .exec();
  if (updateLocation.n === 1) {
    let getUser = (await user.find({ _id: id }).lean().exec()) || [];
    res
      .status(200)
      .json({ status: 200, message: "Update successfully", data: getUser });
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
exports.updatePassword = async (req, res) => {
  let { id } = req.user;
  let { new_password: password } = req.body;

  let updatePassword = await user
    .updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: { password: bcrypt.hashSync(password, 10) } }
    )
    .exec();

  if (updatePassword.n === 1) {
    let getUser = (await user.find({ _id: id }).lean().exec()) || [];
    res
      .status(200)
      .json({ status: 200, message: "Update successfully", data: getUser });
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
exports.updateNotification = async (req, res) => {
  let { id } = req.user;
  let { notification_on } = req.body;

  let updateNotification = await user
    .updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: { notification_on: notification_on } }
    )
    .exec();
  if (updateNotification.n === 1) {
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

exports.updateUser = async (req, res) => {
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
    let updatePayload = {};
    if (step == 1) {
      updatePayload = {
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
        updatePayload[key] = req.body[key];
      }
    }

    let updateUser = await user
      .updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: updatePayload })
      .exec();

    if (updateUser.n === 1) {
      let getUser = (await user.find({ _id: id }).lean().exec()) || [];
      res
        .status(200)
        .json({ status: 200, message: "Update successfully", data: getUser });
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
exports.likeUser = async (req, res) => {
  try {
    let { id } = req.user;
    let { member_id } = req.body;

    let checkIsAlreadyLikeUser =
      (await user
        .find({
          $and: [
            { _id: mongoose.Types.ObjectId(member_id) },
            {
              liked_members: {
                $elemMatch: {
                  liked_user_id: mongoose.Types.ObjectId(id),
                },
              },
            },
          ],
        })
        .lean()
        .exec()) || [];

    if (checkIsAlreadyLikeUser.length > 0) {
      findUserAndSendNotification(member_id, id);
      setUserMatched(member_id, id);

      findUserAndSendNotification(id, member_id);
      setUserMatched(id, member_id);
    }

    let updateNotification = await user
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

    if (updateNotification.n === 1) {
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
exports.dislikeUser = async (req, res) => {
  try {
    let { id } = req.user;
    let { member_id } = req.body;

    let updateNotification = await user
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

    if (updateNotification.n === 1) {
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
exports.blockUser = async (req, res) => {
  try {
    let { id } = req.user;
    let { member_id } = req.body;

    let updateNotification = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        { $set: { blocked_users: mongoose.Types.ObjectId(member_id) } }
      )
      .exec();

    if (updateNotification.n === 1) {
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
exports.reportUser = async (req, res) => {
  try {
    let { id } = req.user;
    let { reported_by_user_id, reason } = req.body;
    let payload = {
      reported_by_user_id: mongoose.Types.ObjectId(id),
      reason,
    };
    let updateNotification = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(reported_by_user_id) },
        { $push: { reported_by: payload } }
      )
      .exec();

    if (updateNotification.n === 1) {
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

exports.getQuestions = async (req, res) => {
  try {
    let listQuestions =
      (await admin
        .find(
          {},
          {
            extravert_introversion: 1,
            intuition_sensing: 1,
            thinking_feeling: 1,
            juding_perceiving: 1,
            _id: 0,
          }
        )
        .lean()
        .exec()) || [];
    if (listQuestions.length > 0) {
      res.status(200).json({
        status: 200,
        message: "Questions List",
        data: listQuestions[0],
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

exports.userList = async (req, res) => {
  try {
    let { id } = req.user;
    let userDetail = await user
      .findOne({ _id: mongoose.Types.ObjectId(id) })
      .lean()
      .exec();

    let { liked_members, disliked_members } = userDetail;
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
    let userList = (await user.find(condition)) || [];
    if (userList.length > 0) {
      res
        .status(200)
        .json({ status: 200, message: "Users List", data: userList });
    } else {
      res
        .status(201)
        .json({ status: 201, message: "Users List", data: userList });
    }
  } catch (error) {
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
exports.userAnswers = async (req, res) => {
  try {
    let { data } = req.body;
    let { id } = req.user;

    let extravertIntroversion = data.filter(function (value) {
      return value.type === globalConstants.extravertIntroversion;
    });

    let intuitionSensing = data.filter(function (value) {
      return value.type === globalConstants.intuitionSensing;
    });

    let thinkingFeeling = data.filter(function (value) {
      return value.type === globalConstants.thinkingFeeling;
    });

    let judingPerceiving = data.filter(function (value) {
      return value.type === globalConstants.judingPerceiving;
    });

    let extravertIntroversionCount = await helpers._count(
      extravertIntroversion[0].anwser
    );

    let intuitionSensingCount = await helpers._count(
      intuitionSensing[0].anwser
    );
    let thinkingFeelingCount = await helpers._count(thinkingFeeling[0].anwser);
    let judingPerceivingCount = await helpers._count(
      judingPerceiving[0].anwser
    );

    let generatedCode = `${extravertIntroversionCount[0].value}${intuitionSensingCount[0].value}${thinkingFeelingCount[0].value}${judingPerceivingCount[0].value}`;

    let getTypes = await typeModel.find({}, { type: 1 });
    let getUserType = getTypes[0].type.filter(function (value) {
      return value.code === generatedCode;
    });

    let updateLoveType = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        {
          $set: { love_type: generatedCode, love_value: getUserType[0].value },
        }
      )
      .exec();
    if (updateLoveType.n === 1) {
      let { love_type, love_value } =
        (await user.findOne({ _id: id }).lean().exec()) || [];

      res.status(200).json({
        status: 200,
        message: "Update successfully",
        data: {
          love_type,
          love_value,
          description: getTypes[0].type.description,
        },
      });
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

/**
 * @param {user_id}req
 * @param {*} res
 *
 */
exports.getUserProfile = async (req, res) => {
  try {
    let { user_id } = req.query;
    let userDetail =
      (await user
        .find({ _id: mongoose.Types.ObjectId(user_id) })
        .lean()
        .exec()) || [];
    userDetail.length > 0
      ? res
          .status(200)
          .json({ status: 200, message: "user detail", data: userDetail })
      : res
          .status(201)
          .json({ status: 201, message: "no detail found", data: userDetail });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message || "Something went wrong" });
  }
};

/**
 * @param {} req
 * @param {*} res
 */
exports.getNotifications = async (req, res) => {
  try {
    let { id } = req.user;
    console.log(id);
    let listNotifications =
      (await user
        .find(
          { _id: mongoose.Types.ObjectId(id) },
          {
            notification_detail: 1,
            _id: 0,
          }
        )
        .populate({
          path: "notification_detail.from",
          select: { name: 1, age: 1, images: 1 },
        })) || [];
    if (listNotifications.length > 0) {
      res.status(200).json({
        status: 200,
        message: "Questions List",
        data: listNotifications,
      });
    } else {
      res.status(201).json({ status: 201, message: "No list found", data: [] });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message || "Something went wrong",
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.deleteUserAccount = async (req, res) => {
  try {
    const { id } = req.user;
    const deleteUser = user.remove({ _id: mongoose.Types.ObjectId(id) });
    if (deleteUser) {
      res.status(200).json({ status: 200, message: "User has been removed." });
    } else {
      res.status(500).json({ status: 500, message: "Something went wrong" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: error.message || "Something went wrong" });
  }
};

let findUserAndSendNotification = async (userId, fromUserId) => {
  let deviceTokensAndType = [];
  let getUser =
    (await user
      .find({ _id: mongoose.Types.ObjectId(userId) })
      .lean()
      .exec()) || [];
  console.log("lenght of users", getUser.length);

  for (let userIndex = 0; userIndex < getUser.length; userIndex++) {
    deviceTokensAndType.push({
      id: getUser[userIndex]._id,
      token: getUser[userIndex].device_token,
      type: getUser[userIndex].device_type,
      notificationType: globalConstants.matchNotificationTypeName,
    });
  }

  if (deviceTokensAndType.length > 0) {
    let { userMatchMessage, userMatchTitle } = notificationText.messages;

    await notificationService.setNotification(
      userMatchMessage,
      userMatchTitle,
      deviceTokensAndType,
      fromUserId
    );
  }
};

let setUserMatched = async (userId, matchedId) => {
  try {
    let updateUser = await user
      .updateOne(
        { _id: mongoose.Types.ObjectId(userId) },
        {
          $push: {
            matched_with: {
              matched_user_id: mongoose.Types.ObjectId(matchedId),
            },
          },
        }
      )
      .exec();
    if (updateUser.n === 1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};
