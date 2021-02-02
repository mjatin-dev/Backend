const { user } = require("../models/");
const bcrypt = require('bcryptjs');
const { user_created, something_wrong, internal_server_error,
    already_exist, email_unique } = require("../response/response");


exports.check_email = async (req, res) => {
    try {

        let { email } = req.body;
        let get_email = await user.find({ email });
        if (get_email.length > 0) {
            res.send(already_exist())
        }
        else {
            res.send(email_unique())
        }
    } catch (error) {
        res.send(internal_server_error(error))
    }
}
exports.create_standard_user = async (req, res) => {
    try {
        let { name, email, password, gender, about_me, your_status } = req.body;
        let new_user_instance = new user({ name, email, password: bcrypt.hashSync(password, 10), gender, about_me, your_status });
        let create_user = await new_user_instance.save();
        if (create_user) {
            res.send(user_created(create_user))
        }
        else {
            res.send(something_wrong())
        }
    } catch (error) {
        res.send(internal_server_error(error))
    }
}

