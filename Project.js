//modelos representa a un documento de la coleccion de la base de datos del

//importar mongoose que se encarga de trabajar con los modelos
var mongoose =require('mongoose');
//defino un esquema de un modelos
var Schema = mongoose.Schema;

var ProjectSchema = Schema({ 
    name: String,
    description: String,
    category: String,
    year: Number,
    langs:[String]
    
    });

module.sports = mongoose.model('Project',ProjectSchema);
//projects------>  guarda los elementos en la coleccion projets de mongodb

