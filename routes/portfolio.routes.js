const express = require("express");
const router = express.Router();

const portfolioController = require("../routes/portfolio.controller");

// Get portfolio for a user
router.get("/:userId/portfolio", portfolioController.getPortfolio);

// Save portfolio for a user
router.post("/:userId/portfolio", portfolioController.savePortfolio);

// Delete a specific crypto from a user's portfolio
router.delete("/:userId/portfolio/:coinId", portfolioController.deleteCrypto);

// Update a specific crypto in a user's portfolio
router.put("/:userId/portfolio/:coinId", portfolioController.editCoin);


module.exports = router;