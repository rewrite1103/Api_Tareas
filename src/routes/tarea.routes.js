// funciones CRUD de tareas 
const {
  obtenerTodas,
  obtenerUna,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
} = require ("../controllers/tareaController");

const {Router} = require('express');
const router = Router();

//Endpoint para obtener todas las tareas
router.get('/', obtenerTodas);

//Endpoint para obtener una tarea
router.get('/:id', obtenerUna);

//Endpoint para crear una tarea
router.post('/', crearTarea);

//Endpoint para actualizar una tarea
router.put('/:id', actualizarTarea);

//Endpoint para eliminar una tarea
router.delete('/:id', eliminarTarea);

module.exports = router;