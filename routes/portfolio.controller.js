// TODO: Import database models to access portfolio data
const Portfolio = require("../models/Portfolio.model.js");

exports.getPortfolio = async (req, res) => {
  const userId = req.params.userId;

  try {
    const portfolioData = await Portfolio.findOne({ userId });

    res.json(portfolioData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.savePortfolio = async (req, res) => {
  const userId = req.params.userId;
  const newPortfolioData = req.body.portfolio;

  try {
    // Retrieve existing portfolio data for user with ID userId
    let portfolioData = await Portfolio.findOne({ userId });

    if (!portfolioData) {
      // If no existing portfolio data, create a new document
      portfolioData = new Portfolio({
        userId,
        portfolio: newPortfolioData,
      });
    } else {
      // Merge existing portfolio data with new data
      portfolioData.portfolio = Object.assign(
        portfolioData.portfolio,
        newPortfolioData
      );
    }

    // Save the updated portfolio data
    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { userId },
      { $set: portfolioData },
      { new: true, upsert: true }
    );

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};