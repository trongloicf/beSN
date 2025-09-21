var express = require('express');
var router = express.Router();
const DonhangController = require("../controllers/donhang.controller");

/* GET all records */
router.get('/', DonhangController.getAll);
/* GET record by ID */
router.get('/:id', DonhangController.getById);
/* INSERT a new record */
router.post('/', DonhangController.insert);
/* UPDATE an existing record */
router.put('/:id', DonhangController.update);
/* DELETE a record */
router.delete('/:id', DonhangController.delete);

module.exports = router;
