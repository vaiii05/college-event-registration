const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  approved: { type: Boolean, default: false },
})

module.exports = mongoose.model("Event", eventSchema)

