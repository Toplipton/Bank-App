exports.resolveAccount = async (req, res) => {
  try {
    const { accountNumber } = req.params;

    const user = await User.findOne({ accountNumber }).select("fullName accountNumber");

    if (!user) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json({
      fullName: user.fullName,
      accountNumber: user.accountNumber,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
