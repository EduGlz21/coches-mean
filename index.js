const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//conexion con la base de datos 
mongoose
//.connect('mongodb://127.0.0.1:27017/coches')
.connect('mongodb+srv://EduGlz21:1234@coches.at6xayj.mongodb.net/coches?retryWrites=true&w=majority&appName=coches')

.then((x)=>{
    console.log(`Conectado exitosamente a la base de datos: ${x.connections[0].name}`)
})
.catch((error)=>{
    console.log('Error de conexión',error.reason)
})
//servidor web 
const cocheRouter=require('./routes/coche.routes')
const app=express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:false,
    })
)   
app.use(cors())
app.use('/api',cocheRouter)

//habilitar el puerto
const port=process.env.PORT || 4000
const server=app.listen(port,()=>{
    console.log('Servidor escuchando en el puerto '+port)

})


//manejador de error 404
app.use((req,res,next)=>{
    next(Error(404))
})

//manejador de errores
app.use(function(err,req,res,next){
    console.log(err.message)
    if(!err.statusCode) err.statusCode=500
    res.status(err.statusCode).send(err.message)
})
