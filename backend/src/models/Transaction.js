const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: ["deposit", "withdrawal", "transfer"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    fromAccount: {
      type: String,
    },

    toAccount: {
      type: String,
    },

    status: {
      type: String,
      enum: ["success", "failed"],
      default: "success",
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
