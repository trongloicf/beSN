const Loaisanpham = require("../models/loaisanpham.model");

module.exports = {
  getAll: (req, res) => {
    Loaisanpham.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Loaisanpham.getById(id, (err, result) => { 
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
    Loaisanpham.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Loaisanpham.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Loaisanpham.delete(id, (result) => { res.send(result); });
  },

};
