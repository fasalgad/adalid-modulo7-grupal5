import express from 'express'
import {
  getMedicos,
  postMedico,
  getMedicosById,
  putMedico,
  deleteMedico
} from '../controller/medicos.js'
const router = express.Router()

// La raiz '/' es igual a decir ---> '/api/pacientes/'
router.get('/', getMedicos)
router.get('/:id', getMedicosById)
router.post('/', postMedico)
router.put('/:id', putMedico)
router.delete('/:id', deleteMedico)

export default router
