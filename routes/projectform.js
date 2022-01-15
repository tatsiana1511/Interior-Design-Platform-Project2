var express = require('express');
var router = express.Router();
let addProjectCtrl = require('../controllers/projectform');

router.get ('/', addProjectCtrl.projectForm);
router.post('/', addProjectCtrl.create);

module.exports = router;