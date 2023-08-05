import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

export const ConsultasMedicas = db.define(
  'consultasMedicas',
  {
    pk_idConsulta: {
      type: DataTypes.CHAR(6),
      primaryKey: true,
      allowNull: false,
      validate: {
        pk_idConsulta (value) {
          if (!value.match(/^[C]{1}[-]{1}\d{4}$/)) {
            throw new Error(
              'El ID de la consulta no coincide con el formato esperado C-0000 '
            )
          }
        }
      }
    },
    fecha_atencion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    hora_atencion: {
      type: DataTypes.TIME,
      allowNull: false
    },
    nro_box: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_rut_paciente: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fk_rut_medico: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

export default Expediente
