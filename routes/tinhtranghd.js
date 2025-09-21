var express = require('express');
var router = express.Router();
const TinhtranghdController = require("../controllers/tinhtranghd.controller");

/* GET all records */
router.get('/', TinhtranghdController.getAll);
/* GET record by ID */
router.get('/:id', TinhtranghdController.getById);
/* INSERT a new record */
router.post('/', TinhtranghdController.insert);
/* UPDATE an existing record */
router.put('/:id', TinhtranghdController.update);
/* DELETE a record */
router.delete('/:id', TinhtranghdController.delete);

module.exports = router;
