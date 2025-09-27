var express = require('express');
var router = express.Router();
const ColorController = require("../controllers/color.controller");

/* GET all records */
router.get('/', ColorController.getAll);
/* GET record by ID */
router.get('/:id', ColorController.getById);
/* INSERT a new record */
router.post('/', ColorController.insert);
/* UPDATE an existing record */
router.put('/:id', ColorController.update);
/* DELETE a record */
router.delete('/:id', ColorController.delete);

module.exports = router;
