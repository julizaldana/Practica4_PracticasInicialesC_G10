"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.list);
        this.router.get('/:carne', userController_1.userController.getcurca);
        this.router.post('/', userController_1.userController.create);
        this.router.delete('/:carne', userController_1.userController.delete);
        this.router.put('/:carne', userController_1.userController.update);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
