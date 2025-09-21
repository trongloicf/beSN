var express = require('express');
var router = express.Router();
const KhuyenmaiController = require("../controllers/khuyenmai.controller");

/* GET all records */
router.get('/', KhuyenmaiController.getAll);
/* GET record by ID */
router.get('/:id', KhuyenmaiController.getById);
/* INSERT a new record */
router.post('/', KhuyenmaiController.insert);
/* UPDATE an existing record */
router.put('/:id', KhuyenmaiController.update);
/* DELETE a record */
router.delete('/:id', KhuyenmaiController.delete);

module.exports = router;
