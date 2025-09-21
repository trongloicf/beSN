const Sanpham = require("../models/sanpham.model");

module.exports = {
  getAll: (req, res) => {
    Sanpham.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Sanpham.getById(id, (err, result) => { 
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!result) {
        res.status(404).json({ error: "Không tìm thấy sản phẩm với ID này" });
      } else {
        res.json(result);
      }
    });
  },

  insert: (req, res) => {
    const data = req.body;
    Sanpham.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Sanpham.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Sanpham.delete(id, (result) => { res.send(result); });
  },

};
