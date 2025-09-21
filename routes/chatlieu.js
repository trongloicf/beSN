var express = require('express');
var router = express.Router();
const ChatlieuController = require("../controllers/chatlieu.controller");

/* GET all records */
router.get('/', ChatlieuController.getAll);
/* GET record by ID */
router.get('/:id', ChatlieuController.getById);
/* INSERT a new record */
router.post('/', ChatlieuController.insert);
/* UPDATE an existing record */
router.put('/:id', ChatlieuController.update);
/* DELETE a record */
router.delete('/:id', ChatlieuController.delete);

module.exports = router;
