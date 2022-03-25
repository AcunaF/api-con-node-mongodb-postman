
var express = require ('express');
var ProjectController = require('../controller/project');

var router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-Project', ProjectController.saveProject);

Module.exports = router;