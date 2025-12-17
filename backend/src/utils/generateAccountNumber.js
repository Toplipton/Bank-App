const User = require("../models/User");

const generateAccountNumber = async () => {
  let accountNumber;
  let exists = true;

  while (exists) {
    // Generate 10-digit number
    accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();

    // Check if it already exists
    const user = await User.findOne({ accountNumber });
    if (!user) exists = false;
  }

  return accountNumber;
};

module.exports = generateAccountNumber;
