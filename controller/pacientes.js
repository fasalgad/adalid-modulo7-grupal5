import Paciente from '../models/Paciente.js';

export const getPacientes = async(req,res)=>{
    const pacientes = await Paciente.findAll();
    res.json({pacientes:pacientes})
}

export const postPaciente = async (req,res) => {

    const { body } = req;
 
    try {
         const existePk_idPaciente = await Paciente.findOne({
                 where:{
                     pk_idPaciente:body.pk_idPaciente
                 }
         })
 
         if(existePk_idPaciente){
                 return res.status(400).json({
                     msg:`Ya existe el id del paciente ${body.pk_idPaciente }`
                 })
         }
 
         const paciente = new Paciente(body)
         await paciente.save();
         res.json(paciente)
 
    } catch (error) {
         res.status(500).json({
             msg:`${error}`
         })
    }
   
 
 }