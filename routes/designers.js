var express = require('express');
var router = express.Router();
let designersCtrl = require('../controllers/designers');
let projectsCtrl = require('../controllers/projects');

router.get('/', designersCtrl.viewDesigners);
router.get('/:id/projects', projectsCtrl.viewProjects);


module.exports = router;
