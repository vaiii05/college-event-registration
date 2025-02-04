const Registration = require("../models/Registration")

exports.registerForEvent = async (req, res) => {
  try {
    const { eventId } = req.body
    const registration = await Registration.create({ event: eventId, student: req.user.id })
    res.status(201).json(registration)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

exports.verifyAttendance = async (req, res) => {
  try {
    const registration = await Registration.findByIdAndUpdate(req.params.id, { attended: true }, { new: true })
    res.json(registration)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

