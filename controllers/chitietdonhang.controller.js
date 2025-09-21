const Chitietdonhang = require("../models/chitietdonhang.model");

module.exports = {
  getAll: (req, res) => {
    Chitietdonhang.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Chitietdonhang.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Chitietdonhang.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Chitietdonhang.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Chitietdonhang.delete(id, (result) => { res.send(result); });
  },

};
