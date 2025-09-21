var express = require('express');
var router = express.Router();
const LoaisanphamController = require("../controllers/loaisanpham.controller");

/* GET all records */
router.get('/', LoaisanphamController.getAll);
/* GET record by ID */
router.get('/:id', LoaisanphamController.getById);
/* INSERT a new record */
router.post('/', LoaisanphamController.insert);
/* UPDATE an existing record */
router.put('/:id', LoaisanphamController.update);
/* DELETE a record */
router.delete('/:id', LoaisanphamController.delete);

module.exports = router;
