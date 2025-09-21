var express = require('express');
var router = express.Router();
const SanphamkhuyenmaiController = require("../controllers/sanphamkhuyenmai.controller");

/* GET all records */
router.get('/', SanphamkhuyenmaiController.getAll);
/* GET record by ID */
router.get('/:id', SanphamkhuyenmaiController.getById);
/* INSERT a new record */
router.post('/', SanphamkhuyenmaiController.insert);
/* UPDATE an existing record */
router.put('/:id', SanphamkhuyenmaiController.update);
/* DELETE a record */
router.delete('/:id', SanphamkhuyenmaiController.delete);

module.exports = router;
