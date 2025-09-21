var express = require('express');
var router = express.Router();
const ChitietdonhangController = require("../controllers/chitietdonhang.controller");

/* GET all records */
router.get('/', ChitietdonhangController.getAll);
/* GET record by ID */
router.get('/:id', ChitietdonhangController.getById);
/* INSERT a new record */
router.post('/', ChitietdonhangController.insert);
/* UPDATE an existing record */
router.put('/:id', ChitietdonhangController.update);
/* DELETE a record */
router.delete('/:id', ChitietdonhangController.delete);

module.exports = router;
