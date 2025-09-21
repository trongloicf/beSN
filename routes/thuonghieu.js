var express = require('express');
var router = express.Router();
const ThuonghieuController = require("../controllers/thuonghieu.controller");

/* GET all records */
router.get('/', ThuonghieuController.getAll);
/* GET record by ID */
router.get('/:id', ThuonghieuController.getById);
/* INSERT a new record */
router.post('/', ThuonghieuController.insert);
/* UPDATE an existing record */
router.put('/:id', ThuonghieuController.update);
/* DELETE a record */
router.delete('/:id', ThuonghieuController.delete);

module.exports = router;
