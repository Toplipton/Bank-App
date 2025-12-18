const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  resolveAccount,
} = require("../controllers/userController");


// User dashboard
router.get("/dashboard", protect, (req, res) => {
  res.json({
    message: "Welcome to your dashboard",
    user: req.user,
  });
});
router.get("/resolve/:accountNumber", protect, resolveAccount);


module.exports = router;
