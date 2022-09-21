"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentController_1 = require("../controllers/comentController");
class ComentRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', comentController_1.comentController.list);
        this.router.get('/:id', comentController_1.comentController.getcomentspubli);
        this.router.post('/', comentController_1.comentController.create);
        this.router.delete('/:id', comentController_1.comentController.delete);
        this.router.put('/:id', comentController_1.comentController.update);
    }
}
const comentRoutes = new ComentRoutes();
exports.default = comentRoutes.router;
