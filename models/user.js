const mongoose = require("mongoose");
const moment = require("moment-timezone");
const defaultTimeZone = moment.tz(Date.now(), "Asia/Kolkata");

const userSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  about_me: { type: String, default: "" },
  your_status: { type: String, default: "" },
  gender: { type: String, default: "" },
  date_of_birth: { type: String },
  age: { type: Number, default: 0 },
  age_range: {
    min: { type: Number },
    max: { type: Number },
  },
  insterted_in: {
    type: String,
    enum: ["Men", "Women", "Both", "None"],
    default: "None",
  },
  radius_range: {
    min: { type: Number },
    max: { type: Number },
  },
  liked_members: [
    {
      liked_on: { type: Date, default: Date.now() },
      liked_user_id: { type: mongoose.ObjectId, ref: "users" },
    },
  ],
  disliked_members: [
    {
      disliked_on: { type: Date, default: Date.now() },
      disliked_user_id: { type: mongoose.ObjectId, ref: "users" },
    },
  ],
  reported_by: [
    {
      reported_on: { type: Date, default: Date.now() },
      reason: { type: String, default: "" },
      reported_by_user_id: { type: mongoose.ObjectId, ref: "users" },
    },
  ],
  blocked_users: [
    {
      blocked_on: { type: Date, default: Date.now() },
      blocked_by_user_id: { type: mongoose.ObjectId, ref: "users" },
    },
  ],
  images: { type: Array, default: [] },
  profile_image: { type: String, default: "" },
  type: { type: String, default: "standard" },
  social_id: { type: String, default: "" },
  device_type: { type: String, default: "" },
  device_token: { type: String, default: "" },
  location: {
    type: { type: String, enum: "Point", default: "Point" },
    coordinates: { type: [Number] },
  },
  love_type: { type: String, default: "" },
  love_value: { type: String, default: "" },
  notification_on: { type: Number, default: 1 },
  notification_detail: [
    {
      notification_type: { type: String, default: "" },
      notification_title: { type: String, default: "" },
      notification_message: { type: String, default: "" },
      send_at: { type: Date, default: Date.now() },
    },
  ],
  create_at: { type: Date, default: defaultTimeZone },
});

module.exports = mongoose.model("user", userSchema);
