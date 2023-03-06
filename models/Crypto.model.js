const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
    uppercase: true,
  },
  price: {
    type: Number,
    required: true,
  },
  marketCap: {
    type: Number,
    required: true,
  },
  volume24h: {
    type: Number,
    required: true,
  },
  circulatingSupply: {
    type: Number,
    required: true,
  },
  change24h: {
    type: Number,
    required: true,
  },
});

const Crypto = mongoose.model("Crypto", cryptoSchema);

module.exports = Crypto;