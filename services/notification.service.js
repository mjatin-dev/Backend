const user = require("../models/user");
const { notifications } = require("../utilities");

/******* Notifications ***/
let setNotification = async (deviceToken = [], title = "", message = "") => {
  return new Promise((resolve, reject) => {
    try {
      for (
        let deviceTokenIndex = 0;
        deviceTokenIndex < deviceToken.length;
        deviceTokenIndex++
      ) {
        if (
          deviceToken[deviceTokenIndex]["type"] ===
          globalConstants.constant.typeAndroid
        ) {
          sendNotification(message, title, deviceToken, deviceTokenIndex)
            .then((isSend) => {
              console.log(isSend);
              saveNotification(message, title, deviceToken, deviceTokenIndex)
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
  deviceTokenIndex
) => {
  try {
    let body = {
      type: deviceToken[deviceTokenIndex]["type"],
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
  deviceTokenIndex
) => {
  return new Promise((resolve, reject) => {
    try {
      let updatePayload = {
        notification_type: deviceToken[deviceTokenIndex]["notificationType"],
        notification_title: title,
        notification_message: message,
      };
      console.log(updatePayload);
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