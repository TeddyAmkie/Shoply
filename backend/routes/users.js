// User Routes

const express = require("express");
const router = express.Router();

// Create middleware for authentication

const User = require("../models/user");
// use json schema to validate

// create token



// GET user / 

router.get("/", async function(req, res, next) {
  try {
    const users = await User.findAll();
    return res.json({users});
  }

  catch(err) {
    return next(err);
  }
})

module.exports = router;