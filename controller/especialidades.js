import Especialidad from '../models/Especialidad.js';

export const getEspecialidades = async(req,res)=>{
    const especialidades = await Especialidad.findAll();
    res.json({especialidades:especialidades})
}

//getEspecialidadesById
export const getEspecialidadesById = async(req,res)=>{
    const {id} = req.params;
    const especialidad = await Especialidad.findOne({
        where:{
            pk_idEspecialidad:id
        }
    });
    res.json({especialidad:especialidad})
}

//postEspecialidad
export const postEspecialidad = async(req,res)=>{
    const {body} = req;
    try {
        const especialidad = await Especialidad.create(body);
        res.json({especialidad:especialidad})
    } catch (error) {
        res.status(500).json({
            msg:`${error}`
        })
    }
}

//putEspecialidad
export const putEspecialidad = async(req,res)=>{
    const {id} = req.params;
    const {body} = req;
    try {
        const especialidad = await Especialidad.findOne({
            where:{
                pk_idEspecialidad:id
            }
        });
        if(!especialidad){
            return res.status(404).json({
                msg:`No existe la especialidad con el id ${id}`
            })
        }
        await especialidad.update(body);
        res.json({especialidad:especialidad})
    } catch (error) {
        res.status(500).json({
            msg:`${error}`
        })
    }
}

//deleteEspecialidad
export const deleteEspecialidad = async(req,res)=>{
    const {id} = req.params;
    try {
        const especialidad = await Especialidad.findOne({
            where:{
                pk_idEspecialidad:id
            }
        });
        if(!especialidad){
            return res.status(404).json({
                msg:`No existe la especialidad con el id ${id}`
            })
        }
        await especialidad.destroy();
        res.json({especialidad:especialidad})
    } catch (error) {
        res.status(500).json({
            msg:`${error}`
        })
    }
}
