const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    })

    res.json({ token, user: { id: user._id, username: user.username, role: user.role } })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body
    const user = await User.create({ username, password, role })
    res.status(201).json({ message: "User created successfully" })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

