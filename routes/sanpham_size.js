var express = require('express');
var router = express.Router();
const Sanpham_sizeController = require("../controllers/sanpham_size.controller");

/* GET all records */
router.get('/', Sanpham_sizeController.getAll);
/* GET record by ID */
router.get('/:id', Sanpham_sizeController.getById);
/* INSERT a new record */
router.post('/', Sanpham_sizeController.insert);
/* UPDATE an existing record */
router.put('/:id', Sanpham_sizeController.update);
/* DELETE a record */
router.delete('/:id', Sanpham_sizeController.delete);

module.exports = router;
