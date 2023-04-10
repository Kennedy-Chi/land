const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  name: String,
  currencyId: String,
  username: String,
  balance: Number,
  userId: String,
  walletAddress: String,
  symbol: String,
  time: Number,
});

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;
