const Thuonghieu = require("../models/thuonghieu.model");

module.exports = {
  getAll: (req, res) => {
    Thuonghieu.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Thuonghieu.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Thuonghieu.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Thuonghieu.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Thuonghieu.delete(id, (result) => { res.send(result); });
  },

};
