//configracion express y bodyparser
var express = require('express');//cargo modulo express
var bodyParser = require('body-parser');//cargo modulo bodyparser
var app = express();//ejecutamos express

//cargar archivos rutas
var project_routes = require('./Rutas/project');


//midlewares  una capa o metodo que se ejecuta antes de la accion del controlador, config para bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());             // todo lo que llega lo convierte en jason, peticion por el body

//cors

//rutas se crea una ruta por cada uno de los controladores
app.use('/api',project_routes)
//REQ son los datos que yo le envio dese el cliente o la peticion que le haga y la RES es la respuesta que voy a enviar















//exportar
module.exports = app; 

/*app.post('/api/test/:id',(req, res) => {   
    
    console.log(req.body);              // para hacer una busqueda mas detallada se puede poner "." y el elemento ej: .nombre
    console.log(req.params);
    console.log(req.query);
       
    res.status(200).send({             // status(200) respuesta exitosa del servidor  
        message: " Por POST" 
    });
});

app.get('/api', (req, res) => {
    res.status(200).send(
        "<h1> Por GET </h1>"   //localhost:3700 
        
    );
});

app.put('/api', (req, res) => {
    res.status(200).send(
        "<h1> Por PUT </h1>"  
        
    );
});
app.delete('/api', (req, res) => { });*/
   







