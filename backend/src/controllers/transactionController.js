const User = require("../models/User");
const Transaction = require("../models/Transaction");

// WITHDRAW FUNDS

exports.withdrawFunds = async (req, res) => {
  try {
    const { amount } = req.body;
    const user = req.user;

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    // Check balance
    if (user.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Deduct balance
    user.balance -= amount;
    await user.save();

    // Save transaction
    const transaction = await Transaction.create({
      user: user._id,
      type: "withdrawal",
      amount,
      fromAccount: user.accountNumber,
      status: "success",
      description: "Withdrawal successful",
    });

    res.json({
      message: "Withdrawal successful",
      balance: user.balance,
      transaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// DEPOSIT FUNDS
exports.depositFunds = async (req, res) => {
  try {
    const { amount } = req.body;
    const user = req.user;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    // Add balance
    user.balance += amount;
    await user.save();

    // Record transaction
    const transaction = await Transaction.create({
      user: user._id,
      type: "deposit",
      amount,
      toAccount: user.accountNumber,
      status: "success",
      description: "Account funded",
    });

    res.json({
      message: "Deposit successful",
      balance: user.balance,
      transaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// TRANSFER FUNDS
exports.transferFunds = async (req, res) => {
  try {
    const { toAccountNumber, amount } = req.body;
    const sender = req.user;

    if (!toAccountNumber || !amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid transfer data" });
    }

    if (sender.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const receiver = await User.findOne({ accountNumber: toAccountNumber });

    if (!receiver) {
      return res.status(404).json({ message: "Recipient not found" });
    }

    // Perform transfer
    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    // Record transaction
    const transaction = await Transaction.create({
      user: sender._id,
      type: "transfer",
      amount,
      fromAccount: sender.accountNumber,
      toAccount: receiver.accountNumber,
      status: "success",
      description: "Transfer successful",
    });

    res.json({
      message: "Transfer successful",
      balance: sender.balance,
      transaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET USER TRANSACTIONS
exports.getMyTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
