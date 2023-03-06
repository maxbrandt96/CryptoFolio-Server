const express = require("express");
const router = express.Router();

// TODO: Import portfolio controller to handle requests
const portfolioController = require("../routes/portfolio.controller");

router.get("/:userId/portfolio", portfolioController.getPortfolio);

router.post("/:userId/portfolio", portfolioController.savePortfolio);

module.exports = router;
