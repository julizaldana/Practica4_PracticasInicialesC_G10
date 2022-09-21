import { Router } from 'express';
import {comentController} from '../controllers/comentController'
class ComentRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',comentController.list);
        this.router.get('/:id',comentController.getcomentspubli);
        this.router.post('/', comentController.create)
        this.router.delete('/:id', comentController.delete)
        this.router.put('/:id', comentController.update)
    }
}
const comentRoutes = new ComentRoutes();
export default comentRoutes.router;