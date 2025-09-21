const Chatlieu = require("../models/chatlieu.model");

module.exports = {
  getAll: (req, res) => {
    Chatlieu.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Chatlieu.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Chatlieu.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Chatlieu.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Chatlieu.delete(id, (result) => { res.send(result); });
  },

};
