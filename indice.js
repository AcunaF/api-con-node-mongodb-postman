var mongoose = require('mongoose');//CARGAR MODULO (OBJETO)
var appi= require('./app');
var port = 3700;


mongoose.Promise =global.Promise;// CONEXCION A LA BASE DE DATOS CON UNA PROMESA
mongoose.connect('mongodb://0.0.0.0:27017/portafolio')//URL BASE DE DATOS
        .then(() => {                                 //COMPRUEBA SI NOS CONECTAMOS A LA BASE DE DATOS, SOLO SE EJECUTA SI LA CONEXION ES OK
            console.log("conexcion establecida");

            //conexion al servidor

            appi.listen(port,() => {      
                console.log("el servidor corriendo perfectamente en laurl :localhots 3700");
            });
        })
        .catch(err=> console.log("err"))              //CAPTURA EL ERROR 

// ejecutar en consola npm start        
// en el browser localhost/3700