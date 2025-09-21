var express = require('express');
var router = express.Router();
const XuatxuController = require("../controllers/xuatxu.controller");

/* GET all records */
router.get('/', XuatxuController.getAll);
/* GET record by ID */
router.get('/:id', XuatxuController.getById);
/* INSERT a new record */
router.post('/', XuatxuController.insert);
/* UPDATE an existing record */
router.put('/:id', XuatxuController.update);
/* DELETE a record */
router.delete('/:id', XuatxuController.delete);

module.exports = router;
