const Sanpham_size = require("../models/sanpham_size.model");

module.exports = {
  getAll: (req, res) => {
    Sanpham_size.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Sanpham_size.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Sanpham_size.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Sanpham_size.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Sanpham_size.delete(id, (result) => { res.send(result); });
  },

};
