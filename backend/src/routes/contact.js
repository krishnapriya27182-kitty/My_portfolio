const express = require("express");
const router = express.Router();

// POST /api/contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, message) are required.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email address." });
  }

  // Mock: log to console instead of storing
  console.log("[Contact Form Submission]", { name, email, message, timestamp: new Date().toISOString() });

  res.status(200).json({ success: true, message: "Message received. Thank you!" });
});

module.exports = router;
