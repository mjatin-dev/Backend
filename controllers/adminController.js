const { admin, question } = require("../models/");
const { sigin } = require("../auth/");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

/**
 * 
 * @param {email,password} req 
 * @param {*} res 
 */
exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let admin_detail = await admin.find({ email }).lean();
        if (admin_detail.length > 0) {
            if (!bcrypt.compareSync(password, admin_detail[0].password)) {
                res.status(201).json({
                    status: 201,
                    message: "Invalid Credentials!"
                })
            }
            else {
                let token = sigin(admin_detail[0]._id);
                admin_detail[0].token = token ? token : '';
                res.status(200).json({
                    status: 200,
                    message: "Login Successfully",
                    data: admin_detail
                })
            }
        }
        else {
            res.status(200).json({
                status: 201,
                message: "Something Went Wrong"

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
 * @param {name, email, password} req 
 * @param {*} res 
 */
exports.signup = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        let get_email = await admin.find({ email });
        if (get_email.length > 0) {
            res.status(201).json({
                status: 201,
                message: "Email already exists!"

            })
        }
        else {
            let new_admin = new admin({
                name, email, password: bcrypt.hashSync(password, 10)

            });
            let create_admin = await new_admin.save();
            if (create_admin) {
                let checkuser_exists_or_not = await admin.find({ _id: create_admin._id }).lean().exec();
                let token = sigin(checkuser_exists_or_not[0]._id);
                checkuser_exists_or_not[0].token = token;

                res.status(200).json({
                    status: 200,
                    message: "Admin has been created!",
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
 * @param {question, option_list} req
 * @param {*} res
 */
exports.addquestion = async (req, res) => {
    try {
        let { question, option_list } = req.body;
        let { id } = req.user;
        let question_list = {
            question,
            options: option_list
        }
        let update = await admin.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $push: { question_list } });
        if (update.n === 1) {
            let get_data = await admin.find({ _id: mongoose.Types.ObjectId(id) }).lean().exec() || [];
            res.status(200).json({ status: 200, message: "Update successfully", data: get_data });
        }
        else {
            res.status(200).json({ status: 400, message: "Something went wrong", data: [] });
        }

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || "Interal server error!"
        })
    }
}
