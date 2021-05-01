const { firebaseConfig } = require("../firebase/admin");

exports.sendAndroid = (message = "", title = "", token) => {
  return new Promise((resolve, reject) => {
    try {
      const registrationToken = token;

      var message = {
        notification: {
          title: title,
          body: message,
        },
        token: registrationToken,
      };
 
      firebaseConfig
        .messaging()
        .send(message)
        .then((response) => {
          resolve("Notification sent successfully");
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
