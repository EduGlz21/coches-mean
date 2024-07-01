const express = require("express");
const cocheRouter = express.Router();

//declaramos un objeto de nuestro modelo
let coche=require('../models/Coche')

//agregar un nuevo coche
cocheRouter.route('/agregar').post((req,res)=>{
    coche.create(req.body)
    .then((data)=>{
        console.log('Se inserto un documento')
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//obtener todos los coches de la base de datos 
cocheRouter.route('/coches').get((req,res)=>{
    coche.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//Eliminar un coche 
cocheRouter.route('/eliminar/:id').delete((req,res)=>{
    coche.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log('Se elimino correctamente')
        res.send(data)
    })
    .catch((eror)=>{
        console.error(error)
    })
})

//obtenemos un solo empleado por su id
cocheRouter.route('/coche/:id').get((req,res)=>{
    coche.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
    })
    
    //actualizar coche
    cocheRouter.route('/actualizar/:id').put((req,res)=>{
        coche.findByIdAndUpdate(req.params.id,{
            $set: req.body
        })
        .then((data)=>{
            console.log('Se actualizo el documento')
            res.send(data)
        })
        .catch((error)=>{
            console.error(error)
        })
    })
    

module.exports= cocheRouter;
