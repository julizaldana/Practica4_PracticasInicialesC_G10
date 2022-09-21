import { Router } from 'express';
import {userController} from '../controllers/userController'
class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',userController.list);
        this.router.get('/:carne',userController.getcurca);
        this.router.post('/', userController.create)
        this.router.delete('/:carne', userController.delete)
        this.router.put('/:carne', userController.update)
    }
}
const userRoutes = new UserRoutes();
export default userRoutes.router;