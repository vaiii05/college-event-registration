const Event = require("../models/Event")

exports.createEvent = async (req, res) => {
  try {
    const { name, description, date } = req.body
    const event = await Event.create({ name, description, date, createdBy: req.user.id })
    res.status(201).json(event)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ approved: true })
    res.json(events)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

exports.approveEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, { approved: true }, { new: true })
    res.json(event)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

