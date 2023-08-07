import ConsultasMedicas from '../models/ConsultasMedicas.js'

//getConsultasMedicas
export const getConsultasMedicas = async (req, res) => {
  const consultasmedicas = await ConsultasMedicas.findAll()
  res.json({ consultasmedicas: consultasmedicas })
}

//getConsultasMedicasById
export const getConsultasMedicasById = async (req, res) => {
  const { id } = req.params
  const consultasmedicas = await ConsultasMedicas.findOne({
    where: {
      pk_idConsulta: id
    }
  })
  res.json({ consultasmedicas: consultasmedicas })
}

//postConsultasMedicas
export const postConsultasMedicas = async (req, res) => {
  const { body } = req
  try {
    const consultasmedicas = await ConsultasMedicas.create(body)
    res.json({ consultasmedicas: consultasmedicas })
  } catch (error) {
    res.status(500).json({
      msg: `${error}`
    })
  }
}

//putConsultasMedicas
export const putConsultasMedicas = async (req, res) => {
  const { id } = req.params
  const { body } = req
  try {
    const consultasmedicas = await ConsultasMedicas.findOne({
      where: {
        pk_idConsulta: id
      }
    })
    if (!consultasmedicas) {
      return res.status(404).json({
        msg: `No existe la consulta medica con el id ${id}`
      })
    }
    await consultasmedicas.update(body)
    res.json({ consultasmedicas: consultasmedicas })
  } catch (error) {
    res.status(500).json({
      msg: `${error}`
    })
  }
}

//deleteConsultasMedicas
export const deleteConsultasMedicas = async (req, res) => {
  const { id } = req.params
  try {
    const consultasmedicas = await ConsultasMedicas.findOne({
      where: {
        pk_idConsulta: id
      }
    })
    if (!consultasmedicas) {
      return res.status(404).json({
        msg: `No existe la consulta medica con el id ${id}`
      })
    }
    await consultasmedicas.destroy()
    res.json({ consultasmedicas: consultasmedicas })
  } catch (error) {
    res.status(500).json({
      msg: `${error}`
    })
  }
}
