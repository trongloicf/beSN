// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware cho phép parse JSON
app.use(cors());
app.use(express.json());

// Routes
const productRoute = require('./routes/sanpham')
const userRoute = require('./routes/users')
const brandRoute = require('./routes/thuonghieu')
const materialRoute = require('./routes/chatlieu')
const originRoute = require('./routes/xuatxu')
const productSizeRoute = require('./routes/sanpham_size')
const cateRoute = require("./routes/loaisanpham")


app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/brands', brandRoute)
app.use('/api/materials', materialRoute)
app.use('/api/origins', originRoute)
app.use('/api/productSizes', productSizeRoute)
app.use('/api/cates', cateRoute)


// Route demo
app.get("/", (req, res) => {
  res.send("Soccer Shop API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
