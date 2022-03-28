//configuracion de rutas del controlador projections

var express = require('express');
var ProjectController = require('../Controladores/project');
var router = express.Router();

router.get('/home', ProjectController.home); //accedo al metodo home del archivo project de la carpeta controladores
router.post('/test', ProjectController.test); //accedo al metodo test del archivo project de la carpeta controladores
router.post('/save', ProjectController.save); //accedo al metodo test del archivo project de la carpeta controladores

module.exports = router;