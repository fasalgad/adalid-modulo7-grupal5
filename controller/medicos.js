import Medico from '../models/Medico.js'

//getMedicos
export const getMedicos = async (req, res) => {
  const medicos = await Medico.findAll()
  res.json({ medicos: medicos })
}

//getMedicosById
export const getMedicosById = async (req, res) => {
  const { id } = req.params
  const medico = await Medico.findOne({
    where: {
      rut: id
    }
  })
  res.json({ medico: medico })
}

//postMedico
export const postMedico = async (req, res) => {
  const { body } = req
  try {
    const medico = await Medico.create(body)
    res.json({ medico: medico })
  } catch (error) {
    res.status(500).json({
      msg: `${error}`
    })
  }
}

//putMedico
export const putMedico = async (req, res) => {
  const { id } = req.params
  const { body } = req
  try {
    const medico = await Medico.findOne({
      where: {
        rut: id
      }
    })
    if (!medico) {
      return res.status(404).json({
        msg: `No existe el medico con el id ${id}`
      })
    }
    await medico.update(body)
    res.json({ medico: medico })
  } catch (error) {
    res.status(500).json({
      msg: `${error}`
    })
  }
}

//deleteMedico
export const deleteMedico = async (req, res) => {
  const { id } = req.params
  try {
    const medico = await Medico.findOne({
      where: {
        rut: id
      }
    })
    if (!medico) {
      return res.status(404).json({
        msg: `No existe el medico con el id ${id}`
      })
    }
    await medico.destroy()
    res.json({ msg: `Medico eliminado con exito` })
  } catch (error) {
    res.status(500).json({
      msg: `${error}`
    })
  }
}
