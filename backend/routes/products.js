const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Get all products
router.get("/", async function (req, res, next) {
  try {
    const products = await Product.getAll();
    return res.json({ products })
  }

  catch (err) {
    return next(err);
  }
});

// Check promo code
router.post("/promo", async function (req, res, next) {
  try {
    console.log(req.body);
    const promotion = await Product.checkPromo(req.body);
    console.log(promotion);
    return res.json({ promotion });
  }
  catch (err) {
    return next(err);
  }
})

module.exports = router;