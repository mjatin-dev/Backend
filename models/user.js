const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    about_me: { type: String, default: "" },
    your_status: { type: String, default: "" },
    gender: { type: String, default: "" },
    date_of_birth: { type: Date, default: Date.now() },
    age: { type: Number, default: 0 },
    age_range: {
        type: [{
            min: { type: Number },
            max: { type: Number }
        }],
        default: []
    },
    insterted_in: { type: String, enum: ['Men', 'Women', 'Both','None'], default: "None" },
    radius_range: { type: Number, default: 0 },
    liked_members: {
        type: [{
            liked_on: { type: Date, default: Date.now() },
            liked_user_id: { type: mongoose.ObjectId, ref: "users" }
        }],
        default: []
    },
    disliked_members: {
        type: [{
            disliked_on: { type: Date, default: Date.now() },
            disliked_user_id: { type: mongoose.ObjectId, ref: "users" }
        }],
        default: []
    },
    reported_by: {
        type: [{
            reported_on: { type: Date, default: Date.now() },
            reason: { type: String, default: "" },
            reported_by_user_id: { type: mongoose.ObjectId, ref: "users" }
        }],
        default: []
    },
    blocked_users: {
        type: [{
            blocked_on: { type: Date, default: Date.now() },
            blocked_by_user_id: { type: mongoose.ObjectId, ref: "users" }
        }],
        default: []
    },
    images: { type: Array, default: [] },
    type: { type: String, default: "standard" },
    social_id: { type: String, default: "" },
    device_type: { type: String, default: "" },
    device_token: { type: String, default: "" },
    location: {
        type: { type: String, enum: "Point", default: "Point" },
        coordinates: { type: [Number] }
    },
    notification_on: { type: Number, default: 1 },
    create_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('user', userSchema)