const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, default: "Admin" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  question_list: [
    {
      question: { type: String, default: "" },
      options: [
        {
          option_type: { type: String, default: "" },
          option_title: { type: String, default: "" },
        },
      ],
      create_at: { type: Date, default: Date.now() },
    },
  ],
  create_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("admin", adminSchema);
