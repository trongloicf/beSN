// server.js
const express = require("express");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware cho phép parse JSON
app.use(cors());
app.use(express.json());

// Routes
const productRoute = require('./routes/sanpham')
const userRoute = require('./routes/users')
const brandRoute = require('./routes/thuonghieu')
const materialRoute = require('./routes/chatlieu')
const originRoute = require('./routes/xuatxu')
const sizeRoute = require('./routes/size')
const cateRoute = require("./routes/loaisanpham")
const discountRoute = require('./routes/khuyenmai')
const authRoute = require("./routes/auth")


app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/brands', brandRoute)
app.use('/api/materials', materialRoute)
app.use('/api/origins', originRoute)
app.use('/api/cates', cateRoute)
app.use('/api/sizes', sizeRoute)
app.use('/api/discounts', discountRoute)
app.use("/api/auth", authRoute);


// Route demo
app.get("/", (req, res) => {
  res.send("Soccer Shop API is running...");
});


let PORT = process.env.PORT || 3000;
// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
