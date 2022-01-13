var express = require('express');
var router = express.Router();
let designersCtrl = require('../controllers/designers');

router.get('/', designersCtrl.viewDesigners);

module.exports = router;
