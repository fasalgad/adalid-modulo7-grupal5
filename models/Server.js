import express from "express";
import db from '../db/connection.js';
import pacienteRoutes from '../routes/paciente.js'
import medicoRoutes from '../routes/medico.js'
import licenciamedicaRoutes from '../routes/licenciamedica.js'
import especialidadRoutes from '../routes/especialidad.js'
import consultamedicaRoutes from '../routes/consultamedica.js'



class Server {
    constructor(){
        this.app = express();
        this.port =  process.env.PORT || '8000';

        this.apiPaths = {
            pacientes:'/api/pacientes',
            medicos:'/api/medicos', 
            licenciasmedicas:'/api/licenciasmedicas',
            especialidades:'/api/especialidades',
            consultasmedicas:'/api/consultasmedicas'

        }

        // Vamos a definir e iniciar nuestros metodos
        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    async dbConnection(){
        try {
            // await db.authenticate();
            await db.sync();
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares(){
        this.app.use( express.json() );
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use( this.apiPaths.pacientes, pacienteRoutes ) 
        this.app.use( this.apiPaths.medicos, medicoRoutes ) 
        this.app.use( this.apiPaths.licenciasmedicas, licenciamedicaRoutes ) 
        this.app.use( this.apiPaths.especialidades, especialidadRoutes )
        this.app.use( this.apiPaths.consultasmedicas, consultamedicaRoutes )
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}


export default Server;