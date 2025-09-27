const Size = require("../models/size.model");

module.exports = {
  getAll: (req, res) => {
    Size.getAll((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Size.getById(id, (result) => { res.send(result); });
  },

  insert: (req, res) => {
    const data = req.body;
    Size.insert(data, (result) => { res.send(result); });
  },

  update: (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Size.update(data, id, (result) => { res.send(result); });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Size.delete(id, (result) => { res.send(result); });
  },

};
