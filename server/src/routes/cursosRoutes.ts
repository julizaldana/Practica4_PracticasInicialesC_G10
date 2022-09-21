import { Router } from 'express';
import {cursoController} from '../controllers/cursosController'
class CursosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',cursoController.list);
        this.router.get('/:codigo_curso',cursoController.getOne);
        this.router.post('/', cursoController.create)
        this.router.delete('/:codigo_curso', cursoController.delete)
        this.router.put('/:codigo_curso', cursoController.update)
    }
}
const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;