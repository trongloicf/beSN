var express = require('express');
var router = express.Router();
const SanphamController = require("../controllers/sanpham.controller");

/* GET all records */
router.get('/', SanphamController.getAll);
/* GET record by ID */
router.get('/:id', SanphamController.getById);
/* INSERT a new record */
router.post('/', SanphamController.insert);
/* UPDATE an existing record */
router.put('/:id', SanphamController.update);
/* DELETE a record */
router.delete('/:id', SanphamController.delete);

module.exports = router;
