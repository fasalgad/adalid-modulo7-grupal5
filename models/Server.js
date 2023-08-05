import express from "express";
import db from '../db/connection.js';
import pacienteRoutes from '../routes/paciente.js'

class Server {
    constructor(){
        this.app = express();
        this.port =  process.env.PORT || '8000';

        this.apiPaths = {
            pacientes:'/api/pacientes'
            // especialistas:'/api/especialistas',
            // expedientes:'/api/expedientes',
            // citas:'/api/citas',
            // agendar_citas:'api/agendar_citas'
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
        // this.app.use(this.apiPaths.especialistas,  )
        // this.app.use(this.apiPaths.expedientes,  )
        // this.app.use(this.apiPaths.citas,  )
        // this.app.use(this.apiPaths.agendar_citas,  )
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}


export default Server;