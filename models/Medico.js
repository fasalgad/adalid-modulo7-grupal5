import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

export const Medico = db.define(
  'medico',
  {
    rut: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fk_especialidad: {
      type: DataTypes.CHAR(7),
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
