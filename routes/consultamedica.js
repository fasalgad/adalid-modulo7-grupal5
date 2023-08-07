import express from 'express'
import {
  getConsultasMedicas,
  postConsultasMedicas,
  getConsultasMedicasById,
  putConsultasMedicas,
  deleteConsultasMedicas
} from '../controller/consultasmedicas.js'
const router = express.Router()

// La raiz '/' es igual a decir ---> '/api/pacientes/'
router.get('/', getConsultasMedicas)
router.get('/:id', getConsultasMedicasById)
router.post('/', postConsultasMedicas)
router.put('/:id', putConsultasMedicas)
router.delete('/:id', deleteConsultasMedicas)

export default router
