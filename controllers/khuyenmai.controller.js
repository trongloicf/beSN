const Khuyenmai = require("../models/khuyenmai.model");

module.exports = {
  getAll: (req, res) => {
    Khuyenmai.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Khuyenmai.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Khuyenmai.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Khuyenmai.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Khuyenmai.delete(id, (result) => { res.send(result); });
  },

};
