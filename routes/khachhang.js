var express = require('express');
var router = express.Router();
const KhachhangController = require("../controllers/khachhang.controller");

/* GET all records */
router.get('/', KhachhangController.getAll);
/* GET record by ID */
router.get('/:id', KhachhangController.getById);
/* INSERT a new record */
router.post('/', KhachhangController.insert);
/* UPDATE an existing record */
router.put('/:id', KhachhangController.update);
/* DELETE a record */
router.delete('/:id', KhachhangController.delete);

module.exports = router;
