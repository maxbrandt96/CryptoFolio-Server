const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  portfolio: {
    type: Object,
    required: true,
    default: {},
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
