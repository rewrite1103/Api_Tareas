// Se importa mongoose para poder crear el modelo de la tarea
const mongoose = require('mongoose');

// Se crea el esquema de la tarea
const tareaSchema = new mongoose.Schema({
    contenido: {type: String, required: true},
    fueCompletada: {type: Boolean, default: false},
    prioridad: {type: Number, default: 1}
},
{versionKey: false});


// Se exporta el modelo de la tarea
module.exports = mongoose.model('Tarea', tareaSchema, 'Tarea');