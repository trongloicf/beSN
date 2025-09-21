var express = require('express');
var router = express.Router();
const LoainguoidungController = require("../controllers/loainguoidung.controller");

/* GET all records */
router.get('/', LoainguoidungController.getAll);
/* GET record by ID */
router.get('/:id', LoainguoidungController.getById);
/* INSERT a new record */
router.post('/', LoainguoidungController.insert);
/* UPDATE an existing record */
router.put('/:id', LoainguoidungController.update);
/* DELETE a record */
router.delete('/:id', LoainguoidungController.delete);

module.exports = router;
