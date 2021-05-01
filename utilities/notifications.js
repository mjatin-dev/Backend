const { firebaseConfig } = require("../firebase/admin");

exports.sendAndroid = (body = "", title = "", token) => {
  return new Promise((resolve, reject) => {
    try {
      const registrationToken = token;

      var message = {
        notification: {
          title: title,
          body: body,
        },
        token: registrationToken,
      };

      firebaseConfig
        .messaging()
        .send(message)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
