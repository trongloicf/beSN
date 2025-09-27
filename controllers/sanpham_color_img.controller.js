const Sanpham_color_img = require("../models/sanpham_color_img.model");

module.exports = {
  getAll: (req, res) => {
    Sanpham_color_img.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Sanpham_color_img.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Sanpham_color_img.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Sanpham_color_img.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Sanpham_color_img.delete(id, (result) => { res.send(result); });
  },

};
