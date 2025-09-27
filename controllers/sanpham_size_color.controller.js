const Sanpham_size_color = require("../models/sanpham_size_color.model");

module.exports = {
  getAll: (req, res) => {
    Sanpham_size_color.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Sanpham_size_color.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Sanpham_size_color.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Sanpham_size_color.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Sanpham_size_color.delete(id, (result) => { res.send(result); });
  },

};
