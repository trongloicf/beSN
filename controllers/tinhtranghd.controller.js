const Tinhtranghd = require("../models/tinhtranghd.model");

module.exports = {
  getAll: (req, res) => {
    Tinhtranghd.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Tinhtranghd.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Tinhtranghd.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Tinhtranghd.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Tinhtranghd.delete(id, (result) => { res.send(result); });
  },

};
