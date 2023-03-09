const mongoose = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    portfolio: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Portfolio'}],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
