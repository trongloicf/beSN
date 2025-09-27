const Color = require("../models/color.model");

module.exports = {
  getAll: (req, res) => {
    Color.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Color.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Color.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Color.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Color.delete(id, (result) => { res.send(result); });
  },

};
