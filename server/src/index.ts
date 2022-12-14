import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import cursosRoutes from './routes/cursosRoutes';
import publisRoutes from './routes/publisRoutes';
import userRoutes from './routes/userRoutes';
import comentRoutes from './routes/comentRoutes';

class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/cursos',cursosRoutes);
        this.app.use('/api/publis',publisRoutes);
        this.app.use('/api/user',userRoutes)
        this.app.use('/api/coment',comentRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start()