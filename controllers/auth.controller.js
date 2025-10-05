const jwt = require("jsonwebtoken");
const User = require("../models/users.model");

// Đăng ký (không băm mật khẩu)
exports.register = (req, res) => {
  const { name, email, password, loainguoidung_id } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Thiếu email hoặc mật khẩu" });
  }

  const newUser = {
    name,
    email,
    password, // ❌ không băm
    loainguoidung_id,
  };

  User.insert(newUser, (err, result) => {
    if (err) return res.status(500).json({ message: "Lỗi đăng ký", err });

    res.json({ message: "Đăng ký thành công", userId: result.insertId });
  });
};

// Đăng nhập
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.getAll((err, users) => {
    if (err) return res.status(500).json({ message: "Lỗi DB" });

    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) return res.status(401).json({ message: "Sai email hoặc mật khẩu" });

    // Tạo JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.loainguoidung_id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.json({ message: "Đăng nhập thành công", token });
  });
};