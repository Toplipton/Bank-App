const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
  depositFunds,
  withdrawFunds,
  transferFunds,
  getMyTransactions,
} = require("../controllers/transactionController");

// Deposit money
router.post("/deposit", protect, depositFunds);

// Withdraw money
router.post("/withdraw", protect, withdrawFunds);

// Transfer money to another user
router.post("/transfer", protect, transferFunds);

// Get all transactions for logged-in user
router.get("/", protect, getMyTransactions);

module.exports = router;
