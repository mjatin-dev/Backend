const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  admin_id: { type: mongoose.ObjectId, ref: "admins" },
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

module.exports = mongoose.model("question", questionSchema);
