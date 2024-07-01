const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Coche = new Schema({
  dueno: {
    type: String,
  },
  marca: {
    type: String,
  },
  modelo: {
    type: String,
  },
  ano: {
    type: Number,
  }
  },{
  collection:'coches'
})

module.exports=mongoose.model('Coche',Coche)

