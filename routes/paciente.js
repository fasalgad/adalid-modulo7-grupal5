import express from "express";
import {
    getPacientes ,
    postPaciente,
    getPacientesById,
    putPaciente,
    deletePaciente

} from '../controller/pacientes.js'
const router = express.Router();
 

// La raiz '/' es igual a decir ---> '/api/pacientes/'
router.get( '/', getPacientes );
router.get( '/:id', getPacientesById );
router.post( '/', postPaciente );
router.put( '/:id', putPaciente );
router.delete( '/:id', deletePaciente );

export default router;
