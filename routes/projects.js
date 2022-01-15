var express = require('express');
var router = express.Router();
let projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.viewProjects);
router.delete('/:id', projectsCtrl.delete);

module.exports = router;
