import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

export const LicenciaMedica = db.define(
  'licenciaMedica',
  {
    codigo: {
      type: DataTypes.STRING(6),
      primaryKey: true,
      allowNull: false,
      validate: {
        codigo (value) {
          if (!value.match(/^[L]{1}[-]{1}\d{4}$/)) {
            throw new Error(
              'El ID de la licencia no coincide con el formato esperado L-0000 '
            )
          }
        }
      }
    },
    diagnostico: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_termino: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fk_rut_medico: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fk_rut_paciente: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
