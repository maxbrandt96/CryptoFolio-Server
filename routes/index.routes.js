const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
// Import controllers
const portfolioController = require("../routes/portfolio.controller");

// Define routes
router.get("/:userId/portfolio", portfolioController.getPortfolio);

module.exports = router;