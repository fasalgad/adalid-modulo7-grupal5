import express from "express";
import {
    getPacientes ,
    postPaciente
} from '../controller/pacientes.js'
const router = express.Router();
// Router()
/*

    GET
    POST
    PUT
    DELETE

*/

// La raiz '/' es igual a decir ---> '/api/pacientes/'
router.get( '/', getPacientes );
// router.get( '/:id', getPaciente );
router.post( '/', postPaciente );
// router.put( '/:id', putPaciente );
// router.delete( '/:id', deletePaciente );

export default router;
