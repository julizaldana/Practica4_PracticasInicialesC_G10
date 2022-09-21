import { Router } from 'express';
import {publisController} from '../controllers/publisController'
class PublisRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',publisController.list);
        this.router.get('/:id',publisController.getcurca);
        this.router.post('/', publisController.create)
        this.router.delete('/:id', publisController.delete)
        this.router.put('/:id', publisController.update)
    }
}
const publisRoutes = new PublisRoutes();
export default publisRoutes.router;