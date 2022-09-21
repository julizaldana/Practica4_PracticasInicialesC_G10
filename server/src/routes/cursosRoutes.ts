import { Router } from 'express';
import {cursoController} from '../controllers/cursosController'
class CursosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',cursoController.list);
        this.router.get('/:id',cursoController.getOne);
        this.router.post('/', cursoController.create)
        this.router.delete('/:id', cursoController.delete)
        this.router.put('/:id', cursoController.update)
    }
}
const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;