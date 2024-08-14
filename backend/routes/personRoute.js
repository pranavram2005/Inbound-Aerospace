const express = require("express");
const router = express.Router();

const Person = require("./../models/people");
// post route to add a person
router.post("/post", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data
    const newPerson = new Person(data); // Create the new Person using the mongoose model
    const response = await newPerson.save(); // Save the new person to the database
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
