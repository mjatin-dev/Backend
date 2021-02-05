const { user } = require("../models/");
const { sigin } = require("../auth/");
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { get } = require("../routes/user");

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
            res.status(400).json({
                status: 400,
                message: "Email already exists!"

            })
        }
        else {
            res.status(200).json({
                status: 200,
                message: "Email address is unqiue!"

            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Something went wrong!!"

        })
    }
}

/**
 * 
 * @param {name, email, password, gender, about_me, your_status, device_type, device_token} req 
 * @param {*} res 
 */
exports.create_standard_user = async (req, res) => {
    try {
        let { name, email, password, gender, about_me, your_status, device_type, device_token } = req.body;

        let get_email = await user.find({ email });
        if (get_email.length > 0) {
            res.status(400).json({
                status: 400,
                message: "Email already exists!"

            })
        }
        else {
            let new_user_instance = new user({
                name, email, password: bcrypt.hashSync(password, 10),
                gender, about_me, your_status, device_type, device_token
            });
            let create_user = await new_user_instance.save();
            if (create_user) {

                let checkuser_exists_or_not = await user.find({ _id: create_user._id }).lean().exec();
                let token = sigin(checkuser_exists_or_not[0]._id);
                checkuser_exists_or_not[0].token = token;

                res.status(200).json({
                    status: 200,
                    message: "User has been created!",
                    data: checkuser_exists_or_not
                })
            }
            else {
                res.status(500).json({
                    status: 500,
                    message: "Something went wrong!"

                })
            }
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || "Interal server error!"
        })
    }
}

/**
 * 
 * @param {email, password} req 
 * @param {*} res 
 */
exports.standard_login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let get_detail = await user.find({ email: email }).lean().exec();
        if (get_detail) {
            if (!get_detail || !bcrypt.compareSync(password, get_detail[0].password)) {
                res.status(400).json({
                    status: 400,
                    message: "Invalid credentials!!"

                })
            }
            else {
                let token = sigin(get_detail[0]._id);
                get_detail[0].token = token;

                res.status(200).json({
                    status: 200,
                    message: "Login Successfully",
                    data: get_detail
                })
            }
        }
        else {
            res.status(400).json({
                status: 400,
                message: "Invalid credentials!!"

            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || "Interal server error!!"
        })
    }
}

/**
 * 
 * @param {email, password} req 
 * @param {*} res 
 */
exports.social_signup = async (req, res) => {
    try {
        let { name, email, password, gender, about_me, your_status, device_type, device_token, social_id } = req.body
        let checkuser_exists_or_not = await user.find({ social_id: social_id }).lean().exec();

        if (checkuser_exists_or_not) {
            let token = sigin(checkuser_exists_or_not[0]._id);
            checkuser_exists_or_not[0].token = token;

            res.status(400).json({ status: 400, message: "User already exists", data: checkuser_exists_or_not })
        }
        else {
            let new_user_instance = new user({
                name, email, password: bcrypt.hashSync(password, 10),
                gender, about_me, your_status, device_type, device_token, social_id
            });
            let create_user = await new_user_instance.save();

            if (create_user) {

                let checkuser_exists_or_not = await user.find({ _id: create_user._id }).lean().exec();
                let token = sigin(checkuser_exists_or_not[0]._id);
                checkuser_exists_or_not[0].token = token;

                res.status(200).json({
                    status: 200,
                    message: "User has been created!",
                    data: checkuser_exists_or_not
                })
            }
            else {
                res.status(500).json({
                    status: 500,
                    message: "Something went wrong!"

                })
            }
        }

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || "Interal server error!!"
        })
    }
}

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
        coordinates: [latitude, longitude]
    }
    console.log(location, mongoose.Types.ObjectId(id));

    let update_location = await user.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { location: location } }).exec();
    console.log(update_location);
    if (update_location.n === 1) {
        let get_user = await user.find({ _id: id }).lean().exec() || [];
        res.status(200).json({ status: 200, message: "Update successfully", data: get_user });
    }
    else {
        res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
    }
}