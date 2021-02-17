import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
export default class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        // MÉTODOS INICIALES
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //LECTURA DEL BODY
        this.app.use(express.json());
        //CARPETA PÚBLICA
        this.app.use(express.static('public'))
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
