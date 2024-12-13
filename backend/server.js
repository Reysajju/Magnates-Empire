// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());  // For parsing application/json

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example POST route for handling form submission
app.post("/register", (req, res) => {
  const { fullName, email, phone, stateProvince, country, captchaInput, agreeToTerms } = req.body;
  
  // Handle form submission logic here, e.g., store in database, validate captcha, etc.

  if (!fullName || !email || !phone || !captchaInput || !agreeToTerms) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Assuming captcha validation and other backend logic here
  res.status(200).json({ message: "Registration successful!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
