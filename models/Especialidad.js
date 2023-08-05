import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

export const Especialidad = db.define(
  'especialista',
  {
    codigo: {
      type: DataTypes.STRING(6),
      primaryKey: true,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)