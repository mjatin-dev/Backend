const { user } = require("../models/");
const { sigin } = require("../auth/");
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { get } = require("../routes/user");
const moment = require("moment");
const { updateLocale } = require("moment");

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
        let { name, email, password, gender, date_of_birth, about_me, your_status, device_type, device_token } = req.body;

        let get_email = await user.find({ email });
        if (get_email.length > 0) {
            res.status(400).json({
                status: 400,
                message: "Email already exists!"

            })
        }
        else {
            let find_date = await _calculate_date(`'${date_of_birth}'`);
            let new_user_instance = new user({
                name, email, password: bcrypt.hashSync(password, 10),
                gender, date_of_birth: moment(date_of_birth, "MM-DD-YYYY"), age: find_date, about_me, your_status, device_type, device_token
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

        if (checkuser_exists_or_not.length > 0) {
            let token = sigin(checkuser_exists_or_not[0]._id);
            checkuser_exists_or_not[0].token = token;

            res.status(400).json({ status: 400, message: "User already exists", data: checkuser_exists_or_not })
        }
        else {
            let new_user_instance = new user({
                name, email,
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

/**
 * 
 * @param {new_password} req 
 * @param {*} res 
 */
exports.update_password = async (req, res) => {
    let { id } = req.user;
    let { new_password: password } = req.body;

    let update_password = await user.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { password: bcrypt.hashSync(password, 10) } }).exec();

    if (update_password.n === 1) {
        let get_user = await user.find({ _id: id }).lean().exec() || [];
        res.status(200).json({ status: 200, message: "Update successfully", data: get_user });
    }
    else {
        res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
    }
}

/**
 * 
 * @param {new_password} req 
 * @param {*} res 
 */
exports.update_notification = async (req, res) => {
    let { id } = req.user;
    let { notification_on } = req.body;

    let update_notification = await user.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { notification: notification_on } }).exec();

    if (update_notification.n === 1) {
        let get_user = await user.find({ _id: id }).lean().exec() || [];
        res.status(200).json({ status: 200, message: "Update successfully", data: get_user });
    }
    else {
        res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
    }
}


/**
 * 
 * @param {age,radius,interest,steps,image,status} req 
 * @param {*} res 
 */

exports.update_user = async (req, res) => {
    try {

        let { id } = req.user;
        let { age_range, insterted_in, radius_range, step, name, your_status, images, about_me } = req.body;
        let update_payload = {};
        if (step == 1) {
            update_payload = {
                age_range: age_range ? { min: age_range.min, max: age_range.max } : { min: 0, max: 0 },
                insterted_in: insterted_in || "None",
                radius_range: radius_range ? { min: radius_range.min, max: radius_range.max } : { min: 0, max: 0 }
            }
        }
        else {
            for (const key in req.body) {
                console.log(key)
                update_payload[key] = req.body[key]
            }

        }

        console.log(update_payload);

        let update_user = await user.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: update_payload }).exec();

        if (update_user.n === 1) {
            let get_user = await user.find({ _id: id }).lean().exec() || [];
            res.status(200).json({ status: 200, message: "Update successfully", data: get_user });
        }
        else {
            res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
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
 * @param {member_id} req 
 * @param {*} res 
 */
exports.like_user = async (req, res) => {
    try {
        let { id } = req.user;
        let { member_id } = req.body;

        let update_notification = await user.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { liked_members: mongoose.Types.ObjectId(member_id) } }).exec();

        if (update_notification.n === 1) {
            let get_user = await user.find({ _id: id }).lean().exec() || [];
            res.status(200).json({ status: 200, message: "Update successfully", data: get_user });
        }
        else {
            res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
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
 * @param {member_id} req 
 * @param {*} res 
 */
exports.dislike_user = async (req, res) => {
    try {
        let { id } = req.user;
        let { member_id } = req.body;

        let update_notification = await user.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { disliked_members: mongoose.Types.ObjectId(member_id) } }).exec();

        if (update_notification.n === 1) {
            let get_user = await user.find({ _id: id }).lean().exec() || [];
            res.status(200).json({ status: 200, message: "Update successfully", data: get_user });
        }
        else {
            res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
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
 * @param {member_id} req 
 * @param {*} res 
 */
exports.block_user = async (req, res) => {
    try {
        let { id } = req.user;
        let { member_id } = req.body;

        let update_notification = await user.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { blocked_users: mongoose.Types.ObjectId(member_id) } }).exec();

        if (update_notification.n === 1) {
            let get_user = await user.find({ _id: id }).lean().exec() || [];
            res.status(200).json({ status: 200, message: "Update successfully", data: get_user });
        }
        else {
            res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
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
 * @param {reported_by,reported_to,reason} req 
 * @param {*} res 
 */
exports.report_user = async (req, res) => {
    try {
        let { id } = req.user;
        let { reported_by_user_id, reason } = req.body;
        let payload = {
            reported_by_user_id: mongoose.Types.ObjectId(reported_by_user_id), reason
        }
        let update_notification = await user.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { reported_by: payload } }).exec();

        if (update_notification.n === 1) {
            let get_user = await user.find({ _id: id }).lean().exec() || [];
            res.status(200).json({ status: 200, message: "Update successfully", data: get_user });
        }
        else {
            res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
        }

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || "Interal server error!!"
        })
    }
}


const _calculate_date = (date) => {
    return new Promise((resolve, reject) => {
        try {
            var dob = new Date(date);
            //calculate month difference from current date in time  
            var month_diff = Date.now() - dob.getTime();

            //convert the calculated difference in date format  
            var age_dt = new Date(month_diff);

            //extract year from date      
            var year = age_dt.getUTCFullYear();

            //now calculate the age of the user  
            var age = Math.abs(year - 1970);
            resolve(age);

        } catch (error) {
            reject(error)
        }

    })


}