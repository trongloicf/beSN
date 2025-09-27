var express = require('express');
var router = express.Router();
const Sanpham_size_colorController = require("../controllers/sanpham_size_color.controller");

/* GET all records */
router.get('/', Sanpham_size_colorController.getAll);
/* GET record by ID */
router.get('/:id', Sanpham_size_colorController.getById);
/* INSERT a new record */
router.post('/', Sanpham_size_colorController.insert);
/* UPDATE an existing record */
router.put('/:id', Sanpham_size_colorController.update);
/* DELETE a record */
router.delete('/:id', Sanpham_size_colorController.delete);

module.exports = router;
