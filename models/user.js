const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    about_me: { type: String, default: "" },
    your_status: { type: String, default: "" },
    gender: { type: String, require: true },
    images: { type: Array },
    type: { type: String, default: "standard" },
    create_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('user', userSchema)