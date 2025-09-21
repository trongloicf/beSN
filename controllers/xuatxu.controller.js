const Xuatxu = require("../models/xuatxu.model");

module.exports = {
  getAll: (req, res) => {
    Xuatxu.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Xuatxu.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Xuatxu.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Xuatxu.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Xuatxu.delete(id, (result) => { res.send(result); });
  },

};
