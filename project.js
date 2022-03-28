//un controlador es una clase que tiene una serie de metodos relacionados con el proyecto

const { send } = require("express/lib/response");
let Project = require("../Modelo/Project");

var controller ={

    home:function(req, res){
        return res.status(200).send({
                
        });

    },

    test: function (req, res){
        return res.status(200).send({

         message: 'soy el metodo test'
        });
    },

    save: function (req, res){

        let project = new Project();
        
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image=null;

        return res.status(200).send({
            params: params,
            message: 'soy el metodo save project'

        });


    }
};



module.exports = controller;