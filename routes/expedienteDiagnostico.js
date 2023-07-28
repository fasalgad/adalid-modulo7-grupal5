import express from 'express';
import {
    getExpeDiagnosticos,
    getExpeDiagnostico,
    postExpeDiagnostico,
    putExpeDiagnostico,
    deleteExpeDiagnostico
} from '../controller/expedienteDiagnostico.js';

const router = express.Router();

router.get( '/', getExpeDiagnosticos );
router.get( '/:id', getExpeDiagnostico);
router.post( '/',  postExpeDiagnostico );
router.put( '/:id', putExpeDiagnostico );
router.delete( '/:id',deleteExpeDiagnostico);

export default router;
