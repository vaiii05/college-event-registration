const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  attended: { type: Boolean, default: false },
})

module.exports = mongoose.model("Registration", registrationSchema)

