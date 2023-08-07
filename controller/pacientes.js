import Paciente from '../models/Paciente.js';

export const getPacientes = async(req,res)=>{
    const pacientes = await Paciente.findAll();
    res.json({pacientes:pacientes})
}

//getPacientesById
export const getPacientesById = async(req,res)=>{
    const {id} = req.params;
    const paciente = await Paciente.findOne({
        where:{
            pk_idPaciente:id
        }
    });
    res.json({paciente:paciente})
}

//putPaciente
export const putPaciente = async(req,res)=>{
    const {id} = req.params;
    const {body} = req;
    try {
        const paciente = await Paciente.findOne({
            where:{
                pk_idPaciente:id
            }
        });
        if(!paciente){
            return res.status(404).json({
                msg:`No existe el paciente con el id ${id}`
            })
        }
        await paciente.update(body);
        res.json({paciente:paciente})
    } catch (error) {
        res.status(500).json({
            msg:`${error}`
        })
    }
}

//deletePaciente
export const deletePaciente = async(req,res)=>{
    const {id} = req.params;
    try {
        const paciente = await Paciente.findOne({
            where:{
                pk_idPaciente:id
            }
        });
        if(!paciente){
            return res.status(404).json({
                msg:`No existe el paciente con el id ${id}`
            })
        }
        await paciente.destroy();
        res.json({msg:`Paciente eliminado con exito`})
    } catch (error) {
        res.status(500).json({
            msg:`${error}`
        })
    }
}

//postPaciente
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