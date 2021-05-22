const user = require("../models/user");
const mongoose = require("mongoose");
const { notifications, globalConstants } = require("../utilities");

/******* Notifications ***/
let setNotification = async (
  message = "",
  title = "",
  deviceToken = [],
  from = "",
  notificationPayload
) => {
  return new Promise((resolve, reject) => {
    try {
      for (
        let deviceTokenIndex = 0;
        deviceTokenIndex < deviceToken.length;
        deviceTokenIndex++
      ) {
        if (
          deviceToken[deviceTokenIndex]["type"] === globalConstants.typeAndroid
        ) {
          sendNotification(
            message,
            title,
            deviceToken,
            deviceTokenIndex,
            notificationPayload
          )
            .then((isSend) => {
              saveNotification(
                message,
                title,
                deviceToken,
                deviceTokenIndex,
                from,
                notificationPayload
              )
                .then((isSave) => {
                  console.log(isSave);
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.error(error));
        }
      }
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

let sendNotification = async (
  message,
  title,
  deviceToken,
  deviceTokenIndex,
  notificationPayload
) => {
  try {
    let body = {
      type: deviceToken[deviceTokenIndex]["type"],
      data: notificationPayload,
    };
    await notifications.sendAndroid(
      body,
      title,
      deviceToken[deviceTokenIndex]["token"]
    );
  } catch (error) {
    console.error(error);
  }
};

let saveNotification = async (
  message,
  title,
  deviceToken,
  deviceTokenIndex,
  from
) => {
  return new Promise((resolve, reject) => {
    try {
      let updatePayload = {
        from: mongoose.Types.ObjectId(from),
        notification_type: deviceToken[deviceTokenIndex]["notificationType"],
        notification_title: title,
        notification_message: message,
      };
      user
        .updateOne(
          { _id: mongoose.Types.ObjectId(deviceToken[deviceTokenIndex]["id"]) },
          { $push: { notification_detail: updatePayload } }
        )
        .then((updateUser) => {
          if (updateUser.n === 1) {
            resolve(true);
          }
        })
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

exports.notificationService = { setNotification };
