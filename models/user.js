const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    about_me: { type: String, default: "" },
    your_status: { type: String, default: "" },
    gender: { type: String, default: "" },
    images: { type: Array, default: [] },
    type: { type: String, default: "standard" },
    social_id: { type: String, default: "" },
    device_type: { type: String, default: "" },
    device_token: { type: String, default: "" },
    location: {
        type: { type: String, enum: "Point", default: "Point" },
        coordinates: { type: [Number] }
    },
    create_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('user', userSchema)