const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cryptos: {
    type: Object,
    required: true,
    default: {},
  },
  
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
