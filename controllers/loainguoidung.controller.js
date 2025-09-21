const Loainguoidung = require("../models/loainguoidung.model");

module.exports = {
  getAll: (req, res) => {
    Loainguoidung.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Loainguoidung.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Loainguoidung.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Loainguoidung.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Loainguoidung.delete(id, (result) => { res.send(result); });
  },

};
