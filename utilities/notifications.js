
const { firebaseConfig } = require("../firebase/admin");

exports.sendAndroid = () => {
    return new Promise((resolve, reject) => {
        try {
            const registrationToken = "dn96nUAW6qs:APA91bEugEFIzCZxgR5V1yn4u0xk6xNkZ9nesAcp7m_rbwUrOomQlY0xMtzF_zSIwHmWjMl2-43yB8cTkxaOF7WtI1hIM_o9ce1TLLw_HWKzWMI2fIZ-QCXgkYW0sTqdCGSt2tHZGHA8";
            var message = {
                notification:{
                    title: "hello",
                    body: "hello"
                },
                token: registrationToken
              };

            firebaseConfig.messaging().send(message)
                .then(response => {
                    resolve("Notification sent successfully")
                })
                .catch(error => {
                    reject(error);
                });

        } catch (error) {
            reject(error);
        }
    })

}