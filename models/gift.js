const mongoose = require("mongoose");

const giftSchema = new mongoose.Schema({
  name: { type: String, default: "Admin" },
  images: { type: Array, default: [] },
  create_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("gift", giftSchema);
