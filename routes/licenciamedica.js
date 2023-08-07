import express from 'express'
import {
  getLicenciasMedicas,
  postLicenciaMedica,
  getLicenciasMedicasById,
  putLicenciaMedica,
  deleteLicenciaMedica
} from '../controller/licenciamedicas.js'
const router = express.Router()

// La raiz '/' es igual a decir ---> '/api/pacientes/'
router.get('/', getLicenciasMedicas)
router.get('/:id', getLicenciasMedicasById)
router.post('/', postLicenciaMedica)
router.put('/:id', putLicenciaMedica)
router.delete('/:id', deleteLicenciaMedica)

export default router
