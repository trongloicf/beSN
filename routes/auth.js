const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifyToken } = require("../middlewares/middleware");

router.post("/register", authController.register);
router.post("/login", authController.login);

// test route cần token
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Profile OK", user: req.user });
});

module.exports = router;