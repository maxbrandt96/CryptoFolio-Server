// TODO: Import database models to access portfolio data
const Portfolio = require("../models/Portfolio.model.js");
const User = require("../models/User.model.js");

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
  const { userId } = req.params;
  const newPortfolioData = req.body.portfolio;

  try {
    // Retrieve existing portfolio data for user with ID userId
    let existingPortfolio = await Portfolio.findOne({ userId });

    if (!existingPortfolio) {
      // If no existing portfolio data, create a new document
      const newPortfolio = await Portfolio.create({
        userId,
        cryptos: newPortfolioData,
      });
      // Merge existing portfolio data with new data
      User.findByIdAndUpdate(userId, { $push: { portfolio: newPortfolio._id } });
    } else {
      // Merge existing portfolio data with new data
      const mergedData = { ...existingPortfolio.cryptos };

      // For each crypto in the new data, add the amount to the existing amount
      for (const [crypto, amount] of Object.entries(newPortfolioData)) {
        mergedData[crypto] = (mergedData[crypto] || 0) + amount;
      }

      existingPortfolio.cryptos = mergedData;

      // Save the updated portfolio data to the database
      await existingPortfolio.save();
    }

    res.json({ message: "Portfolio saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

