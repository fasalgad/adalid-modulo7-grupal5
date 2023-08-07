import express from 'express'
import {
  getEspecialidades,
  postEspecialidad,
  getEspecialidadesById,
  putEspecialidad,
  deleteEspecialidad
} from '../controller/especialidades.js'
const router = express.Router()

// La raiz '/' es igual a decir ---> '/api/pacientes/'
router.get('/', getEspecialidades)
router.get('/:id', getEspecialidadesById)
router.post('/', postEspecialidad)
router.put('/:id', putEspecialidad)
router.delete('/:id', deleteEspecialidad)

export default router
