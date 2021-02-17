import express, { Application } from 'express'
import userRoutes from '../routes/usuario';
export default class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Definir mis rutas
        this.routes();

    }

    routes(){

        this.app.use(this.apiPaths.usuarios, userRoutes)

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port)
        })
    }

}
