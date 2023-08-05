import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Paciente = db.define(
  'paciente',
  {
    pk_idPaciente: {
      type: DataTypes.CHAR(6),
      primaryKey: true,
      allowNull: false,
      validate: {
        pk_idPaciente (value) {
          if (!value.match(/^[P]{1}[-]{1}\d{4}$/)) {
            throw new Error(
              'El ID del paciente no coincide con el formato esperado P-0000 '
            )
          }
        }
      }
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    telefono: {
      type: DataTypes.CHAR(10),
      unique: true
    }
  },
  {
    timestamps: false
  }
)

export default Paciente
