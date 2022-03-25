//configracion express y bodyparser
var express = require('express');
var bodyParser = require('body-parser');
var appi = express();

//cargar archivos rutas
var project_routes = require ('./routes/project');


//midlewares
appi.use(bodyParser.urlencoded({extended: false}));
appi.use(bodyParser.json());

//cors

//rutas


/*appi.post('/test/:id',(req, res) => {
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);

    res.status(200).send({
        message: " hola gentusa desde mi api de node"
    });
});

appi.get('/', (req, res) => {
    res.status(200).send(
     "<h1>pagina de inicio </h1>"
    );
});*/


appi.use('/api', project_routes);

//exportar
module.exports = appi;





