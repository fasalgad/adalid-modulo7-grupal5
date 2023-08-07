import LicenciaMedica from "../models/LicenciaMedica.js";

//getLicenciasMedicas
export const getLicenciasMedicas = async (req, res) => {
  const licenciasMedicas = await LicenciaMedica.findAll();
  res.json({ licenciasMedicas: licenciasMedicas });
}

//getLicenciasMedicasById
export const getLicenciasMedicasById = async (req, res) => {
  const { id } = req.params;
  const licenciaMedica = await LicenciaMedica.findOne({
    where: {
      pk_idLicenciaMedica: id,
    },
  });
  res.json({ licenciaMedica: licenciaMedica });
}

//postLicenciaMedica
export const postLicenciaMedica = async (req, res) => {
  const { body } = req;
  try {
    const licenciaMedica = await LicenciaMedica.create(body);
    res.json({ licenciaMedica: licenciaMedica });
  } catch (error) {
    res.status(500).json({
      msg: `${error}`,
    });
  }
}

//putLicenciaMedica
export const putLicenciaMedica = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const licenciaMedica = await LicenciaMedica.findOne({
      where: {
        pk_idLicenciaMedica: id,
      },
    });
    if (!licenciaMedica) {
      return res.status(404).json({
        msg: `No existe la licencia medica con el id ${id}`,
      });
    }
    await licenciaMedica.update(body);
    res.json({ licenciaMedica: licenciaMedica });
  } catch (error) {
    res.status(500).json({
      msg: `${error}`,
    });
  }
}

//deleteLicenciaMedica
export const deleteLicenciaMedica = async (req, res) => {
  const { id } = req.params;
  try {
    const licenciaMedica = await LicenciaMedica.findOne({
      where: {
        pk_idLicenciaMedica: id,
      },
    });
    if (!licenciaMedica) {
      return res.status(404).json({
        msg: `No existe la licencia medica con el id ${id}`,
      });
    }
    await licenciaMedica.destroy();
    res.json({ licenciaMedica: licenciaMedica });
  } catch (error) {
    res.status(500).json({
      msg: `${error}`,
    });
  }
}