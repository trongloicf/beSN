var express = require('express');
var router = express.Router();
const SizeController = require("../controllers/size.controller");

/* GET all records */
router.get('/', SizeController.getAll);
/* GET record by ID */
router.get('/:id', SizeController.getById);
/* INSERT a new record */
router.post('/', SizeController.insert);
/* UPDATE an existing record */
router.put('/:id', SizeController.update);
/* DELETE a record */
router.delete('/:id', SizeController.delete);

module.exports = router;
