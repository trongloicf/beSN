const Sanphamkhuyenmai = require("../models/sanphamkhuyenmai.model");

module.exports = {
  getAll: (req, res) => {
    Sanphamkhuyenmai.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Sanphamkhuyenmai.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Sanphamkhuyenmai.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Sanphamkhuyenmai.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Sanphamkhuyenmai.delete(id, (result) => { res.send(result); });
  },

};
