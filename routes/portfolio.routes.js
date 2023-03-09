const express = require("express");
const router = express.Router();

const portfolioController = require("../routes/portfolio.controller");

// Get portfolio for a user
router.get("/:userId/portfolio", portfolioController.getPortfolio);

// Save portfolio for a user
router.post("/:userId/portfolio", portfolioController.savePortfolio);



module.exports = router;