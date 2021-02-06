const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prefSchema = new Schema({
  preferences: { type: String },
  date: { type: Date, default: Date.now },
  userID: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
  }
});

const Pref = mongoose.model("Pref", prefSchema);

module.exports = Pref;
