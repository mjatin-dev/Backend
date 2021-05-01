const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  type:[{
    code:{type:String,default:""},
    value:{type:String,default:""}  
  }],
  create_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("type", typeSchema);
