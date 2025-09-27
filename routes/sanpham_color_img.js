var express = require('express');
var router = express.Router();
const Sanpham_color_imgController = require("../controllers/sanpham_color_img.controller");

/* GET all records */
router.get('/', Sanpham_color_imgController.getAll);
/* GET record by ID */
router.get('/:id', Sanpham_color_imgController.getById);
/* INSERT a new record */
router.post('/', Sanpham_color_imgController.insert);
/* UPDATE an existing record */
router.put('/:id', Sanpham_color_imgController.update);
/* DELETE a record */
router.delete('/:id', Sanpham_color_imgController.delete);

module.exports = router;
