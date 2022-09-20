import { Router } from 'express';
import {cursoController} from '../controllers/cursosController'
class CursosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',cursoController.index);
    }
}
const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;