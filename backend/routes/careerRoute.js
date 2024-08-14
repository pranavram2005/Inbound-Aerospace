const express = require("express");
const router = express.Router();
const personInfo = require("../models/career"); // Assuming your form data model is in models/FormData.js

// Define the POST route to handle form submissions
router.post("/form", async (req, res) => {
  try {
    const data = req.body;
    const newpersonInfo = new personInfo(data);
    const savedFormData = await newpersonInfo.save();
    console.log("Data saved:", savedFormData);
    res.status(201).json(savedFormData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
