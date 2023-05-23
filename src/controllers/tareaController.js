// Obtiene el modelo de la tarea
const Tarea = require ("../models/Tarea");

const tareactrl = {};


// Lista todas las tareas
 tareactrl.obtenerTodas = async(req, res) =>{
    const tarea = await Tarea.find();
    res.status(200).json(tarea);
}

//obtener tarea por id
tareactrl.obtenerUna = async(req, res) =>{
    const tarea = await Tarea.findById(req.params.id);
    res.status(200).json(tarea);
}

//crear una tarea
tareactrl.crearTarea = async(req, res) =>{
    const tarea = new Tarea({
        contenido: req.body.contenido,
        fueCompletada: req.body.fueCompletada,
        prioridad: req.body.prioridad,
    });
    const tareaGuardada = await tarea.save();
    res.status(201).json(tareaGuardada);
}


//actualizar una tarea
tareactrl.actualizarTarea = async(req, res)=>{
    const {contenido, fueCompletada, prioridad} = req.body;
    await Tarea.findByIdAndUpdate(req.params.id, {contenido: contenido, fuecompletada: fueCompletada,prioridad: prioridad});
    res.status(200).json();
}

//eliminar una tarea
tareactrl.eliminarTarea = async(req, res)=>{
    await Tarea.findByIdAndRemove(req.params.id);
    res.status(204).json();
}


// Se exportan las funciones del controlador
module.exports = tareactrl;